<script setup>
const metrics = [
  { label: 'Test Transactions', value: '275,000+', icon: '📊' },
  { label: 'Average Response', value: '45.66ms', icon: '⚡' },
  { label: 'Peak TPS Tested', value: '100 TPS', icon: '🚀' },
  { label: 'Error Rate', value: '0.00%', icon: '✅' },
]

const contents = [
  { n: '01', title: 'Executive Summary', desc: 'Key findings and recommendations' },
  { n: '02', title: 'Performance Benchmarks', desc: 'Response times and throughput analysis' },
  { n: '03', title: 'Capacity Analysis', desc: 'Current limits and scaling paths' },
  { n: '04', title: 'Cost Analysis', desc: 'Per-transaction economics' },
  { n: '05', title: 'Infrastructure Review', desc: 'Azure resource utilization' },
]
</script>

<template>
  <section class="bg-white py-24">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

        <!-- Left: Report card mock -->
        <div class="sticky top-24">
          <!-- Report document -->
          <div class="bg-[#0a1628] rounded-3xl border border-white/15 overflow-hidden shadow-2xl">
            <!-- Header bar -->
            <div class="bg-[#0d1f3c] px-7 py-5 border-b border-white/10 flex items-center justify-between">
              <div>
                <div class="text-xs text-gray-500 uppercase tracking-widest mb-1 font-semibold">Fictas · Confidential</div>
                <div class="text-white font-bold text-base">Full Volume Testing Report</div>
              </div>
              <div class="bg-orange-500/20 border border-orange-500/40 text-orange-400 text-xs font-semibold px-3 py-1.5 rounded-full">
                2026 Edition
              </div>
            </div>

            <div class="p-7">
              <!-- Tagline -->
              <p class="text-gray-300 text-sm leading-relaxed mb-7">
                275,000+ test transactions in one day. Real data. No synthetic benchmarks.
                Full Azure infrastructure load test with live production-equivalent traffic.
              </p>

              <!-- Metric boxes -->
              <div class="grid grid-cols-2 gap-3 mb-7">
                <div
                  v-for="m in metrics"
                  :key="m.label"
                  class="bg-[#060d1f] rounded-2xl p-4 border border-white/10"
                >
                  <div class="text-lg mb-1">{{ m.icon }}</div>
                  <div class="text-white font-bold text-xl mb-0.5">{{ m.value }}</div>
                  <div class="text-gray-500 text-xs">{{ m.label }}</div>
                </div>
              </div>

              <!-- Report preview pages (decorative) -->
              <div class="flex gap-2 mb-5">
                <div v-for="i in 4" :key="i" class="flex-1 bg-[#060d1f] rounded-lg h-16 border border-white/5 flex flex-col gap-1.5 p-2">
                  <div class="h-1.5 bg-white/10 rounded-full w-3/4"></div>
                  <div class="h-1.5 bg-white/5 rounded-full w-full"></div>
                  <div class="h-1.5 bg-white/5 rounded-full w-2/3"></div>
                  <div class="h-1.5 bg-blue-500/20 rounded-full w-full mt-1"></div>
                </div>
              </div>

              <!-- Pages count -->
              <div class="flex items-center justify-between text-xs text-gray-600">
                <span>PDF · 32 pages · Last updated May 2026</span>
                <span class="flex items-center gap-1.5 text-green-400">
                  <span class="w-1.5 h-1.5 rounded-full bg-green-400 inline-block"></span>
                  Available now
                </span>
              </div>
            </div>
          </div>
        </div>

        <!-- Right: Contents + form -->
        <div>
          <h2 class="text-3xl font-bold text-gray-900 mb-2">What's Inside</h2>
          <p class="text-gray-500 text-base mb-8">
            A complete picture of the platform's tested performance — numbers your engineering team can trust.
          </p>

          <!-- Contents list -->
          <div class="space-y-4 mb-12">
            <div
              v-for="item in contents"
              :key="item.n"
              class="flex items-start gap-4 p-4 rounded-2xl border border-gray-100 hover:border-blue-200 hover:bg-blue-50/30 transition-all group"
            >
              <span class="flex-shrink-0 w-8 h-8 rounded-lg bg-blue-500/10 text-blue-500 flex items-center justify-center text-xs font-bold border border-blue-500/20">
                {{ item.n }}
              </span>
              <div>
                <div class="font-semibold text-gray-900 text-sm group-hover:text-blue-700 transition-colors">{{ item.title }}</div>
                <div class="text-gray-500 text-sm mt-0.5">{{ item.desc }}</div>
              </div>
            </div>
          </div>

          <!-- Trust signals -->
          <div class="flex flex-wrap gap-4 mb-8">
            <span class="flex items-center gap-1.5 text-gray-500 text-xs">
              <span class="text-green-500">✓</span> No credit card required
            </span>
            <span class="flex items-center gap-1.5 text-gray-500 text-xs">
              <span class="text-green-500">✓</span> Sent within minutes
            </span>
            <span class="flex items-center gap-1.5 text-gray-500 text-xs">
              <span class="text-green-500">✓</span> Real production data
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
