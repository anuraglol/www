<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const open = ref(false);
const supportsHover = ref(false);
const hoverTimeout = ref<number | null>(null);
const closeTimeout = ref<number | null>(null);
const rootRef = ref<HTMLElement | null>(null);

onMounted(() => {
  if (typeof window !== "undefined") {
    supportsHover.value = window.matchMedia("(hover: hover)").matches;
  }
  document.addEventListener("click", handleDocumentClick);
});

onUnmounted(() => {
  document.removeEventListener("click", handleDocumentClick);
});

const handleDocumentClick = (e: MouseEvent) => {
  if (!open.value || supportsHover.value) return;
  if (rootRef.value && !rootRef.value.contains(e.target as Node)) {
    open.value = false;
  }
};

const handleMouseEnter = () => {
  if (!supportsHover.value) return;

  if (closeTimeout.value) {
    clearTimeout(closeTimeout.value);
    closeTimeout.value = null;
  }

  hoverTimeout.value = window.setTimeout(() => {
    open.value = true;
  }, 30);
};

const handleMouseLeave = () => {
  if (!supportsHover.value) return;

  if (hoverTimeout.value) {
    clearTimeout(hoverTimeout.value);
    hoverTimeout.value = null;
  }

  closeTimeout.value = window.setTimeout(() => {
    open.value = false;
  }, 100);
};

const handleClick = () => {
  if (!supportsHover.value) {
    open.value = !open.value;
  }
};
</script>

<template>
  <span ref="rootRef" class="relative inline-block">
    <span
      class="highlight relative inline-block cursor-pointer"
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave"
      @click="handleClick"
    >
      anurag
      <img
        src="/1.gif"
        alt="floating cursor"
        class="animate-bounce absolute -top-2 left-1 size-5"
      />
    </span>

    <Transition
      enter-active-class="transition-opacity duration-150"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-150"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="open"
        class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 z-50 size-36 p-1 bg-white rounded-sm"
        @mouseenter="handleMouseEnter"
        @mouseleave="handleMouseLeave"
      >
        <img src="/beep.png" alt="anurag" loading="lazy" class="rounded-sm object-cover aspect-square" />
      </div>
    </Transition>
  </span>
</template>
