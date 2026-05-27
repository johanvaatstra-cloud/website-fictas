<script setup>
const features = [
  { icon: '👤', title: 'Cardholder Management', desc: '300,000+ accounts tested in production' },
  { icon: '🏦', title: 'IBAN Integration', desc: 'Seamless banking integration out of the box' },
  { icon: '☁️', title: 'Azure Deployment', desc: 'Service Fabric, SQL DB, Cosmos DB' },
  { icon: '⚡', title: 'Real-time Authorization', desc: 'Instant transaction processing at 45.66ms' },
  { icon: '🔗', title: 'Complete API', desc: 'Full infrastructure access — API-first design' },
  { icon: '🌐', title: 'Multi-region Ready', desc: 'Global deployment options included' },
]

const specs = [
  { label: 'Card Programs', value: 'Debit, Credit, Prepaid' },
  { label: 'Network', value: 'Visa Certified' },
  { label: '3D Secure', value: 'Included' },
  { label: 'Virtual Cards', value: 'Instant Issue' },
]
</script>

<template>
  <section class="bg-gray-50 py-24">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        <!-- Left: Feature list -->
        <div>
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-10">
            Everything You Need<br>to Issue Cards
          </h2>

          <div class="space-y-5">
            <div
              v-for="f in features"
              :key="f.title"
              class="flex items-start gap-4 group"
            >
              <div class="flex-shrink-0 w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-lg border border-blue-500/20">
                {{ f.icon }}
              </div>
              <div class="pt-1">
                <h4 class="font-semibold text-gray-900 text-sm">{{ f.title }}</h4>
                <p class="text-gray-500 text-sm mt-0.5">{{ f.desc }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Right: Visa card panel -->
        <div class="bg-[#0a1628] rounded-2xl p-8 shadow-2xl">
          <!-- Card visual -->
          <div class="w-full h-44 bg-gradient-to-br from-blue-700 to-blue-900 rounded-xl p-6 mb-8 shadow-xl relative overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12"></div>
            <div class="relative flex justify-between items-start mb-6">
              <img src="@/assets/fictas-logo-dark.svg" alt="Fictas" class="h-4 w-auto" />
              <span class="text-white font-bold italic text-base">VISA</span>
            </div>
            <div class="relative text-white font-mono tracking-[0.2em] text-base mb-4">
              •••• •••• •••• 4589
            </div>
            <div class="relative text-blue-200 text-xs tracking-widest uppercase">Enterprise Card Program</div>
          </div>

          <!-- Spec table -->
          <div class="space-y-1">
            <div
              v-for="row in specs"
              :key="row.label"
              class="flex justify-between items-center py-3 border-b border-white/10 last:border-0"
            >
              <span class="text-gray-400 text-sm">{{ row.label }}</span>
              <span class="text-white text-sm font-medium">{{ row.value }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
