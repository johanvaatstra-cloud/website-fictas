<script setup>
import { RouterLink } from 'vue-router'

const rows = [
  { metric: 'Transaction Response Time', value: '45.66ms', context: 'Average across 275,000+ test transactions', highlight: true },
  { metric: 'API Response Time', value: '120ms', context: 'At 50 concurrent requests', highlight: false },
  { metric: 'Current Throughput', value: '80-100 TPS', context: 'Tested production-equivalent load', highlight: true },
  { metric: 'Max Tested Throughput', value: '100 TPS', context: 'Peak during full volume test', highlight: false },
  { metric: 'Scalability Headroom', value: '60-80×', context: 'Above current production load', highlight: false },
  { metric: 'Error Rate', value: '0.00%', context: 'During entire 275K transaction test', highlight: true },
  { metric: 'CPU/IO Load (DB)', value: '0%', context: 'Database CPU/IO during peak testing', highlight: false },
  { metric: 'Active Accounts Tested', value: '300,000', context: 'Production-proven cardholder volume', highlight: false },
  { metric: 'Uptime SLA', value: '99.99%', context: 'Azure-backed option available', highlight: false },
  { metric: 'Upgrade Path', value: '200+ TPS', context: 'With infrastructure scaling', highlight: false },
]

const conditions = [
  'Production-equivalent Azure infrastructure',
  'No query caching or pre-warming',
  'Concurrent read/write transactions',
  'Full authorization pipeline active',
  'Logging and monitoring enabled',
  '300,000 active account dataset',
]
</script>

<template>
  <section class="bg-[#0a1628] py-24">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">

        <!-- Left: heading + test conditions -->
        <div>
          <h2 class="text-4xl font-bold text-white mb-4">Performance Specs</h2>
          <p class="text-gray-400 text-base mb-8 leading-relaxed">
            All numbers from a single continuous test day.
            275,000 transactions, no restarts, no cherry-picking.
          </p>

          <div class="bg-[#060d1f] rounded-2xl border border-white/10 p-6">
            <div class="text-gray-500 text-xs uppercase tracking-wider font-semibold mb-4">Test Conditions</div>
            <ul class="space-y-2.5">
              <li
                v-for="c in conditions"
                :key="c"
                class="flex items-start gap-2.5 text-sm text-gray-400"
              >
                <span class="text-blue-500 flex-shrink-0 mt-0.5">→</span>
                {{ c }}
              </li>
            </ul>
          </div>

          <RouterLink
            to="/resources"
            class="inline-flex items-center gap-2 mt-7 bg-orange-500 hover:bg-orange-400 text-white px-6 py-3 rounded-xl font-semibold transition-colors text-sm"
          >
            Download Full Report →
          </RouterLink>
        </div>

        <!-- Right: metrics table -->
        <div class="lg:col-span-2">
          <div class="bg-[#060d1f] rounded-2xl border border-white/10 overflow-hidden">
            <!-- Table header -->
            <div class="grid grid-cols-3 px-6 py-4 border-b border-white/10 bg-[#0d1f3c]">
              <span class="text-gray-500 text-xs uppercase tracking-wider font-semibold">Metric</span>
              <span class="text-gray-500 text-xs uppercase tracking-wider font-semibold text-right">Value</span>
              <span class="text-gray-500 text-xs uppercase tracking-wider font-semibold pl-4">Context</span>
            </div>

            <!-- Rows -->
            <div
              v-for="row in rows"
              :key="row.metric"
              :class="[
                'grid grid-cols-3 px-6 py-4 border-b border-white/5 last:border-0 items-start transition-colors',
                row.highlight ? 'bg-blue-500/5' : 'hover:bg-white/2'
              ]"
            >
              <div class="flex items-center gap-2">
                <span v-if="row.highlight" class="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>
                <span :class="['text-sm', row.highlight ? 'text-white font-medium' : 'text-gray-300']">
                  {{ row.metric }}
                </span>
              </div>
              <div class="text-right">
                <span :class="['font-bold font-mono text-base', row.highlight ? 'text-blue-400' : 'text-white']">
                  {{ row.value }}
                </span>
              </div>
              <div class="pl-4 text-gray-500 text-xs leading-relaxed">{{ row.context }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
