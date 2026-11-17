import { r as __toESM } from "./rolldown-runtime-SbdDWaPq.js";
import { D as require_jsx_runtime, F as useNavigate, R as require_react, n as X, o as Sparkles } from "./react-vendor-CmXgSTT2.js";
import { n as Button } from "./index-GPjYnjx-.js";
import { t as Card } from "./Card-BmfrzAqD.js";
import { t as Badge } from "./Badge-ChsXpFxt.js";
import { n as TextAreaInput, t as buildPrompt } from "./engine-BxjA1txT.js";
import { t as SearchBar } from "./SearchBar-IttcqN14.js";
import { a as loadProtocols, o as loadStrategies, r as loadCompatibility, s as loadTermMetadata } from "./dataLoader-Co-NEchz.js";
import { t as useWizardStore } from "./wizardStore-DsKdfTug.js";
import { t as usePromptStore } from "./promptStore-CsVMKOak.js";
import { a as siteConfig, r as useLanguage } from "./cn-ngelHxLq.js";
// src/app/pages/CustomPage.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
function CustomPage() {
	const navigate = useNavigate();
	const { lang, t } = useLanguage();
	const { answers, setAnswers } = useWizardStore();
	const [terms, setTerms] = (0, import_react.useState)([]);
	const [q, setQ] = (0, import_react.useState)("");
	const [selected, setSelected] = (0, import_react.useState)(answers.customTermIds || []);
	const [customTopic, setCustomTopic] = (0, import_react.useState)("");
	const [generating, setGenerating] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)(null);
	const { setCurrent } = usePromptStore();
	(0, import_react.useEffect)(() => {
		loadTermMetadata().then((m) => setTerms(m.terms)).catch(() => {
			setError(t("errors.loadFailed"));
		});
	}, [t]);
	const filtered = (0, import_react.useMemo)(() => terms.filter((t) => !q || t.term_ar.includes(q) || t.term_en.toLowerCase().includes(q.toLowerCase())), [terms, q]);
	const selectedTerms = terms.filter((t) => selected.includes(t.id));
	function toggle(id) {
		setSelected((s) => s.includes(id) ? s.filter((x) => x !== id) : [...s, id]);
	}
	async function handleGenerate() {
		if (selected.length === 0) return;
		setGenerating(true);
		setError(null);
		try {
			const [metadata, protocols, strategies, compatibility] = await Promise.all([
				loadTermMetadata(),
				loadProtocols(),
				loadStrategies(),
				loadCompatibility()
			]);
			const trimmedTopic = customTopic.trim();
			const finalAnswers = {
				...answers,
				mode: "custom",
				customTermIds: selected,
				topic: trimmedTopic || void 0
			};
			setAnswers({
				mode: "custom",
				customTermIds: selected,
				topic: trimmedTopic || void 0
			});
			const result = buildPrompt({
				answers: finalAnswers,
				termMetadata: metadata,
				protocols,
				strategies,
				compatibility
			});
			setCurrent(result);
			navigate("/create/custom");
		} catch {
			setError(t("errors.generationFailed"));
		} finally {
			setGenerating(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl px-4 py-10 sm:px-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mb-1 text-3xl font-bold text-gradient",
				children: t("custom.title")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-text-secondary",
				children: t("custom.subtitle")
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-6 lg:grid-cols-[1fr_320px]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchBar, {
					value: q,
					onChange: setQ,
					placeholder: t("custom.searchPlaceholder")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 max-h-[600px] space-y-2 overflow-y-auto pe-1",
					children: filtered.map((term) => {
						const isSelected = selected.includes(term.id);
						const color = siteConfig.theme.colors.categories[term.category] || siteConfig.theme.colors.primary;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => toggle(term.id),
							className: `w-full rounded-lg border p-3 text-start transition-all ${isSelected ? "border-primary bg-primary/10" : "border-border bg-surface hover:border-primary/50"}`,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mb-1 flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
										color,
										children: t(`categories.${term.category}`)
									}), isSelected && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-xs font-bold text-primary",
										children: ["✓ ", t("common.selected")]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-bold text-text-primary",
									children: lang === "ar" ? term.term_ar : term.term_en
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-text-muted",
									dir: lang === "ar" ? "ltr" : "rtl",
									children: lang === "ar" ? term.term_en : term.term_ar
								})
							]
						}, term.id);
					})
				}),
				error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					role: "alert",
					className: "mt-3 rounded-lg border border-error/40 bg-error/10 p-3 text-sm text-error",
					children: error
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "lg:sticky lg:top-20 lg:self-start",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					padding: "md",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-3 flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-sm font-bold text-text-primary",
								children: t("custom.selected", { count: selected.length })
							}), selected.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setSelected([]),
								className: "text-xs text-text-muted hover:text-error",
								children: t("common.clearAll")
							})]
						}),
						selectedTerms.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "rounded-lg border border-dashed border-border p-4 text-center text-xs text-text-muted",
							children: t("custom.noSelection")
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "max-h-[300px] space-y-1 overflow-y-auto",
							children: selectedTerms.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between rounded-md bg-surface-elevated px-2 py-1.5 text-xs",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0 flex-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block truncate text-text-primary",
										children: lang === "ar" ? t.term_ar : t.term_en
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block truncate text-text-muted",
										dir: lang === "ar" ? "ltr" : "rtl",
										children: lang === "ar" ? t.term_en : t.term_ar
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => toggle(t.id),
									className: "text-text-muted hover:text-error",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 14 })
								})]
							}, t.id))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextAreaInput, {
								label: t("custom.ideaLabel"),
								hint: t("custom.ideaHint"),
								value: customTopic,
								onChange: setCustomTopic,
								rows: 3,
								placeholder: t("custom.ideaPlaceholder")
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							fullWidth: true,
							className: "mt-4",
							onClick: handleGenerate,
							loading: generating,
							disabled: selected.length === 0,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { size: 16 }),
								" ",
								t("custom.generate")
							]
						})
					]
				})
			})]
		})]
	});
}
export { CustomPage as default };

//# sourceMappingURL=CustomPage-BXqA0vMi.js.map