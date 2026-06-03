<script setup>
const layers = [
  {
    label: 'Client Layer',
    color: 'border-orange-500/40 bg-orange-500/5',
    labelColor: 'text-orange-400',
    items: ['Web Portal', 'Mobile App', 'Third-party Systems'],
    itemStyle: 'bg-orange-500/10 border-orange-500/20 text-orange-300',
  },
  {
    label: 'API Gateway',
    color: 'border-blue-500/40 bg-blue-500/5',
    labelColor: 'text-blue-400',
    items: ['REST API', 'Auth / OAuth 2.0'],
    itemStyle: 'bg-blue-500/10 border-blue-500/20 text-blue-300',
  },
  {
    label: 'Azure Service Fabric',
    color: 'border-purple-500/40 bg-purple-500/5',
    labelColor: 'text-purple-400',
    items: ['Authorization Engine', 'Card Issuing Service', 'IBAN Service', 'Notification Service'],
    itemStyle: 'bg-purple-500/10 border-purple-500/20 text-purple-300',
  },
  {
    label: 'Data Layer',
    color: 'border-emerald-500/40 bg-emerald-500/5',
    labelColor: 'text-emerald-400',
    items: ['Azure SQL DB', 'Cosmos DB', 'Blob Storage'],
    itemStyle: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-300',
  },
  {
    label: 'External Networks',
    color: 'border-gray-500/40 bg-gray-500/5',
    labelColor: 'text-gray-400',
    items: ['Visa Network', 'Mastercard Network', 'SEPA / IBAN', 'SMS / Email'],
    itemStyle: 'bg-gray-700/40 border-gray-600/20 text-gray-300',
  },
]

const specs = [
  { label: 'Runtime', value: 'Azure Service Fabric' },
  { label: 'Database', value: 'Azure SQL + Cosmos DB' },
  { label: 'Auth', value: 'OAuth 2.0 / JWT' },
  { label: 'Protocol', value: 'REST / JSON + ISO 8583' },
  { label: 'Regions', value: 'Multi-region ready' },
]
</script>

<template>
  <section class="bg-[#060d1f] py-24">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-14">
        <h2 class="text-4xl font-bold text-white mb-3">Azure-Native Architecture</h2>
        <p class="text-gray-400 text-lg max-w-2xl mx-auto">
          Built on Azure Service Fabric for elastic scaling. Every component containerised, monitored, and recoverable.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">

        <!-- Architecture diagram -->
        <div class="lg:col-span-2">
          <div class="bg-[#0a1628] rounded-2xl border border-white/10 p-6 overflow-hidden">
            <!-- Window chrome -->
            <div class="flex items-center gap-2 mb-6">
              <div class="w-3 h-3 rounded-full bg-red-500/70"></div>
              <div class="w-3 h-3 rounded-full bg-yellow-500/70"></div>
              <div class="w-3 h-3 rounded-full bg-green-500/70"></div>
              <span class="ml-2 text-gray-600 text-xs font-mono">fictas-platform · architecture.svg</span>
            </div>

            <div class="space-y-2">
              <div
                v-for="(layer, i) in layers"
                :key="layer.label"
                class="relative"
              >
                <div :class="['border rounded-xl p-4', layer.color]">
                  <div :class="['text-[10px] font-bold uppercase tracking-widest mb-2.5', layer.labelColor]">
                    {{ layer.label }}
                  </div>
                  <div class="flex flex-wrap gap-2">
                    <span
                      v-for="item in layer.items"
                      :key="item"
                      :class="['text-xs px-2.5 py-1.5 rounded-lg border font-medium', layer.itemStyle]"
                    >
                      {{ item }}
                    </span>
                  </div>
                </div>
                <!-- Connector arrow -->
                <div v-if="i < layers.length - 1" class="flex justify-center py-1">
                  <div class="flex flex-col items-center">
                    <div class="w-px h-3 bg-white/15"></div>
                    <div class="w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[5px] border-t-white/15"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Spec table -->
        <div class="space-y-3">
          <h3 class="text-white font-semibold text-base mb-4">Stack at a glance</h3>
          <div
            v-for="s in specs"
            :key="s.label"
            class="flex justify-between items-center py-3 border-b border-white/10 last:border-0"
          >
            <span class="text-gray-500 text-sm">{{ s.label }}</span>
            <span class="text-white text-sm font-medium">{{ s.value }}</span>
          </div>

          <div class="bg-[#0a1628] border border-white/10 rounded-2xl p-5 mt-4">
            <div class="text-xs text-gray-500 uppercase tracking-wider mb-3 font-semibold">Availability</div>
            <div class="flex items-center gap-2 mb-2">
              <div class="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
              <span class="text-white text-sm font-semibold">99.99% uptime option</span>
            </div>
            <p class="text-gray-500 text-xs">Azure SLA-backed with geo-redundant failover and automated health monitoring.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
