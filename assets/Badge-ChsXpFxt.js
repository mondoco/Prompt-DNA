import { t as cn } from "./cn-ngelHxLq.js";
import { D as require_jsx_runtime } from "./react-vendor-CmXgSTT2.js";
// src/components/ui/Badge.tsx
var import_jsx_runtime = require_jsx_runtime();
function Badge({ children, color, size = "sm", className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("inline-flex items-center rounded-full font-semibold", size === "sm" ? "px-2.5 py-0.5 text-xs" : "px-3 py-1 text-sm", className),
		style: color ? {
			backgroundColor: `${color}22`,
			color,
			border: `1px solid ${color}55`
		} : void 0,
		children
	});
}
export { Badge as t };

//# sourceMappingURL=Badge-ChsXpFxt.js.map