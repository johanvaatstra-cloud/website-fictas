<script setup>
const steps = [
  { num: '1', title: 'Production-ready', desc: '2-4 months timeline' },
  { num: '2', title: 'Guided Setup', desc: 'We guide you through each step' },
  { num: '3', title: 'Customization', desc: 'Flexible API for your specific needs' },
  { num: '4', title: 'Training', desc: 'Complete training program included' },
]
</script>

<template>
  <div>
    <h2 class="text-3xl font-bold text-white mb-8">Simple Deployment Path</h2>
    <div class="space-y-6">
      <div
        v-for="(step, i) in steps"
        :key="step.num"
        class="flex items-start gap-4"
      >
        <div class="relative flex-shrink-0">
          <div class="w-9 h-9 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold text-sm">
            {{ step.num }}
          </div>
          <!-- Connector line -->
          <div
            v-if="i < steps.length - 1"
            class="absolute left-1/2 top-9 w-px h-6 bg-orange-500/30 -translate-x-1/2"
          ></div>
        </div>
        <div class="pt-1">
          <h4 class="text-white font-semibold text-base">{{ step.title }}</h4>
          <p class="text-gray-400 text-sm mt-0.5">{{ step.desc }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
