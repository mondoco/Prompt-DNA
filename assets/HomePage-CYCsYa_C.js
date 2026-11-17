import { A as Link, D as require_jsx_runtime, o as Sparkles, x as Compass } from "./react-vendor-CmXgSTT2.js";
import { n as Button } from "./index-GPjYnjx-.js";
import { t as Card } from "./Card-BmfrzAqD.js";
import { r as useLanguage } from "./cn-ngelHxLq.js";
// src/app/pages/HomePage.tsx
var import_jsx_runtime = require_jsx_runtime();
var MODES = [
	{
		id: "content-creation",
		icon: "🎬"
	},
	{
		id: "learn-skill",
		icon: "📚"
	},
	{
		id: "channel-strategy",
		icon: "📊"
	},
	{
		id: "idea-evaluation",
		icon: "🔍"
	},
	{
		id: "custom",
		icon: "🎛️"
	}
];
function HomePage() {
	const { t } = useLanguage();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-7xl px-4 py-16 sm:px-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mb-20 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm text-primary",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { size: 16 }), t("common.tagline")]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mb-4 text-4xl font-extrabold leading-tight sm:text-6xl",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-gradient",
						children: t("home.heroTitle")
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mx-auto mb-8 max-w-2xl text-lg text-text-secondary",
					children: t("home.heroSubtitle")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center justify-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/create",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							size: "lg",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { size: 20 }), t("home.ctaCreate")]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/explore",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							size: "lg",
							variant: "outline",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Compass, { size: 20 }), t("home.ctaExplore")]
						})
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-8 text-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mb-2 text-3xl font-bold",
				children: t("home.modesTitle")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-text-secondary",
				children: t("home.modesSubtitle")
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
			children: MODES.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: m.id === "custom" ? "/custom" : `/create/${m.id}`,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					variant: "interactive",
					padding: "lg",
					className: "h-full",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mb-3 text-4xl",
							children: m.icon
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mb-2 text-lg font-bold text-text-primary",
							children: t(`modes.${m.id}.title`)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-text-secondary",
							children: t(`modes.${m.id}.description`)
						})
					]
				})
			}, m.id))
		})] })]
	});
}
export { HomePage as default };

//# sourceMappingURL=HomePage-CYCsYa_C.js.map