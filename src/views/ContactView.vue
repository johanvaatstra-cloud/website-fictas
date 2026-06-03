<script setup>
import { ref, reactive } from 'vue'
import { RouterLink } from 'vue-router'
import SectionLabel from '../components/shared/SectionLabel.vue'

const submitted = ref(false)
const submitting = ref(false)

const form = reactive({
  name: '',
  email: '',
  company: '',
  topic: '',
  message: '',
})

const topics = [
  { value: 'sales', label: '💼 Sales inquiry' },
  { value: 'technical', label: '🔧 Technical question' },
  { value: 'pricing', label: '💰 Pricing & licensing' },
  { value: 'partnership', label: '🤝 Partnership' },
  { value: 'other', label: '💬 Other' },
]

const channels = [
  {
    icon: '🚀',
    title: 'Request a Demo',
    desc: 'See Control Tower live with your use case.',
    link: '/request-demo',
    linkLabel: 'Schedule demo →',
  },
  {
    icon: '📄',
    title: 'Technical Report',
    desc: '275K+ transaction test report, free to download.',
    link: '/resources',
    linkLabel: 'Get the report →',
  },
  {
    icon: '💰',
    title: 'Pricing',
    desc: 'One-time license or monthly subscription.',
    link: '/pricing',
    linkLabel: 'View pricing →',
  },
]

const handleSubmit = async () => {
  submitting.value = true
  try {
    const res = await fetch('https://formspree.io/f/xykaglkq', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        subject: 'Contact - Fictas',
        name: form.name,
        email: form.email,
        company: form.company,
        topic: form.topic,
        message: form.message,
      }),
    })
    if (res.ok) submitted.value = true
    else alert('Er ging iets mis. Probeer het opnieuw.')
  } catch (e) {
    alert('Netwerkfout: ' + e.message)
  } finally {
    submitting.value = false
  }
}
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="bg-[#0a1628] pt-28 pb-16 relative overflow-hidden">
      <div
        class="absolute inset-0 opacity-[0.1]"
        style="
          background-image:
            linear-gradient(rgba(59,130,246,0.4) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59,130,246,0.4) 1px, transparent 1px);
          background-size: 56px 56px;
        "
      ></div>
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionLabel text="Get in Touch" />
        <h1 class="text-5xl md:text-6xl font-bold text-white mt-5 mb-4 tracking-tight">Contact</h1>
        <p class="text-gray-300 text-xl max-w-xl">
          Enterprise sales, technical questions, or partnership inquiries — we respond within 1 business day.
        </p>
      </div>
    </section>

    <!-- Body -->
    <section class="bg-white py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          <!-- Left: channels + info -->
          <div>
            <h2 class="text-2xl font-bold text-gray-900 mb-2">How can we help?</h2>
            <p class="text-gray-500 mb-8">
              Not sure where to start? These are the most common reasons people reach out.
            </p>

            <div class="space-y-4 mb-12">
              <RouterLink
                v-for="ch in channels"
                :key="ch.title"
                :to="ch.link"
                class="flex items-start gap-4 p-5 rounded-2xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all group block"
              >
                <div class="w-11 h-11 rounded-xl bg-gray-50 border border-gray-200 flex items-center justify-center text-xl flex-shrink-0">
                  {{ ch.icon }}
                </div>
                <div class="flex-1 min-w-0">
                  <div class="font-semibold text-gray-900 text-sm group-hover:text-blue-700 transition-colors">{{ ch.title }}</div>
                  <div class="text-gray-500 text-sm mt-0.5">{{ ch.desc }}</div>
                </div>
                <span class="text-blue-500 text-sm font-medium flex-shrink-0 pt-0.5 group-hover:translate-x-1 transition-transform">
                  {{ ch.linkLabel }}
                </span>
              </RouterLink>
            </div>

            <!-- Response promise -->
            <div class="bg-[#0a1628] rounded-2xl p-6 border border-white/10">
              <div class="flex items-start gap-4">
                <div class="text-2xl">⚡</div>
                <div>
                  <div class="text-white font-semibold text-sm mb-1">Fast response, every time</div>
                  <p class="text-gray-400 text-sm leading-relaxed">
                    All enquiries reviewed within 1 business day. For urgent technical questions,
                    mention it in your message and we'll prioritise.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Right: form or thank-you -->
          <div>

            <!-- Thank-you -->
            <div v-if="submitted" class="text-center py-16">
              <div class="w-16 h-16 rounded-full bg-green-100 border border-green-200 flex items-center justify-center text-3xl mx-auto mb-5">
                ✅
              </div>
              <h2 class="text-2xl font-bold text-gray-900 mb-2">Message received</h2>
              <p class="text-gray-500">We'll get back to you within 1 business day.</p>
              <RouterLink
                to="/"
                class="inline-block mt-8 text-blue-500 hover:text-blue-600 text-sm font-medium"
              >
                ← Back to home
              </RouterLink>
            </div>

            <!-- Form -->
            <div v-else class="bg-gray-50 rounded-3xl p-8 border border-gray-200">
              <h2 class="text-xl font-bold text-gray-900 mb-6">Send a message</h2>

              <form @submit.prevent="handleSubmit" class="space-y-5">

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label class="block text-gray-700 text-sm font-medium mb-1.5">Full Name <span class="text-orange-500">*</span></label>
                    <input
                      v-model="form.name"
                      required
                      type="text"
                      placeholder="Johan Vaatstra"
                      class="w-full bg-white border border-gray-200 text-gray-900 placeholder-gray-400 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label class="block text-gray-700 text-sm font-medium mb-1.5">Work Email <span class="text-orange-500">*</span></label>
                    <input
                      v-model="form.email"
                      required
                      type="email"
                      placeholder="you@company.com"
                      class="w-full bg-white border border-gray-200 text-gray-900 placeholder-gray-400 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label class="block text-gray-700 text-sm font-medium mb-1.5">Company</label>
                  <input
                    v-model="form.company"
                    type="text"
                    placeholder="Your company name"
                    class="w-full bg-white border border-gray-200 text-gray-900 placeholder-gray-400 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                  />
                </div>

                <!-- Topic -->
                <div>
                  <label class="block text-gray-700 text-sm font-medium mb-2">Topic <span class="text-orange-500">*</span></label>
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <label
                      v-for="t in topics"
                      :key="t.value"
                      :class="[
                        'flex items-center gap-2.5 px-4 py-2.5 rounded-xl border text-sm cursor-pointer transition-all select-none',
                        form.topic === t.value
                          ? 'border-blue-500 bg-blue-50 text-blue-700 font-medium'
                          : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300 hover:text-gray-800'
                      ]"
                    >
                      <input v-model="form.topic" :value="t.value" type="radio" required class="sr-only" />
                      {{ t.label }}
                    </label>
                  </div>
                </div>

                <!-- Message -->
                <div>
                  <label class="block text-gray-700 text-sm font-medium mb-1.5">Message <span class="text-orange-500">*</span></label>
                  <textarea
                    v-model="form.message"
                    required
                    rows="5"
                    placeholder="Tell us about your use case, questions, or anything else we should know…"
                    class="w-full bg-white border border-gray-200 text-gray-900 placeholder-gray-400 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  :disabled="submitting"
                  class="w-full bg-orange-500 hover:bg-orange-400 disabled:opacity-60 text-white font-semibold py-3.5 rounded-xl transition-colors text-sm"
                >
                  {{ submitting ? 'Sending…' : 'Send Message →' }}
                </button>

                <p class="text-center text-gray-400 text-xs">
                  🔒 We never share your information with third parties.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
