import { t as cn } from "./cn.js";
import { D as require_jsx_runtime } from "./react-vendor.js";
// src/components/ui/Card.tsx
var import_jsx_runtime = require_jsx_runtime();
var VARIANTS = {
	default: "bg-surface border border-border",
	elevated: "bg-surface-elevated border border-border shadow-lg",
	glass: "glass",
	interactive: "bg-surface border border-border cursor-pointer hover:border-primary hover:shadow-[0_0_20px_rgba(139,92,246,0.2)] transition-all"
};
var PADDING = {
	sm: "p-3",
	md: "p-5",
	lg: "p-7"
};
function Card({ variant = "default", padding = "md", className, children, ...rest }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("rounded-xl", VARIANTS[variant], PADDING[padding], className),
		...rest,
		children
	});
}
export { Card as t };

//# sourceMappingURL=Card.js.map