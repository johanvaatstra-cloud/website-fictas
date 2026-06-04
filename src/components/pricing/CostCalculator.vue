<script setup>
import { ref, computed } from 'vue'
import SectionLabel from '../shared/SectionLabel.vue'

// ── Internal constants — never rendered in the DOM ──────────
const AZURE_PER_MONTH     = 2100
const MONTHLY_LICENSE     = 8900
const ONETIME_LICENSE     = 189000
const DEPRECIATION_MONTHS = 60

// Total monthly cost per plan (internal calculation only)
const TOTAL_MONTHLY       = AZURE_PER_MONTH + MONTHLY_LICENSE                           // 11 000
const TOTAL_ONETIME_AMORT = AZURE_PER_MONTH + (ONETIME_LICENSE / DEPRECIATION_MONTHS)  //  5 250

// ── Tiered SaaS rate ────────────────────────────────────────
function getSaasRate(t) {
  if (t <= 10000)  return 0.20
  if (t <= 50000)  return 0.15
  if (t <= 200000) return 0.11
  if (t <= 500000) return 0.08
  return 0.05
}

function getTierLabel(t) {
  if (t <= 10000)  return '≤ 10,000 tx'
  if (t <= 50000)  return '≤ 50,000 tx'
  if (t <= 200000) return '≤ 200,000 tx'
  if (t <= 500000) return '≤ 500,000 tx'
  return '> 500,000 tx'
}

// ── Slider config ───────────────────────────────────────────
const TABLE_VOLUMES = [10000, 50000, 100000, 500000, 1000000]
const MIN = 10000
const MAX = 1000000

// ── Reactive state ──────────────────────────────────────────
const transactions = ref(100000)

// ── Computed ────────────────────────────────────────────────
const sliderPct  = computed(() => ((transactions.value - MIN) / (MAX - MIN)) * 100)
const saasRate   = computed(() => getSaasRate(transactions.value))
const tierLabel  = computed(() => getTierLabel(transactions.value))
const saasCost   = computed(() => transactions.value * saasRate.value)

// savings = SaaS cost − internal Fictas total (Fictas cost never shown)
const savingsMonthly = computed(() => saasCost.value - TOTAL_MONTHLY)
const savingsOnetime = computed(() => saasCost.value - TOTAL_ONETIME_AMORT)

const closestVolume = computed(() =>
  TABLE_VOLUMES.reduce((prev, curr) =>
    Math.abs(curr - transactions.value) < Math.abs(prev - transactions.value) ? curr : prev
  )
)

// ── Format helpers ──────────────────────────────────────────
function fEuro(val) {
  const abs = Math.abs(Math.round(val))
  const str = '€' + abs.toLocaleString('nl-NL')
  return val < 0 ? '−' + str : str
}
function fNum(n)  { return Math.round(n).toLocaleString('nl-NL') }
function fRate(r) { return '€' + r.toFixed(2) }
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
      <div class="bg-white rounded-2xl shadow-lg border border-gray-100 px-8 pt-8 pb-6 mb-6">

        <div class="mb-2">
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

        <!-- Active tier badge -->
        <div class="flex justify-center mt-5">
          <span class="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-700 text-sm font-semibold px-4 py-2 rounded-full">
            <span class="w-2 h-2 rounded-full bg-blue-500 flex-shrink-0"></span>
            At this volume: {{ fRate(saasRate) }} per transaction
            <span class="text-blue-400 font-normal">({{ tierLabel }})</span>
          </span>
        </div>
      </div>

      <!-- Two-column plan comparison -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">

        <!-- Monthly Plan -->
        <div class="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
          <div class="flex items-center gap-2 mb-5">
            <div class="w-3 h-3 rounded-full bg-blue-500 flex-shrink-0"></div>
            <h3 class="font-bold text-gray-900 text-base">Monthly Plan</h3>
          </div>

          <div class="space-y-4">
            <!-- SaaS equivalent -->
            <div>
              <p class="text-xs text-gray-500 uppercase tracking-wider mb-1">SaaS equivalent cost</p>
              <p class="text-2xl font-bold text-gray-900 tabular-nums">{{ fEuro(saasCost) }}<span class="text-sm font-normal text-gray-500">/mo</span></p>
              <p class="text-xs text-gray-400 mt-0.5">{{ fNum(transactions) }} tx × {{ fRate(saasRate) }}</p>
            </div>

            <!-- Your monthly cost -->
            <div class="pt-3 border-t border-gray-100">
              <p class="text-xs text-gray-500 uppercase tracking-wider mb-1">Your monthly cost</p>
              <p class="text-base font-medium text-gray-400 italic">Contact us for pricing</p>
            </div>

            <!-- Estimated savings -->
            <div class="pt-3 border-t border-gray-100">
              <p class="text-xs text-gray-500 uppercase tracking-wider mb-1">Estimated monthly savings</p>
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
            <!-- SaaS equivalent -->
            <div>
              <p class="text-xs text-gray-400 uppercase tracking-wider mb-1">SaaS equivalent cost</p>
              <p class="text-2xl font-bold text-white tabular-nums">{{ fEuro(saasCost) }}<span class="text-sm font-normal text-gray-400">/mo</span></p>
              <p class="text-xs text-gray-500 mt-0.5">{{ fNum(transactions) }} tx × {{ fRate(saasRate) }}</p>
            </div>

            <!-- Your monthly cost -->
            <div class="pt-3 border-t border-white/10">
              <p class="text-xs text-gray-400 uppercase tracking-wider mb-1">Your monthly cost</p>
              <p class="text-base font-medium text-gray-400 italic">Contact us for pricing</p>
            </div>

            <!-- Estimated savings -->
            <div class="pt-3 border-t border-white/10">
              <p class="text-xs text-gray-400 uppercase tracking-wider mb-1">Estimated monthly savings</p>
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

      <!-- Bottom note -->
      <p class="text-xs text-gray-400 text-center mb-10 leading-relaxed">
        Savings calculated against market average SaaS pricing. License fee available on request.
      </p>

      <!-- Comparison table -->
      <div>
        <h3 class="text-2xl font-bold text-gray-900 mb-1">Savings at Scale</h3>
        <p class="text-gray-500 text-sm mb-6">
          Estimated monthly savings vs SaaS card issuing — tiered market rates
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
            <!-- Volume -->
            <div class="self-center">
              <span class="text-sm text-gray-700 font-medium tabular-nums">{{ fNum(vol) }}</span>
              <span class="block text-xs text-gray-400 tabular-nums">{{ fRate(getSaasRate(vol)) }}/tx</span>
            </div>

            <!-- SaaS cost -->
            <span class="text-sm text-gray-600 text-right self-center tabular-nums font-medium">
              {{ fEuro(vol * getSaasRate(vol)) }}
            </span>

            <!-- Monthly plan savings -->
            <span
              class="text-sm font-bold text-right self-center tabular-nums"
              :class="(vol * getSaasRate(vol) - TOTAL_MONTHLY) >= 0 ? 'text-blue-600' : 'text-gray-400'"
            >
              {{ (vol * getSaasRate(vol) - TOTAL_MONTHLY) >= 0 ? '+' : '' }}{{ fEuro(vol * getSaasRate(vol) - TOTAL_MONTHLY) }}
            </span>

            <!-- One-time savings -->
            <span
              class="text-sm font-bold text-right self-center tabular-nums"
              :class="(vol * getSaasRate(vol) - TOTAL_ONETIME_AMORT) >= 0 ? 'text-orange-500' : 'text-gray-400'"
            >
              {{ (vol * getSaasRate(vol) - TOTAL_ONETIME_AMORT) >= 0 ? '+' : '' }}{{ fEuro(vol * getSaasRate(vol) - TOTAL_ONETIME_AMORT) }}
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
