<script setup>
import { RouterLink } from 'vue-router'
import SectionLabel from '../shared/SectionLabel.vue'
</script>

<template>
  <section class="relative bg-[#0a1628] min-h-screen flex items-center overflow-hidden">
    <!-- Subtle grid overlay -->
    <div
      class="absolute inset-0 opacity-[0.15]"
      style="
        background-image:
          linear-gradient(rgba(59,130,246,0.3) 1px, transparent 1px),
          linear-gradient(90deg, rgba(59,130,246,0.3) 1px, transparent 1px);
        background-size: 64px 64px;
      "
    ></div>

    <!-- Glow blobs -->
    <div class="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>
    <div class="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-orange-500/5 rounded-full blur-[100px] pointer-events-none"></div>

    <div class="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        <!-- Left: Copy -->
        <div>
          <div class="mb-6">
            <SectionLabel text="Enterprise-Grade Payment Infrastructure" />
          </div>

          <h1 class="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] mb-6">
            <span class="text-white block">Enterprise</span>
            <span class="text-white block">Payment Card</span>
            <span class="text-white block">Issuing Platform</span>
            <span class="bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent block mt-1">
              Deploy In-House in Weeks
            </span>
          </h1>

          <p class="text-gray-300 text-lg leading-relaxed mb-8 max-w-lg">
            Complete Visa card issuing, IBAN integration, and transaction processing.
            PCI DSS ready. Deploy on your Azure infrastructure with full source code access.
          </p>

          <div class="flex flex-col sm:flex-row gap-4">
            <RouterLink
              to="/resources"
              class="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-400 text-white px-6 py-3.5 rounded-lg font-semibold transition-colors text-sm"
            >
              View Performance Report →
            </RouterLink>
            <RouterLink
              to="/request-demo"
              class="inline-flex items-center justify-center gap-2 border border-white/30 hover:bg-white/10 text-white px-6 py-3.5 rounded-lg font-semibold transition-colors text-sm"
            >
              <span class="text-base">▷</span> Schedule Demo
            </RouterLink>
          </div>
        </div>

        <!-- Right: Floating card visual -->
        <div class="hidden lg:flex justify-center items-center">
          <div class="relative">
            <!-- Main card -->
            <div class="w-80 h-52 bg-gradient-to-br from-[#0d1f3c] via-[#112a4a] to-[#1a3a6b] rounded-2xl p-6 shadow-2xl border border-white/10 relative overflow-hidden">
              <!-- Card shimmer -->
              <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12"></div>

              <div class="relative flex justify-between items-start mb-8">
                <img src="@/assets/fictas-logo-dark.svg" alt="Fictas" class="h-4 w-auto" />
                <svg viewBox="0 0 80 26" width="60" height="20" xmlns="http://www.w3.org/2000/svg">
                  <text x="0" y="22"
                        font-family="Arial, Helvetica, sans-serif"
                        font-weight="900"
                        font-size="26"
                        font-style="italic"
                        letter-spacing="-1"
                        fill="#FFFFFF">VISA</text>
                </svg>
              </div>

              <div class="relative text-white font-mono text-lg tracking-[0.2em] mb-5">
                **** **** **** 4589
              </div>

              <div class="relative flex justify-between items-end">
                <div>
                  <div class="text-gray-400 text-[10px] uppercase tracking-wider mb-1">Cardholder</div>
                  <div class="text-white text-sm font-medium">Enterprise Client</div>
                </div>
                <div class="text-right">
                  <div class="text-gray-400 text-[10px] uppercase tracking-wider mb-1">Expires</div>
                  <div class="text-white text-sm font-medium">12/28</div>
                </div>
                <div class="text-blue-300 font-bold italic text-lg">VISA</div>
              </div>
            </div>

            <!-- Badges -->
            <div class="absolute -top-3 -right-4 bg-green-500/20 border border-green-500/40 text-green-400 text-xs px-3 py-1.5 rounded-full font-medium backdrop-blur-sm">
              ✓ Visa Certified
            </div>
            <div class="absolute -bottom-3 -left-4 bg-blue-500/20 border border-blue-500/30 text-blue-300 text-xs px-3 py-1.5 rounded-full font-medium backdrop-blur-sm">
              PCI DSS Ready
            </div>
          </div>
        </div>
      </div>

      <!-- Stats bar -->
      <div class="mt-20 pt-10 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div class="text-center">
          <div class="text-3xl md:text-4xl font-bold text-white">45.66ms</div>
          <div class="text-gray-400 text-sm mt-1.5">Avg Response Time</div>
        </div>
        <div class="text-center">
          <div class="text-3xl md:text-4xl font-bold text-white">100 TPS</div>
          <div class="text-gray-400 text-sm mt-1.5">Transaction Throughput</div>
        </div>
        <div class="text-center">
          <div class="text-3xl md:text-4xl font-bold text-white">99.99%</div>
          <div class="text-gray-400 text-sm mt-1.5">Uptime Option</div>
        </div>
        <div class="text-center">
          <div class="text-3xl md:text-4xl font-bold text-white">275K+</div>
          <div class="text-gray-400 text-sm mt-1.5">Transactions Tested</div>
        </div>
      </div>
    </div>
  </section>
</template>
