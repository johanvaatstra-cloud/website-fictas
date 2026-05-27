<script setup>
import { ref, computed } from 'vue'
import { ChevronDown } from 'lucide-vue-next'
import SectionLabel from '../shared/SectionLabel.vue'

// ── Constants ──────────────────────────────────────────────
const MONTHLY_FEE      = 8900
const AZURE_PER_MONTH  = 2100
const LICENSE_COST     = 189000
const MARKET_AVG       = 0.25

const AZURE_BREAKDOWN = [
  { label: 'Compute',    daily: 45 },
  { label: 'Database',   daily: 12 },
  { label: 'Networking', daily:  8 },
  { label: 'Security',   daily:  5 },
]

const AMORTIZATION_OPTIONS = [
  { label: '1 year',  months: 12 },
  { label: '2 years', months: 24 },
  { label: '3 years', months: 36 },
  { label: '5 years', months: 60 },
]

const TABLE_VOLUMES = [10000, 100000, 500000, 1000000]

const MARKET_RANGES = {
  10000:   '€0,25 – €0,50',
  100000:  '€0,15 – €0,30',
  500000:  '€0,10 – €0,20',
  1000000: '€0,08 – €0,15',
}

const MIN = 10000
const MAX = 1000000

// ── Reactive state ──────────────────────────────────────────
const model        = ref('monthly')
const transactions = ref(100000)
const amortYears   = ref(36)
const azureOpen    = ref(false)

// ── Computed ────────────────────────────────────────────────
const licensePerMonth = computed(() => LICENSE_COST / amortYears.value)

const monthlyCost = computed(() =>
  model.value === 'monthly'
    ? MONTHLY_FEE
    : licensePerMonth.value + AZURE_PER_MONTH
)

const costPerTransaction = computed(() => monthlyCost.value / transactions.value)

const breakEven = computed(() => Math.round(monthlyCost.value / MARKET_AVG))

const sliderPct = computed(() => ((transactions.value - MIN) / (MAX - MIN)) * 100)

const activeAmort = computed(() =>
  AMORTIZATION_OPTIONS.find(o => o.months === amortYears.value)
)

const columnHeader = computed(() =>
  model.value === 'monthly'
    ? 'Fictas (Monthly)'
    : `Fictas (One-Time · ${activeAmort.value?.label ?? '3yr'})`
)

const closestVolume = computed(() =>
  TABLE_VOLUMES.reduce((prev, curr) =>
    Math.abs(curr - transactions.value) < Math.abs(prev - transactions.value) ? curr : prev
  )
)

// ── Format helpers ──────────────────────────────────────────
function formatCost(val) {
  let str
  if (val >= 1)         str = val.toFixed(2)
  else if (val >= 0.01) str = val.toFixed(4)
  else                  str = val.toFixed(5)
  return '€' + str.replace('.', ',')
}

function formatEuro(val) {
  return '€' + Math.round(val).toLocaleString('nl-NL')
}

function formatNumber(n) {
  return Math.round(n).toLocaleString('nl-NL')
}

function fictasForVolume(vol) {
  return monthlyCost.value / vol
}
</script>

<template>
  <section class="bg-gray-50 py-24">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

      <!-- Header -->
      <div class="text-center mb-12">
        <SectionLabel text="Cost Calculator" />
        <h2 class="text-4xl font-bold text-gray-900 mt-4 mb-3">
          Calculate Your Cost Per Transaction
        </h2>
        <p class="text-gray-600">Real infrastructure costs. No hidden fees.</p>
      </div>

      <!-- Calculator card -->
      <div class="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 mb-10">

        <!-- Model toggle -->
        <div class="flex justify-center mb-8">
          <div class="inline-flex bg-gray-100 rounded-xl p-1">
            <button
              @click="model = 'monthly'"
              :class="[
                'px-5 py-2.5 rounded-lg text-sm font-semibold transition-all',
                model === 'monthly'
                  ? 'bg-blue-600 text-white shadow'
                  : 'text-gray-600 hover:text-gray-800'
              ]"
            >Monthly Subscription</button>
            <button
              @click="model = 'onetime'"
              :class="[
                'px-5 py-2.5 rounded-lg text-sm font-semibold transition-all',
                model === 'onetime'
                  ? 'bg-blue-600 text-white shadow'
                  : 'text-gray-600 hover:text-gray-800'
              ]"
            >One-Time License</button>
          </div>
        </div>

        <!-- Amortization pills (one-time only) -->
        <Transition
          enter-active-class="transition-all duration-200"
          enter-from-class="opacity-0 -translate-y-2"
          enter-to-class="opacity-100 translate-y-0"
          leave-active-class="transition-all duration-150"
          leave-from-class="opacity-100 translate-y-0"
          leave-to-class="opacity-0 -translate-y-2"
        >
          <div v-if="model === 'onetime'" class="mb-8">
            <p class="text-xs text-gray-500 text-center mb-3 uppercase tracking-wider">
              Amortization period
            </p>
            <div class="flex justify-center gap-2 flex-wrap">
              <button
                v-for="opt in AMORTIZATION_OPTIONS"
                :key="opt.months"
                @click="amortYears = opt.months"
                :class="[
                  'px-4 py-2 rounded-full text-sm font-semibold transition-all',
                  amortYears === opt.months
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                ]"
              >{{ opt.label }}</button>
            </div>
          </div>
        </Transition>

        <!-- Slider -->
        <div class="mb-8">
          <div class="flex justify-between items-center mb-3">
            <span class="text-sm font-medium text-gray-700">Monthly Transactions</span>
            <span class="text-lg font-bold text-gray-900 tabular-nums">{{ formatNumber(transactions) }}</span>
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
            <span class="text-xs text-gray-400">10.000</span>
            <span class="text-xs text-gray-400">1.000.000</span>
          </div>
        </div>

        <!-- Cost per transaction + breakdown box -->
        <div class="bg-gray-50 rounded-xl border border-gray-200 p-6 mb-6">

          <!-- Big cost number -->
          <div class="text-center mb-6">
            <p class="text-xs text-gray-500 uppercase tracking-wider mb-2">Cost per transaction</p>
            <div class="text-5xl font-bold text-blue-600 tabular-nums">
              {{ formatCost(costPerTransaction) }}
            </div>
          </div>

          <!-- Monthly cost breakdown -->
          <div class="border-t border-gray-200 pt-5">
            <p class="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">
              Monthly cost breakdown
            </p>

            <!-- Monthly model rows -->
            <template v-if="model === 'monthly'">
              <div class="flex justify-between text-sm mb-2">
                <span class="text-gray-500">Subscription fee</span>
                <span class="font-semibold text-gray-800">{{ formatEuro(MONTHLY_FEE) }}</span>
              </div>
              <div class="flex justify-between text-sm mb-4">
                <span class="text-gray-400 italic">Azure (included)</span>
                <span class="text-gray-400 italic">{{ formatEuro(AZURE_PER_MONTH) }}</span>
              </div>
            </template>

            <!-- One-Time model rows -->
            <template v-else>
              <div class="flex justify-between text-sm mb-2">
                <span class="text-gray-500">License (amortized)</span>
                <span class="font-semibold text-gray-800">{{ formatEuro(licensePerMonth) }}</span>
              </div>
              <div class="flex justify-between text-sm mb-4">
                <span class="text-gray-500">Azure costs</span>
                <span class="font-semibold text-gray-800">{{ formatEuro(AZURE_PER_MONTH) }}</span>
              </div>
            </template>

            <!-- Total row -->
            <div class="flex justify-between text-sm font-bold border-t border-gray-200 pt-3">
              <span class="text-gray-700">Total</span>
              <span class="text-gray-900 tabular-nums">{{ formatEuro(monthlyCost) }}</span>
            </div>

            <!-- Azure accordion -->
            <div class="mt-4">
              <button
                @click="azureOpen = !azureOpen"
                class="flex items-center gap-1.5 text-xs text-gray-400 hover:text-gray-600 transition-colors"
              >
                <ChevronDown
                  class="w-3.5 h-3.5 transition-transform duration-200"
                  :class="{ 'rotate-180': azureOpen }"
                />
                Azure cost detail
              </button>
              <div
                v-show="azureOpen"
                class="overflow-hidden mt-3 space-y-1.5 pl-5"
                :style="{ transition: 'opacity 0.2s' }"
              >
                <div
                  v-for="item in AZURE_BREAKDOWN"
                  :key="item.label"
                  class="flex justify-between text-xs text-gray-500"
                >
                  <span>{{ item.label }}</span>
                  <span>€{{ item.daily }}/day = €{{ (item.daily * 30).toLocaleString('nl-NL') }}/mo</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Break-even callout -->
        <p class="text-green-600 font-semibold text-sm text-center">
          ✓ More cost-effective above
          <span class="tabular-nums">{{ formatNumber(breakEven) }}</span>
          transactions per month
        </p>
      </div>

      <!-- Comparison table -->
      <div>
        <h3 class="text-2xl font-bold text-gray-900 mb-1">Cost at Scale</h3>
        <p class="text-gray-500 text-sm mb-6">Compared to SaaS card issuing platforms</p>

        <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <!-- Table header -->
          <div class="grid grid-cols-3 bg-gray-50 border-b border-gray-100 px-6 py-3">
            <span class="text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Transactions/mo
            </span>
            <span class="text-xs font-semibold text-blue-600 uppercase tracking-wider text-right">
              {{ columnHeader }}
            </span>
            <span class="text-xs font-semibold text-gray-500 uppercase tracking-wider text-right">
              SaaS card issuing
            </span>
          </div>

          <!-- Table rows -->
          <div
            v-for="vol in TABLE_VOLUMES"
            :key="vol"
            :class="[
              'grid grid-cols-3 px-6 py-4 last:border-0 transition-colors',
              closestVolume === vol
                ? 'bg-blue-50 border-l-4 border-l-blue-400 border-b border-blue-100'
                : 'border-b border-gray-50'
            ]"
          >
            <span class="text-sm text-gray-700 font-medium self-center tabular-nums">
              {{ formatNumber(vol) }}
            </span>
            <span
              :class="[
                'text-sm font-bold text-right self-center tabular-nums',
                closestVolume === vol ? 'text-blue-600' : 'text-gray-800'
              ]"
            >{{ formatCost(fictasForVolume(vol)) }}</span>
            <span class="text-sm text-gray-500 text-right self-center">
              {{ MARKET_RANGES[vol] }}
            </span>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>
