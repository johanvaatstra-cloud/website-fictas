<script setup>
defineProps({
  text: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20">
    {{ text }}
  </span>
</template>
