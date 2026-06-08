<script setup>
import { ref, computed, watch } from 'vue'
import { RouterLink } from 'vue-router'
import SectionLabel from '../shared/SectionLabel.vue'

// ── Internal constants — NEVER rendered in the DOM ──────────
const AZURE_PER_MONTH     = 2100
const ONETIME_LICENSE     = 189000
const DEPRECIATION_MONTHS = 60
const FICTAS_TOTAL        = 7350   // AZURE_PER_MONTH + (ONETIME_LICENSE / DEPRECIATION_MONTHS)

// Traditional Low Cost Processor cost model (never display components or source name)
const TRAD_PROCESSING_RATE = 0.08
const TRAD_TOKENISATION    = 2348.40
const TRAD_SMS             = 352.26
const TRAD_SETUP_MONTHLY   = 1448.18
const TRAD_FIXED           = TRAD_TOKENISATION + TRAD_SMS + TRAD_SETUP_MONTHLY

function calculateTradCost(t) {
  return t * TRAD_PROCESSING_RATE + TRAD_FIXED
}

function calculateSavings(t) {
  return calculateTradCost(t) - FICTAS_TOTAL
}

// Break-even: first whole-transaction volume where savings > 0
// = floor((FICTAS_TOTAL − TRAD_FIXED) / TRAD_PROCESSING_RATE) → 40,014
const BREAK_EVEN_VOLUME = Math.floor(
  (FICTAS_TOTAL - TRAD_FIXED) / TRAD_PROCESSING_RATE
)

// ── Slider config ───────────────────────────────────────────
const MIN  = 1000
const MAX  = 1000000
const STEP = 1000

// ── Reactive state ──────────────────────────────────────────
const transactions = ref(100000)

watch(transactions, (val) => {
  if (val < MIN) transactions.value = MIN
  if (val > MAX) transactions.value = MAX
})

// ── Computed ────────────────────────────────────────────────
const sliderPct = computed(() =>
  ((transactions.value - MIN) / (MAX - MIN)) * 100
)
const tradCost = computed(() => calculateTradCost(transactions.value))
const savings  = computed(() => calculateSavings(transactions.value))

// ── Format helpers ──────────────────────────────────────────
function fEuro(val) {
  return '€' + Math.round(val).toLocaleString('nl-NL')
}
function fNum(n) {
  return Math.round(n).toLocaleString('nl-NL')
}
</script>

<template>
  <section class="bg-gray-50 py-24">
    <div class="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">

      <!-- Header -->
      <div class="text-center mb-10">
        <SectionLabel text="ROI Calculator" />
        <h2 class="text-4xl font-bold text-gray-900 mt-4 mb-3">
          How much could you save?
        </h2>
        <p class="text-gray-600">
          Enter your monthly transaction volume to see your estimated saving.
        </p>
      </div>

      <!-- Calculator card -->
      <div class="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">

        <!-- Volume input -->
        <div class="mb-8">
          <label class="block text-sm font-semibold text-gray-700 mb-4">
            Monthly transaction volume
          </label>

          <!-- Slider -->
          <input
            v-model.number="transactions"
            type="range"
            :min="MIN"
            :max="MAX"
            :step="STEP"
            class="w-full h-2 rounded-full appearance-none cursor-pointer accent-blue-600 mb-5"
            :style="{
              background: `linear-gradient(to right, #2563eb 0%, #2563eb ${sliderPct}%, #e5e7eb ${sliderPct}%, #e5e7eb 100%)`
            }"
          />

          <!-- Numeric input + unit label -->
          <div class="flex items-center gap-3">
            <input
              v-model.number="transactions"
              type="number"
              :min="MIN"
              :max="MAX"
              :step="STEP"
              class="w-44 border border-gray-200 rounded-xl px-4 py-2.5 text-sm font-semibold text-gray-900 focus:outline-none focus:border-blue-500 transition-colors tabular-nums text-right"
            />
            <span class="text-sm text-gray-500">transactions / month</span>
          </div>
        </div>

        <!-- Two result cards -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">

          <!-- Traditional Low Cost Processor cost -->
          <div class="bg-gray-50 rounded-xl border border-gray-200 p-5">
            <p class="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
              Traditional Low Cost Processor
            </p>
            <p class="text-3xl font-bold text-gray-900 tabular-nums">
              {{ fEuro(tradCost) }}
            </p>
            <p class="text-xs text-gray-400 mt-1">per month</p>
          </div>

          <!-- Estimated monthly savings -->
          <div
            class="rounded-xl border p-5 transition-all"
            :class="savings > 0
              ? 'bg-green-50 border-green-200'
              : 'bg-gray-50 border-gray-200'"
          >
            <p class="text-xs font-semibold uppercase tracking-wider mb-3"
              :class="savings > 0 ? 'text-green-700' : 'text-gray-500'"
            >
              Your estimated monthly savings
            </p>

            <!-- Positive savings -->
            <template v-if="savings > 0">
              <p class="text-3xl font-bold text-green-600 tabular-nums">
                {{ fEuro(savings) }}
              </p>
              <p class="text-xs text-green-600 mt-1">per month with Fictas</p>
            </template>

            <!-- Break-even or negative — never show a negative number -->
            <template v-else>
              <p class="text-sm font-semibold text-gray-700 leading-snug">
                Break-even at
              </p>
              <p class="text-2xl font-bold text-gray-800 tabular-nums">
                {{ fNum(BREAK_EVEN_VOLUME) }}
              </p>
              <p class="text-xs text-gray-400 mt-1">transactions / month</p>
            </template>
          </div>

        </div>

        <!-- Footnote -->
        <p class="text-xs text-gray-400 text-center leading-relaxed mb-6">
          Based on standard Traditional Low Cost Processor pricing. Fictas pricing available on request.
        </p>

        <!-- CTA -->
        <div class="text-center">
          <RouterLink
            to="/contact"
            class="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-400 text-white font-semibold px-8 py-3.5 rounded-xl transition-colors text-sm"
          >
            Request Pricing →
          </RouterLink>
        </div>

      </div>
    </div>
  </section>
</template>
