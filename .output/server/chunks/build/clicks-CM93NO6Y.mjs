import { u as useGallery, _ as __nuxt_component_0 } from './useGallery-B8WvfrBP.mjs';
import { b as __nuxt_component_0$1 } from './server.mjs';
import { defineComponent, withAsyncContext, mergeProps, computed, ref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderStyle } from 'vue/server-renderer';
import '@tanstack/vue-query';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '@iconify/utils';
import 'consola';
import 'vue-router';
import 'tailwindcss/colors';
import '@iconify/vue';
import 'reka-ui';
import '@vueuse/core';
import 'tailwind-variants';
import '@iconify/utils/lib/css/icon';
import 'perfect-debounce';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "masonary",
  __ssrInlineRender: true,
  setup(__props) {
    const FALLBACK_IMAGES = [
      { public_id: "clicks/001_lamp", width: 4344, height: 5792 },
      { public_id: "clicks/002_sunset", width: 1536, height: 2048 },
      { public_id: "clicks/003_leaves", width: 1536, height: 2048 },
      { public_id: "clicks/004_bloom", width: 4344, height: 5792 },
      { public_id: "clicks/005_eve", width: 5712, height: 4284 },
      { public_id: "clicks/006_sun", width: 1200, height: 1600 },
      { public_id: "clicks/007_stars", width: 1536, height: 2048 },
      { public_id: "clicks/008_IMG_0143", width: 3e3, height: 4e3 },
      { public_id: "clicks/009_IMG_0160", width: 4e3, height: 3e3 },
      { public_id: "clicks/010_IMG_0166", width: 3072, height: 4096 },
      { public_id: "clicks/011_IMG_0168", width: 2304, height: 4096 },
      { public_id: "clicks/012_IMG_0190", width: 4160, height: 3120 },
      { public_id: "clicks/013_IMG_0227", width: 2048, height: 1536 },
      { public_id: "clicks/014_IMG_0318", width: 1536, height: 2048 },
      { public_id: "clicks/015_IMG_0860", width: 4344, height: 5792 }
    ];
    const { data, isPending, error } = useGallery();
    const IMAGES = computed(
      () => !isPending.value && !error.value && data.value?.resources.length ? data.value.resources : FALLBACK_IMAGES
    );
    const loadedImages = ref({});
    const errorImages = ref({});
    const markLoaded = (id) => {
      loadedImages.value[id] = true;
    };
    const markError = (id) => {
      errorImages.value[id] = true;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "masonry my-3 gap-6 columns-1 sm:columns-2 lg:columns-3 space-y-6" }, _attrs))}><!--[-->`);
      ssrRenderList(IMAGES.value, (img) => {
        _push(`<div class="item break-inside-avoid"><div class="relative w-full overflow-hidden bg-gray-100 dark:bg-gray-800" style="${ssrRenderStyle({ aspectRatio: `${img.width} / ${img.height}` })}">`);
        if (!errorImages.value[img.public_id]) {
          _push(ssrRenderComponent(_component_NuxtImg, {
            provider: "cloudinary",
            src: img.public_id,
            width: "40",
            quality: "10",
            format: "jpeg",
            fit: "cover",
            class: ["absolute inset-0 h-full w-full object-cover transition-opacity duration-500", { "opacity-0": loadedImages.value[img.public_id] }],
            modifiers: { blur: 100 },
            "aria-hidden": "true"
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        if (!errorImages.value[img.public_id]) {
          _push(ssrRenderComponent(_component_NuxtImg, {
            provider: "cloudinary",
            src: img.public_id,
            width: img.width,
            height: img.height,
            format: "webp",
            quality: img.height > 2e3 && img.width > 2e3 ? 60 : 80,
            sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
            fit: "cover",
            class: ["absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-in-out", [loadedImages.value[img.public_id] ? "opacity-100" : "opacity-0"]],
            onLoad: ($event) => markLoaded(img.public_id),
            onError: ($event) => markError(img.public_id),
            fetchPriority: IMAGES.value.indexOf(img) < 3 ? "high" : "auto"
          }, null, _parent));
        } else {
          _push(`<div class="absolute inset-0 flex items-center justify-center bg-gray-200 text-gray-400 dark:bg-gray-800 dark:text-gray-600"><span class="text-sm">Failed to load</span></div>`);
        }
        _push(`</div></div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/masonary.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = Object.assign(_sfc_main$1, { __name: "Masonary" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "clicks",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { suspense } = useGallery();
    [__temp, __restore] = withAsyncContext(() => suspense()), await __temp, __restore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Routes = __nuxt_component_0;
      const _component_Masonary = __nuxt_component_1;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "min-h-screen w-full bg-background text-foreground/80 font-medium py-8 sm:py-16 md:py-24 lowercase" }, _attrs))}><div class="w-full max-w-2xl xl:max-w-3xl 2xl:max-w-4xl mx-auto flex flex-col px-4 sm:px-6 md:px-0">`);
      _push(ssrRenderComponent(_component_Routes, null, null, _parent));
      _push(`<p>sometimes i take pictures too!</p>`);
      _push(ssrRenderComponent(_component_Masonary, null, null, _parent));
      _push(`</div></main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/clicks.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=clicks-CM93NO6Y.mjs.map
