<script setup>
import { ref } from 'vue'
import { ChevronDown } from 'lucide-vue-next'

const openIndex = ref(null)

const toggle = (i) => {
  openIndex.value = openIndex.value === i ? null : i
}

const faqs = [
  {
    q: "What's included in the platform?",
    a: "The Fictas Issuing Processing Platform includes complete Visa card issuing infrastructure, IBAN integration, real-time transaction authorization, the Control Tower back-office, full API access, Azure deployment templates, PCI DSS compliance framework, and one year of updates with implementation support.",
  },
  {
    q: "How long does deployment take?",
    a: "Most clients are production-ready within 2-4 months. We guide you through each step: infrastructure setup on Azure, API integration, compliance review, and team training. A dedicated account manager is included in the monthly subscription.",
  },
  {
    q: "Can we customize the platform?",
    a: "Yes. The platform is built API-first. With the one-time license you get full source code access for complete customization. You can configure card programs, spending policies, branding, and integrate with your existing systems through our documented APIs.",
  },
  {
    q: "What support do you provide?",
    a: "We provide guided implementation support, a dedicated account manager (monthly subscription), complete documentation, and a training program for both your technical and operations teams. All demo requests are reviewed within 1 business day.",
  },
  {
    q: "How does pricing scale with volume?",
    a: "Our cost calculator shows approximately €0.0612 per transaction at 100,000 monthly transactions. Volume discounts apply at scale. For comparison, leading SaaS card issuing platforms charge €0.25–0.50 per transaction — Fictas offers up to 80% savings at enterprise volumes.",
  },
]
</script>

<template>
  <section class="bg-white py-24">
    <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-4xl font-bold text-gray-900">Frequently Asked Questions</h2>
        <p class="text-gray-600 mt-4">Everything you need to know before getting started.</p>
      </div>

      <div class="space-y-3">
        <div
          v-for="(faq, i) in faqs"
          :key="i"
          class="border border-gray-200 rounded-xl overflow-hidden"
        >
          <button
            @click="toggle(i)"
            class="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-gray-50 transition-colors"
          >
            <span class="font-semibold text-gray-900 text-sm pr-4">{{ faq.q }}</span>
            <ChevronDown
              :class="[
                'w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-200',
                openIndex === i ? 'rotate-180' : ''
              ]"
            />
          </button>

          <Transition
            enter-active-class="transition-all duration-200 ease-out"
            enter-from-class="opacity-0"
            enter-to-class="opacity-100"
            leave-active-class="transition-all duration-150 ease-in"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0"
          >
            <div v-if="openIndex === i" class="px-6 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-3">
              {{ faq.a }}
            </div>
          </Transition>
        </div>
      </div>
    </div>
  </section>
</template>
