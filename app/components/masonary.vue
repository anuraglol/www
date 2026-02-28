<script setup lang="ts">
import { ref, computed } from "vue";

const FALLBACK_IMAGES = [
  { public_id: "clicks/001_lamp", width: 4344, height: 5792 },
  { public_id: "clicks/002_sunset", width: 1536, height: 2048 },
  { public_id: "clicks/003_leaves", width: 1536, height: 2048 },
  { public_id: "clicks/004_bloom", width: 4344, height: 5792 },
  { public_id: "clicks/005_eve", width: 5712, height: 4284 },
  { public_id: "clicks/006_sun", width: 1200, height: 1600 },
  { public_id: "clicks/007_stars", width: 1536, height: 2048 },
  { public_id: "clicks/008_IMG_0143", width: 3000, height: 4000 },
  { public_id: "clicks/009_IMG_0160", width: 4000, height: 3000 },
  { public_id: "clicks/010_IMG_0166", width: 3072, height: 4096 },
  { public_id: "clicks/011_IMG_0168", width: 2304, height: 4096 },
  { public_id: "clicks/012_IMG_0190", width: 4160, height: 3120 },
  { public_id: "clicks/013_IMG_0227", width: 2048, height: 1536 },
  { public_id: "clicks/014_IMG_0318", width: 1536, height: 2048 },
  { public_id: "clicks/015_IMG_0860", width: 4344, height: 5792 },
];

const { data, isPending, error } = useGallery();

const IMAGES = computed(() =>
  !isPending.value && !error.value && data.value?.resources.length
    ? data.value.resources
    : FALLBACK_IMAGES,
);

const loadedImages = ref<Record<string, boolean>>({});
const errorImages = ref<Record<string, boolean>>({});

const markLoaded = (id: string) => {
  loadedImages.value[id] = true;
};
const markError = (id: string) => {
  errorImages.value[id] = true;
};
</script>

<template>
  <div class="masonry my-3 gap-6 columns-1 sm:columns-2 lg:columns-3 space-y-6">
    <div v-for="img in IMAGES" :key="img.public_id" class="item break-inside-avoid">
      <div
        class="relative w-full overflow-hidden bg-gray-100 dark:bg-gray-800"
        :style="{ aspectRatio: `${img.width} / ${img.height}` }"
      >
        <NuxtImg
          v-if="!errorImages[img.public_id]"
          provider="cloudinary"
          :src="img.public_id"
          width="40"
          quality="10"
          format="jpeg"
          fit="cover"
          class="absolute inset-0 h-full w-full object-cover transition-opacity duration-500"
          :class="{ 'opacity-0': loadedImages[img.public_id] }"
          :modifiers="{ blur: 100 }"
          aria-hidden="true"
        />

        <NuxtImg
          v-if="!errorImages[img.public_id]"
          provider="cloudinary"
          :src="img.public_id"
          :width="img.width"
          :height="img.height"
          format="webp"
          :quality="img.height > 2000 && img.width > 2000 ? 60 : 80"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          fit="cover"
          loading="lazy"
          class="absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-in-out"
          :class="[loadedImages[img.public_id] ? 'opacity-100' : 'opacity-0']"
          @load="markLoaded(img.public_id)"
          @error="markError(img.public_id)"
        />

        <div
          v-else
          class="absolute inset-0 flex items-center justify-center bg-gray-200 text-gray-400 dark:bg-gray-800 dark:text-gray-600"
        >
          <span class="text-sm">Failed to load</span>
        </div>
      </div>
    </div>
  </div>
</template>
