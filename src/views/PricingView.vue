<script setup>
import { RouterLink } from 'vue-router'
import SectionLabel from '../components/shared/SectionLabel.vue'
import CostCalculator from '../components/pricing/CostCalculator.vue'
import InfrastructureCosts from '../components/pricing/InfrastructureCosts.vue'
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="bg-[#0a1628] pt-28 pb-20 relative overflow-hidden">
      <div
        class="absolute inset-0 opacity-[0.1]"
        style="
          background-image:
            linear-gradient(rgba(59,130,246,0.4) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59,130,246,0.4) 1px, transparent 1px);
          background-size: 56px 56px;
        "
      ></div>
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <SectionLabel text="Pricing" />
        <h1 class="text-5xl md:text-6xl font-bold text-white mt-5 mb-4 tracking-tight">
          In-house issuing vs. SaaS
        </h1>
        <p class="text-gray-300 text-xl max-w-2xl mx-auto mb-6">
          License pricing available on request. Use the calculator below to compare infrastructure costs against SaaS platforms.
        </p>
        <div class="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
          <span class="flex items-center gap-2"><span class="text-green-400">✓</span> No per-transaction fees</span>
          <span class="flex items-center gap-2"><span class="text-green-400">✓</span> 80-100 TPS included</span>
          <span class="flex items-center gap-2"><span class="text-green-400">✓</span> PCI DSS ready</span>
          <span class="flex items-center gap-2"><span class="text-green-400">✓</span> Full source code</span>
        </div>
      </div>
    </section>

    <!-- Calculator intro -->
    <section class="bg-white pt-16 pb-2">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p class="text-gray-600 text-lg leading-relaxed">
          Calculate how much your organisation saves by issuing in-house instead of using a SaaS platform.
        </p>
      </div>
    </section>

    <!-- Cost calculator -->
    <CostCalculator />

    <!-- CTA -->
    <section class="bg-gray-50 py-14">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <RouterLink
          to="/contact"
          class="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-400 text-white font-semibold px-8 py-4 rounded-xl transition-colors text-base"
        >
          Request a custom quote →
        </RouterLink>
      </div>
    </section>

    <!-- Azure infrastructure breakdown + bottom CTA -->
    <InfrastructureCosts />
  </div>
</template>
