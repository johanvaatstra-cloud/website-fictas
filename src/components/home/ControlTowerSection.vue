<script setup>
import { RouterLink } from 'vue-router'
import SectionLabel from '../shared/SectionLabel.vue'

const features = [
  {
    icon: '🎛️',
    title: 'Policy Engine',
    desc: 'Configure MCC rules, merchant whitelists, and country controls — no engineering tickets required.',
  },
  {
    icon: '🏦',
    title: 'Multi-Issuer',
    desc: 'Manage multiple issuers and programs from one unified dashboard.',
  },
  {
    icon: '📊',
    title: 'Compliance Score',
    desc: 'Automated compliance scoring per issuer, visible at a glance.',
  },
  {
    icon: '💳',
    title: 'Multi-Brand',
    desc: 'Visa + Mastercard managed simultaneously in one platform.',
  },
]
</script>

<template>
  <section class="bg-[#060d1f] py-24 relative overflow-hidden">
    <!-- Subtle glow -->
    <div class="absolute top-0 right-1/3 w-[600px] h-[400px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none"></div>

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-14">
        <SectionLabel text="Control Tower" />
        <h2 class="text-4xl md:text-5xl font-bold text-white mt-4 mb-4">
          One Platform. Complete Control.
        </h2>
        <p class="text-gray-300 text-lg max-w-2xl mx-auto">
          From BIN management to MCC-level spending rules — all in one operating platform.
        </p>
        <div class="mt-8">
          <RouterLink
            to="/control-tower"
            class="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-400 text-white px-7 py-3.5 rounded-lg font-semibold transition-colors"
          >
            <span>▷</span> See Control Tower →
          </RouterLink>
        </div>
      </div>

      <!-- Feature grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl mx-auto">
        <div
          v-for="f in features"
          :key="f.title"
          class="bg-[#0d1f3c] rounded-2xl p-7 border border-white/10 hover:border-blue-500/40 hover:bg-[#0f2444] transition-all"
        >
          <div class="text-3xl mb-3">{{ f.icon }}</div>
          <h3 class="text-lg font-semibold text-white mb-2">{{ f.title }}</h3>
          <p class="text-gray-400 text-sm leading-relaxed">{{ f.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
