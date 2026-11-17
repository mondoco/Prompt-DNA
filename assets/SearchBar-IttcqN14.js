import { D as require_jsx_runtime, c as Search } from "./react-vendor-CmXgSTT2.js";
import { r as useLanguage } from "./cn-ngelHxLq.js";
// src/components/explorer/SearchBar.tsx
var import_jsx_runtime = require_jsx_runtime();
function SearchBar({ value, onChange, placeholder }) {
	const { t } = useLanguage();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
			size: 18,
			className: "absolute start-3 top-1/2 -translate-y-1/2 text-text-muted"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			value,
			onChange: (e) => onChange(e.target.value),
			placeholder: placeholder ?? t("common.search"),
			className: "w-full rounded-xl border border-border bg-surface py-3 ps-10 pe-4 text-sm text-text-primary placeholder:text-text-muted focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
		})]
	});
}
export { SearchBar as t };

//# sourceMappingURL=SearchBar-IttcqN14.js.map