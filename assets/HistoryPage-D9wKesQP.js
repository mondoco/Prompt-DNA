import { D as require_jsx_runtime, F as useNavigate, b as Copy, d as Pencil, i as Trash, u as RotateCcwClock, v as Eye } from "./react-vendor-CmXgSTT2.js";
import { n as Button } from "./index-TH7iLIY2.js";
import { t as Card } from "./Card-BmfrzAqD.js";
import { t as Badge } from "./Badge-ChsXpFxt.js";
import { t as usePromptStore } from "./promptStore-CsVMKOak.js";
import { t as useWizardStore } from "./wizardStore-DsKdfTug.js";
import { t as copyToClipboard } from "./clipboard-C1UB1dKb.js";
import { r as useLanguage } from "./cn-ngelHxLq.js";
// src/app/pages/HistoryPage.tsx
var import_jsx_runtime = require_jsx_runtime();
function HistoryPage() {
	const navigate = useNavigate();
	const { lang, t } = useLanguage();
	const { history, clearHistory, removeFromHistory, setCurrent } = usePromptStore();
	const handleView = (p) => {
		navigate(`/create/${p.meta.mode}`, { state: { promptToView: p } });
	};
	const handleEdit = (p) => {
		if (!p.answers) {
			alert("هذا البرومبت قديم ولا يحتوي على الإجابات الأصلية.\nيمكنك عرضه أو نسخه، أو توليد برومبت جديد بنفس الإعدادات.");
			return;
		}
		const { resetContext, setAnswers, setStep } = useWizardStore.getState();
		resetContext();
		setAnswers({
			...p.answers,
			mode: p.meta.mode
		});
		setStep(0);
		navigate(`/create/${p.meta.mode}`, { state: { skipReset: true } });
	};
	const handleCopy = async (p) => {
		await copyToClipboard(p.prompts[0]);
	};
	if (history.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mx-auto max-w-4xl px-4 py-16 sm:px-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col items-center gap-4 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcwClock, {
					size: 64,
					className: "text-text-muted"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-2xl font-bold text-text-primary",
					children: t("history.emptyTitle")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-text-secondary",
					children: t("history.emptyDescription")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					onClick: () => navigate("/create"),
					children: t("home.ctaCreate")
				})
			]
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-5xl px-4 py-10 sm:px-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-6 flex items-center justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-2xl font-bold text-gradient",
				children: t("history.title")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-text-secondary",
				children: t("history.subtitle", { count: history.length })
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				variant: "danger",
				size: "sm",
				onClick: clearHistory,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash, { size: 14 }),
					" ",
					t("common.clearAll")
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "space-y-3",
			children: history.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
				padding: "md",
				className: "transition-colors hover:border-primary/30",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex-1 min-w-0",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mb-2 flex flex-wrap items-center gap-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
										color: "#8B5CF6",
										children: t(`modes.${p.meta.mode}.title`)
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { children: t(`wizard.settings.${p.meta.lengthMode}`) }),
									p.meta.strategy && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
										color: "#06B6D4",
										children: t(`strategies.${p.meta.strategy}`)
									}),
									p.meta.usedProfile && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
										color: "#10B981",
										children: t("history.profile")
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs text-text-muted",
										children: new Date(p.meta.generatedAt).toLocaleString(lang === "ar" ? "ar-EG" : "en-US")
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "line-clamp-2 text-sm text-text-secondary",
								dir: "auto",
								children: [p.prompts[0]?.slice(0, 160), "..."]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs text-text-muted",
								children: t("history.promptStats", {
									terms: p.meta.selectedTermIds.length.toLocaleString(lang === "ar" ? "ar-EG" : "en-US"),
									chars: p.meta.totalChars.toLocaleString(lang === "ar" ? "ar-EG" : "en-US")
								})
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								size: "sm",
								variant: "primary",
								onClick: () => handleView(p),
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { size: 12 }),
									" ",
									t("common.view")
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								size: "sm",
								variant: "secondary",
								onClick: () => handleEdit(p),
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, { size: 12 }),
									" ",
									t("common.edit")
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex gap-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									size: "sm",
									variant: "ghost",
									onClick: () => handleCopy(p),
									title: t("common.copy"),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { size: 12 })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									size: "sm",
									variant: "ghost",
									onClick: () => removeFromHistory(p.id),
									title: t("common.delete"),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash, { size: 12 })
								})]
							})
						]
					})]
				})
			}, p.id))
		})]
	});
}
export { HistoryPage as default };

//# sourceMappingURL=HistoryPage-D9wKesQP.js.map