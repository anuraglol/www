<script setup lang="ts">
const route = useRoute();
</script>

<template>
  <div
    class="font-mono text-blue-400 mb-6 flex gap-3 text-base *:hover:text-blue-500"
  >
    <NuxtLink to="/" :class="route.path === '/' ? 'text-blue-700' : ''"
      >/index</NuxtLink
    >
    <NuxtLink
      to="/clicks"
      :class="route.path === '/clicks' ? 'text-blue-700' : ''"
      >/clicks</NuxtLink
    >
  </div>
</template>
