<script setup>
import HeroSection from '../components/home/HeroSection.vue'
import PerformanceSection from '../components/home/PerformanceSection.vue'
import PlatformCapabilities from '../components/home/PlatformCapabilities.vue'
import ControlTowerSection from '../components/home/ControlTowerSection.vue'
import RealPerformanceData from '../components/home/RealPerformanceData.vue'
import UseCasesSection from '../components/home/UseCasesSection.vue'
import ProvenResults from '../components/home/ProvenResults.vue'
import DeploymentPath from '../components/home/DeploymentPath.vue'
import FaqSection from '../components/home/FaqSection.vue'
import CtaSection from '../components/home/CtaSection.vue'
</script>

<template>
  <div>
    <!-- Section 1: Hero -->
    <HeroSection />

    <!-- Section 2: Performance metrics cards -->
    <PerformanceSection />

    <!-- Section 3: Platform capabilities two-column -->
    <PlatformCapabilities />

    <!-- Section 4: Control Tower NEW -->
    <ControlTowerSection />

    <!-- Section 5: Real performance data metrics row -->
    <RealPerformanceData />

    <!-- Section 6: Use cases -->
    <UseCasesSection />

    <!-- Section 7: Proven results + Deployment path (dark navy, two-column) -->
    <section class="bg-[#060d1f] py-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-14">
          <ProvenResults />
          <DeploymentPath />
        </div>
      </div>
    </section>

    <!-- Section 8: FAQ + CTA -->
    <FaqSection />
    <CtaSection />
  </div>
</template>
