<script setup>
const metrics = [
  { value: '45.66ms', label: 'Transaction Response', sub: 'Average processing time' },
  { value: '120ms', label: 'API Response', sub: 'At 50 concurrent requests' },
  { value: '80-100 TPS', label: 'Current Capacity', sub: 'Transactions per second' },
  { value: '60-80x', label: 'Growth Headroom', sub: 'Above current production load' },
  { value: '275K+', label: 'Tested Volume', sub: 'Transactions in one day' },
]
</script>

<template>
  <section class="bg-[#0a1628] py-24">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-14">
        <h2 class="text-4xl md:text-5xl font-bold text-white">Real Performance Data</h2>
        <p class="text-gray-400 text-lg mt-4">
          275,000+ test transactions. Real data. No synthetic benchmarks.
        </p>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        <div
          v-for="m in metrics"
          :key="m.label"
          class="bg-[#0d1f3c] rounded-2xl p-6 text-center border border-white/10 hover:border-blue-500/30 transition-colors"
        >
          <div class="text-2xl md:text-3xl font-bold text-white mb-2">{{ m.value }}</div>
          <div class="text-blue-400 font-medium text-sm mb-1">{{ m.label }}</div>
          <div class="text-gray-500 text-xs">{{ m.sub }}</div>
        </div>
      </div>
    </div>
  </section>
</template>
