<script setup>
const bullets = [
  'MCC category allow/block lists (Supermarkets, Fuel, Electronics…)',
  'Merchant-level whitelist & blacklist (Supermarket A, Supermarket B, Supermarket C)',
  'Country-level spending controls (Allow: NL,BE,DE,FR,LU · Block: ES,PL)',
  'ATM rules: domestic vs. international, weekly/monthly limits',
  'Daily & monthly spending limits per period',
  'Card Acceptor controls with named merchant support',
]

const categories = [
  { name: 'Supermarkets', enabled: true },
  { name: 'Fuel Stations', enabled: true },
  { name: 'Electronics', enabled: false },
  { name: 'Travel', enabled: true },
  { name: 'Online Gaming', enabled: false },
  { name: 'ATM Domestic', enabled: true },
]

const countries = [
  { code: 'NL', flag: '🇳🇱', allowed: true },
  { code: 'BE', flag: '🇧🇪', allowed: true },
  { code: 'DE', flag: '🇩🇪', allowed: true },
  { code: 'FR', flag: '🇫🇷', allowed: true },
  { code: 'ES', flag: '🇪🇸', allowed: false },
  { code: 'PL', flag: '🇵🇱', allowed: false },
]
</script>

<template>
  <section id="features" class="bg-[#060d1f] py-24">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        <!-- Left: Policy Engine mock UI -->
        <div class="order-2 lg:order-1">
          <div class="bg-[#0a1628] rounded-2xl border border-white/15 shadow-2xl overflow-hidden">
            <!-- Window chrome -->
            <div class="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-[#0d1f3c]">
              <div class="w-3 h-3 rounded-full bg-red-500/70"></div>
              <div class="w-3 h-3 rounded-full bg-yellow-500/70"></div>
              <div class="w-3 h-3 rounded-full bg-green-500/70"></div>
              <span class="ml-3 text-gray-500 text-xs font-mono">Edit Account Policy — Issuer A / Program Premium</span>
            </div>
            <div class="p-5">
              <!-- Section: MCC Categories -->
              <div class="mb-5">
                <div class="flex items-center justify-between mb-3">
                  <span class="text-gray-300 text-xs font-semibold uppercase tracking-wider">MCC Categories</span>
                  <span class="text-gray-600 text-xs">6 categories</span>
                </div>
                <div class="space-y-2">
                  <div
                    v-for="cat in categories"
                    :key="cat.name"
                    class="flex items-center justify-between bg-[#060d1f] rounded-lg px-3.5 py-2.5"
                  >
                    <span class="text-gray-300 text-xs">{{ cat.name }}</span>
                    <!-- Toggle -->
                    <div :class="['w-10 h-5 rounded-full relative transition-colors', cat.enabled ? 'bg-blue-500' : 'bg-gray-700']">
                      <div :class="['absolute top-0.5 w-4 h-4 rounded-full bg-white shadow transition-transform', cat.enabled ? 'translate-x-5' : 'translate-x-0.5']"></div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Section: Countries -->
              <div class="mb-5">
                <div class="flex items-center justify-between mb-3">
                  <span class="text-gray-300 text-xs font-semibold uppercase tracking-wider">Country Controls</span>
                </div>
                <div class="flex flex-wrap gap-2">
                  <div
                    v-for="c in countries"
                    :key="c.code"
                    :class="[
                      'flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium border',
                      c.allowed
                        ? 'bg-green-500/10 border-green-500/30 text-green-400'
                        : 'bg-red-500/10 border-red-500/30 text-red-400'
                    ]"
                  >
                    <span>{{ c.flag }}</span>
                    <span>{{ c.code }}</span>
                    <span>{{ c.allowed ? '✓' : '✗' }}</span>
                  </div>
                </div>
              </div>

              <!-- Section: Limits -->
              <div>
                <div class="text-gray-300 text-xs font-semibold uppercase tracking-wider mb-3">Spending Limits</div>
                <div class="grid grid-cols-2 gap-2">
                  <div class="bg-[#060d1f] rounded-lg p-3">
                    <div class="text-gray-500 text-[10px] uppercase tracking-wider mb-1">Daily limit</div>
                    <div class="text-white text-sm font-semibold">€ 500.00</div>
                  </div>
                  <div class="bg-[#060d1f] rounded-lg p-3">
                    <div class="text-gray-500 text-[10px] uppercase tracking-wider mb-1">Monthly limit</div>
                    <div class="text-white text-sm font-semibold">€ 5,000.00</div>
                  </div>
                  <div class="bg-[#060d1f] rounded-lg p-3">
                    <div class="text-gray-500 text-[10px] uppercase tracking-wider mb-1">ATM weekly</div>
                    <div class="text-white text-sm font-semibold">€ 300.00</div>
                  </div>
                  <div class="bg-[#060d1f] rounded-lg p-3">
                    <div class="text-gray-500 text-[10px] uppercase tracking-wider mb-1">ATM monthly</div>
                    <div class="text-white text-sm font-semibold">€ 1,000.00</div>
                  </div>
                </div>
              </div>

              <!-- Save button -->
              <div class="mt-4 flex justify-end">
                <button class="bg-orange-500 hover:bg-orange-400 text-white text-xs px-4 py-2 rounded-lg font-semibold transition-colors">
                  Save Policy
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Right: Copy -->
        <div class="order-1 lg:order-2">
          <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-orange-500/10 text-orange-400 border border-orange-500/20 mb-5">
            Feature 1 · Policy Engine
          </span>
          <h2 class="text-4xl md:text-5xl font-bold text-white mb-5">
            No-Code<br>Spending Control
          </h2>
          <p class="text-gray-300 text-lg mb-7 leading-relaxed">
            Configure every rule your compliance team needs — without engineering tickets.
          </p>
          <ul class="space-y-3 mb-8">
            <li v-for="b in bullets" :key="b" class="flex items-start gap-3 text-sm text-gray-300">
              <span class="w-5 h-5 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">✓</span>
              {{ b }}
            </li>
          </ul>
          <!-- Pull quote -->
          <div class="border-l-4 border-orange-500 pl-5">
            <p class="text-gray-200 font-medium italic text-base leading-relaxed">
              "Configure in minutes what competitors charge engineering fees to build."
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
