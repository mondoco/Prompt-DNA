const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./HomePage-DPI9Dlp-.js",
      "./Button-C4Bn58RL.js",
      "./rolldown-runtime-XKyaHtl9.js",
      "./markdown-vendor-aHERgz_x.js",
      "./cn-voPTtHUK.js",
      "./ui-vendor-D_9MYQQl.js",
      "./Card-DyMLOe46.js",
      "./WizardPage-DmH-q6ui.js",
      "./clipboard-CKY9DLfy.js",
      "./wizardStore-pcJRh5oO.js",
      "./promptStore-DitNHxN_.js",
      "./engine-ClpHeZEs.js",
      "./dataLoader-C6SHKvCP.js",
      "./ExplorerPage-DbRTJR3i.js",
      "./SearchBar-u6bs_ksz.js",
      "./Badge-B6Xs0g08.js",
      "./CustomPage-C3O9Xi8G.js",
      "./AboutPage-LjhYk628.js",
      "./HistoryPage-DpLmO0zF.js",
      "./SettingsPage-4mc1lzOP.js",
    ]),
) => i.map((i) => d[i]);
import { r as e } from "./rolldown-runtime-XKyaHtl9.js";
import { i as t, r as n } from "./markdown-vendor-aHERgz_x.js";
import { t as r } from "./react-vendor-DRQ2WJms.js";
import {
  a as i,
  c as a,
  i as o,
  l as s,
  n as c,
  o as l,
  r as u,
  s as d,
  t as f,
} from "./Button-C4Bn58RL.js";
import { n as p, t as m } from "./cn-voPTtHUK.js";
import {
  a as ee,
  f as h,
  l as g,
  n as _,
  o as v,
  p as y,
  t as b,
} from "./ui-vendor-D_9MYQQl.js";
(function () {
  let e = document.createElement(`link`).relList;
  if (e && e.supports && e.supports(`modulepreload`)) return;
  for (let e of document.querySelectorAll(`link[rel="modulepreload"]`)) n(e);
  new MutationObserver((e) => {
    for (let t of e)
      if (t.type === `childList`)
        for (let e of t.addedNodes)
          e.tagName === `LINK` && e.rel === `modulepreload` && n(e);
  }).observe(document, { childList: !0, subtree: !0 });
  function t(e) {
    let t = {};
    return (
      e.integrity && (t.integrity = e.integrity),
      e.referrerPolicy && (t.referrerPolicy = e.referrerPolicy),
      (t.credentials =
        e.crossOrigin === `use-credentials`
          ? `include`
          : e.crossOrigin === `anonymous`
            ? `omit`
            : `same-origin`),
      t
    );
  }
  function n(e) {
    if (e.ep) return;
    e.ep = !0;
    let n = t(e);
    fetch(e.href, n);
  }
})();
var x = e(t(), 1),
  S = e(r(), 1),
  C = `modulepreload`,
  te = function (e, t) {
    return new URL(e, t).href;
  },
  w = {},
  T = function (e) {
    return e.pathname.endsWith(`.css`);
  },
  E = function (e, t, n) {
    if (t in e) return e[t];
    let r = n();
    if (!r) {
      e[t] = void 0;
      return;
    }
    let i = r.then(
      () => {
        e[t] = void 0;
      },
      (n) => {
        throw ((e[t] = void 0), n);
      },
    );
    return ((e[t] = i), i);
  },
  D = function (e, t, n) {
    let r = Promise.resolve();
    if (t && t.length > 0) {
      let e,
        i = document.querySelector(`meta[property=csp-nonce]`),
        a = i?.nonce || i?.getAttribute(`nonce`);
      function o(e) {
        return Promise.all(
          e.map((e) =>
            Promise.resolve(e).then(
              (e) => ({ status: `fulfilled`, value: e }),
              (e) => ({ status: `rejected`, reason: e }),
            ),
          ),
        );
      }
      function s(e) {
        return import.meta.resolve
          ? new URL(import.meta.resolve(e))
          : new URL(e, import.meta.url);
      }
      r = o(
        t
          .map((t) => {
            t = te(t, n);
            let r = s(t),
              i = T(r);
            return E(w, r.href, () => {
              if (e === void 0) {
                e = { all: new Set(), styles: new Set() };
                let t = document.getElementsByTagName(`link`);
                for (let n = t.length - 1; n >= 0; n--) {
                  let r = t[n];
                  (e.all.add(r.href),
                    r.rel === `stylesheet` && e.styles.add(r.href));
                }
              }
              if ((i ? e.styles : e.all).has(r.href)) return;
              let t = document.createElement(`link`);
              if (
                ((t.rel = i ? `stylesheet` : C),
                i || (t.as = `script`),
                (t.crossOrigin = ``),
                (t.href = r.href),
                a && t.setAttribute(`nonce`, a),
                document.head.appendChild(t),
                i)
              )
                return new Promise((e, n) => {
                  let i = (a) => {
                    (t.removeEventListener(`load`, i),
                      t.removeEventListener(`error`, i),
                      a.type === `error`
                        ? n(Error(`Unable to preload CSS for ${r}`))
                        : e(a));
                  };
                  (t.addEventListener(`load`, i),
                    t.addEventListener(`error`, i));
                });
            });
          })
          .filter((e) => e !== void 0),
      );
    }
    function i(e) {
      let t = new Event(`vite:preloadError`, { cancelable: !0 });
      if (((t.payload = e), window.dispatchEvent(t), !t.defaultPrevented))
        throw e;
    }
    return r.then((t) => {
      for (let e of t || []) e.status === `rejected` && i(e.reason);
      return e().catch(i);
    });
  },
  ne = `true`,
  O = `false`,
  k = ne === `true`,
  A = O === `true`;
function j(e = {}) {
  let {
      immediate: t = !1,
      onNeedReload: n,
      onNeedRefresh: r,
      onOfflineReady: i,
      onRegistered: a,
      onRegisteredSW: o,
      onRegisterError: s,
    } = e,
    c,
    l,
    u,
    d = async (e = !0) => {
      (await l, k || u?.());
    };
  async function f() {
    if (`serviceWorker` in navigator) {
      if (
        ((c = await D(
          async () => {
            let { Workbox: e } = await import(
              `./workbox-window.prod.es5-Bd17z0YL.js`
            );
            return { Workbox: e };
          },
          [],
          import.meta.url,
        )
          .then(
            ({ Workbox: e }) =>
              new e(`./sw.js`, { scope: `./`, type: `classic` }),
          )
          .catch((e) => {
            s?.(e);
          })),
        !c)
      )
        return;
      if (
        ((u = () => {
          c?.messageSkipWaiting();
        }),
        !A)
      ) {
        if (k)
          (c.addEventListener(`activated`, (e) => {
            (e.isUpdate || e.isExternal) &&
              (n ? n() : window.location.reload());
          }),
            c.addEventListener(`installed`, (e) => {
              e.isUpdate || i?.();
            }));
        else {
          let e = !1,
            t = () => {
              ((e = !0),
                c?.addEventListener(`controlling`, (e) => {
                  e.isUpdate && (n ? n() : window.location.reload());
                }),
                r?.());
            };
          (c.addEventListener(`installed`, (n) => {
            n.isUpdate === void 0
              ? n.isExternal === void 0
                ? !e && i?.()
                : n.isExternal
                  ? t()
                  : !e && i?.()
              : n.isUpdate || i?.();
          }),
            c.addEventListener(`waiting`, t));
        }
      }
      c.register({ immediate: t })
        .then((e) => {
          o ? o(`./sw.js`, e) : a?.(e);
        })
        .catch((e) => {
          s?.(e);
        });
    }
  }
  return ((l = f()), d);
}
var M = o()(
    u(
      (e) => ({
        language: p.defaults.language,
        theme: `dark`,
        setLanguage: (t) => e({ language: t }),
        setTheme: (t) => e({ theme: t }),
        toggleTheme: () =>
          e((e) => ({ theme: e.theme === `dark` ? `light` : `dark` })),
      }),
      { name: `prompt-dna-settings`, storage: c(() => localStorage) },
    ),
  ),
  N = n(),
  P = (0, x.createContext)(null);
function F({ children: e }) {
  let t = M((e) => e.theme);
  (0, x.useEffect)(() => {
    let e = document.documentElement,
      n = p.theme.colors;
    (e.style.setProperty(`--color-primary`, n.primary),
      e.style.setProperty(`--color-primary-hover`, n.primaryHover),
      e.style.setProperty(`--color-secondary`, n.secondary),
      e.style.setProperty(`--color-accent`, n.accent),
      e.style.setProperty(`--color-bg`, n.background),
      e.style.setProperty(`--color-surface`, n.surface),
      e.style.setProperty(`--color-surface-elevated`, n.surfaceElevated),
      e.style.setProperty(`--color-border`, n.border),
      e.style.setProperty(`--color-text-primary`, n.textPrimary),
      e.style.setProperty(`--color-text-secondary`, n.textSecondary),
      e.style.setProperty(`--color-text-muted`, n.textMuted),
      e.classList.toggle(`dark`, t === `dark`),
      e.classList.toggle(`light`, t === `light`));
  }, [t]);
  let n = (0, x.useMemo)(() => ({ theme: p.theme, isDark: t === `dark` }), [t]);
  return (0, N.jsx)(P.Provider, { value: n, children: e });
}
function I() {
  let e = (0, x.useContext)(P);
  if (!e) throw Error(`useTheme must be used inside ThemeProvider`);
  return e;
}
var L = {
  ar: {
    common: {
      appName: `Prompt DNA`,
      tagline: `الحمض النووي لبرومبتات احترافية`,
      loading: `جاري التحميل...`,
      copy: `نسخ`,
      copied: `تم النسخ!`,
      download: `تحميل`,
      share: `مشاركة`,
      next: `التالي`,
      back: `السابق`,
      finish: `إنهاء`,
      skip: `تخطي`,
      required: `مطلوب`,
      optional: `اختياري`,
      error: `حدث خطأ`,
      success: `تم بنجاح`,
    },
    nav: {
      home: `الرئيسية`,
      create: `أنشئ برومبت`,
      explorer: `مستكشف المصطلحات`,
      custom: `برومبت مخصص`,
      about: `حول`,
      history: `السجل`,
      settings: `الإعدادات`,
    },
    home: {
      heroTitle: `ولّد برومبتات خارقة في ثوانٍ`,
      heroSubtitle: `اختر وضعك، أجب على أسئلة ذكية، واحصل على برومبت جاهز للصق في أي ذكاء اصطناعي.`,
      ctaCreate: `ابدأ الآن`,
      ctaExplore: `استكشف المصطلحات`,
      modesTitle: `اختر وضعك`,
      modesSubtitle: `كل وضع مبني على سيناريو حقيقي من الخبراء`,
    },
    modes: {
      "content-creation": {
        title: `اكتب لي محتوى`,
        description: `سكريبت، مقال، أو بوست بجودة الخبراء`,
      },
      "learn-skill": {
        title: `علّمني مهارة`,
        description: `شرح عميق لأي مصطلح بأمثلة ثنائية اللغة`,
      },
      "channel-strategy": {
        title: `خطة قناتي`,
        description: `استراتيجية محتوى متكاملة لقناتك`,
      },
      "idea-evaluation": {
        title: `قيّم فكرتي`,
        description: `نقد صريح + زوايا بديلة + خطافات`,
      },
      custom: { title: `برومبت مخصص`, description: `اختر المصطلحات يدوياً` },
    },
    wizard: {
      stepOf: `الخطوة {current} من {total}`,
      yourBrief: `موجزك`,
      generating: `جاري توليد البرومبت...`,
      resultTitle: `برومبتك جاهز 🎉`,
      previewTitle: `معاينة حية`,
      lengthMode: `طول البرومبت`,
      compact: `مختصر (~500 كلمة)`,
      standard: `قياسي (~1500 كلمة)`,
      comprehensive: `شامل (~3000 كلمة)`,
      aiModel: `النموذج المستهدف`,
      outputLanguage: `لغة الرد`,
      promptFormat: `شكل البرومبت`,
      singlePrompt: `برومبت واحد`,
      chainedPrompts: `سلسلة متتالية`,
    },
    preview: {
      dnaVisualizer: `الحمض النووي للبرومبت`,
      copyToClipboard: `انسخ البرومبت`,
      downloadTxt: `تحميل .txt`,
      downloadMd: `تحميل .md`,
      downloadJson: `تحميل .json`,
      shareLink: `نسخ رابط المشاركة`,
    },
    explorer: {
      title: `مستكشف المصطلحات`,
      searchPlaceholder: `ابحث في 65 مصطلحاً...`,
      filterByCategory: `تصفية حسب القسم`,
      filterByComplexity: `مستوى التعقيد`,
      all: `الكل`,
      detail: {
        explanation: `الشرح التفصيلي`,
        application: `التطبيق العملي`,
        examples: `أمثلة`,
        proTips: `نصائح احترافية`,
        relatedTerms: `مصطلحات مرتبطة`,
        addToPrompt: `أضف إلى برومبت`,
      },
    },
    categories: {
      "writing-hacks": `تكنيكات الكتابة`,
      storytelling: `فن السرد القصصي`,
      "camera-presence": `الحضور أمام الكاميرا`,
      hooks: `الخطافات`,
      cta: `الدعوة لاتخاذ إجراء`,
      editing: `الإيديت والمونتاج`,
    },
    errors: {
      loadFailed: `تعذّر تحميل البيانات`,
      missingField: `هذا الحقل مطلوب`,
      generationFailed: `تعذّر توليد البرومبت`,
    },
  },
  en: {
    common: {
      appName: `Prompt DNA`,
      tagline: `The DNA of professional prompts`,
      loading: `Loading...`,
      copy: `Copy`,
      copied: `Copied!`,
      download: `Download`,
      share: `Share`,
      next: `Next`,
      back: `Back`,
      finish: `Finish`,
      skip: `Skip`,
      required: `Required`,
      optional: `Optional`,
      error: `Error`,
      success: `Success`,
    },
    nav: {
      home: `Home`,
      create: `Create Prompt`,
      explorer: `Term Explorer`,
      custom: `Custom Prompt`,
      about: `About`,
      history: `History`,
      settings: `Settings`,
    },
    home: {
      heroTitle: `Generate master prompts in seconds`,
      heroSubtitle: `Pick your mode, answer smart questions, and get a ready-to-paste prompt for any AI.`,
      ctaCreate: `Start Now`,
      ctaExplore: `Explore Terms`,
      modesTitle: `Choose your mode`,
      modesSubtitle: `Every mode is built on a real expert scenario`,
    },
    modes: {
      "content-creation": {
        title: `Write me content`,
        description: `Expert-grade scripts, articles, or posts`,
      },
      "learn-skill": {
        title: `Teach me a skill`,
        description: `Deep explanation with bilingual examples`,
      },
      "channel-strategy": {
        title: `My channel strategy`,
        description: `A complete content plan for your channel`,
      },
      "idea-evaluation": {
        title: `Evaluate my idea`,
        description: `Brutal critique + alternative angles + hooks`,
      },
      custom: {
        title: `Custom Prompt`,
        description: `Hand-pick terms yourself`,
      },
    },
    wizard: {
      stepOf: `Step {current} of {total}`,
      yourBrief: `Your brief`,
      generating: `Generating prompt...`,
      resultTitle: `Your prompt is ready 🎉`,
      previewTitle: `Live preview`,
      lengthMode: `Prompt length`,
      compact: `Compact (~500 words)`,
      standard: `Standard (~1500 words)`,
      comprehensive: `Comprehensive (~3000 words)`,
      aiModel: `Target AI model`,
      outputLanguage: `Response language`,
      promptFormat: `Prompt format`,
      singlePrompt: `Single prompt`,
      chainedPrompts: `Chained sequence`,
    },
    preview: {
      dnaVisualizer: `Prompt DNA`,
      copyToClipboard: `Copy prompt`,
      downloadTxt: `Download .txt`,
      downloadMd: `Download .md`,
      downloadJson: `Download .json`,
      shareLink: `Copy share link`,
    },
    explorer: {
      title: `Term Explorer`,
      searchPlaceholder: `Search 65 terms...`,
      filterByCategory: `Filter by category`,
      filterByComplexity: `Complexity`,
      all: `All`,
      detail: {
        explanation: `Detailed explanation`,
        application: `Practical application`,
        examples: `Examples`,
        proTips: `Pro tips`,
        relatedTerms: `Related terms`,
        addToPrompt: `Add to prompt`,
      },
    },
    categories: {
      "writing-hacks": `Writing Hacks`,
      storytelling: `Storytelling`,
      "camera-presence": `Camera Presence`,
      hooks: `Hooks`,
      cta: `Call to Action`,
      editing: `Editing & Montage`,
    },
    errors: {
      loadFailed: `Failed to load data`,
      missingField: `This field is required`,
      generationFailed: `Failed to generate prompt`,
    },
  },
};
function R(e, t, n) {
  let r = t.split(`.`),
    i = L[e];
  for (let e of r) {
    if (typeof i != `object` || !i) return t;
    i = i[e];
  }
  let a = typeof i == `string` ? i : t;
  if (n)
    for (let [e, t] of Object.entries(n)) a = a.replaceAll(`{${e}}`, String(t));
  return a;
}
var z = (0, x.createContext)(null);
function B({ children: e }) {
  let t = M((e) => e.language),
    n = M((e) => e.setLanguage),
    r = t === `ar` ? `rtl` : `ltr`;
  (0, x.useEffect)(() => {
    ((document.documentElement.lang = t), (document.documentElement.dir = r));
  }, [t, r]);
  let i = (0, x.useMemo)(
    () => ({ lang: t, dir: r, setLang: n, t: (e, n) => R(t, e, n) }),
    [t, r, n],
  );
  return (0, N.jsx)(z.Provider, { value: i, children: e });
}
function V() {
  let e = (0, x.useContext)(z);
  if (!e) throw Error(`useLanguage must be used inside LanguageProvider`);
  return e;
}
function H() {
  let { lang: e, setLang: t } = V(),
    n = e === `ar` ? `en` : `ar`;
  return (0, N.jsxs)(`button`, {
    onClick: () => t(n),
    className: m(
      `inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-3 py-1.5`,
      `text-sm font-semibold text-text-secondary hover:border-primary hover:text-primary transition-all hidden`,
    ),
    "aria-label": `Switch language`,
    children: [
      (0, N.jsx)(h, { size: 16 }),
      (0, N.jsx)(`span`, { children: e === `ar` ? `EN` : `ع` }),
    ],
  });
}
var U = { enabled: !1 },
  W = o()(
    u(
      (e) => ({
        profile: { ...U },
        setProfile: (t) =>
          e((e) => ({
            profile: {
              ...e.profile,
              ...t,
              updatedAt: new Date().toISOString(),
            },
          })),
        enable: () => e((e) => ({ profile: { ...e.profile, enabled: !0 } })),
        disable: () => e((e) => ({ profile: { ...e.profile, enabled: !1 } })),
        reset: () => e({ profile: { ...U } }),
      }),
      { name: `prompt-dna-profile`, storage: c(() => localStorage) },
    ),
  );
function G() {
  let { profile: e, disable: t } = W();
  return !e.enabled || !e.name
    ? null
    : (0, x.createElement)(
        `div`,
        {
          className: `flex items-center gap-2 rounded-lg border border-primary/30 bg-primary/10 px-3 py-1.5 text-xs`,
        },
        (0, x.createElement)(_, { size: 14, className: `text-primary` }),
        (0, x.createElement)(
          `span`,
          { className: `font-bold text-primary` },
          `يعمل ببروفايل: `,
          e.name,
        ),
        (0, x.createElement)(
          `button`,
          {
            onClick: t,
            className: `rounded p-0.5 text-text-muted hover:bg-surface hover:text-error`,
            title: `إيقاف البروفايل لهذه الجلسة`,
            type: `button`,
          },
          (0, x.createElement)(b, { size: 12 }),
        ),
      );
}
function K() {
  let { t: e, lang: t } = V(),
    n = [
      { to: `/`, label: e(`nav.home`), end: !0 },
      { to: `/create`, label: e(`nav.create`) },
      { to: `/explore`, label: e(`nav.explorer`) },
      { to: `/custom`, label: e(`nav.custom`) },
      { to: `/history`, label: e(`nav.history`) },
      { to: `/about`, label: e(`nav.about`) },
    ];
  return (0, N.jsx)(`header`, {
    className: `sticky top-0 z-40 border-b border-border bg-bg/80 backdrop-blur-xl`,
    children: (0, N.jsxs)(`div`, {
      className: `mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6`,
      children: [
        (0, N.jsxs)(l, {
          to: `/`,
          className: `flex items-center gap-2 transition-transform hover:scale-105 shrink-0`,
          children: [
            (0, N.jsx)(`span`, {
              className: `text-2xl`,
              children: p.logo.icon,
            }),
            (0, N.jsx)(`span`, {
              className: `hidden text-lg font-bold text-gradient sm:inline`,
              children: p.name[t],
            }),
          ],
        }),
        (0, N.jsx)(`nav`, {
          className: `hidden items-center gap-1 lg:flex`,
          children: n.map((e) =>
            (0, N.jsx)(
              d,
              {
                to: e.to,
                end: e.end,
                className: ({ isActive: e }) =>
                  m(
                    `rounded-lg px-3 py-2 text-sm font-semibold transition-colors`,
                    e
                      ? `bg-primary/10 text-primary`
                      : `text-text-secondary hover:bg-surface hover:text-text-primary`,
                  ),
                children: e.label,
              },
              e.to,
            ),
          ),
        }),
        (0, N.jsxs)(`div`, {
          className: `flex items-center gap-2`,
          children: [
            (0, N.jsx)(G, {}),
            (0, N.jsxs)(l, {
              to: `/create`,
              className: `hidden items-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-sm font-bold text-white transition-all hover:bg-primary-hover glow sm:inline-flex`,
              children: [(0, N.jsx)(ee, { size: 16 }), e(`nav.create`)],
            }),
            (0, N.jsx)(d, {
              to: `/history`,
              className: `inline-flex items-center gap-1 rounded-lg border border-border bg-surface p-2 text-text-secondary hover:border-primary hover:text-primary lg:hidden`,
              "aria-label": e(`nav.history`),
              children: (0, N.jsx)(g, { size: 16 }),
            }),
            (0, N.jsx)(d, {
              to: `/settings`,
              className: `inline-flex items-center gap-1 rounded-lg border border-border bg-surface p-2 text-text-secondary hover:border-primary hover:text-primary`,
              "aria-label": e(`nav.settings`),
              children: (0, N.jsx)(v, { size: 16 }),
            }),
            (0, N.jsx)(H, {}),
          ],
        }),
      ],
    }),
  });
}
function q() {
  let { t: e, lang: t } = V();
  return (0, N.jsx)(`footer`, {
    className: `mt-auto border-t border-border bg-surface/50`,
    children: (0, N.jsxs)(`div`, {
      className: `mx-auto max-w-7xl px-4 py-8 sm:px-6`,
      children: [
        (0, N.jsxs)(`div`, {
          className: `mb-6 rounded-xl border border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5 p-4 text-center`,
          children: [
            (0, N.jsxs)(`div`, {
              className: `mb-1 flex items-center justify-center gap-2 text-primary`,
              children: [
                (0, N.jsx)(y, { size: 16, fill: `currentColor` }),
                (0, N.jsx)(`span`, {
                  className: `text-xs font-bold uppercase tracking-wider`,
                  children: t === `ar` ? `صدقة جارية` : `Sadaqah Jariyah`,
                }),
                (0, N.jsx)(y, { size: 16, fill: `currentColor` }),
              ],
            }),
            (0, N.jsx)(`p`, {
              className: `text-sm font-medium leading-relaxed text-text-primary`,
              children:
                t === `ar`
                  ? `هذا العمل صدقة جارية على روح الحاج شاكر شحاتة، دعواتكم له بالرحمة والعفو والمغفرة.`
                  : `This work is a ongoing charity dedicated to the soul of Haj Shaker Shehata. Please keep him in your prayers.`,
            }),
          ],
        }),
        (0, N.jsxs)(`div`, {
          className: `flex flex-col items-center justify-between gap-2 border-t border-border pt-4 sm:flex-row`,
          children: [
            (0, N.jsxs)(`p`, {
              className: `text-sm text-text-muted`,
              children: [
                `© `,
                new Date().getFullYear(),
                ` `,
                p.name[t],
                ` — `,
                e(`common.tagline`),
              ],
            }),
            (0, N.jsxs)(`p`, {
              className: `text-xs text-text-muted`,
              children: [`v`, p.version, ` · `, p.author.name],
            }),
          ],
        }),
      ],
    }),
  });
}
var J = (0, x.lazy)(() =>
    D(
      () => import(`./HomePage-DPI9Dlp-.js`),
      __vite__mapDeps([0, 1, 2, 3, 4, 5, 6]),
      import.meta.url,
    ),
  ),
  Y = (0, x.lazy)(() =>
    D(
      () => import(`./WizardPage-DmH-q6ui.js`),
      __vite__mapDeps([7, 2, 3, 1, 4, 5, 6, 8, 9, 10, 11, 12]),
      import.meta.url,
    ),
  ),
  X = (0, x.lazy)(() =>
    D(
      () => import(`./ExplorerPage-DbRTJR3i.js`),
      __vite__mapDeps([13, 2, 3, 14, 5, 4, 15, 1, 9, 12]),
      import.meta.url,
    ),
  ),
  Z = (0, x.lazy)(() =>
    D(
      () => import(`./CustomPage-C3O9Xi8G.js`),
      __vite__mapDeps([16, 2, 3, 1, 4, 5, 6, 15, 14, 12, 9, 10, 11]),
      import.meta.url,
    ),
  ),
  Q = (0, x.lazy)(() =>
    D(
      () => import(`./AboutPage-LjhYk628.js`),
      __vite__mapDeps([17, 6, 4, 3, 2]),
      import.meta.url,
    ),
  ),
  re = (0, x.lazy)(() =>
    D(
      () => import(`./HistoryPage-DpLmO0zF.js`),
      __vite__mapDeps([18, 1, 2, 3, 4, 5, 6, 15, 10, 9, 8]),
      import.meta.url,
    ),
  ),
  ie = (0, x.lazy)(() =>
    D(
      () => import(`./SettingsPage-4mc1lzOP.js`),
      __vite__mapDeps([19, 1, 2, 3, 4, 5, 6, 10, 9]),
      import.meta.url,
    ),
  );
function ae() {
  return (0, N.jsxs)(s, {
    children: [
      (0, N.jsx)(a, { path: `/`, element: (0, N.jsx)(J, {}) }),
      (0, N.jsx)(a, { path: `/create`, element: (0, N.jsx)(Y, {}) }),
      (0, N.jsx)(a, { path: `/create/:mode`, element: (0, N.jsx)(Y, {}) }),
      (0, N.jsx)(a, { path: `/explore`, element: (0, N.jsx)(X, {}) }),
      (0, N.jsx)(a, { path: `/explore/:termId`, element: (0, N.jsx)(X, {}) }),
      (0, N.jsx)(a, { path: `/custom`, element: (0, N.jsx)(Z, {}) }),
      (0, N.jsx)(a, { path: `/history`, element: (0, N.jsx)(re, {}) }),
      (0, N.jsx)(a, { path: `/settings`, element: (0, N.jsx)(ie, {}) }),
      (0, N.jsx)(a, { path: `/about`, element: (0, N.jsx)(Q, {}) }),
      (0, N.jsx)(a, { path: `*`, element: (0, N.jsx)(oe, {}) }),
    ],
  });
}
function oe() {
  return (0, N.jsxs)(`div`, {
    className: `flex h-[60vh] flex-col items-center justify-center gap-4`,
    children: [
      (0, N.jsx)(`h1`, {
        className: `text-6xl font-bold text-gradient`,
        children: `404`,
      }),
      (0, N.jsx)(`p`, {
        className: `text-text-secondary`,
        children: `الصفحة غير موجودة`,
      }),
    ],
  });
}
var $ = o((e) => ({
  isOpen: !1,
  trigger: null,
  open: (t) => e({ isOpen: !0, trigger: t }),
  close: () => e({ isOpen: !1, trigger: null }),
}));
function se() {
  let { isOpen: e, trigger: t, close: n } = $(),
    { lang: r } = V();
  return e
    ? (0, N.jsx)(`div`, {
        className: `fixed inset-0 z-[60] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-fade-in`,
        onClick: n,
        children: (0, N.jsxs)(`div`, {
          className: `w-full max-w-md rounded-2xl border border-primary/30 bg-surface-elevated p-6 text-center shadow-2xl animate-slide-up`,
          onClick: (e) => e.stopPropagation(),
          children: [
            (0, N.jsx)(`div`, { className: `mb-4 text-5xl`, children: `🤲` }),
            (0, N.jsxs)(`p`, {
              className: `mb-1 text-sm font-bold text-success`,
              children: [
                `✓ `,
                t === `copy`
                  ? r === `ar`
                    ? `تم نسخ البرومبت بنجاح`
                    : `Prompt copied successfully`
                  : r === `ar`
                    ? `تم تصدير البرومبت بنجاح`
                    : `Prompt exported successfully`,
              ],
            }),
            (0, N.jsx)(`h2`, {
              className: `mb-4 text-xl font-bold text-gradient`,
              children: r === `ar` ? `صدقة جارية` : `Sadaqah Jariyah`,
            }),
            (0, N.jsx)(`p`, {
              className: `mb-4 text-sm leading-relaxed text-text-primary`,
              children:
                r === `ar`
                  ? `هذا العمل صدقة جارية على روح الحاج شاكر شحاتة، دعواتكم له بالرحمة والعفو والمغفرة.`
                  : `This work is an ongoing charity dedicated to the soul of Haj Shaker Shehata. Please keep him in your prayers.`,
            }),
            (0, N.jsx)(`div`, {
              className: `mb-5 rounded-lg border border-primary/20 bg-primary/5 p-3 text-xs italic leading-relaxed text-text-secondary`,
              children:
                r === `ar`
                  ? `«اللهم اغفر له وارحمه، وعافه واعف عنه، وأكرم نُزُله، ووسّع مُدخله، واغسله بالماء والثلج والبرد، ونقّه من الخطايا كما يُنقّى الثوب الأبيض من الدنس»`
                  : `"O Allah, forgive him, have mercy on him, honor his resting place, and cleanse him of sins as a white garment is cleansed of dirt."`,
            }),
            (0, N.jsxs)(f, {
              fullWidth: !0,
              onClick: n,
              children: [
                (0, N.jsx)(y, { size: 16 }),
                r === `ar`
                  ? `آمين — جزاك الله خيراً`
                  : `Amen — Jazak Allah Khair`,
              ],
            }),
          ],
        }),
      })
    : null;
}
function ce() {
  return (0, N.jsx)(B, {
    children: (0, N.jsx)(F, {
      children: (0, N.jsxs)(`div`, {
        className: `flex min-h-screen flex-col`,
        children: [
          (0, N.jsx)(K, {}),
          (0, N.jsx)(`main`, {
            className: `flex-1`,
            children: (0, N.jsx)(x.Suspense, {
              fallback: (0, N.jsx)(le, {}),
              children: (0, N.jsx)(ae, {}),
            }),
          }),
          (0, N.jsx)(q, {}),
          (0, N.jsx)(se, {}),
        ],
      }),
    }),
  });
}
function le() {
  return (0, N.jsx)(`div`, {
    className: `flex h-[60vh] items-center justify-center`,
    children: (0, N.jsx)(`div`, {
      className: `h-10 w-10 animate-spin rounded-full border-4 border-primary border-t-transparent`,
    }),
  });
}
(j({
  immediate: !0,
  onNeedRefresh() {
    console.log(`[PWA] New version available — reload to update.`);
  },
  onOfflineReady() {
    console.log(`[PWA] App is ready to work offline.`);
  },
}),
  S.createRoot(document.getElementById(`root`)).render(
    (0, N.jsx)(x.StrictMode, {
      children: (0, N.jsx)(i, { children: (0, N.jsx)(ce, {}) }),
    }),
  ));
export { M as a, I as i, W as n, D as o, V as r, $ as t };
