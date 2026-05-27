<script setup>
const certifications = [
  {
    icon: '🛡️',
    title: 'PCI DSS Ready',
    level: 'Level 1',
    desc: 'Full cardholder data environment scoped and documented. Deployment guide included.',
    color: 'border-blue-500/30 bg-blue-500/5',
    badge: 'bg-blue-500/20 text-blue-400',
  },
  {
    icon: '💳',
    title: 'Visa Certified',
    level: 'Principal Member',
    desc: 'Certified Visa processing with 3D Secure 2.0 included. Debit, credit, and prepaid programs.',
    color: 'border-orange-500/30 bg-orange-500/5',
    badge: 'bg-orange-500/20 text-orange-400',
  },
  {
    icon: '🔐',
    title: '3D Secure 2.0',
    level: 'Included',
    desc: 'EMV 3DS compliant authentication flows built in. No third-party integration needed.',
    color: 'border-emerald-500/30 bg-emerald-500/5',
    badge: 'bg-emerald-500/20 text-emerald-400',
  },
  {
    icon: '🇪🇺',
    title: 'GDPR Compliant',
    level: 'EU-ready',
    desc: 'Data residency controls, right-to-erasure APIs, and DPA templates included.',
    color: 'border-purple-500/30 bg-purple-500/5',
    badge: 'bg-purple-500/20 text-purple-400',
  },
]

const securityFeatures = [
  'End-to-end TLS 1.3 encryption',
  'HSM-backed key management',
  'Role-based access control (RBAC)',
  'Full audit log with tamper evidence',
  'Automated vulnerability scanning',
  'Network segmentation & WAF',
]
</script>

<template>
  <section class="bg-gray-50 py-24">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-14">
        <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-600 border border-blue-500/20 mb-4">
          Security &amp; Compliance
        </span>
        <h2 class="text-4xl font-bold text-gray-900 mb-3">Enterprise-Grade Security</h2>
        <p class="text-gray-600 text-lg max-w-2xl mx-auto">
          Built for regulated environments. Every component designed to meet the standards your compliance team requires.
        </p>
      </div>

      <!-- Certifications grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
        <div
          v-for="cert in certifications"
          :key="cert.title"
          :class="['rounded-2xl p-7 border', cert.color]"
        >
          <div class="flex items-start justify-between mb-4">
            <div class="flex items-center gap-3">
              <div class="text-2xl">{{ cert.icon }}</div>
              <div>
                <div class="font-bold text-gray-900">{{ cert.title }}</div>
              </div>
            </div>
            <span :class="['text-xs font-semibold px-2.5 py-1 rounded-full', cert.badge]">
              {{ cert.level }}
            </span>
          </div>
          <p class="text-gray-600 text-sm leading-relaxed">{{ cert.desc }}</p>
        </div>
      </div>

      <!-- Security features list -->
      <div class="bg-white rounded-2xl border border-gray-200 p-8">
        <h3 class="text-gray-900 font-bold text-lg mb-6">Security Features</h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div
            v-for="f in securityFeatures"
            :key="f"
            class="flex items-center gap-3 text-sm text-gray-700"
          >
            <span class="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs font-bold flex-shrink-0">✓</span>
            {{ f }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
