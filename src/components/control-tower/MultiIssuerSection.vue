<script setup>
const capabilities = [
  'Multi-issuer portfolio view',
  'Per-issuer compliance scoring (e.g. 90%)',
  'Real-time volume & transaction data',
  'Program health cards at a glance',
  'Peak hours & category analytics',
  'Currency split monitoring (EUR, PLN, GBP, RON)',
]

const issuers = [
  { name: 'Issuer A', score: 90, volume: '28,441', programs: 4, trend: '+12%', currency: 'EUR' },
  { name: 'NovaPay Bank', score: 88, volume: '14,209', programs: 3, trend: '+8%', currency: 'PLN' },
  { name: 'EuroCard EMI', score: 95, volume: '34,887', programs: 5, trend: '+21%', currency: 'GBP' },
]

const currencies = [
  { code: 'EUR', pct: 62, color: 'bg-blue-500' },
  { code: 'PLN', pct: 18, color: 'bg-purple-500' },
  { code: 'GBP', pct: 12, color: 'bg-emerald-500' },
  { code: 'RON', pct: 8, color: 'bg-orange-500' },
]
</script>

<template>
  <section class="bg-white py-24">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        <!-- Left: Copy -->
        <div>
          <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-600 border border-blue-500/20 mb-5">
            Feature 2 · Multi-Issuer Dashboard
          </span>
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-5">
            Complete Operational Visibility
          </h2>
          <p class="text-gray-600 text-lg mb-7 leading-relaxed">
            One screen. All your issuers. All your programs. All live.
          </p>
          <ul class="space-y-3 mb-8">
            <li v-for="c in capabilities" :key="c" class="flex items-start gap-3 text-sm text-gray-700">
              <span class="w-5 h-5 rounded-full bg-blue-500/10 text-blue-500 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">✓</span>
              {{ c }}
            </li>
          </ul>
        </div>

        <!-- Right: Dashboard mock -->
        <div>
          <div class="bg-[#0a1628] rounded-2xl border border-white/15 shadow-2xl overflow-hidden">
            <!-- Window chrome -->
            <div class="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-[#0d1f3c]">
              <div class="w-3 h-3 rounded-full bg-red-500/70"></div>
              <div class="w-3 h-3 rounded-full bg-yellow-500/70"></div>
              <div class="w-3 h-3 rounded-full bg-green-500/70"></div>
              <span class="ml-3 text-gray-500 text-xs font-mono">Issuer Portfolio — Live Dashboard</span>
            </div>
            <div class="p-5">
              <!-- Header metrics -->
              <div class="grid grid-cols-3 gap-3 mb-5">
                <div class="bg-[#060d1f] rounded-xl p-3 text-center">
                  <div class="text-2xl font-bold text-white">3</div>
                  <div class="text-gray-500 text-[10px] mt-0.5">Active Issuers</div>
                </div>
                <div class="bg-[#060d1f] rounded-xl p-3 text-center">
                  <div class="text-2xl font-bold text-blue-400">77,537</div>
                  <div class="text-gray-500 text-[10px] mt-0.5">Transactions</div>
                </div>
                <div class="bg-[#060d1f] rounded-xl p-3 text-center">
                  <div class="text-2xl font-bold text-green-400">91%</div>
                  <div class="text-gray-500 text-[10px] mt-0.5">Avg Compliance</div>
                </div>
              </div>

              <!-- Issuer list -->
              <div class="space-y-2.5 mb-5">
                <div class="text-gray-500 text-[10px] uppercase tracking-wider font-semibold mb-2">Issuers</div>
                <div
                  v-for="issuer in issuers"
                  :key="issuer.name"
                  class="bg-[#060d1f] rounded-xl p-3.5 border border-white/5"
                >
                  <div class="flex items-center justify-between mb-2">
                    <span class="text-white text-xs font-semibold">{{ issuer.name }}</span>
                    <span :class="['text-xs font-bold px-2 py-0.5 rounded-full', issuer.score >= 90 ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400']">
                      {{ issuer.score }}%
                    </span>
                  </div>
                  <!-- Score bar -->
                  <div class="w-full bg-white/5 rounded-full h-1.5 mb-2">
                    <div
                      :class="['h-1.5 rounded-full', issuer.score >= 90 ? 'bg-green-500' : 'bg-yellow-500']"
                      :style="{ width: issuer.score + '%' }"
                    ></div>
                  </div>
                  <div class="flex justify-between text-[10px] text-gray-500">
                    <span>{{ issuer.volume }} txns</span>
                    <span>{{ issuer.programs }} programs</span>
                    <span class="text-green-400">{{ issuer.trend }}</span>
                    <span class="text-blue-300">{{ issuer.currency }}</span>
                  </div>
                </div>
              </div>

              <!-- Currency split -->
              <div>
                <div class="text-gray-500 text-[10px] uppercase tracking-wider font-semibold mb-2">Currency Split</div>
                <div class="flex rounded-full overflow-hidden h-3 mb-2">
                  <div v-for="cur in currencies" :key="cur.code" :class="[cur.color]" :style="{ width: cur.pct + '%' }"></div>
                </div>
                <div class="flex gap-3 flex-wrap">
                  <div v-for="cur in currencies" :key="cur.code" class="flex items-center gap-1.5">
                    <div :class="['w-2 h-2 rounded-full', cur.color]"></div>
                    <span class="text-gray-400 text-[10px]">{{ cur.code }} {{ cur.pct }}%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
