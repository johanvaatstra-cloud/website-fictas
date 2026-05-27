<script setup>
import SectionLabel from '../shared/SectionLabel.vue'

const cards = [
  {
    icon: '⚡',
    title: 'Lightning Fast Processing',
    value: '45.66ms',
    badge: '2x faster than industry standard',
    badgeColor: 'bg-green-100 text-green-700',
  },
  {
    icon: '📈',
    title: 'Massive Scalability',
    value: '80-100 TPS',
    badge: 'Upgradable to 200+ TPS',
    badgeColor: 'bg-blue-100 text-blue-700',
  },
  {
    icon: '🗄️',
    title: 'Zero Database Load',
    value: '0% CPU/IO',
    badge: 'During peak testing',
    badgeColor: 'bg-purple-100 text-purple-700',
  },
  {
    icon: '🛡️',
    title: 'Enterprise Ready',
    value: 'PCI DSS',
    badge: '99.99% uptime option',
    badgeColor: 'bg-orange-100 text-orange-700',
  },
]
</script>

<template>
  <section class="bg-white py-24">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-14">
        <SectionLabel text="Performance Metrics" />
        <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mt-4">Built for Enterprise Scale</h2>
        <p class="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
          Real numbers from production testing. No synthetic benchmarks.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="card in cards"
          :key="card.title"
          class="bg-gray-50 rounded-2xl p-7 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all group"
        >
          <div class="text-3xl mb-4">{{ card.icon }}</div>
          <h3 class="text-lg font-semibold text-gray-900 mb-2">{{ card.title }}</h3>
          <div class="text-3xl font-bold text-blue-600 mb-4">{{ card.value }}</div>
          <span :class="['inline-block text-xs font-medium px-2.5 py-1 rounded-full', card.badgeColor]">
            {{ card.badge }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>
