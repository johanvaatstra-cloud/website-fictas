<script setup>
const capabilities = [
  'BIN management per program',
  'Multi-brand: Visa + Mastercard simultaneously',
  'Card & account templates',
  'Product configuration (Standard, Start, Premium)',
  'Contact person management per program',
  'Currency exchange tables',
]

const programs = [
  { name: 'Premium Debit', bin: '493821', brand: 'VISA', product: 'Premium', cards: 12840, status: 'active' },
  { name: 'Start Prepaid', bin: '521744', brand: 'MC', product: 'Start', cards: 8210, status: 'active' },
  { name: 'Corporate Credit', bin: '493822', brand: 'VISA', product: 'Standard', cards: 3560, status: 'active' },
  { name: 'Virtual Only', bin: '521745', brand: 'MC', product: 'Start', cards: 1920, status: 'inactive' },
]
</script>

<template>
  <section class="bg-[#060d1f] py-24">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        <!-- Left: Program Management mock -->
        <div>
          <div class="bg-[#0a1628] rounded-2xl border border-white/15 shadow-2xl overflow-hidden">
            <!-- Window chrome -->
            <div class="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-[#0d1f3c]">
              <div class="w-3 h-3 rounded-full bg-red-500/70"></div>
              <div class="w-3 h-3 rounded-full bg-yellow-500/70"></div>
              <div class="w-3 h-3 rounded-full bg-green-500/70"></div>
              <span class="ml-3 text-gray-500 text-xs font-mono">Program Management — Issuer A</span>
            </div>
            <div class="p-5">
              <!-- Header -->
              <div class="flex items-center justify-between mb-4">
                <span class="text-gray-300 text-xs font-semibold uppercase tracking-wider">Card Programs</span>
                <button class="text-xs bg-blue-500/20 text-blue-400 border border-blue-500/30 px-2.5 py-1 rounded-lg font-medium">
                  + New Program
                </button>
              </div>

              <!-- Programs table -->
              <div class="space-y-2 mb-5">
                <div
                  v-for="prog in programs"
                  :key="prog.name"
                  class="bg-[#060d1f] rounded-xl p-3.5 border border-white/5"
                >
                  <div class="flex items-center justify-between mb-1.5">
                    <div class="flex items-center gap-2.5">
                      <span :class="['text-[10px] font-bold px-1.5 py-0.5 rounded', prog.brand === 'VISA' ? 'bg-blue-600/30 text-blue-300' : 'bg-red-600/20 text-red-300']">
                        {{ prog.brand }}
                      </span>
                      <span class="text-white text-xs font-medium">{{ prog.name }}</span>
                    </div>
                    <span :class="['text-[10px] px-2 py-0.5 rounded-full font-medium', prog.status === 'active' ? 'bg-green-500/20 text-green-400' : 'bg-gray-500/20 text-gray-400']">
                      {{ prog.status }}
                    </span>
                  </div>
                  <div class="flex gap-4 text-[10px] text-gray-500">
                    <span>BIN <span class="text-gray-300 font-mono">{{ prog.bin }}</span></span>
                    <span>{{ prog.product }}</span>
                    <span>{{ prog.cards.toLocaleString() }} cards</span>
                  </div>
                </div>
              </div>

              <!-- BIN table excerpt -->
              <div>
                <div class="text-gray-500 text-[10px] uppercase tracking-wider font-semibold mb-2">BIN Configuration</div>
                <div class="bg-[#060d1f] rounded-xl overflow-hidden border border-white/5">
                  <div class="grid grid-cols-3 px-3.5 py-2 border-b border-white/5">
                    <span class="text-gray-600 text-[10px] uppercase tracking-wider">BIN Range</span>
                    <span class="text-gray-600 text-[10px] uppercase tracking-wider">Network</span>
                    <span class="text-gray-600 text-[10px] uppercase tracking-wider">3DS</span>
                  </div>
                  <div class="grid grid-cols-3 px-3.5 py-2 border-b border-white/5">
                    <span class="text-blue-300 text-xs font-mono">493821-XXXX</span>
                    <span class="text-gray-300 text-xs">Visa</span>
                    <span class="text-green-400 text-xs">✓ Active</span>
                  </div>
                  <div class="grid grid-cols-3 px-3.5 py-2">
                    <span class="text-blue-300 text-xs font-mono">521744-XXXX</span>
                    <span class="text-gray-300 text-xs">Mastercard</span>
                    <span class="text-green-400 text-xs">✓ Active</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Right: Copy -->
        <div>
          <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-5">
            Feature 3 · Program Management
          </span>
          <h2 class="text-4xl md:text-5xl font-bold text-white mb-5">
            Full Program<br>Lifecycle Control
          </h2>
          <p class="text-gray-300 text-lg mb-7 leading-relaxed">
            From BIN registration to product configuration — all in one place.
          </p>
          <ul class="space-y-3">
            <li v-for="c in capabilities" :key="c" class="flex items-start gap-3 text-sm text-gray-300">
              <span class="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">✓</span>
              {{ c }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
