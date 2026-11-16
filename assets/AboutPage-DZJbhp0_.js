import { t as Card } from "./Card-BmfrzAqD.js";
import { a as siteConfig, r as useLanguage } from "./cn-ngelHxLq.js";
import { D as require_jsx_runtime } from "./react-vendor-CmXgSTT2.js";
// src/app/pages/AboutPage.tsx
var import_jsx_runtime = require_jsx_runtime();
function AboutPage() {
	const { t, lang } = useLanguage();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mx-auto max-w-3xl px-4 py-12",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			padding: "lg",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mb-4 text-3xl font-bold text-gradient",
					children: siteConfig.name[lang]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-4 text-text-secondary",
					children: siteConfig.description[lang]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-text-muted",
					children: t("about.builtOn", { author: siteConfig.author.name })
				})
			]
		})
	});
}
export { AboutPage as default };

//# sourceMappingURL=AboutPage-DZJbhp0_.js.map