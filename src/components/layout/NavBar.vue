<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'
import { Menu, X } from 'lucide-vue-next'

const scrolled = ref(false)
const mobileOpen = ref(false)

const handleScroll = () => {
  scrolled.value = window.scrollY > 20
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))

const navLinks = [
  { label: 'Platform', to: '/platform' },
  { label: 'Control Tower', to: '/control-tower' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'Resources', to: '/resources' },
  { label: 'Contact', to: '/contact' },
]
</script>

<template>
  <nav
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      scrolled
        ? 'bg-[#0a1628]/95 backdrop-blur-md shadow-lg border-b border-white/10'
        : 'bg-transparent'
    ]"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">

        <!-- Logo -->
        <RouterLink to="/" class="flex items-center shrink-0">
          <img src="@/assets/fictas-logo-dark.svg" alt="Fictas" class="h-8 w-auto" />
        </RouterLink>

        <!-- Center nav (desktop) -->
        <div class="hidden md:flex items-center gap-7">
          <RouterLink
            v-for="link in navLinks"
            :key="link.to"
            :to="link.to"
            class="text-gray-300 hover:text-white text-sm font-medium transition-colors"
            active-class="!text-white"
          >
            {{ link.label }}
          </RouterLink>
        </div>

        <!-- Right buttons (desktop) -->
        <div class="hidden md:flex items-center gap-3">
          <RouterLink
            to="/request-demo"
            class="border border-white/30 hover:bg-white/10 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
          >
            Request Demo
          </RouterLink>
          <RouterLink
            to="/resources"
            class="bg-orange-500 hover:bg-orange-400 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
          >
            View Report
          </RouterLink>
        </div>

        <!-- Mobile menu toggle -->
        <button
          @click="mobileOpen = !mobileOpen"
          class="md:hidden text-gray-300 hover:text-white p-1"
          aria-label="Toggle menu"
        >
          <X v-if="mobileOpen" class="w-6 h-6" />
          <Menu v-else class="w-6 h-6" />
        </button>
      </div>
    </div>

    <!-- Mobile menu -->
    <Transition
      enter-active-class="transition-all duration-200"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-150"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div
        v-if="mobileOpen"
        class="md:hidden bg-[#0a1628]/98 backdrop-blur-md border-t border-white/10"
      >
        <div class="px-4 py-5 space-y-1">
          <RouterLink
            v-for="link in navLinks"
            :key="link.to"
            :to="link.to"
            class="block text-gray-300 hover:text-white text-sm font-medium py-2.5 border-b border-white/5"
            @click="mobileOpen = false"
          >
            {{ link.label }}
          </RouterLink>
          <div class="pt-4 space-y-2">
            <RouterLink
              to="/request-demo"
              class="block text-center border border-white/30 text-white px-4 py-2.5 rounded-lg text-sm font-medium"
              @click="mobileOpen = false"
            >
              Request Demo
            </RouterLink>
            <RouterLink
              to="/resources"
              class="block text-center bg-orange-500 hover:bg-orange-400 text-white px-4 py-2.5 rounded-lg text-sm font-semibold"
              @click="mobileOpen = false"
            >
              View Report
            </RouterLink>
          </div>
        </div>
      </div>
    </Transition>
  </nav>
</template>
