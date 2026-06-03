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
  { icon: '🌐', title: 'SDK Support', desc: 'Client libraries for Node.js, Python, .NET, and Java on request.' },
  { icon: '🔔', title: 'Webhook Events', desc: 'Real-time push for authorisations, settlements, disputes, and policy changes.' },
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

        <!-- Right: code example -->
        <div>
          <div class="bg-[#0a1628] rounded-2xl border border-white/10 overflow-hidden shadow-xl font-mono text-xs">
            <!-- Window chrome -->
            <div class="flex items-center gap-2 px-5 py-3.5 border-b border-white/10 bg-[#0d1f3c]">
              <div class="w-3 h-3 rounded-full bg-red-500/70"></div>
              <div class="w-3 h-3 rounded-full bg-yellow-500/70"></div>
              <div class="w-3 h-3 rounded-full bg-green-500/70"></div>
              <span class="ml-2 text-gray-500 text-xs">POST /v1/cards/issue</span>
            </div>

            <div class="p-5 space-y-5">
              <!-- Request -->
              <div>
                <div class="text-gray-500 uppercase tracking-wider text-[10px] mb-2 font-sans">Request</div>
                <div class="bg-[#060d1f] rounded-xl border border-white/5 p-4 leading-relaxed">
                  <div class="text-green-400">POST <span class="text-blue-300">/v1/cards/issue</span></div>
                  <div class="text-gray-500 mt-2">{</div>
                  <div class="pl-4">
                    <div><span class="text-blue-300">"program_id"</span><span class="text-gray-500">: </span><span class="text-orange-300">"prg_9x1kB2"</span><span class="text-gray-600">,</span></div>
                    <div><span class="text-blue-300">"cardholder_id"</span><span class="text-gray-500">: </span><span class="text-orange-300">"ch_4mNpQ7"</span><span class="text-gray-600">,</span></div>
                    <div><span class="text-blue-300">"card_type"</span><span class="text-gray-500">: </span><span class="text-orange-300">"virtual"</span><span class="text-gray-600">,</span></div>
                    <div><span class="text-blue-300">"currency"</span><span class="text-gray-500">: </span><span class="text-orange-300">"EUR"</span></div>
                  </div>
                  <div class="text-gray-500">}</div>
                </div>
              </div>

              <!-- Response -->
              <div>
                <div class="text-gray-500 uppercase tracking-wider text-[10px] mb-2 font-sans">Response <span class="text-green-400 normal-case">201 Created</span></div>
                <div class="bg-[#060d1f] rounded-xl border border-white/5 p-4 leading-relaxed">
                  <div class="text-gray-500">{</div>
                  <div class="pl-4">
                    <div><span class="text-blue-300">"card_id"</span><span class="text-gray-500">: </span><span class="text-orange-300">"crd_7xKp2L"</span><span class="text-gray-600">,</span></div>
                    <div><span class="text-blue-300">"masked_pan"</span><span class="text-gray-500">: </span><span class="text-orange-300">"**** **** **** 4589"</span><span class="text-gray-600">,</span></div>
                    <div><span class="text-blue-300">"status"</span><span class="text-gray-500">: </span><span class="text-green-400">"active"</span><span class="text-gray-600">,</span></div>
                    <div><span class="text-blue-300">"created_at"</span><span class="text-gray-500">: </span><span class="text-orange-300">"2026-01-15T09:23:41Z"</span></div>
                  </div>
                  <div class="text-gray-500">}</div>
                </div>
              </div>

              <!-- Footer note -->
              <div class="text-gray-600 text-[10px] font-sans border-t border-white/5 pt-4">
                + 40 more endpoints in the full API reference
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
