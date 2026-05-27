<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <section class="bg-[#060d1f] py-24">
    <div class="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 class="text-4xl font-bold text-white mb-4">Request the Full Report</h2>
      <p class="text-gray-400 text-lg mb-10">
        Get the complete 32-page testing report sent directly to your work email.
      </p>
      <RouterLink
        to="/report-download"
        class="inline-flex items-center justify-center bg-orange-500 hover:bg-orange-400 text-white px-10 py-4 rounded-xl font-semibold transition-colors text-base shadow-lg"
      >
        Request Full Report →
      </RouterLink>
      <p class="text-gray-600 text-xs mt-6">
        🔒 We only use your email to send the report. No spam.
      </p>
    </div>
  </section>
</template>
