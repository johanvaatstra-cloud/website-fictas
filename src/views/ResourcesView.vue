<script setup>
import SectionLabel from '../components/shared/SectionLabel.vue'
import FeaturedReport from '../components/resources/FeaturedReport.vue'
import ReportDownloadForm from '../components/resources/ReportDownloadForm.vue'

const stats = [
  { icon: '📄', value: '32 pages', label: 'Full report' },
  { icon: '🔬', value: '275K+ txns', label: 'Test volume' },
  { icon: '⚡', value: '45.66ms', label: 'Avg response' },
  { icon: '🎯', value: '0.00%', label: 'Error rate' },
]
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="bg-[#0a1628] pt-28 pb-20 relative overflow-hidden">
      <div
        class="absolute inset-0 opacity-[0.1]"
        style="
          background-image:
            linear-gradient(rgba(59,130,246,0.4) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59,130,246,0.4) 1px, transparent 1px);
          background-size: 56px 56px;
        "
      ></div>
      <div class="absolute top-0 right-1/4 w-[500px] h-[300px] bg-blue-600/8 rounded-full blur-[100px] pointer-events-none"></div>

      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl">
          <SectionLabel text="Technical Resources" />
          <h1 class="text-5xl md:text-6xl font-bold text-white mt-5 mb-5 tracking-tight leading-tight">
            Technical Resources<br>&amp; Reports
          </h1>
          <p class="text-gray-300 text-xl leading-relaxed mb-8 max-w-2xl">
            275,000+ test transactions in one day. Real data. No synthetic benchmarks.
            Everything your engineering and commercial teams need to evaluate Fictas.
          </p>

          <!-- Stats row -->
          <div class="flex flex-wrap gap-8">
            <div v-for="stat in stats" :key="stat.label" class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-lg">
                {{ stat.icon }}
              </div>
              <div>
                <div class="text-white font-bold text-lg leading-none">{{ stat.value }}</div>
                <div class="text-gray-500 text-xs mt-0.5">{{ stat.label }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Report showcase + contents -->
    <FeaturedReport />

    <!-- Email capture -->
    <ReportDownloadForm />
  </div>
</template>
