<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { CheckCircle } from 'lucide-vue-next'
import SectionLabel from '../components/shared/SectionLabel.vue'

const submitted = ref(false)
const loading = ref(false)

const form = ref({
  firstName: '',
  lastName: '',
  company: '',
  jobTitle: '',
  email: '',
  phone: '',
  useCase: 'Neobank',
  volume: '',
})

const W3F_KEY = 'fc6ca080-52a9-4899-bab1-9f19b2c119e3'

const submitForm = async () => {
  loading.value = true
  try {
    const formData = new FormData()
    formData.append('access_key', W3F_KEY)
    formData.append('subject', 'Demo aanvraag - Fictas')
    formData.append('from_name', 'Fictas Website')
    Object.keys(form.value).forEach(key => {
      formData.append(key, form.value[key])
    })

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    })

    const data = await response.json()
    if (data.success) {
      submitted.value = true
    } else {
      alert('Er ging iets mis. Probeer het opnieuw.')
    }
  } catch (error) {
    alert('Er ging iets mis. Probeer het opnieuw.')
  } finally {
    loading.value = false
  }
}

const steps = [
  { n: '01', title: 'Submit your request',          desc: 'Fill in the form — takes under 2 minutes.' },
  { n: '02', title: 'We review within 1 business day', desc: 'Our team qualifies each request to tailor the demo to your use case.' },
  { n: '03', title: 'Personalised demo link',        desc: 'You get secure access to a live Control Tower loaded with demo data.' },
  { n: '04', title: 'Follow-up call',                desc: 'We schedule a call to walk through your specific requirements.' },
]

const social = [
  { label: '275,000+',  sub: 'transactions tested' },
  { label: '45.66ms',   sub: 'avg response time' },
  { label: '300,000',   sub: 'active accounts' },
  { label: 'PCI DSS',   sub: 'compliant' },
]
</script>

<template>

  <!-- ── THANK YOU STATE ─────────────────────────────────── -->
  <div v-if="submitted" class="min-h-screen bg-[#0a1628] flex items-center justify-center px-4 pt-20 fade-in">
    <div class="max-w-[520px] w-full mx-auto text-center">

      <div class="flex justify-center mb-7">
        <CheckCircle class="w-20 h-20 text-green-400" stroke-width="1.5" />
      </div>

      <h1 class="text-4xl font-bold text-white mb-5">Aanvraag ontvangen</h1>

      <p class="text-gray-300 text-lg leading-relaxed mb-10">
        Bedankt voor je interesse in Fictas Control Tower. We beoordelen je aanvraag
        en sturen je binnen 1 werkdag een e-mail met directe toegang tot de demo omgeving.
      </p>

      <div class="bg-white/5 border border-white/10 rounded-2xl p-7 text-left mb-10">
        <h3 class="text-white font-semibold mb-5">Wat kun je verwachten?</h3>
        <div class="space-y-4">
          <div class="flex items-start gap-4">
            <span class="w-7 h-7 rounded-full bg-blue-500/20 text-blue-400 text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">①</span>
            <p class="text-gray-300 text-sm leading-relaxed">Wij beoordelen je aanvraag</p>
          </div>
          <div class="flex items-start gap-4">
            <span class="w-7 h-7 rounded-full bg-blue-500/20 text-blue-400 text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">②</span>
            <p class="text-gray-300 text-sm leading-relaxed">Je ontvangt een persoonlijke e-mail met een directe toegangslink</p>
          </div>
          <div class="flex items-start gap-4">
            <span class="w-7 h-7 rounded-full bg-blue-500/20 text-blue-400 text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">③</span>
            <p class="text-gray-300 text-sm leading-relaxed">Één klik — direct ingelogd in de demo omgeving</p>
          </div>
        </div>
      </div>

      <RouterLink
        to="/"
        class="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium transition-colors"
      >
        ← Terug naar home
      </RouterLink>
    </div>
  </div>

  <!-- ── FORM STATE ──────────────────────────────────────── -->
  <div v-else class="min-h-screen bg-[#0a1628]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

        <!-- Left: Value + process -->
        <div class="lg:sticky lg:top-28">
          <SectionLabel text="Gated Demo Access" />
          <h1 class="text-5xl md:text-6xl font-bold text-white mt-5 mb-4 tracking-tight leading-tight">
            Request Demo<br>Access
          </h1>
          <p class="text-gray-300 text-lg mb-10 leading-relaxed max-w-md">
            We qualify all demo requests to ensure the best experience.
            Each demo is personalised to your use case and team.
          </p>

          <!-- Process steps -->
          <div class="space-y-5 mb-12">
            <div v-for="(step, i) in steps" :key="step.n" class="flex items-start gap-4">
              <div class="relative flex-shrink-0">
                <div class="w-9 h-9 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold text-sm">
                  {{ step.n }}
                </div>
                <div
                  v-if="i < steps.length - 1"
                  class="absolute left-1/2 top-9 w-px h-5 bg-orange-500/25 -translate-x-1/2"
                ></div>
              </div>
              <div class="pt-1">
                <div class="text-white font-semibold text-sm">{{ step.title }}</div>
                <div class="text-gray-500 text-sm mt-0.5">{{ step.desc }}</div>
              </div>
            </div>
          </div>

          <!-- Social proof stats -->
          <div class="grid grid-cols-2 gap-3">
            <div
              v-for="s in social"
              :key="s.label"
              class="bg-white/5 border border-white/10 rounded-xl p-4"
            >
              <div class="text-white font-bold text-lg">{{ s.label }}</div>
              <div class="text-gray-500 text-xs mt-0.5">{{ s.sub }}</div>
            </div>
          </div>
        </div>

        <!-- Right: Form -->
        <div>
          <div class="bg-white/5 border border-white/15 rounded-3xl p-8">
            <h2 class="text-white font-bold text-xl mb-6">Your details</h2>

            <form @submit.prevent="submitForm" class="space-y-5">

              <!-- Name row -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label class="block text-gray-300 text-sm font-medium mb-1.5">First Name <span class="text-orange-400">*</span></label>
                  <input
                    v-model="form.firstName"
                    required type="text" placeholder="Johan"
                    class="w-full bg-white/5 border border-white/20 text-white placeholder-gray-600 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
                <div>
                  <label class="block text-gray-300 text-sm font-medium mb-1.5">Last Name <span class="text-orange-400">*</span></label>
                  <input
                    v-model="form.lastName"
                    required type="text" placeholder="Vaatstra"
                    class="w-full bg-white/5 border border-white/20 text-white placeholder-gray-600 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
              </div>

              <!-- Company + Job Title -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label class="block text-gray-300 text-sm font-medium mb-1.5">Company <span class="text-orange-400">*</span></label>
                  <input
                    v-model="form.company"
                    required type="text" placeholder="Your company"
                    class="w-full bg-white/5 border border-white/20 text-white placeholder-gray-600 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
                <div>
                  <label class="block text-gray-300 text-sm font-medium mb-1.5">Job Title <span class="text-orange-400">*</span></label>
                  <input
                    v-model="form.jobTitle"
                    required type="text" placeholder="CTO / Head of Cards"
                    class="w-full bg-white/5 border border-white/20 text-white placeholder-gray-600 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
              </div>

              <!-- Email + Phone -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label class="block text-gray-300 text-sm font-medium mb-1.5">Work Email <span class="text-orange-400">*</span></label>
                  <input
                    v-model="form.email"
                    required type="email" placeholder="you@company.com"
                    class="w-full bg-white/5 border border-white/20 text-white placeholder-gray-600 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
                <div>
                  <label class="block text-gray-300 text-sm font-medium mb-1.5">Phone</label>
                  <input
                    v-model="form.phone"
                    type="tel" placeholder="+31 6 …"
                    class="w-full bg-white/5 border border-white/20 text-white placeholder-gray-600 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
              </div>

              <!-- Use Case radios -->
              <div>
                <label class="block text-gray-300 text-sm font-medium mb-3">Use Case <span class="text-orange-400">*</span></label>
                <div class="grid grid-cols-2 gap-2.5">
                  <label
                    v-for="uc in ['Neobank', 'Corporate cards', 'PSP', 'Other']"
                    :key="uc"
                    :class="[
                      'flex items-center justify-center gap-2 px-4 py-3 rounded-xl border text-sm cursor-pointer transition-all select-none',
                      form.useCase === uc
                        ? 'border-blue-500 bg-blue-500/15 text-blue-300 font-medium'
                        : 'border-white/15 text-gray-400 hover:border-white/30 hover:text-gray-200'
                    ]"
                  >
                    <input v-model="form.useCase" :value="uc" type="radio" required class="sr-only" />
                    {{ uc }}
                  </label>
                </div>
              </div>

              <!-- Volume -->
              <div>
                <label class="block text-gray-300 text-sm font-medium mb-1.5">Expected Monthly Volume</label>
                <input
                  v-model="form.volume"
                  type="text" placeholder="e.g. 50,000 transactions/month"
                  class="w-full bg-white/5 border border-white/20 text-white placeholder-gray-600 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>

              <!-- Submit -->
              <div class="pt-2">
                <button
                  type="submit"
                  :disabled="loading"
                  class="w-full bg-orange-500 hover:bg-orange-400 disabled:opacity-60 text-white font-semibold py-4 rounded-xl transition-colors text-base"
                >
                  {{ loading ? 'Versturen...' : 'Request Demo Access →' }}
                </button>
              </div>

              <p class="text-center text-gray-600 text-xs pt-1">
                🔒 Your data is private. We review every request within 1 business day.
              </p>
            </form>
          </div>

          <div class="mt-6 text-center">
            <p class="text-gray-600 text-sm">
              Want the technical report first?
              <RouterLink to="/report-download" class="text-blue-400 hover:text-blue-300 font-medium ml-1 transition-colors">
                Download it here →
              </RouterLink>
            </p>
          </div>
        </div>

      </div>
    </div>
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
