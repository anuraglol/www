import { c as useRoute, _ as __nuxt_component_0$3 } from './server.mjs';
import { defineComponent, mergeProps, unref, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { useQuery } from '@tanstack/vue-query';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "routes",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "font-mono text-blue-400 mb-6 flex gap-3 text-base *:hover:text-blue-500" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: unref(route).name === "index" ? "text-blue-700" : ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`/index`);
          } else {
            return [
              createTextVNode("/index")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/clicks",
        class: unref(route).name === "clicks" ? "text-blue-700" : ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`/clicks`);
          } else {
            return [
              createTextVNode("/clicks")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/routes.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main, { __name: "Routes" });
const useGallery = () => useQuery({
  queryKey: ["gallery"],
  queryFn: async () => {
    const response = await $fetch("/api/gallery");
    return response;
  },
  refetchOnWindowFocus: false,
  staleTime: 1e3 * 60 * 10,
  // 10 minutes
  gcTime: 1e3 * 60 * 30,
  // 30 minutes,
  refetchOnMount: false
});

export { __nuxt_component_0 as _, useGallery as u };
//# sourceMappingURL=useGallery-B8WvfrBP.mjs.map
