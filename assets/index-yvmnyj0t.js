const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./HomePage-DR5_G5Lj.js","./react-vendor-CmXgSTT2.js","./rolldown-runtime-SbdDWaPq.js","./markdown-vendor-0ecGb9hB.js","./Card-BmfrzAqD.js","./cn-ngelHxLq.js","./WizardPage-LKfgvz49.js","./engine-BxjA1txT.js","./clipboard-C1UB1dKb.js","./wizardStore-DsKdfTug.js","./promptStore-CsVMKOak.js","./dataLoader-BaUY0aJj.js","./ExplorerPage-B3z-CCj8.js","./SearchBar-IttcqN14.js","./Badge-ChsXpFxt.js","./CustomPage-BzfdJvzd.js","./AboutPage-DZJbhp0_.js","./HistoryPage-C5Azne74.js","./SettingsPage-CPa_DuO3.js"])))=>i.map(i=>d[i]);
import { r as __toESM } from "./rolldown-runtime-SbdDWaPq.js";
import { A as Link, D as require_jsx_runtime, L as require_client, M as Route, N as Routes, O as create, R as require_react, j as NavLink, k as HashRouter, m as Heart, n as X, o as Sparkles, p as Languages, r as User, s as Settings, u as RotateCcwClock } from "./react-vendor-CmXgSTT2.js";
import { a as siteConfig, i as useSettingsStore, n as LanguageProvider, o as createJSONStorage, r as useLanguage, s as persist, t as cn } from "./cn-ngelHxLq.js";
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
				const { Workbox } = await import("./workbox-window.prod.es5-CzJxx9q2.js");
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
		const colors = siteConfig.theme.colors;
		root.style.setProperty("--color-primary", colors.primary);
		root.style.setProperty("--color-primary-hover", colors.primaryHover);
		root.style.setProperty("--color-secondary", colors.secondary);
		root.style.setProperty("--color-accent", colors.accent);
		root.style.setProperty("--color-bg", colors.background);
		root.style.setProperty("--color-surface", colors.surface);
		root.style.setProperty("--color-surface-elevated", colors.surfaceElevated);
		root.style.setProperty("--color-border", colors.border);
		root.style.setProperty("--color-text-primary", colors.textPrimary);
		root.style.setProperty("--color-text-secondary", colors.textSecondary);
		root.style.setProperty("--color-text-muted", colors.textMuted);
		root.classList.toggle("dark", theme === "dark");
		root.classList.toggle("light", theme === "light");
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
var HomePage = (0, import_react.lazy)(() => __vitePreload(() => import("./HomePage-DR5_G5Lj.js"), __vite__mapDeps([0,1,2,3,4,5]), import.meta.url));
var WizardPage = (0, import_react.lazy)(() => __vitePreload(() => import("./WizardPage-LKfgvz49.js"), __vite__mapDeps([6,2,1,3,4,5,7,8,9,10,11]), import.meta.url));
var ExplorerPage = (0, import_react.lazy)(() => __vitePreload(() => import("./ExplorerPage-B3z-CCj8.js"), __vite__mapDeps([12,2,1,3,13,5,14,9,11]), import.meta.url));
var CustomPage = (0, import_react.lazy)(() => __vitePreload(() => import("./CustomPage-BzfdJvzd.js"), __vite__mapDeps([15,2,1,3,4,5,14,7,13,11,9,10]), import.meta.url));
var AboutPage = (0, import_react.lazy)(() => __vitePreload(() => import("./AboutPage-DZJbhp0_.js"), __vite__mapDeps([16,4,5,2,1,3]), import.meta.url));
var HistoryPage = (0, import_react.lazy)(() => __vitePreload(() => import("./HistoryPage-C5Azne74.js"), __vite__mapDeps([17,1,2,3,4,5,14,10,8]), import.meta.url));
var SettingsPage = (0, import_react.lazy)(() => __vitePreload(() => import("./SettingsPage-CPa_DuO3.js"), __vite__mapDeps([18,1,2,3,4,5,10,9]), import.meta.url));
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
// src/main.tsx
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
export { __vitePreload as a, useTheme as i, Button as n, useProfileStore as r, useDedicationStore as t };

//# sourceMappingURL=index-yvmnyj0t.js.map