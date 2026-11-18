const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./HomePage.js","./react-vendor.js","./rolldown-runtime.js","./markdown-vendor.js","./Card.js","./cn.js","./WizardPage.js","./engine.js","./clipboard.js","./wizardStore.js","./promptStore.js","./ExplorerPage.js","./SearchBar.js","./Badge.js","./CustomPage.js","./AboutPage.js","./HistoryPage.js","./SettingsPage.js"])))=>i.map(i=>d[i]);
import { r as __toESM } from "./rolldown-runtime.js";
import { A as Link, D as require_jsx_runtime, L as require_client, M as Route, N as Routes, O as create, R as require_react, j as NavLink, k as HashRouter, m as Heart, n as X, o as Sparkles, p as Languages, r as User, s as Settings, u as RotateCcwClock } from "./react-vendor.js";
import { a as siteConfig, i as useSettingsStore, n as LanguageProvider, o as createJSONStorage, r as useLanguage, s as persist, t as cn } from "./cn.js";
// \0vite/modulepreload-polyfill.js
(function polyfill() {
	const relList = document.createElement("link").relList;
	if (relList && relList.supports && relList.supports("modulepreload")) return;
	for (const link of document.querySelectorAll("link[rel=\"modulepreload\"]")) processPreload(link);
	new MutationObserver((mutations) => {
		for (const mutation of mutations) {
			if (mutation.type !== "childList") continue;
			for (const node of mutation.addedNodes) if (node.tagName === "LINK" && node.rel === "modulepreload") processPreload(node);
		}
	}).observe(document, {
		childList: true,
		subtree: true
	});
	function getFetchOpts(link) {
		const fetchOpts = {};
		if (link.integrity) fetchOpts.integrity = link.integrity;
		if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
		if (link.crossOrigin === "use-credentials") fetchOpts.credentials = "include";
		else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
		else fetchOpts.credentials = "same-origin";
		return fetchOpts;
	}
	function processPreload(link) {
		if (link.ep) return;
		link.ep = true;
		const fetchOpts = getFetchOpts(link);
		fetch(link.href, fetchOpts);
	}
})();
// \0vite/preload-helper.js
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_client = /* @__PURE__ */ __toESM(require_client(), 1);
var scriptRel = "modulepreload";
var assetsURL = function(dep, importerUrl) {
	return new URL(dep, importerUrl).href;
};
var seen = {};
var isCssPreloadUrl = function isCssPreloadUrl(url) {
	return url.pathname.endsWith(".css");
};
var preloadOnce = function preloadOnce(seen, href, preload) {
	if (href in seen) return seen[href];
	const promise = preload();
	if (!promise) {
		seen[href] = void 0;
		return;
	}
	const preloadPromise = promise.then(() => {
		seen[href] = void 0;
	}, (err) => {
		seen[href] = void 0;
		throw err;
	});
	seen[href] = preloadPromise;
	return preloadPromise;
};
var __vitePreload = function preload(baseModule, deps, importerUrl) {
	let promise = Promise.resolve();
	if (deps && deps.length > 0) {
		let preloadedHrefs;
		const cspNonceMeta = document.querySelector("meta[property=csp-nonce]");
		const cspNonce = cspNonceMeta?.nonce || cspNonceMeta?.getAttribute("nonce");
		function allSettled(promises) {
			return Promise.all(promises.map((p) => Promise.resolve(p).then((value) => ({
				status: "fulfilled",
				value
			}), (reason) => ({
				status: "rejected",
				reason
			}))));
		}
		function importMetaResolve(specifier) {
			if (import.meta.resolve) return new URL(import.meta.resolve(specifier));
			return new URL(
				specifier,
				/** #__KEEP__ */
				import.meta.url
			);
		}
		promise = allSettled(deps.map((depString) => {
			depString = assetsURL(depString, importerUrl);
			const dep = importMetaResolve(depString);
			const isCss = isCssPreloadUrl(dep);
			return preloadOnce(seen, dep.href, () => {
				if (preloadedHrefs === void 0) {
					preloadedHrefs = {
						all: /* @__PURE__ */ new Set(),
						styles: /* @__PURE__ */ new Set()
					};
					const links = document.getElementsByTagName("link");
					for (let i = links.length - 1; i >= 0; i--) {
						const link = links[i];
						preloadedHrefs.all.add(link.href);
						if (link.rel === "stylesheet") preloadedHrefs.styles.add(link.href);
					}
				}
				if ((isCss ? preloadedHrefs.styles : preloadedHrefs.all).has(dep.href)) return;
				const link = document.createElement("link");
				link.rel = isCss ? "stylesheet" : scriptRel;
				if (!isCss) link.as = "script";
				link.crossOrigin = "";
				link.href = dep.href;
				if (cspNonce) link.setAttribute("nonce", cspNonce);
				document.head.appendChild(link);
				if (isCss) return new Promise((res, rej) => {
					const handleSettle = (e) => {
						link.removeEventListener("load", handleSettle);
						link.removeEventListener("error", handleSettle);
						if (e.type === "error") rej(/* @__PURE__ */ new Error(`Unable to preload CSS for ${dep}`));
						else res(e);
					};
					link.addEventListener("load", handleSettle);
					link.addEventListener("error", handleSettle);
				});
			});
		}).filter((p) => p !== void 0));
	}
	function handlePreloadError(err) {
		const e = new Event("vite:preloadError", { cancelable: true });
		e.payload = err;
		window.dispatchEvent(e);
		if (!e.defaultPrevented) throw err;
	}
	return promise.then((res) => {
		for (const item of res || []) {
			if (item.status !== "rejected") continue;
			handlePreloadError(item.reason);
		}
		return baseModule().catch(handlePreloadError);
	});
};
// /@vite-plugin-pwa/virtual:pwa-register
var autoUpdateMode = "true";
var selfDestroying = "false";
var auto = autoUpdateMode === "true";
var autoDestroy = selfDestroying === "true";
function registerSW(options = {}) {
	const { immediate = false, onNeedReload, onNeedRefresh, onOfflineReady, onRegistered, onRegisteredSW, onRegisterError } = options;
	let wb;
	let registerPromise;
	let sendSkipWaitingMessage;
	const updateServiceWorker = async (_reloadPage = true) => {
		await registerPromise;
		if (!auto) sendSkipWaitingMessage?.();
	};
	async function register() {
		if ("serviceWorker" in navigator) {
			wb = await __vitePreload(async () => {
				const { Workbox } = await import("./workbox-window.prod.es5.js");
				return { Workbox };
			}, [], import.meta.url).then(({ Workbox }) => {
				return new Workbox("./sw.js", {
					scope: "./",
					type: "classic"
				});
			}).catch((e) => {
				onRegisterError?.(e);
			});
			if (!wb) return;
			sendSkipWaitingMessage = () => {
				wb?.messageSkipWaiting();
			};
			if (!autoDestroy) {
				if (auto) {
					wb.addEventListener("activated", (event) => {
						if (event.isUpdate || event.isExternal) {
							if (onNeedReload) onNeedReload();
							else window.location.reload();
						}
					});
					wb.addEventListener("installed", (event) => {
						if (!event.isUpdate) onOfflineReady?.();
					});
				} else {
					let onNeedRefreshCalled = false;
					const showSkipWaitingPrompt = () => {
						onNeedRefreshCalled = true;
						wb?.addEventListener("controlling", (event) => {
							if (event.isUpdate) {
								if (onNeedReload) onNeedReload();
								else window.location.reload();
							}
						});
						onNeedRefresh?.();
					};
					wb.addEventListener("installed", (event) => {
						if (typeof event.isUpdate === "undefined") {
							if (typeof event.isExternal !== "undefined") {
								if (event.isExternal) showSkipWaitingPrompt();
								else !onNeedRefreshCalled && onOfflineReady?.();
							} else !onNeedRefreshCalled && onOfflineReady?.();
						} else if (!event.isUpdate) onOfflineReady?.();
					});
					wb.addEventListener("waiting", showSkipWaitingPrompt);
				}
			}
			wb.register({ immediate }).then((r) => {
				if (onRegisteredSW) onRegisteredSW("./sw.js", r);
				else onRegistered?.(r);
			}).catch((e) => {
				onRegisterError?.(e);
			});
		}
	}
	registerPromise = register();
	return updateServiceWorker;
}
// src/components/layout/ThemeProvider.tsx
var import_jsx_runtime = require_jsx_runtime();
var ThemeContext = (0, import_react.createContext)(null);
function ThemeProvider({ children }) {
	const theme = useSettingsStore((s) => s.theme);
	(0, import_react.useEffect)(() => {
		const root = document.documentElement;
		root.classList.toggle("dark", theme === "dark");
		root.classList.toggle("light", theme === "light");
		const meta = document.querySelector("meta[name=\"theme-color\"]");
		if (meta) meta.setAttribute("content", theme === "dark" ? "#0A0A0F" : "#FAFAFC");
	}, [theme]);
	const value = (0, import_react.useMemo)(() => ({
		theme: siteConfig.theme,
		isDark: theme === "dark"
	}), [theme]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeContext.Provider, {
		value,
		children
	});
}
function useTheme() {
	const ctx = (0, import_react.useContext)(ThemeContext);
	if (!ctx) throw new Error("useTheme must be used inside ThemeProvider");
	return ctx;
}
// src/components/layout/LanguageSwitcher.tsx
function LanguageSwitcher() {
	const { lang, setLang } = useLanguage();
	const next = lang === "ar" ? "en" : "ar";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		onClick: () => setLang(next),
		className: cn("inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-3 py-1.5", "text-sm font-semibold text-text-secondary hover:border-primary hover:text-primary transition-all"),
		"aria-label": "Switch language",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Languages, { size: 16 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: lang === "ar" ? "EN" : "ع" })]
	});
}
// src/lib/store/profileStore.ts
var DEFAULT = { enabled: false };
var useProfileStore = create()(persist((set) => ({
	profile: { ...DEFAULT },
	setProfile: (p) => set((s) => ({ profile: {
		...s.profile,
		...p,
		updatedAt: (/* @__PURE__ */ new Date()).toISOString()
	} })),
	enable: () => set((s) => ({ profile: {
		...s.profile,
		enabled: true
	} })),
	disable: () => set((s) => ({ profile: {
		...s.profile,
		enabled: false
	} })),
	reset: () => set({ profile: { ...DEFAULT } })
}), {
	name: "prompt-dna-profile",
	storage: createJSONStorage(() => localStorage)
}));
// src/components/profile/ProfileIndicator.ts
function ProfileIndicator() {
	const { profile, disable } = useProfileStore();
	if (!profile.enabled || !profile.name) return null;
	return (0, import_react.createElement)("div", { className: "flex items-center gap-2 rounded-lg border border-primary/30 bg-primary/10 px-3 py-1.5 text-xs" }, (0, import_react.createElement)(User, {
		size: 14,
		className: "text-primary"
	}), (0, import_react.createElement)("span", { className: "font-bold text-primary" }, "يعمل ببروفايل: ", profile.name), (0, import_react.createElement)("button", {
		onClick: disable,
		className: "rounded p-0.5 text-text-muted hover:bg-surface hover:text-error",
		title: "إيقاف البروفايل لهذه الجلسة",
		type: "button"
	}, (0, import_react.createElement)(X, { size: 12 })));
}
// src/components/layout/Header.tsx
function Header() {
	const { t, lang } = useLanguage();
	const navItems = [
		{
			to: "/",
			label: t("nav.home"),
			end: true
		},
		{
			to: "/create",
			label: t("nav.create")
		},
		{
			to: "/explore",
			label: t("nav.explorer")
		},
		{
			to: "/custom",
			label: t("nav.custom")
		},
		{
			to: "/history",
			label: t("nav.history")
		},
		{
			to: "/about",
			label: t("nav.about")
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "sticky top-0 z-40 border-b border-border bg-bg/80 backdrop-blur-xl",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "flex items-center gap-2 transition-transform hover:scale-105 shrink-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-2xl",
						children: siteConfig.logo.icon
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "hidden text-lg font-bold text-gradient sm:inline",
						children: siteConfig.name[lang]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-1 lg:flex",
					children: navItems.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavLink, {
						to: item.to,
						end: item.end,
						className: ({ isActive }) => cn("rounded-lg px-3 py-2 text-sm font-semibold transition-colors", isActive ? "bg-primary/10 text-primary" : "text-text-secondary hover:bg-surface hover:text-text-primary"),
						children: item.label
					}, item.to))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProfileIndicator, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/create",
							className: "hidden items-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-sm font-bold text-white transition-all hover:bg-primary-hover glow sm:inline-flex",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { size: 16 }), t("nav.create")]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavLink, {
							to: "/history",
							className: "inline-flex items-center gap-1 rounded-lg border border-border bg-surface p-2 text-text-secondary hover:border-primary hover:text-primary lg:hidden",
							"aria-label": t("nav.history"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcwClock, { size: 16 })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavLink, {
							to: "/settings",
							className: "inline-flex items-center gap-1 rounded-lg border border-border bg-surface p-2 text-text-secondary hover:border-primary hover:text-primary",
							"aria-label": t("nav.settings"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Settings, { size: 16 })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LanguageSwitcher, {})
					]
				})
			]
		})
	});
}
// src/components/layout/Footer.tsx
function Footer() {
	const { t, lang } = useLanguage();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "mt-auto border-t border-border bg-surface/50",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 py-8 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-6 rounded-xl border border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5 p-4 text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-1 flex items-center justify-center gap-2 text-primary",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, {
							size: 16,
							fill: "currentColor"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs font-bold uppercase tracking-wider",
							children: lang === "ar" ? "صدقة جارية" : "Sadaqah Jariyah"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, {
							size: 16,
							fill: "currentColor"
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-medium leading-relaxed text-text-primary",
					children: lang === "ar" ? "هذا العمل صدقة جارية على روح الحاج شاكر شحاتة، دعواتكم له بالرحمة والعفو والمغفرة." : "This work is a ongoing charity dedicated to the soul of Haj Shaker Shehata. Please keep him in your prayers."
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col items-center justify-between gap-2 border-t border-border pt-4 sm:flex-row",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm text-text-muted",
					children: [
						"© ",
						(/* @__PURE__ */ new Date()).getFullYear(),
						" ",
						siteConfig.name[lang],
						" — ",
						t("common.tagline")
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-xs text-text-muted",
					children: [
						"v",
						siteConfig.version,
						" · ",
						siteConfig.author.name
					]
				})]
			})]
		})
	});
}
// src/app/router.tsx
var HomePage = (0, import_react.lazy)(() => __vitePreload(() => import("./HomePage.js"), __vite__mapDeps([0,1,2,3,4,5]), import.meta.url));
var WizardPage = (0, import_react.lazy)(() => __vitePreload(() => import("./WizardPage.js"), __vite__mapDeps([6,2,1,3,4,5,7,8,9,10]), import.meta.url));
var ExplorerPage = (0, import_react.lazy)(() => __vitePreload(() => import("./ExplorerPage.js"), __vite__mapDeps([11,2,1,3,12,5,13,9]), import.meta.url));
var CustomPage = (0, import_react.lazy)(() => __vitePreload(() => import("./CustomPage.js"), __vite__mapDeps([14,2,1,3,4,5,13,12,7,8,9,10]), import.meta.url));
var AboutPage = (0, import_react.lazy)(() => __vitePreload(() => import("./AboutPage.js"), __vite__mapDeps([15,4,5,2,1,3]), import.meta.url));
var HistoryPage = (0, import_react.lazy)(() => __vitePreload(() => import("./HistoryPage.js"), __vite__mapDeps([16,1,2,3,4,5,13,10,9,8]), import.meta.url));
var SettingsPage = (0, import_react.lazy)(() => __vitePreload(() => import("./SettingsPage.js"), __vite__mapDeps([17,1,2,3,4,5,10,9]), import.meta.url));
function AppRouter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Routes, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Route, {
			path: "/",
			element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HomePage, {})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Route, {
			path: "/create",
			element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WizardPage, {})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Route, {
			path: "/create/:mode",
			element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WizardPage, {})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Route, {
			path: "/explore",
			element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExplorerPage, {})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Route, {
			path: "/explore/:termId",
			element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExplorerPage, {})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Route, {
			path: "/custom",
			element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CustomPage, {})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Route, {
			path: "/history",
			element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HistoryPage, {})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Route, {
			path: "/settings",
			element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SettingsPage, {})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Route, {
			path: "/about",
			element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AboutPage, {})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Route, {
			path: "*",
			element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NotFound, {})
		})
	] });
}
function NotFound() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-[60vh] flex-col items-center justify-center gap-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "text-6xl font-bold text-gradient",
			children: "404"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-text-secondary",
			children: "الصفحة غير موجودة"
		})]
	});
}
// src/components/ui/Button.tsx
var VARIANTS = {
	primary: "bg-primary text-white hover:bg-primary-hover shadow-[0_0_20px_rgba(139,92,246,0.4)] hover:shadow-[0_0_30px_rgba(139,92,246,0.6)]",
	secondary: "bg-surface-elevated text-text-primary hover:bg-surface border border-border",
	ghost: "text-text-secondary hover:text-text-primary hover:bg-surface",
	outline: "border border-primary text-primary hover:bg-primary hover:text-white",
	danger: "bg-error text-white hover:opacity-90"
};
var SIZES = {
	sm: "h-9 px-3 text-sm rounded-md",
	md: "h-11 px-5 text-base rounded-lg",
	lg: "h-13 px-7 text-lg rounded-xl"
};
var Button = (0, import_react.forwardRef)(function Button({ variant = "primary", size = "md", loading, fullWidth, className, children, disabled, ...rest }, ref) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		ref,
		disabled: disabled || loading,
		className: cn("inline-flex items-center justify-center gap-2 font-semibold transition-all duration-200", "disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.98]", VARIANTS[variant], SIZES[size], fullWidth && "w-full", className),
		...rest,
		children: [loading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "inline-block h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" }), children]
	});
});
// src/lib/store/dedicationStore.ts
var useDedicationStore = create((set) => ({
	isOpen: false,
	trigger: null,
	open: (trigger) => set({
		isOpen: true,
		trigger
	}),
	close: () => set({
		isOpen: false,
		trigger: null
	})
}));
// src/components/preview/DedicationModal.tsx
function DedicationModal() {
	const { isOpen, trigger, close } = useDedicationStore();
	const { t } = useLanguage();
	if (!isOpen) return null;
	const successMsg = trigger === "copy" ? t("dedication.copied") : t("dedication.exported");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-[60] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-fade-in",
		onClick: close,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full max-w-md rounded-2xl border border-primary/30 bg-surface-elevated p-6 text-center shadow-2xl animate-slide-up",
			onClick: (e) => e.stopPropagation(),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mb-4 text-5xl",
					children: "🤲"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mb-1 text-sm font-bold text-success",
					children: ["✓ ", successMsg]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mb-4 text-xl font-bold text-gradient",
					children: t("dedication.title")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-4 text-sm leading-relaxed text-text-primary",
					children: t("dedication.description")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mb-5 rounded-lg border border-primary/20 bg-primary/5 p-3 text-xs italic leading-relaxed text-text-secondary",
					children: t("dedication.prayer")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					fullWidth: true,
					onClick: close,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { size: 16 }), t("dedication.amen")]
				})
			]
		})
	});
}
// src/app/App.tsx
function App() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LanguageProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-screen flex-col",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "flex-1",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Suspense, {
					fallback: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageLoader, {}),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppRouter, {})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DedicationModal, {})
		]
	}) }) });
}
function PageLoader() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex h-[60vh] items-center justify-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-10 w-10 animate-spin rounded-full border-4 border-primary border-t-transparent" })
	});
}
var term_examples_en_default = {
	version: "1.0.0",
	description: "English translations for term examples. Looked up by term id when the UI language is 'en'. Kept separate from term-metadata.json to preserve the original file.",
	examples: {
		"1": "Attention: close-up of a stunning healthy dish. Interest: Our food helps you lose weight without deprivation. Desire: You'll save money on diet plans and enjoy the taste. Action: Order now and use code HEALTH10.",
		"2": "Problem: You post videos but nobody watches? Agitate: You waste hours filming and editing, and end up with 200 views. Solve: Start with a PAS-based hook in the first 3 seconds — one video can make the difference.",
		"3": "Feature: App with smart reminders and priority filter. Advantage: Saves manual task setup time. Benefit: You'll finish work earlier and get back to family and health.",
		"4": "You'll land a job in 3 months and double your income in a year — while studying programming part-time.",
		"5": "But here's what you need to know! … Stay with me a sec … The surprises aren't over yet!",
		"6": "Get our amazing designs that will blow you and your client away! (instead of: We offer design services)",
		"7": "Save 50% of your time every day (instead of: Best time management app) — how Ahmed saved 3 hours daily?",
		"8": "By the end of this video I'll tell you the secret used by the richest marketers — stick around till the end.",
		"9": "Time for change. Start. Wake up. Stop. Resist.",
		"10": "Registration is open for one week only — seats are limited to 50. Sign up now before seats run out.",
		"11": "A young man started a YouTube channel (Call) — got scared at first (Refusal) — met an experienced creator (Mentor) — failed 3 times (Trials) — reached 100K subscribers (Victory).",
		"12": "A fitness coach struggles with clients dropping out — conflict: weak commitment — epiphany: 20-minute plan only — resolution: 90% commitment instead of 40%.",
		"13": "Exposition: show client's problem — Rising: escalate the problem — Climax: present the solution — Falling: the result — Denouement: final transformation.",
		"14": "Maged failed at every project — decided to learn from mistakes — traveled to train with an expert — transformed from desperate to enthusiastic and successful in two years.",
		"15": "I thought this product was only for bodybuilders — turned out it works for anyone, even non-athletes, and that doubled its sales.",
		"16": "If you're telling a success story, don't jump from start to victory — show the stages in order with a pause between each.",
		"17": "For tech content, use a modern Silicon Valley office background — builds an innovation vibe before the first word.",
		"18": "A business owner on the edge of bankruptcy — climax: a big investor calls at the last moment — this decision shapes the entire company.",
		"19": "An action film looks like war — but its core theme is 'sacrifice'. In marketing content, the theme could be 'success is for everyone'.",
		"20": "At the story's end: 'Failure is the start of success — if you accept criticism and learn from it.' In marketing content: 'Pay a little for your health now, instead of much later.'",
		"21": "A naturally shy person — on camera shows a 20% more energetic and bold persona — the audience feels the confidence and connects.",
		"22": "If explaining a hard topic, raise your voice at the key point and lower it for details — space sentences so the viewer can follow.",
		"23": "A beginner writes key points in order — starts with scripted lines — leaves room for spontaneity mid-video — result: professional without being fake.",
		"24": "Start with a question: 'Who here struggles with videos that get no views?' — mix in a personal story — alternate high energy and calm.",
		"25": "Talking about a happy topic? Keep your face bright and smiling. Explaining a painful problem? Keep it serious — not smiling.",
		"26": "Hand gesture to show size — palm up to signal stop — finger count for 3 points — all synced with your speech.",
		"27": "Standing? Balance your weight on both feet. Sitting? Keep your back straight without tension — shoulders relaxed — chest open.",
		"28": "Instead of 'um' or 'uh' — take a silent breath for a second — the audience absorbs better and professionalism rises.",
		"29": "Tech-savvy youth? Speak faster and use English terms. Older rural audience? Reduce jargon and connect to their daily life.",
		"30": "Before shooting: 3 minutes of breathing + tongue and jaw movement + shoulder and neck stretch — record a short test video to tune your voice and mood.",
		"31": "Ever felt like 24 hours a day isn't enough?",
		"32": "Start the video dropping your phone on the desk and say: 'Stop making videos like this! Here's why nobody watches them.'",
		"33": "There are 3 steps to double your sales — and the third one is a total game-changer.",
		"34": "In a moment I'll reveal how to fix low-view videos — but first, let's talk about...",
		"35": "Did you know 80% of viewers drop off within the first 15 seconds?",
		"36": "Next week: the secrets of professional mobile videography.",
		"37": "And guess what happened next? Wait for the next episode.",
		"38": "Ever feel alone even in a crowded room?",
		"39": "Someone who spends their salary in the first week, then lives on ramen the rest of the month.",
		"40": "Last week I met a guy who told me he's exhausted from 12-hour workdays...",
		"41": "Buy now and get 20% off.",
		"42": "Want to learn more? Sign up with your email and get a free trial.",
		"43": "Join 10,000 students who've benefited — rated 4.8/5.",
		"44": "Offer valid for 24 hours only — register before seats run out.",
		"45": "Sign up now and get the bonus tutorial FREE — limited time.",
		"46": "Show a teaser shot from the video's most important moment before the intro — or a catchy on-screen title in the first second.",
		"47": "Review after editing — cut any boring or repeated section — in Shorts: fast cuts, in long educational videos: calmer but not boring.",
		"48": "Talking about travel? Show Tokyo street scenes. Explaining an app? Show the interface screen recording.",
		"49": "Use noise reduction to remove noise — adjust audio levels for consistent volume — review before export.",
		"50": "Add subtitles for speech — add key text on screen — use clear font and contrasting background.",
		"51": "Calm colors for reflective video — warm for family video — cool for tech video — no over-filtering.",
		"52": "Show a divider labeled 'Step One' — then 'Next Tip' — the viewer always knows where they are.",
		"53": "TikTok: 30-60 seconds for reach. YouTube: 8-15 minutes for education and marketing. Turn every long video into 3 Shorts.",
		"54": "Use animated text to clarify a word — not for constant movement — if the audience notices the effect before the content, it's too much.",
		"55": "Marketing video: 1-2 minutes. Educational YouTube: 8-15 minutes. Don't stretch without reason — every second must add value.",
		"56": "Calm content: lo-fi music. Energetic content: energetic music. Key point: music volume lower than the speaker.",
		"57": "Cut long pauses — remove pauses between sentences — but don't cut every second to avoid a scattered video.",
		"58": "Watch the full video one last time — verify audio and subtitle sync — correct spelling errors — confirm CTA clarity.",
		"59": "End screen: Subscribe button + related suggested video + a line 'If you liked this video, watch this one too.'",
		"60": "Use Swipe between sections — Zoom from close-up to wide — start by sticking to one style.",
		"61": "One minute in the script could be said in 30 seconds? Cut the repeated section. Viewers love concise, info-dense content.",
		"62": "Draw a simple storyboard: Scene 1 (Opening + Hook) → Scene 2 (Problem introduction) → Scene 3 (Solution) → Scene 4 (CTA).",
		"63": "TikTok: 9:16 vertical — Facebook: 4:5 or square — YouTube: 16:9 horizontal — don't use one size for all platforms.",
		"64": "Besides literal subtitles — show a short summary of each key idea on screen — '3 mistakes' then 'The first mistake' etc.",
		"65": "Open Analytics: where do viewers drop off? How to adjust the hook and editing next time to keep them longer?"
	}
};
// src/lib/utils/dataLoader.ts
var rawKBCache = null;
var rawTermMapCache = null;
var metadataCache = null;
var protocolsCache = null;
var strategiesCache = null;
var compatibilityCache = null;
async function loadTermMetadata() {
	if (metadataCache) return metadataCache;
	metadataCache = (await __vitePreload(() => import("./term-metadata.js"), [], import.meta.url)).default;
	return metadataCache;
}
async function loadProtocols() {
	if (protocolsCache) return protocolsCache;
	protocolsCache = (await __vitePreload(() => import("./interaction-protocols.js"), [], import.meta.url)).default;
	return protocolsCache;
}
async function loadStrategies() {
	if (strategiesCache) return strategiesCache;
	strategiesCache = (await __vitePreload(() => import("./strategies.js"), [], import.meta.url)).default;
	return strategiesCache;
}
async function loadCompatibility() {
	if (compatibilityCache) return compatibilityCache;
	compatibilityCache = (await __vitePreload(() => import("./term-compatibility.js"), [], import.meta.url)).default;
	return compatibilityCache;
}
async function loadRawKnowledgeBase() {
	if (rawKBCache) return rawKBCache;
	const res = await fetch(`./data/knowledge-base.json`);
	if (!res.ok) throw new Error("Failed to load knowledge base");
	rawKBCache = await res.json();
	return rawKBCache;
}
async function getRawTermMap() {
	if (rawTermMapCache) return rawTermMapCache;
	const kb = await loadRawKnowledgeBase();
	const map = /* @__PURE__ */ new Map();
	let runningId = 1;
	for (const section of kb.sections) for (const item of section.items) {
		map.set(runningId, item);
		runningId++;
	}
	if (kb.editing_tips && kb.editing_tips.length > 0) for (let i = 0; i < kb.editing_tips.length && runningId <= 65; i++) {
		if (map.has(runningId)) {
			runningId++;
			continue;
		}
		const tip = kb.editing_tips[i];
		const match = tip.match(/\(([^)]+)\)/);
		const termEn = match ? match[1].trim() : `Editing Tip ${i + 1}`;
		const termAr = match ? tip.replace(/\([^)]+\)/, "").trim() : tip;
		map.set(runningId, {
			id: runningId,
			term_en: termEn,
			term_ar: termAr,
			detailed_explanation: tip,
			practical_application: "",
			examples: [],
			pro_tips: []
		});
		runningId++;
	}
	rawTermMapCache = map;
	return map;
}
var _examplesEn = term_examples_en_default;
function getEnglishExampleSync(termId) {
	return _examplesEn.examples[String(termId)];
}
async function loadEnglishExamples() {
	return _examplesEn.examples;
}
// src/main.tsx
loadEnglishExamples().catch((e) => console.warn("[preload] english examples failed:", e));
registerSW({
	immediate: true,
	onNeedRefresh() {
		console.log("[PWA] New version available — reload to update.");
	},
	onOfflineReady() {
		console.log("[PWA] App is ready to work offline.");
	}
});
import_client.createRoot(document.getElementById("root")).render(/* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.StrictMode, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HashRouter, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(App, {}) }) }));
export { loadProtocols as a, useDedicationStore as c, useTheme as d, loadEnglishExamples as i, Button as l, getRawTermMap as n, loadStrategies as o, loadCompatibility as r, loadTermMetadata as s, getEnglishExampleSync as t, useProfileStore as u };

//# sourceMappingURL=index.js.map