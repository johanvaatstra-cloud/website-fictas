<script setup>
import { ref, computed } from 'vue'
import SectionLabel from '../shared/SectionLabel.vue'

// ── Internal constants — never rendered in the DOM ──────────
const AZURE_PER_MONTH              = 2100
const MONTHLY_LICENSE              = 8900
const ONETIME_LICENSE              = 189000
const DEPRECIATION_MONTHS         = 60
const SAAS_BASE_FEE                = 2750
const FICTAS_EXTRA_PER_TRANSACTION = 0.02   // monthly plan only, above 50 000 tx

// One-time amortised total (constant — internal only)
const TOTAL_ONETIME_AMORT =
  AZURE_PER_MONTH + ONETIME_LICENSE / DEPRECIATION_MONTHS   // 5 250

// ── SaaS cost: base fee + cumulative tiered per-tx pricing ──
function calculateSaasCost(t) {
  const tiers = [
    { max: 10000,    rate: 0.20 },
    { max: 50000,    rate: 0.15 },
    { max: 200000,   rate: 0.11 },
    { max: 500000,   rate: 0.08 },
    { max: Infinity, rate: 0.05 },
  ]
  let cost      = SAAS_BASE_FEE
  let remaining = t
  let prev      = 0
  for (const tier of tiers) {
    const inTier = Math.min(remaining, tier.max - prev)
    cost      += inTier * tier.rate
    remaining -= inTier
    prev       = tier.max
    if (remaining <= 0) break
  }
  return cost
}

// ── Fictas monthly plan total (variable — internal only) ────
function fictasMonthlyTotal(t) {
  return AZURE_PER_MONTH
    + MONTHLY_LICENSE
    + Math.max(0, (t - 50000) * FICTAS_EXTRA_PER_TRANSACTION)
}

// ── Slider config ───────────────────────────────────────────
const TABLE_VOLUMES = [10000, 50000, 100000, 500000, 1000000]
const MIN = 10000
const MAX = 1000000

// ── Reactive state ──────────────────────────────────────────
const transactions = ref(100000)

// ── Computed ────────────────────────────────────────────────
const sliderPct = computed(() =>
  ((transactions.value - MIN) / (MAX - MIN)) * 100
)

const saasCost        = computed(() => calculateSaasCost(transactions.value))
const fictasMonthly   = computed(() => fictasMonthlyTotal(transactions.value))
const savingsMonthly  = computed(() => saasCost.value - fictasMonthly.value)
const savingsOnetime  = computed(() => saasCost.value - TOTAL_ONETIME_AMORT)

const closestVolume = computed(() =>
  TABLE_VOLUMES.reduce((prev, curr) =>
    Math.abs(curr - transactions.value) < Math.abs(prev - transactions.value)
      ? curr : prev
  )
)

// ── Format helpers ──────────────────────────────────────────
function fEuro(val) {
  const abs = Math.abs(Math.round(val))
  const str = '€' + abs.toLocaleString('nl-NL')
  return val < 0 ? '−' + str : str
}
function fNum(n) { return Math.round(n).toLocaleString('nl-NL') }
</script>

<template>
  <section class="bg-gray-50 py-24">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

      <!-- Header -->
      <div class="text-center mb-12">
        <SectionLabel text="Cost Calculator" />
        <h2 class="text-4xl font-bold text-gray-900 mt-4 mb-3">
          In-house vs. SaaS: Monthly Cost
        </h2>
        <p class="text-gray-600">Drag the slider to see how Fictas compares at your transaction volume.</p>
      </div>

      <!-- Slider card -->
      <div class="bg-white rounded-2xl shadow-lg border border-gray-100 px-8 pt-8 pb-7 mb-6">
        <div class="flex justify-between items-center mb-3">
          <span class="text-sm font-medium text-gray-700">Monthly Transactions</span>
          <span class="text-xl font-bold text-gray-900 tabular-nums">{{ fNum(transactions) }}</span>
        </div>
        <input
          v-model.number="transactions"
          type="range"
          :min="MIN"
          :max="MAX"
          step="5000"
          class="w-full h-2 rounded-full appearance-none cursor-pointer accent-blue-600"
          :style="{
            background: `linear-gradient(to right, #2563eb 0%, #2563eb ${sliderPct}%, #e5e7eb ${sliderPct}%, #e5e7eb 100%)`
          }"
        />
        <div class="flex justify-between mt-1.5">
          <span class="text-xs text-gray-400">10,000</span>
          <span class="text-xs text-gray-400">1,000,000</span>
        </div>
      </div>

      <!-- Two-column plan comparison -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">

        <!-- Monthly Plan -->
        <div class="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
          <div class="flex items-center gap-2 mb-5">
            <div class="w-3 h-3 rounded-full bg-blue-500 flex-shrink-0"></div>
            <h3 class="font-bold text-gray-900 text-base">Monthly Plan</h3>
          </div>

          <div class="space-y-4">

            <div>
              <p class="text-xs text-gray-500 uppercase tracking-wider mb-1">SaaS equivalent cost</p>
              <p class="text-2xl font-bold text-gray-900 tabular-nums">
                {{ fEuro(saasCost) }}<span class="text-sm font-normal text-gray-500">/mo</span>
              </p>
              <p class="text-xs text-gray-400 mt-0.5">{{ fNum(transactions) }} transactions (cumulative tiered + base fee)</p>
            </div>

            <div class="pt-3 border-t border-gray-100">
              <p class="text-xs text-gray-500 uppercase tracking-wider mb-1">Your monthly cost</p>
              <p class="text-base font-medium text-gray-400 italic">Contact us for pricing</p>
              <!-- Per-tx overage note — rate only, no base amounts -->
              <p class="text-xs text-gray-400 mt-1">Includes €0.02/transaction above 50,000</p>
            </div>

            <div class="pt-3 border-t border-gray-100">
              <p class="text-xs text-gray-500 uppercase tracking-wider mb-1">Monthly savings vs SaaS</p>
              <p
                class="text-2xl font-bold tabular-nums"
                :class="savingsMonthly >= 0 ? 'text-green-600' : 'text-amber-500'"
              >
                {{ savingsMonthly >= 0 ? '+' : '' }}{{ fEuro(savingsMonthly) }}
              </p>
              <p class="text-xs mt-0.5" :class="savingsMonthly >= 0 ? 'text-green-500' : 'text-amber-400'">
                {{ savingsMonthly >= 0 ? 'vs SaaS at this volume' : 'SaaS cheaper at this volume' }}
              </p>
            </div>

          </div>
        </div>

        <!-- One-time License -->
        <div class="bg-[#0a1628] rounded-2xl border border-blue-500/30 shadow-lg p-6 relative">
          <div class="absolute -top-3 left-1/2 -translate-x-1/2">
            <span class="bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow">
              ★ Best value
            </span>
          </div>

          <div class="flex items-center gap-2 mb-5">
            <div class="w-3 h-3 rounded-full bg-orange-400 flex-shrink-0"></div>
            <h3 class="font-bold text-white text-base">One-time License</h3>
          </div>

          <div class="space-y-4">

            <div>
              <p class="text-xs text-gray-400 uppercase tracking-wider mb-1">SaaS equivalent cost</p>
              <p class="text-2xl font-bold text-white tabular-nums">
                {{ fEuro(saasCost) }}<span class="text-sm font-normal text-gray-400">/mo</span>
              </p>
              <p class="text-xs text-gray-500 mt-0.5">{{ fNum(transactions) }} transactions (cumulative tiered + base fee)</p>
            </div>

            <div class="pt-3 border-t border-white/10">
              <p class="text-xs text-gray-400 uppercase tracking-wider mb-1">Your monthly cost</p>
              <p class="text-base font-medium text-gray-400 italic">Contact us for pricing</p>
              <p class="text-xs text-gray-600 mt-1">Fixed cost — no per-transaction overage</p>
            </div>

            <div class="pt-3 border-t border-white/10">
              <p class="text-xs text-gray-400 uppercase tracking-wider mb-1">Monthly savings vs SaaS</p>
              <p
                class="text-2xl font-bold tabular-nums"
                :class="savingsOnetime >= 0 ? 'text-green-400' : 'text-amber-400'"
              >
                {{ savingsOnetime >= 0 ? '+' : '' }}{{ fEuro(savingsOnetime) }}
              </p>
              <p class="text-xs mt-0.5" :class="savingsOnetime >= 0 ? 'text-green-500' : 'text-amber-500'">
                {{ savingsOnetime >= 0 ? 'vs SaaS at this volume' : 'SaaS cheaper at this volume' }}
              </p>
            </div>

          </div>
        </div>

      </div>

      <!-- Footer note -->
      <p class="text-xs text-gray-400 text-center mb-10 leading-relaxed">
        SaaS cost includes €2,750 monthly platform fee plus tiered per-transaction pricing.
        License fee available on request.
      </p>

      <!-- Comparison table -->
      <div>
        <h3 class="text-2xl font-bold text-gray-900 mb-1">Savings at Scale</h3>
        <p class="text-gray-500 text-sm mb-6">
          Estimated monthly savings vs SaaS — cumulative tiered pricing + €2,750 base fee
        </p>

        <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div class="grid grid-cols-4 bg-gray-50 border-b border-gray-100 px-6 py-3">
            <span class="text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Transactions/mo
            </span>
            <span class="text-xs font-semibold text-gray-500 uppercase tracking-wider text-right">
              SaaS cost/mo
            </span>
            <span class="text-xs font-semibold text-blue-600 uppercase tracking-wider text-right">
              Monthly savings
            </span>
            <span class="text-xs font-semibold text-orange-500 uppercase tracking-wider text-right">
              One-time savings
            </span>
          </div>

          <div
            v-for="vol in TABLE_VOLUMES"
            :key="vol"
            :class="[
              'grid grid-cols-4 px-6 py-4 last:border-0 transition-colors',
              closestVolume === vol
                ? 'bg-blue-50 border-l-4 border-l-blue-400 border-b border-blue-100'
                : 'border-b border-gray-50'
            ]"
          >
            <span class="text-sm text-gray-700 font-medium self-center tabular-nums">
              {{ fNum(vol) }}
            </span>

            <span class="text-sm text-gray-600 text-right self-center tabular-nums font-medium">
              {{ fEuro(calculateSaasCost(vol)) }}
            </span>

            <span
              class="text-sm font-bold text-right self-center tabular-nums"
              :class="(calculateSaasCost(vol) - fictasMonthlyTotal(vol)) >= 0 ? 'text-blue-600' : 'text-gray-400'"
            >
              {{ (calculateSaasCost(vol) - fictasMonthlyTotal(vol)) >= 0 ? '+' : '' }}{{ fEuro(calculateSaasCost(vol) - fictasMonthlyTotal(vol)) }}
            </span>

            <span
              class="text-sm font-bold text-right self-center tabular-nums"
              :class="(calculateSaasCost(vol) - TOTAL_ONETIME_AMORT) >= 0 ? 'text-orange-500' : 'text-gray-400'"
            >
              {{ (calculateSaasCost(vol) - TOTAL_ONETIME_AMORT) >= 0 ? '+' : '' }}{{ fEuro(calculateSaasCost(vol) - TOTAL_ONETIME_AMORT) }}
            </span>
          </div>
        </div>

        <p class="text-xs text-gray-400 mt-3 text-center">
          Fictas monthly cost = Azure infrastructure + license. Contact us for exact pricing.
        </p>
      </div>

    </div>
  </section>
</template>
