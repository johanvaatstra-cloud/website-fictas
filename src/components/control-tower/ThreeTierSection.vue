<script setup>
const tiers = [
  {
    level: '01',
    name: 'Processor',
    who: 'Fictas client / platform owner',
    sees: 'All issuers, all programs, full configuration',
    why: 'Own the stack, own the data',
    color: 'bg-orange-500/10 border-orange-500/30 text-orange-400',
    iconBg: 'bg-orange-500/20',
    icon: '🏗️',
  },
  {
    level: '02',
    name: 'Issuer',
    who: 'Bank / EMI (e.g. Issuer A)',
    sees: 'Their programs, compliance scores, volume',
    why: 'Real-time oversight, no IT dependency',
    color: 'bg-blue-500/10 border-blue-500/30 text-blue-400',
    iconBg: 'bg-blue-500/20',
    icon: '🏦',
  },
  {
    level: '03',
    name: 'Program Manager',
    who: 'Card program operator',
    sees: 'Their cardholders, policies, merchant rules',
    why: 'Control spending rules without engineers',
    color: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400',
    iconBg: 'bg-emerald-500/20',
    icon: '💳',
  },
]
</script>

<template>
  <section class="bg-white py-24">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Three-Tier Architecture
        </h2>
        <p class="text-gray-600 text-lg max-w-2xl mx-auto">
          Every stakeholder sees exactly what they need — nothing more, nothing less.
        </p>
      </div>

      <!-- Connector diagram -->
      <div class="relative">
        <!-- Horizontal connector (desktop) -->
        <div class="hidden lg:block absolute top-16 left-[16.5%] right-[16.5%] h-px bg-gradient-to-r from-orange-400 via-blue-400 to-emerald-400 opacity-40"></div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div
            v-for="tier in tiers"
            :key="tier.name"
            class="relative bg-gray-50 rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-all"
          >
            <!-- Level badge -->
            <div :class="['inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold border mb-5', tier.color]">
              {{ tier.level }} · {{ tier.name }}
            </div>

            <!-- Icon -->
            <div :class="['w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-5', tier.iconBg]">
              {{ tier.icon }}
            </div>

            <h3 class="text-xl font-bold text-gray-900 mb-2">{{ tier.name }}</h3>
            <p class="text-gray-500 text-sm mb-5">{{ tier.who }}</p>

            <div class="space-y-3">
              <div>
                <div class="text-gray-400 text-xs uppercase tracking-wider font-semibold mb-1">They see</div>
                <div class="text-gray-700 text-sm">{{ tier.sees }}</div>
              </div>
              <div>
                <div class="text-gray-400 text-xs uppercase tracking-wider font-semibold mb-1">Why they buy</div>
                <div class="text-gray-700 text-sm font-medium">{{ tier.why }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
