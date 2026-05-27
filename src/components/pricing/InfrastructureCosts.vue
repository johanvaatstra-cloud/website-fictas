<script setup>
import { RouterLink } from 'vue-router'

const rows = [
  { category: 'Compute', daily: '€45', monthly: '€1,350', icon: '🖥️' },
  { category: 'Database (SQL + Cosmos)', daily: '€12', monthly: '€360', icon: '🗄️' },
  { category: 'Networking', daily: '€8', monthly: '€240', icon: '🌐' },
  { category: 'Security & Compliance', daily: '€5', monthly: '€150', icon: '🛡️' },
]
</script>

<template>
  <section class="bg-[#060d1f] py-24">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-4xl font-bold text-white mb-3">Azure Infrastructure Costs</h2>
        <p class="text-gray-400 text-lg">
          Included in the Monthly Subscription. Transparent breakdown per category.
        </p>
      </div>

      <div class="bg-[#0a1628] rounded-3xl border border-white/10 overflow-hidden mb-8">
        <!-- Table header -->
        <div class="grid grid-cols-3 px-6 py-4 border-b border-white/10 bg-[#0d1f3c]">
          <span class="text-gray-400 text-xs uppercase tracking-wider font-semibold">Category</span>
          <span class="text-gray-400 text-xs uppercase tracking-wider font-semibold text-right">Daily</span>
          <span class="text-gray-400 text-xs uppercase tracking-wider font-semibold text-right">Monthly</span>
        </div>

        <!-- Rows -->
        <div
          v-for="row in rows"
          :key="row.category"
          class="grid grid-cols-3 px-6 py-4 border-b border-white/5 hover:bg-white/3 transition-colors items-center"
        >
          <div class="flex items-center gap-3">
            <span class="text-lg">{{ row.icon }}</span>
            <span class="text-gray-200 text-sm">{{ row.category }}</span>
          </div>
          <span class="text-gray-300 text-sm font-mono text-right">{{ row.daily }}</span>
          <span class="text-gray-300 text-sm font-mono text-right">{{ row.monthly }}</span>
        </div>

        <!-- Totals -->
        <div class="grid grid-cols-3 px-6 py-5 bg-[#0d1f3c]">
          <span class="text-white font-bold text-sm">Total</span>
          <span class="text-orange-400 font-bold text-sm font-mono text-right">€70/day</span>
          <span class="text-orange-400 font-bold text-sm font-mono text-right">€2,100/mo</span>
        </div>
      </div>

      <p class="text-gray-500 text-sm text-center mb-12">
        Infrastructure costs are included in the Monthly Subscription (€8,900/mo).
        One-Time License clients provision their own Azure resources.
      </p>

      <!-- Bottom CTA -->
      <div class="text-center">
        <h3 class="text-2xl font-bold text-white mb-3">Ready to get started?</h3>
        <p class="text-gray-400 mb-7">We review every request within 1 business day.</p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <RouterLink
            to="/request-demo"
            class="inline-flex items-center justify-center bg-orange-500 hover:bg-orange-400 text-white px-8 py-4 rounded-xl font-semibold transition-colors"
          >
            Schedule a Demo →
          </RouterLink>
          <RouterLink
            to="/contact"
            class="inline-flex items-center justify-center border border-white/30 hover:bg-white/10 text-white px-8 py-4 rounded-xl font-semibold transition-colors"
          >
            Contact Sales
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>
