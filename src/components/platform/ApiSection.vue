<script setup>
const endpoints = [
  { method: 'POST', path: '/api/v1/cards/issue', desc: 'Issue a new virtual or physical card' },
  { method: 'GET',  path: '/api/v1/cards/{id}/balance', desc: 'Retrieve real-time card balance' },
  { method: 'POST', path: '/api/v1/transactions/authorize', desc: 'Authorize an incoming transaction' },
  { method: 'GET',  path: '/api/v1/accounts/{id}/statement', desc: 'Full account statement with filters' },
  { method: 'PUT',  path: '/api/v1/policies/{id}', desc: 'Update MCC / country / limit rules' },
  { method: 'POST', path: '/api/v1/iban/link', desc: 'Link an IBAN to a cardholder account' },
]

const methodColor = {
  GET:  'bg-blue-500/20 text-blue-300 border-blue-500/30',
  POST: 'bg-green-500/20 text-green-300 border-green-500/30',
  PUT:  'bg-yellow-500/20 text-yellow-300 border-yellow-500/30',
}

const features = [
  { icon: '🔑', title: 'OAuth 2.0 + JWT', desc: 'Industry-standard auth with short-lived tokens and refresh rotation.' },
  { icon: '📖', title: 'OpenAPI 3.0 Docs', desc: 'Auto-generated interactive docs — try endpoints directly in the browser.' },
  { icon: '🔔', title: 'Webhook Events', desc: 'Real-time push for authorisations, settlements, disputes, and policy changes.' },
  { icon: '🌐', title: 'SDK Support', desc: 'Client libraries for Node.js, Python, .NET, and Java on request.' },
]
</script>

<template>
  <section class="bg-white py-24">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

        <!-- Left: copy + features -->
        <div>
          <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-600 border border-blue-500/20 mb-5">
            API-First Design
          </span>
          <h2 class="text-4xl font-bold text-gray-900 mb-5">Complete API Access</h2>
          <p class="text-gray-600 text-lg mb-9 leading-relaxed">
            Every function in the platform is available via REST API.
            Build your own front-end, integrate with existing systems, or automate operations entirely.
          </p>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div
              v-for="f in features"
              :key="f.title"
              class="flex items-start gap-3"
            >
              <div class="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-lg flex-shrink-0">
                {{ f.icon }}
              </div>
              <div>
                <div class="font-semibold text-gray-900 text-sm">{{ f.title }}</div>
                <div class="text-gray-500 text-sm mt-0.5 leading-relaxed">{{ f.desc }}</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Right: endpoint list -->
        <div>
          <div class="bg-[#0a1628] rounded-2xl border border-white/10 overflow-hidden shadow-xl">
            <div class="flex items-center gap-2 px-5 py-3.5 border-b border-white/10 bg-[#0d1f3c]">
              <div class="w-3 h-3 rounded-full bg-red-500/70"></div>
              <div class="w-3 h-3 rounded-full bg-yellow-500/70"></div>
              <div class="w-3 h-3 rounded-full bg-green-500/70"></div>
              <span class="ml-2 text-gray-500 text-xs font-mono">Fictas REST API — v1</span>
            </div>

            <div class="divide-y divide-white/5">
              <div
                v-for="ep in endpoints"
                :key="ep.path"
                class="flex items-start gap-3 px-5 py-3.5 hover:bg-white/3 transition-colors group"
              >
                <span :class="['text-[10px] font-bold px-2 py-1 rounded border flex-shrink-0 mt-0.5 font-mono', methodColor[ep.method]]">
                  {{ ep.method }}
                </span>
                <div>
                  <div class="text-blue-300 font-mono text-xs group-hover:text-blue-200 transition-colors">{{ ep.path }}</div>
                  <div class="text-gray-500 text-xs mt-0.5">{{ ep.desc }}</div>
                </div>
              </div>
            </div>

            <div class="px-5 py-4 border-t border-white/10 bg-[#060d1f]">
              <span class="text-gray-600 text-xs font-mono">+ 40 more endpoints in the full API reference</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
