import { u as useGallery, _ as __nuxt_component_0 } from './useGallery-B8WvfrBP.mjs';
import { defineComponent, mergeProps, unref, ref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { p as publicAssetsURL } from '../nitro/nitro.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { a as _sfc_main$e } from './server.mjs';
import '@tanstack/vue-query';
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

const _imports_0$1 = publicAssetsURL("/1.gif");
const _imports_1 = publicAssetsURL("/beep.png");
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "hover",
  __ssrInlineRender: true,
  setup(__props) {
    const open = ref(false);
    ref(true);
    ref(null);
    ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<span${ssrRenderAttrs(mergeProps({ class: "relative inline-block" }, _attrs))}><span class="highlight relative inline-block cursor-pointer"> anurag <img${ssrRenderAttr("src", _imports_0$1)} alt="floating cursor" class="animate-bounce absolute -top-2 left-1 size-5"></span>`);
      if (open.value) {
        _push(`<div class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 z-50 size-36 p-1 bg-white rounded-sm"><img${ssrRenderAttr("src", _imports_1)} alt="anurag" class="rounded-sm object-cover aspect-square"></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</span>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/hover.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = Object.assign(_sfc_main$2, { __name: "Hover" });
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ className: "my-6 border-neutral-400/60 border-dashed border-t-[1.5px]" }, _attrs))}></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/divider.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]), { __name: "Divider" });
const _imports_0 = publicAssetsURL("/bg.webp");
const LINKS = [
  { name: "github", href: "https://github.com/anuraglol" },
  { name: "twitter", href: "https://twitter.com/imanuraglol" },
  { name: "email", href: "mailto:hi@anurag.tech" }
];
const highlight = (text) => `<span data-safe="highlight" class="text-foreground">${text}</span>`;
const ACHIEVEMENTS = [
  `${highlight("CandyPay")} secured 4th place in the Payments track of the ${highlight(
    "Solana Summer Camp Hackathon"
  )}, with over ${highlight("18,000")} participants and ${highlight(
    "750"
  )} submissions, and received grants from the Solana Foundation.`,
  `${highlight("CandyPay")} processed over ${highlight("$120,000")} in transactions.`,
  `Won ${highlight("2 global-level hackathons")}, showcasing innovation in Web3 and beyond.`,
  `${highlight("CandyPay")} was adopted by ${highlight(
    "Próspera Global"
  )} for crypto-based tax payments and by ${highlight(
    "Boba Guys"
  )} for enabling crypto payments.`,
  `${highlight(
    "Caramel"
  )}, a project that acts as a proof-of-work for monetization of npm packages, which can be purchased via cryptocurrency, with payment processing handled through ${highlight(
    "CandyPay"
  )}, won the Solana Sandstorm Hackathon.`,
  `Authored articles with ${highlight(
    "60,000+ views"
  )} on <a href="https://anuragkr.hashnode.dev/" class="external-link" target="_blank" rel="noopener noreferrer">Hashnode</a> and <a href="https://dev.to/kranurag" class="external-link" target="_blank" rel="noopener noreferrer">Dev.to</a>, covering web development and Web3 topics.`
];
const EXPERIENCES = [
  {
    title: "Design Engineer at Cleopetra",
    link: "https://cleopetra.fun",
    items: [
      "Developed and enhanced the trading interface for token pairs, focusing on usability and performance.",
      "Integrated payment APIs and maintained a scalable, complex frontend architecture."
    ]
  },
  {
    title: "Lead Engineer at CandyPay",
    link: "https://twitter.com/candypayfun",
    items: [
      "Built two production-ready web apps: a user dashboard and a checkout platform",
      "Designed and developed the frontend architecture from scratch",
      "Developed a React-based checkout SDK for easy integration across third-party sites",
      "Maintained a clean, scalable monorepo with multiple integrations and performance-focused refactors"
    ]
  },
  {
    title: "Developer at Metapass",
    link: "https://twitter.com/metapasshq",
    items: [
      "Contributed to the development of a blockchain-based ticketing platform on Solana",
      "Helped build and maintain user-facing components for the event creation and ticketing flow",
      "Collaborated with a small team to implement secure, on-chain ticketing logic via frontend integrations"
    ]
  },
  {
    title: "Technical Writer",
    link: "https://anuragkr.hashnode.dev",
    items: [
      "Wrote developer-focused technical articles covering web development, tooling, and Web3 concepts.",
      "Published on Hashnode and Dev.to, collectively reaching over 60,000 readers."
    ]
  }
];
const SKILLS = [
  `${highlight("Languages")}: JavaScript (TypeScript), Elixir`,
  `${highlight("Frameworks/Libraries")}: Next.js (React), Nuxt.js (Vue), Svelte, Hono`,
  `${highlight("Databases")}: PostgreSQL, MySQL`,
  `${highlight("Tools")}: Node.js`
];
const PROJECTS = [
  {
    title: "1008 ventures",
    description: "a fast moving venture studio building products in web3 and ai.",
    url: "https://1008.ventures"
  },
  {
    title: "React & Next.js Snippets (VSCode ext)",
    description: "A VSCode extension with React and Next.js snippets, used by over 30,000 developers to speed up development.",
    url: "https://marketplace.visualstudio.com/items?itemName=AvneeshAgarwal.react-nextjs-snippets"
  },
  {
    title: "Proof of Attendance NFT Engine",
    description: "An image generation service that created custom NFTs for NAS Daily Summit attendees using @vercel/og.",
    url: "https://github.com/anuraglol/nas-summit-nft-gen"
  }
];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const isSafeHtml = (value) => value.includes('data-safe="highlight"');
    useGallery();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Routes = __nuxt_component_0;
      const _component_Hover = __nuxt_component_1;
      const _component_Divider = __nuxt_component_2;
      const _component_UIcon = _sfc_main$e;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "min-h-screen w-full bg-background text-foreground/80 font-medium py-8 sm:py-16 md:py-24 lowercase" }, _attrs))}><div class="w-full max-w-2xl xl:max-w-3xl 2xl:max-w-4xl mx-auto flex flex-col px-4 sm:px-6 md:px-0">`);
      _push(ssrRenderComponent(_component_Routes, null, null, _parent));
      _push(`<p> welcome to my <span class="highlight">corner</span> of the internet! </p><div class="w-full h-32 sm:h-80 md:h-96 rounded-sm border border-neutral-400/40 border-dashed relative my-6 p-1"><div class="w-full h-full rounded-sm overflow-hidden relative"><img${ssrRenderAttr("src", _imports_0)} alt="background" fill class="rounded-sm opacity-40 object-cover" priority></div></div><p class="leading-6"> ohayo! im `);
      _push(ssrRenderComponent(_component_Hover, null, null, _parent));
      _push(` [he/him] - previously a design engineer <a href="https://cleopetra.fun" target="_blank" rel="noopener norefferer" class="highlight"> @cleopetra </a></p><p class="mt-3 leading-6"> i am an undergraduate student at <span class="highlight">nit durgapur</span>, pursuing <span class="highlight">biotechnology</span>. with over 4 years of experience in web engineering, i&#39;ve worked on a range of projects within the web3 ecosystem. i specialize in frontend development, focusing on building clean, scalable web applications that enhance user experiences. </p><p class="mt-3 leading-6"> thanks for stopping by! leaving the technical jargon behind, im an avid reader, mostly reading fiction. i enjoy playing around with different linux distros &amp; i do maths for fun when im bored. </p><div class="flex flex-wrap gap-4 items-center text-orange-600 mt-6"><!--[-->`);
      ssrRenderList(unref(LINKS), (link) => {
        _push(`<a${ssrRenderAttr("href", link.href)} target="_blank" rel="noreferrer" class="hover:underline underline-offset-4">${ssrInterpolate(link.name)}</a>`);
      });
      _push(`<!--]--></div>`);
      _push(ssrRenderComponent(_component_Divider, null, null, _parent));
      _push(`<section class="flex flex-col gap-3"><p class="text-lg sm:text-xl font-semibold text-foreground"> experiences </p><!--[-->`);
      ssrRenderList(unref(EXPERIENCES), (exp, index) => {
        _push(`<div class="flex flex-col gap-1"><a target="_blank" rel="norefferer"${ssrRenderAttr("href", exp.link)} class="font-semibold text-foreground hover:underline flex items-center gap-1">${ssrInterpolate(exp.title)} `);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "i-lucide-arrow-up-right",
          class: "size-5"
        }, null, _parent));
        _push(`</a><div class="flex flex-col gap-1"><!--[-->`);
        ssrRenderList(exp.items, (item, idx) => {
          _push(`<div class="flex gap-3 items-baseline text-base sm:text-[16px]"><span class="text-orange-600 font-semibold">-</span><p>${ssrInterpolate(item)}</p></div>`);
        });
        _push(`<!--]--></div></div>`);
      });
      _push(`<!--]--></section>`);
      _push(ssrRenderComponent(_component_Divider, null, null, _parent));
      _push(`<section class="flex flex-col gap-2"><p class="text-lg sm:text-xl font-semibold text-foreground"> achievements </p><div class="flex flex-col gap-2"><!--[-->`);
      ssrRenderList(unref(ACHIEVEMENTS), (achievement, index) => {
        _push(`<div><div class="flex gap-3 items-baseline text-base sm:text-[16px]"><span class="text-orange-600 font-semibold">-</span>`);
        if (isSafeHtml(achievement)) {
          _push(`<p>${achievement ?? ""}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      });
      _push(`<!--]--></div></section>`);
      _push(ssrRenderComponent(_component_Divider, null, null, _parent));
      _push(`<section class="flex flex-col gap-3"><p class="text-lg sm:text-xl font-semibold text-foreground"> projects / gigs </p><!--[-->`);
      ssrRenderList(unref(PROJECTS), (proj, index) => {
        _push(`<div class="flex flex-col gap-1"><a target="_blank" rel="norefferer"${ssrRenderAttr("href", proj.url)} class="font-semibold text-foreground hover:underline flex items-center gap-1">${ssrInterpolate(proj.title)} `);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "i-lucide-arrow-up-right",
          class: "size-5"
        }, null, _parent));
        _push(`</a><div class="flex gap-3 items-baseline text-base sm:text-[16px] leading-snug"><span class="text-orange-600 font-semibold">-</span><p>${ssrInterpolate(proj.description)}</p></div></div>`);
      });
      _push(`<!--]--></section>`);
      _push(ssrRenderComponent(_component_Divider, null, null, _parent));
      _push(`<section class="flex flex-col gap-2"><p class="text-lg sm:text-xl font-semibold text-foreground"> technical skills </p><div class="flex flex-col"><!--[-->`);
      ssrRenderList(unref(SKILLS), (skill, index) => {
        _push(`<div class="flex gap-2 items-center text-base sm:text-[16px]"><span class="text-black font-semibold">-</span>`);
        if (isSafeHtml(skill)) {
          _push(`<p>${skill ?? ""}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div></section><p class="text-center italic text-foreground/70 mt-6 mb-8"> and may the odds be ever in your favor :3 </p></div></main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-BINPb579.mjs.map
