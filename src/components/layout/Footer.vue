<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <footer class="bg-[#060d1f] border-t border-white/10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-10">

        <!-- Brand -->
        <div class="md:col-span-1">
          <RouterLink to="/" class="inline-flex items-center mb-4">
            <img src="@/assets/fictas-logo-dark.svg" alt="Fictas" class="h-8 w-auto" />
          </RouterLink>
          <p class="text-gray-400 text-sm leading-relaxed">
            Enterprise payment card issuing platform. Deploy in-house in weeks.
          </p>
          <p class="text-gray-600 text-xs mt-4">fictas.com</p>
        </div>

        <!-- Product -->
        <div>
          <h4 class="text-white font-semibold text-sm mb-4 tracking-wide uppercase text-xs">Product</h4>
          <ul class="space-y-2.5">
            <li>
              <RouterLink to="/platform" class="text-gray-400 hover:text-white text-sm transition-colors">
                Platform
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/control-tower" class="text-gray-400 hover:text-white text-sm transition-colors">
                Control Tower
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/pricing" class="text-gray-400 hover:text-white text-sm transition-colors">
                Pricing
              </RouterLink>
            </li>
          </ul>
        </div>

        <!-- Resources -->
        <div>
          <h4 class="text-white font-semibold text-sm mb-4 tracking-wide uppercase text-xs">Resources</h4>
          <ul class="space-y-2.5">
            <li>
              <RouterLink to="/resources" class="text-gray-400 hover:text-white text-sm transition-colors">
                Technical Report
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/contact" class="text-gray-400 hover:text-white text-sm transition-colors">
                Contact
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/request-demo" class="text-gray-400 hover:text-white text-sm transition-colors">
                Request Demo
              </RouterLink>
            </li>
          </ul>
        </div>

        <!-- CTA -->
        <div>
          <h4 class="text-white font-semibold text-sm mb-4 tracking-wide uppercase text-xs">Get Started</h4>
          <RouterLink
            to="/request-demo"
            class="inline-block bg-orange-500 hover:bg-orange-400 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors mb-4"
          >
            Request Demo →
          </RouterLink>
          <p class="text-gray-500 text-xs leading-relaxed">
            All demo requests reviewed within 1 business day.
          </p>
        </div>
      </div>

      <div class="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p class="text-gray-500 text-xs">© 2026 Fictas. All rights reserved.</p>
        <p class="text-gray-600 text-xs">Enterprise Payment Card Issuing Platform · PCI DSS Ready</p>
      </div>
    </div>
  </footer>
</template>
