<script setup>
import CtHero from '../components/control-tower/CtHero.vue'
import ThreeTierSection from '../components/control-tower/ThreeTierSection.vue'
import PolicyEngineSection from '../components/control-tower/PolicyEngineSection.vue'
import MultiIssuerSection from '../components/control-tower/MultiIssuerSection.vue'
import ProgramManagementSection from '../components/control-tower/ProgramManagementSection.vue'
import DemoCTASection from '../components/control-tower/DemoCTASection.vue'
</script>

<template>
  <div>
    <CtHero />
    <div id="ct-features">
    <ThreeTierSection />
    <PolicyEngineSection />
    <MultiIssuerSection />
    <ProgramManagementSection />
    <DemoCTASection />
    </div>
  </div>
</template>
