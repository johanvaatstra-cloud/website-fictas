<script setup>
import { RouterLink } from 'vue-router'

const plans = [
  {
    name: 'One-Time License',
    price: '€189,000',
    period: 'one-time',
    subtitle: 'Full platform ownership with perpetual license',
    recommended: false,
    features: [
      'Complete source code',
      'Perpetual license',
      'Full customization',
      '80-100 TPS (upgradable)',
      'PCI DSS ready',
      '1 year updates included',
      'Implementation support',
    ],
    cta: 'Contact Sales',
    ctaTo: '/contact',
    ctaStyle: 'outline',
  },
  {
    name: 'Monthly Subscription',
    price: '€8,900',
    period: '/month',
    subtitle: 'Azure hosting included',
    recommended: true,
    features: [
      'Full platform access',
      'Azure infrastructure included',
      'Continuous updates',
      '80-100 TPS (upgradable)',
      'PCI DSS ready',
      'Dedicated account manager',
      'Cancel anytime',
    ],
    cta: 'Get Started',
    ctaTo: '/contact',
    ctaStyle: 'orange',
  },
]
</script>

<template>
  <section class="bg-gray-50 py-24">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div
          v-for="plan in plans"
          :key="plan.name"
          :class="[
            'relative rounded-3xl p-8 border transition-all',
            plan.recommended
              ? 'bg-[#0a1628] border-blue-500/40 shadow-2xl shadow-blue-500/10 scale-[1.02]'
              : 'bg-white border-gray-200 shadow-sm'
          ]"
        >
          <!-- Recommended badge -->
          <div v-if="plan.recommended" class="absolute -top-4 left-1/2 -translate-x-1/2">
            <span class="bg-orange-500 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
              ★ Recommended
            </span>
          </div>

          <div class="mb-6">
            <h3 :class="['text-lg font-semibold mb-1', plan.recommended ? 'text-gray-300' : 'text-gray-500']">
              {{ plan.name }}
            </h3>
            <div class="flex items-baseline gap-1">
              <span :class="['text-5xl font-bold', plan.recommended ? 'text-white' : 'text-gray-900']">
                {{ plan.price }}
              </span>
              <span :class="['text-sm', plan.recommended ? 'text-gray-400' : 'text-gray-500']">
                {{ plan.period }}
              </span>
            </div>
            <p :class="['text-sm mt-2', plan.recommended ? 'text-gray-400' : 'text-gray-500']">
              {{ plan.subtitle }}
            </p>
          </div>

          <!-- Divider -->
          <div :class="['border-t mb-6', plan.recommended ? 'border-white/10' : 'border-gray-100']"></div>

          <!-- Features -->
          <ul class="space-y-3 mb-8">
            <li v-for="f in plan.features" :key="f" class="flex items-center gap-3 text-sm">
              <span :class="['w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0',
                plan.recommended ? 'bg-blue-500/20 text-blue-400' : 'bg-green-100 text-green-600']">
                ✓
              </span>
              <span :class="plan.recommended ? 'text-gray-300' : 'text-gray-700'">{{ f }}</span>
            </li>
          </ul>

          <!-- CTA -->
          <RouterLink
            :to="plan.ctaTo"
            :class="[
              'block text-center py-3.5 rounded-xl font-semibold transition-colors text-sm',
              plan.ctaStyle === 'orange'
                ? 'bg-orange-500 hover:bg-orange-400 text-white'
                : 'border border-gray-300 text-gray-700 hover:bg-gray-50'
            ]"
          >
            {{ plan.cta }}
          </RouterLink>
        </div>
      </div>

      <!-- Bottom note -->
      <p class="text-center text-gray-500 text-sm mt-8">
        Both plans include full platform access · PCI DSS ready · 80-100 TPS
      </p>
    </div>
  </section>
</template>
