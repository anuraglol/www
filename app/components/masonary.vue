<script setup lang="ts">
import { ref } from "vue";

const GALLERY_IMAGES = [
  { id: "clicks/IMG_0784_lzo9io", width: 4344, height: 5792 }, // 6
  { id: "clicks/IMG_0160_qercve", width: 4000, height: 3000 }, // 2
  { id: "clicks/IMG_0340_icm5vh", width: 1536, height: 2048 }, // 3
  { id: "clicks/IMG_0759_mkyg6n", width: 1536, height: 2048 }, // 12
  { id: "clicks/IMG_0147_znmomt", width: 1200, height: 1600 }, // 13
  { id: "clicks/IMG_0639_jjcqdm", width: 1536, height: 2048 }, // 14
  { id: "clicks/IMG_0190_rqynz6", width: 4160, height: 3120 }, // 11
  { id: "clicks/IMG_0082_boufms", width: 5712, height: 4284 }, // 10
  { id: "clicks/IMG_0168_zhdxrq", width: 2304, height: 4096 }, // 7
  { id: "clicks/IMG_0227_tnlip6", width: 2048, height: 1536 }, // 8
  { id: "clicks/IMG_0166_ctyd7i", width: 3072, height: 4096 }, // 9
  { id: "clicks/IMG_0143_kjqugg", width: 3000, height: 4000 }, // 1
  { id: "clicks/IMG_0318_au8oww", width: 1536, height: 2048 }, // 4
  { id: "clicks/IMG_0675_bibivm", width: 4344, height: 5792 }, // 5
];

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
    <div
      v-for="img in GALLERY_IMAGES"
      :key="img.id"
      class="item break-inside-avoid"
    >
      <div
        class="relative w-full overflow-hidden bg-gray-100 dark:bg-gray-800"
        :style="{ aspectRatio: `${img.width} / ${img.height}` }"
      >
        <NuxtImg
          v-if="!errorImages[img.id]"
          provider="cloudinary"
          :src="img.id"
          width="40"
          quality="10"
          format="jpeg"
          fit="cover"
          class="absolute inset-0 h-full w-full object-cover transition-opacity duration-500"
          :class="{ 'opacity-0': loadedImages[img.id] }"
          :modifiers="{ blur: 100 }"
          aria-hidden="true"
        />

        <NuxtImg
          v-if="!errorImages[img.id]"
          provider="cloudinary"
          :src="img.id"
          :width="img.width"
          :height="img.height"
          format="webp"
          quality="80"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          fit="cover"
          loading="lazy"
          class="absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-in-out"
          :class="[loadedImages[img.id] ? 'opacity-100' : 'opacity-0']"
          @load="markLoaded(img.id)"
          @error="markError(img.id)"
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

<style scoped>
/*
  No custom CSS needed for layout.
  Tailwind utilities handle everything.
*/
</style>
