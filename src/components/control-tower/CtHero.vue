<script setup>
import { RouterLink } from 'vue-router'
import SectionLabel from '../shared/SectionLabel.vue'
</script>

<template>
  <section class="relative bg-[#0a1628] min-h-screen flex items-center overflow-hidden pt-16">
    <!-- Grid overlay -->
    <div
      class="absolute inset-0 opacity-[0.12]"
      style="
        background-image:
          linear-gradient(rgba(59,130,246,0.4) 1px, transparent 1px),
          linear-gradient(90deg, rgba(59,130,246,0.4) 1px, transparent 1px);
        background-size: 56px 56px;
      "
    ></div>
    <div class="absolute top-1/3 right-1/4 w-[600px] h-[400px] bg-blue-600/8 rounded-full blur-[120px] pointer-events-none"></div>

    <div class="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        <!-- Left: Copy -->
        <div>
          <div class="mb-6">
            <SectionLabel text="Issuer Back-Office Platform" />
          </div>
          <h1 class="text-6xl md:text-8xl font-bold text-white tracking-tight leading-none mb-4">
            Control<br>Tower
          </h1>
          <p class="text-xl md:text-2xl text-gray-300 font-medium mb-3">
            The operating system for your card program.
          </p>
          <p class="text-gray-400 text-lg mb-10">
            Three login levels. Complete visibility at every tier.
          </p>
          <div class="flex flex-col sm:flex-row gap-4">
            <RouterLink
              to="/request-demo"
              class="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-400 text-white px-7 py-4 rounded-lg font-semibold transition-colors text-base"
            >
              Request Demo Access →
            </RouterLink>
            <a
              href="#ct-features"
              class="inline-flex items-center justify-center gap-2 border border-white/30 hover:bg-white/10 text-white px-7 py-4 rounded-lg font-semibold transition-colors text-base"
            >
              View Features ↓
            </a>
          </div>
        </div>

        <!-- Right: Animated dashboard mockup -->
        <div class="hidden lg:block">
          <div class="bg-[#060d1f] rounded-2xl border border-white/15 shadow-2xl overflow-hidden">
            <!-- Window chrome -->
            <div class="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-[#0d1f3c]">
              <div class="w-3 h-3 rounded-full bg-red-500/70"></div>
              <div class="w-3 h-3 rounded-full bg-yellow-500/70"></div>
              <div class="w-3 h-3 rounded-full bg-green-500/70"></div>
              <span class="ml-3 text-gray-500 text-xs font-mono">Control Tower — Processor View</span>
            </div>
            <!-- Dashboard content -->
            <div class="p-5">
              <!-- Top bar -->
              <div class="flex items-center justify-between mb-5">
                <div>
                  <div class="text-white font-semibold text-sm">Portfolio Overview</div>
                  <div class="text-gray-500 text-xs mt-0.5">All issuers · Live</div>
                </div>
                <div class="flex items-center gap-1.5">
                  <div class="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                  <span class="text-green-400 text-xs font-medium">Live</span>
                </div>
              </div>
              <!-- Issuer cards -->
              <div class="space-y-2.5 mb-5">
                <div v-for="issuer in issuers" :key="issuer.name"
                  class="bg-[#0a1628] rounded-xl p-3.5 border border-white/10 flex items-center justify-between"
                >
                  <div class="flex items-center gap-3">
                    <div :class="['w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold', issuer.color]">
                      {{ issuer.initials }}
                    </div>
                    <div>
                      <div class="text-white text-xs font-medium">{{ issuer.name }}</div>
                      <div class="text-gray-500 text-[11px]">{{ issuer.programs }} programs</div>
                    </div>
                  </div>
                  <div class="flex items-center gap-4">
                    <div class="text-right">
                      <div class="text-white text-xs font-semibold">{{ issuer.volume }}</div>
                      <div class="text-gray-500 text-[11px]">transactions</div>
                    </div>
                    <div :class="['text-xs font-bold px-2 py-0.5 rounded-full', issuer.score >= 90 ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400']">
                      {{ issuer.score }}%
                    </div>
                  </div>
                </div>
              </div>
              <!-- Stats row -->
              <div class="grid grid-cols-3 gap-2">
                <div class="bg-[#0a1628] rounded-xl p-3 border border-white/10 text-center">
                  <div class="text-blue-400 font-bold text-base">3</div>
                  <div class="text-gray-500 text-[10px] mt-0.5">Issuers</div>
                </div>
                <div class="bg-[#0a1628] rounded-xl p-3 border border-white/10 text-center">
                  <div class="text-blue-400 font-bold text-base">12</div>
                  <div class="text-gray-500 text-[10px] mt-0.5">Programs</div>
                </div>
                <div class="bg-[#0a1628] rounded-xl p-3 border border-white/10 text-center">
                  <div class="text-green-400 font-bold text-base">91%</div>
                  <div class="text-gray-500 text-[10px] mt-0.5">Avg Score</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
const issuers = [
  { name: 'Issuer A', initials: 'IA', programs: 4, volume: '28,441', score: 90, color: 'bg-blue-600/30 text-blue-300' },
  { name: 'NovaPay Bank', initials: 'NP', programs: 3, volume: '14,209', score: 88, color: 'bg-purple-600/30 text-purple-300' },
  { name: 'EuroCard EMI', initials: 'EC', programs: 5, volume: '34,887', score: 95, color: 'bg-emerald-600/30 text-emerald-300' },
]
</script>
