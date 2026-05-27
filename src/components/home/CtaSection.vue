<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <section class="bg-gray-50 py-24">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="bg-gradient-to-br from-[#1a3a8f] via-blue-700 to-blue-800 rounded-3xl p-10 md:p-16 text-center shadow-2xl relative overflow-hidden">
        <!-- Background texture -->
        <div
          class="absolute inset-0 opacity-10"
          style="
            background-image:
              linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px);
            background-size: 40px 40px;
          "
        ></div>

        <div class="relative">
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Launch Your Card Issuing Platform?
          </h2>
          <p class="text-blue-100 text-lg mb-8 max-w-xl mx-auto">
            Join enterprises that deploy Fictas to power their complete card programs.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <RouterLink
              to="/request-demo"
              class="inline-flex items-center justify-center bg-orange-500 hover:bg-orange-400 text-white px-8 py-4 rounded-xl font-semibold transition-colors text-base shadow-lg"
            >
              Schedule a Demo →
            </RouterLink>
            <RouterLink
              to="/report-download"
              class="inline-flex items-center justify-center border border-white/40 hover:bg-white/10 text-white px-8 py-4 rounded-xl font-semibold transition-colors text-base"
            >
              Download Technical Report
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
