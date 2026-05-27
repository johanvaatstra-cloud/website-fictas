<script setup>
import { RouterLink } from 'vue-router'
import SectionLabel from '../components/shared/SectionLabel.vue'
import ArchitectureSection from '../components/platform/ArchitectureSection.vue'
import ApiSection from '../components/platform/ApiSection.vue'
import ComplianceSection from '../components/platform/ComplianceSection.vue'
import PerformanceTable from '../components/platform/PerformanceTable.vue'

const capabilities = [
  { icon: '👤', title: 'Cardholder Management', desc: '300,000+ accounts. Full lifecycle: create, suspend, close, update limits — all via API or Control Tower.' },
  { icon: '🏦', title: 'IBAN Integration', desc: 'Link IBANs to cardholder accounts. Seamless SEPA credit transfer inbound and outbound.' },
  { icon: '⚡', title: 'Real-time Authorization', desc: 'Sub-50ms authorization decisions. MCC, country, merchant, and limit rules evaluated per transaction.' },
  { icon: '💳', title: 'Virtual Card Issuing', desc: 'Instant virtual card issuance via API. Tokenised, single-use or recurring, with full lifecycle control.' },
  { icon: '🌐', title: 'Multi-brand Network', desc: 'Visa certified today. Mastercard simultaneously in the same platform. BIN management per program.' },
  { icon: '☁️', title: 'Azure-Native Deploy', desc: 'Service Fabric, Azure SQL, Cosmos DB, Redis. Runs in your subscription — you own the data.' },
]
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="relative bg-[#0a1628] min-h-[60vh] flex items-center overflow-hidden pt-16">
      <div
        class="absolute inset-0 opacity-[0.1]"
        style="
          background-image:
            linear-gradient(rgba(59,130,246,0.4) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59,130,246,0.4) 1px, transparent 1px);
          background-size: 56px 56px;
        "
      ></div>
      <div class="absolute top-1/3 right-1/4 w-[500px] h-[400px] bg-blue-600/8 rounded-full blur-[120px] pointer-events-none"></div>

      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div class="max-w-3xl">
          <SectionLabel text="Technical Deep Dive" />
          <h1 class="text-5xl md:text-7xl font-bold text-white mt-5 mb-5 tracking-tight leading-tight">
            The Fictas<br>Platform
          </h1>
          <p class="text-gray-300 text-xl leading-relaxed mb-10 max-w-2xl">
            Azure-native, API-first, PCI DSS ready. Every component built for regulated
            enterprise card issuing — from BIN management to real-time authorization.
          </p>
          <div class="flex flex-col sm:flex-row gap-4">
            <RouterLink
              to="/request-demo"
              class="inline-flex items-center justify-center bg-orange-500 hover:bg-orange-400 text-white px-7 py-3.5 rounded-xl font-semibold transition-colors"
            >
              Request Demo →
            </RouterLink>
            <RouterLink
              to="/resources"
              class="inline-flex items-center justify-center border border-white/30 hover:bg-white/10 text-white px-7 py-3.5 rounded-xl font-semibold transition-colors"
            >
              Download Technical Report
            </RouterLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Core capabilities -->
    <section class="bg-white py-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-14">
          <SectionLabel text="Core Capabilities" />
          <h2 class="text-4xl font-bold text-gray-900 mt-4">Everything in One Platform</h2>
          <p class="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
            No stitching together multiple vendors. Fictas covers the full issuing stack.
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="cap in capabilities"
            :key="cap.title"
            class="bg-gray-50 rounded-2xl p-7 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all"
          >
            <div class="text-3xl mb-4">{{ cap.icon }}</div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">{{ cap.title }}</h3>
            <p class="text-gray-600 text-sm leading-relaxed">{{ cap.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Azure architecture diagram -->
    <ArchitectureSection />

    <!-- API section -->
    <ApiSection />

    <!-- Compliance & security -->
    <ComplianceSection />

    <!-- Performance specs table -->
    <PerformanceTable />

    <!-- Final CTA -->
    <section class="bg-gray-50 py-20">
      <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl font-bold text-gray-900 mb-3">Ready to go deeper?</h2>
        <p class="text-gray-600 mb-8">
          The full technical report covers load test methodology, Azure cost breakdown, and capacity scaling projections.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <RouterLink
            to="/resources"
            class="inline-flex items-center justify-center bg-orange-500 hover:bg-orange-400 text-white px-8 py-4 rounded-xl font-semibold transition-colors"
          >
            Download Technical Report →
          </RouterLink>
          <RouterLink
            to="/request-demo"
            class="inline-flex items-center justify-center border border-gray-300 text-gray-700 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold transition-colors"
          >
            Schedule a Demo
          </RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>
