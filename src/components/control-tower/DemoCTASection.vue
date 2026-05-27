<script setup>
import { ref, reactive } from 'vue'

const submitted = ref(false)
const submitting = ref(false)

const form = reactive({
  firstName: '',
  lastName: '',
  company: '',
  jobTitle: '',
  email: '',
  phone: '',
  useCase: '',
  volume: '',
})

const FORMSPREE_ID = 'YOUR_FORMSPREE_ID'

const handleSubmit = async () => {
  submitting.value = true
  try {
    const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(form),
    })
    if (res.ok) submitted.value = true
  } catch {
    // fallback: show success anyway for demo
    submitted.value = true
  } finally {
    submitting.value = false
  }
}
</script>

<template>
  <section class="bg-gradient-to-br from-[#0a1628] via-blue-900 to-orange-900/30 py-24">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

      <!-- Thank you state -->
      <div v-if="submitted" class="text-center py-16">
        <div class="text-5xl mb-5">✅</div>
        <h2 class="text-3xl font-bold text-white mb-3">Request Received</h2>
        <p class="text-gray-300 text-lg">We'll be in touch within 1 business day.</p>
      </div>

      <!-- Form state -->
      <div v-else>
        <div class="text-center mb-12">
          <h2 class="text-4xl md:text-5xl font-bold text-white mb-4">
            Ready to See Control Tower Live?
          </h2>
          <p class="text-gray-300 text-lg">
            We qualify all demo requests to ensure the best experience for your team.
          </p>
        </div>

        <div class="bg-white/5 backdrop-blur-sm border border-white/15 rounded-3xl p-8 md:p-10">
          <form @submit.prevent="handleSubmit" class="space-y-5">

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label class="block text-gray-300 text-sm font-medium mb-1.5">First Name *</label>
                <input
                  v-model="form.firstName"
                  required
                  type="text"
                  placeholder="Johan"
                  class="w-full bg-white/5 border border-white/20 text-white placeholder-gray-500 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>
              <div>
                <label class="block text-gray-300 text-sm font-medium mb-1.5">Last Name *</label>
                <input
                  v-model="form.lastName"
                  required
                  type="text"
                  placeholder="Vaatstra"
                  class="w-full bg-white/5 border border-white/20 text-white placeholder-gray-500 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label class="block text-gray-300 text-sm font-medium mb-1.5">Company *</label>
                <input
                  v-model="form.company"
                  required
                  type="text"
                  placeholder="Your company"
                  class="w-full bg-white/5 border border-white/20 text-white placeholder-gray-500 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>
              <div>
                <label class="block text-gray-300 text-sm font-medium mb-1.5">Job Title *</label>
                <input
                  v-model="form.jobTitle"
                  required
                  type="text"
                  placeholder="CTO / Head of Cards"
                  class="w-full bg-white/5 border border-white/20 text-white placeholder-gray-500 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label class="block text-gray-300 text-sm font-medium mb-1.5">Work Email *</label>
                <input
                  v-model="form.email"
                  required
                  type="email"
                  placeholder="you@company.com"
                  class="w-full bg-white/5 border border-white/20 text-white placeholder-gray-500 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>
              <div>
                <label class="block text-gray-300 text-sm font-medium mb-1.5">Phone</label>
                <input
                  v-model="form.phone"
                  type="tel"
                  placeholder="+31 6 …"
                  class="w-full bg-white/5 border border-white/20 text-white placeholder-gray-500 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>
            </div>

            <!-- Use case radios -->
            <div>
              <label class="block text-gray-300 text-sm font-medium mb-3">Use Case *</label>
              <div class="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                <label
                  v-for="uc in ['Neobank', 'Corporate cards', 'PSP', 'Other']"
                  :key="uc"
                  :class="[
                    'flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg border text-sm cursor-pointer transition-colors',
                    form.useCase === uc
                      ? 'border-blue-500 bg-blue-500/15 text-blue-300'
                      : 'border-white/15 text-gray-400 hover:border-white/30 hover:text-gray-300'
                  ]"
                >
                  <input v-model="form.useCase" :value="uc" type="radio" class="sr-only" required />
                  {{ uc }}
                </label>
              </div>
            </div>

            <div>
              <label class="block text-gray-300 text-sm font-medium mb-1.5">Expected Monthly Volume</label>
              <input
                v-model="form.volume"
                type="text"
                placeholder="e.g. 50,000 transactions/month"
                class="w-full bg-white/5 border border-white/20 text-white placeholder-gray-500 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>

            <div class="pt-2">
              <button
                type="submit"
                :disabled="submitting"
                class="w-full bg-orange-500 hover:bg-orange-400 disabled:opacity-60 text-white font-semibold py-4 rounded-xl transition-colors text-base"
              >
                {{ submitting ? 'Sending…' : 'Request Demo Access →' }}
              </button>
              <p class="text-center text-gray-500 text-xs mt-4">
                🔒 Your data is private. We review every request within 1 business day.
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
