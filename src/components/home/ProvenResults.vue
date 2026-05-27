<script setup>
const results = [
  { value: '275,000', label: 'Test Transactions', sub: 'In a single day' },
  { value: '4x', label: 'Performance Lead', sub: 'Over industry average' },
  { value: '€1', label: 'Per Transaction', sub: 'At scale economics' },
  { value: '300,000', label: 'Active Accounts', sub: 'Production proven' },
]
</script>

<template>
  <div>
    <h2 class="text-3xl font-bold text-white mb-8">Proven Results</h2>
    <div class="grid grid-cols-2 gap-4">
      <div
        v-for="r in results"
        :key="r.value"
        class="bg-[#0d1f3c] rounded-2xl p-6 border border-white/10 hover:border-blue-500/30 transition-colors"
      >
        <div class="text-3xl font-bold text-white mb-1">{{ r.value }}</div>
        <div class="text-blue-400 font-medium text-sm mb-1">{{ r.label }}</div>
        <div class="text-gray-500 text-xs">{{ r.sub }}</div>
      </div>
    </div>
  </div>
</template>
