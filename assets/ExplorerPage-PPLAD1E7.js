import { r as __toESM } from "./rolldown-runtime-SbdDWaPq.js";
import { D as require_jsx_runtime, F as useNavigate, R as require_react, n as X } from "./react-vendor-CmXgSTT2.js";
import { t as SearchBar } from "./SearchBar-IttcqN14.js";
import { a as siteConfig, r as useLanguage, t as cn } from "./cn-ngelHxLq.js";
import { t as Badge } from "./Badge-ChsXpFxt.js";
import { n as Button } from "./index-TH7iLIY2.js";
import { t as useWizardStore } from "./wizardStore-DsKdfTug.js";
import { i as loadEnglishExamples, n as getRawTermMap, s as loadTermMetadata, t as getEnglishExampleSync } from "./dataLoader-OZeLWGOS.js";
// src/components/explorer/CategoryTabs.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
var CATEGORIES = [
	"all",
	"writing-hacks",
	"storytelling",
	"camera-presence",
	"hooks",
	"cta",
	"editing"
];
function CategoryTabs({ value, onChange, counts }) {
	const { t } = useLanguage();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex flex-wrap gap-2",
		children: CATEGORIES.map((id) => {
			const active = value === id;
			const color = id === "all" ? siteConfig.theme.colors.primary : siteConfig.theme.colors.categories[id];
			const count = id === "all" ? Object.values(counts).reduce((s, n) => s + n, 0) : counts[id] || 0;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				onClick: () => onChange(id),
				className: cn("rounded-lg border px-3 py-1.5 text-xs font-bold transition-all", active ? "border-transparent text-white" : "border-border bg-surface text-text-secondary hover:border-primary/50"),
				style: active ? { backgroundColor: color } : void 0,
				children: [
					id === "all" ? t("common.all") : t(`categories.${id}`),
					" (",
					count,
					")"
				]
			}, id);
		})
	});
}
// src/components/explorer/TermCard.tsx
function TermCard({ term, onClick }) {
	const { lang, t } = useLanguage();
	const color = siteConfig.theme.colors.categories[term.category] || siteConfig.theme.colors.primary;
	const primaryName = lang === "ar" ? term.term_ar : term.term_en;
	const secondaryName = lang === "ar" ? term.term_en : term.term_ar;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		onClick,
		className: "group w-full rounded-xl border border-border bg-surface p-4 text-start transition-all hover:border-primary/50 hover:bg-surface-elevated hover:shadow-[0_0_20px_rgba(139,92,246,0.15)]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-2 flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
					color,
					children: t(`categories.${term.category}`)
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "text-xs text-text-muted",
					children: ["#", term.id]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mb-0.5 font-bold text-text-primary group-hover:text-primary",
				children: primaryName
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-text-muted",
				dir: lang === "ar" ? "ltr" : "rtl",
				children: secondaryName
			})
		]
	});
}
// src/components/ui/Modal.tsx
var SIZES = {
	sm: "max-w-md",
	md: "max-w-xl",
	lg: "max-w-3xl",
	xl: "max-w-5xl"
};
function Modal({ open, onClose, title, children, size = "md" }) {
	(0, import_react.useEffect)(() => {
		if (!open) return;
		const onKey = (e) => e.key === "Escape" && onClose();
		document.addEventListener("keydown", onKey);
		document.body.style.overflow = "hidden";
		return () => {
			document.removeEventListener("keydown", onKey);
			document.body.style.overflow = "";
		};
	}, [open, onClose]);
	if (!open) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 animate-fade-in",
		onClick: onClose,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: cn("w-full rounded-2xl bg-surface-elevated border border-border shadow-2xl animate-slide-up", SIZES[size]),
			onClick: (e) => e.stopPropagation(),
			children: [title && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between border-b border-border p-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-lg font-bold text-text-primary",
					children: title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: onClose,
					className: "rounded-md p-1 text-text-secondary hover:bg-surface hover:text-text-primary",
					"aria-label": "Close",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 20 })
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "p-5",
				children
			})]
		})
	});
}
// src/components/explorer/TermDetail.tsx
function TermDetail({ term, onClose }) {
	const navigate = useNavigate();
	const { setAnswers } = useWizardStore();
	const { lang, t } = useLanguage();
	const [raw, setRaw] = (0, import_react.useState)(null);
	const [examplesEnReady, setExamplesEnReady] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		getRawTermMap().then((map) => {
			if (term) setRaw(map.get(term.id) || null);
			else setRaw(null);
		}).catch(() => setRaw(null));
	}, [term?.id]);
	(0, import_react.useEffect)(() => {
		loadEnglishExamples().then(() => setExamplesEnReady(true)).catch(() => setExamplesEnReady(true));
	}, []);
	if (!term) return null;
	const color = siteConfig.theme.colors.categories[term.category] || siteConfig.theme.colors.primary;
	const primaryName = lang === "ar" ? term.term_ar : term.term_en;
	const secondaryName = lang === "ar" ? term.term_en : term.term_ar;
	const explanation = lang === "ar" && raw?.detailed_explanation ? raw.detailed_explanation : term.prompt_summary;
	const examples = lang === "en" ? [(examplesEnReady ? getEnglishExampleSync(term.id) : void 0) || term.prompt_example] : raw?.examples?.length ? raw.examples : [term.prompt_example];
	const handleUseInPrompt = () => {
		setAnswers({
			mode: "learn-skill",
			skillTermId: term.id
		});
		onClose();
		navigate("/create/learn-skill");
	};
	const handleAddToCustom = () => {
		setAnswers({
			mode: "custom",
			customTermIds: [term.id]
		});
		onClose();
		navigate("/custom");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Modal, {
		open: !!term,
		onClose,
		title: primaryName,
		size: "lg",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							color,
							children: term.category
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { children: term.complexity }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-xs text-text-muted",
							children: ["#", term.id]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-bold text-text-muted",
					dir: lang === "ar" ? "ltr" : "rtl",
					children: secondaryName
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "mb-1 text-sm font-bold text-primary",
					children: t("explorer.detail.explanation")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm leading-relaxed text-text-secondary",
					dir: "auto",
					children: explanation
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "mb-1 text-sm font-bold text-primary",
					children: t("explorer.detail.examples")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-2",
					children: examples.slice(0, 3).map((ex, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "rounded-lg border border-border bg-bg p-3 text-sm text-text-secondary",
						dir: "auto",
						children: ex
					}, i))
				})] }),
				term.related_terms.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "mb-1 text-sm font-bold text-primary",
					children: t("explorer.detail.relatedTerms")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap gap-1",
					children: term.related_terms.map((id) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "rounded-md bg-surface-elevated px-2 py-1 text-xs text-text-secondary",
						children: ["#", id]
					}, id))
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap gap-2 border-t border-border pt-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						onClick: handleUseInPrompt,
						children: t("explorer.detail.teachMe")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "secondary",
						onClick: handleAddToCustom,
						children: t("explorer.detail.addToCustom")
					})]
				})
			]
		})
	});
}
// src/app/pages/ExplorerPage.tsx
function ExplorerPage() {
	const { t } = useLanguage();
	const [terms, setTerms] = (0, import_react.useState)([]);
	const [q, setQ] = (0, import_react.useState)("");
	const [cat, setCat] = (0, import_react.useState)("all");
	const [active, setActive] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		loadTermMetadata().then((m) => setTerms(m.terms));
	}, []);
	const counts = (0, import_react.useMemo)(() => {
		const c = {};
		for (const t of terms) c[t.category] = (c[t.category] || 0) + 1;
		return c;
	}, [terms]);
	const filtered = (0, import_react.useMemo)(() => {
		return terms.filter((t) => {
			const matchCat = cat === "all" || t.category === cat;
			const matchQ = !q || t.term_ar.includes(q) || t.term_en.toLowerCase().includes(q.toLowerCase()) || t.prompt_summary.toLowerCase().includes(q.toLowerCase());
			return matchCat && matchQ;
		});
	}, [
		terms,
		cat,
		q
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-7xl px-4 py-10 sm:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mb-1 text-3xl font-bold text-gradient",
					children: t("explorer.title")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-text-secondary",
					children: t("explorer.subtitle", { count: terms.length })
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchBar, {
					value: q,
					onChange: setQ,
					placeholder: t("explorer.searchPlaceholder")
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CategoryTabs, {
					value: cat,
					onChange: setCat,
					counts
				})
			}),
			filtered.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "rounded-xl border border-border bg-surface p-12 text-center text-text-muted",
				children: t("explorer.noResults")
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-3",
				children: filtered.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TermCard, {
					term: t,
					onClick: () => setActive(t)
				}, t.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TermDetail, {
				term: active,
				onClose: () => setActive(null)
			})
		]
	});
}
export { ExplorerPage as default };

//# sourceMappingURL=ExplorerPage-PPLAD1E7.js.map