<script setup>
import { CreditCard } from 'lucide-vue-next'
import { RouterLink } from 'vue-router'
import SectionLabel from '../shared/SectionLabel.vue'

const useCases = [
  {
    emoji: '🏦',
    title: 'Neobanks & Fintechs',
    desc: 'Launch quickly with virtual & physical card support for mobile-first banking.',
    bullets: ['Virtual & physical cards', 'Mobile-first architecture', 'Instant issuing'],
  },
  {
    emoji: '💼',
    title: 'Enterprise Corporate Cards',
    desc: 'Full corporate card programs with spending policy enforcement.',
    bullets: ['Custom branding', 'Expense management', 'Policy controls'],
  },
  {
    emoji: '🌐',
    title: 'Payment Service Providers',
    desc: 'Multi-tenant architecture with complete API access and revenue share.',
    bullets: ['API-first design', 'Multi-tenant ready', 'Revenue share model'],
  },
  {
    icon: CreditCard,
    title: 'Consumer Cards',
    desc: 'Issue physical and virtual cards directly to consumers. Full lifecycle management from onboarding to transaction monitoring.',
    bullets: ['Physical & virtual cards', 'IBAN-linked accounts', 'Real-time spend controls', 'KYC onboarding built-in'],
  },
]
</script>

<template>
  <section class="bg-white py-24">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-14">
        <SectionLabel text="Use Cases" />
        <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mt-4">Built for Your Industry</h2>
        <p class="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
          One platform, tailored for neobanks, enterprise, and payment providers alike.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div
          v-for="uc in useCases"
          :key="uc.title"
          class="bg-gray-50 rounded-2xl p-8 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all flex flex-col"
        >
          <!-- Icon: Lucide component or emoji -->
          <div class="mb-5">
            <component
              v-if="uc.icon"
              :is="uc.icon"
              class="w-9 h-9 text-blue-500"
            />
            <span v-else class="text-4xl">{{ uc.emoji }}</span>
          </div>

          <h3 class="text-xl font-semibold text-gray-900 mb-3">{{ uc.title }}</h3>
          <p class="text-gray-600 text-sm mb-5 leading-relaxed">{{ uc.desc }}</p>

          <ul class="space-y-2 flex-1">
            <li
              v-for="b in uc.bullets"
              :key="b"
              class="flex items-center gap-2 text-sm text-gray-700"
            >
              <span class="w-4 h-4 rounded-full bg-blue-500/10 text-blue-500 flex items-center justify-center text-xs font-bold flex-shrink-0">✓</span>
              {{ b }}
            </li>
          </ul>

          <!-- Optional button -->
          <div v-if="uc.button" class="mt-6">
            <RouterLink
              :to="uc.button.to"
              class="inline-flex items-center gap-1 text-blue-500 hover:text-blue-600 text-sm font-semibold transition-colors"
            >
              {{ uc.button.label }} →
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
