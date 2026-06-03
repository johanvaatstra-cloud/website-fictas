<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { FileText } from 'lucide-vue-next'
import SectionLabel from '../components/shared/SectionLabel.vue'

const submitted = ref(false)
const loading = ref(false)

const form = ref({
  firstName: '',
  lastName: '',
  company: '',
  email: '',
})

const handleSubmit = async () => {
  loading.value = true
  try {
    const res = await fetch('https://formspree.io/f/xykaglkq', {
      method: 'POST',
      headers: { 'Accept': 'application/json' },
      body: JSON.stringify({
        subject: 'Rapport aanvraag - Fictas',
        first_name: form.value.firstName,
        last_name: form.value.lastName,
        email: form.value.email,
        company: form.value.company
      })
    })
    if (res.ok) {
      submitted.value = true
    } else {
      alert('Er ging iets mis. Probeer het opnieuw.')
    }
  } catch (e) {
    alert('Netwerkfout: ' + e.message)
  } finally {
    loading.value = false
  }
}

const metrics = [
  { label: '275,000+ Transactions', color: 'bg-blue-500/20 text-blue-300 border-blue-500/30' },
  { label: '45.66ms Response',      color: 'bg-orange-500/20 text-orange-300 border-orange-500/30' },
  { label: '100 TPS Peak',          color: 'bg-green-500/20 text-green-300 border-green-500/30' },
  { label: '0.00% Error Rate',      color: 'bg-purple-500/20 text-purple-300 border-purple-500/30' },
]

const contents = [
  { n: '①', title: 'Executive Summary' },
  { n: '②', title: 'Performance Benchmarks' },
  { n: '③', title: 'Capacity Analysis' },
  { n: '④', title: 'Cost Analysis' },
  { n: '⑤', title: 'Infrastructure Review' },
]
</script>

<template>

  <!-- ── THANK YOU STATE ─────────────────────────────────── -->
  <div v-if="submitted" class="fade-in">

    <section class="bg-[#0a1628] pt-28 pb-20 relative overflow-hidden">
      <div class="absolute inset-0 opacity-[0.1]" style="background-image: linear-gradient(rgba(59,130,246,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.4) 1px, transparent 1px); background-size: 56px 56px;"></div>
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <SectionLabel text="Technical Report" />
        <h1 class="text-5xl md:text-6xl font-bold text-white mt-5 mb-4 tracking-tight">Full Volume Testing Report</h1>
        <p class="text-gray-300 text-xl max-w-2xl mx-auto mb-10">275,000+ test transactions. Real data. Zero synthetic benchmarks.</p>
        <div class="flex flex-wrap justify-center gap-3">
          <span v-for="m in metrics" :key="m.label" :class="['px-4 py-2 rounded-full text-sm font-semibold border', m.color]">{{ m.label }}</span>
        </div>
      </div>
    </section>

    <section class="bg-white py-24">
      <div class="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div class="flex justify-center mb-7">
          <FileText class="w-20 h-20 text-blue-500" stroke-width="1.5" />
        </div>
        <h2 class="text-4xl font-bold text-gray-900 mb-5">Aanvraag ontvangen!</h2>
        <p class="text-gray-600 text-lg leading-relaxed mb-10">
          We sturen je de downloadlink voor het Full Volume Testing Report binnen 1 werkdag per e-mail toe.
        </p>
        <div class="bg-gray-50 border border-gray-200 rounded-2xl p-7 text-left mb-10">
          <h3 class="text-gray-900 font-semibold mb-5">Het rapport bevat:</h3>
          <div class="space-y-3">
            <div v-for="item in contents" :key="item.n" class="flex items-center gap-3">
              <span class="w-7 h-7 rounded-full bg-blue-500/10 text-blue-600 text-xs font-bold flex items-center justify-center flex-shrink-0">{{ item.n }}</span>
              <span class="text-gray-700 text-sm font-medium">{{ item.title }}</span>
            </div>
          </div>
        </div>
        <RouterLink to="/" class="inline-flex items-center gap-2 text-blue-500 hover:text-blue-600 font-medium transition-colors">
          ← Terug naar home
        </RouterLink>
      </div>
    </section>
  </div>

  <!-- ── FORM STATE ──────────────────────────────────────── -->
  <div v-else>

    <section class="bg-[#0a1628] pt-28 pb-20 relative overflow-hidden">
      <div class="absolute inset-0 opacity-[0.1]" style="background-image: linear-gradient(rgba(59,130,246,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.4) 1px, transparent 1px); background-size: 56px 56px;"></div>
      <div class="absolute top-0 right-1/4 w-[500px] h-[300px] bg-blue-600/8 rounded-full blur-[100px] pointer-events-none"></div>
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <SectionLabel text="Technical Report" />
        <h1 class="text-5xl md:text-6xl font-bold text-white mt-5 mb-4 tracking-tight">Full Volume Testing Report</h1>
        <p class="text-gray-300 text-xl max-w-2xl mx-auto mb-10">275,000+ test transactions. Real data. Zero synthetic benchmarks.</p>
        <div class="flex flex-wrap justify-center gap-3">
          <span v-for="m in metrics" :key="m.label" :class="['px-4 py-2 rounded-full text-sm font-semibold border', m.color]">{{ m.label }}</span>
        </div>
      </div>
    </section>

    <section class="bg-white py-24">
      <div class="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-10">
          <h2 class="text-4xl font-bold text-gray-900 mb-3">Request the Full Report</h2>
          <p class="text-gray-500 text-lg">We send the download link directly to your work email.</p>
        </div>

        <form @submit.prevent="handleSubmit" class="space-y-5">

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="block text-gray-700 text-sm font-medium mb-1.5">First Name <span class="text-orange-500">*</span></label>
              <input v-model="form.firstName" required type="text" placeholder="Johan"
                class="w-full border border-gray-200 text-gray-900 placeholder-gray-400 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition-colors" />
            </div>
            <div>
              <label class="block text-gray-700 text-sm font-medium mb-1.5">Last Name <span class="text-orange-500">*</span></label>
              <input v-model="form.lastName" required type="text" placeholder="Vaatstra"
                class="w-full border border-gray-200 text-gray-900 placeholder-gray-400 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition-colors" />
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="block text-gray-700 text-sm font-medium mb-1.5">Company <span class="text-orange-500">*</span></label>
              <input v-model="form.company" required type="text" placeholder="Your company"
                class="w-full border border-gray-200 text-gray-900 placeholder-gray-400 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition-colors" />
            </div>
            <div>
              <label class="block text-gray-700 text-sm font-medium mb-1.5">Work Email <span class="text-orange-500">*</span></label>
              <input v-model="form.email" required type="email" placeholder="you@company.com"
                class="w-full border border-gray-200 text-gray-900 placeholder-gray-400 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition-colors" />
            </div>
          </div>

          <div class="pt-2">
            <button type="submit" :disabled="loading"
              class="w-full bg-orange-500 hover:bg-orange-400 disabled:opacity-60 text-white font-semibold py-4 rounded-xl transition-colors text-base">
              {{ loading ? 'Versturen...' : 'Send me the report →' }}
            </button>
          </div>

          <p class="text-center text-gray-400 text-xs pt-1">
            We only use your email to send the report. No spam.
          </p>
        </form>
      </div>
    </section>

    <section class="bg-[#0a1628] py-20">
      <div class="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 class="text-2xl font-bold text-white mb-8 text-center">What's inside the report</h3>
        <div class="space-y-3">
          <div v-for="item in contents" :key="item.n"
            class="flex items-center gap-4 bg-white/5 border border-white/10 rounded-xl px-5 py-4">
            <span class="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-400 text-sm font-bold flex items-center justify-center flex-shrink-0">{{ item.n }}</span>
            <span class="text-gray-200 font-medium text-sm">{{ item.title }}</span>
          </div>
        </div>
      </div>
    </section>

  </div>

</template>

<style scoped>
.fade-in {
  animation: fadeIn 0.5s ease-in-out;
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
}
</style>
