import { r as __toESM } from "./rolldown-runtime-SbdDWaPq.js";
import { C as ChevronDown, D as require_jsx_runtime, E as ArrowLeft, F as useNavigate, I as useParams, P as useLocation, R as require_react, S as ChevronUp, T as ArrowRight, _ as FileBraces, b as Copy, g as FileCode, h as FileText, o as Sparkles, t as Markdown, w as Check } from "./react-vendor-CmXgSTT2.js";
import { n as Button, r as useProfileStore, t as useDedicationStore } from "./index-yvmnyj0t.js";
import { t as Card } from "./Card-BmfrzAqD.js";
import { r as useLanguage, t as cn } from "./cn-ngelHxLq.js";
import { n as TextAreaInput, t as buildPrompt } from "./engine-BxjA1txT.js";
import { t as remarkGfm } from "./markdown-vendor-0ecGb9hB.js";
import { t as copyToClipboard } from "./clipboard-C1UB1dKb.js";
import { t as useWizardStore } from "./wizardStore-DsKdfTug.js";
import { t as usePromptStore } from "./promptStore-CsVMKOak.js";
import { a as loadProtocols, o as loadStrategies, r as loadCompatibility, s as loadTermMetadata } from "./dataLoader-BaUY0aJj.js";
// src/components/wizard/ProgressBar.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
function ProgressBar({ current, total }) {
	const { t } = useLanguage();
	const pct = total > 0 ? Math.round((current + 1) / total * 100) : 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mb-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-2 flex items-center justify-between text-sm text-text-secondary",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t("wizard.stepOf", {
				current: current + 1,
				total
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "font-bold text-primary",
				children: [pct, "%"]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "h-2 w-full overflow-hidden rounded-full bg-surface-elevated",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "h-full rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-500",
				style: { width: `${pct}%` }
			})
		})]
	});
}
// src/components/wizard/ChoiceCard.tsx
function ChoiceCard({ label, description, icon, selected, onSelect }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick: onSelect,
		className: cn("group relative w-full rounded-xl border p-4 text-start transition-all", selected ? "border-primary bg-primary/10 shadow-[0_0_20px_rgba(139,92,246,0.2)]" : "border-border bg-surface hover:border-primary/50 hover:bg-surface-elevated"),
		children: [selected && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute end-3 top-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
				size: 14,
				className: "text-white"
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-start gap-3",
			children: [icon && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-2xl",
				children: icon
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-bold text-text-primary",
					children: label
				}), description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-xs text-text-secondary",
					children: description
				})]
			})]
		})]
	});
}
// src/components/wizard/LengthModeSlider.tsx
var OPTIONS = [
	"compact",
	"standard",
	"comprehensive"
];
function LengthModeSlider({ value, onChange }) {
	const { t } = useLanguage();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "mb-3 text-sm font-bold text-text-primary",
		children: t("wizard.settings.lengthMode")
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid grid-cols-3 gap-2",
		children: OPTIONS.map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			onClick: () => onChange(option),
			className: cn("rounded-lg border p-3 text-center transition-all", value === option ? "border-primary bg-primary/10 text-primary" : "border-border bg-surface text-text-secondary hover:border-primary/50"),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm font-bold",
				children: t(`wizard.settings.${option}`)
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-0.5 text-xs opacity-70",
				children: t(`wizard.settings.${option}Sub`)
			})]
		}, option))
	})] });
}
// src/components/preview/ChainingToggle.tsx
function ChainingToggle({ value, onChange }) {
	const { t } = useLanguage();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "mb-2 text-sm font-bold text-text-primary",
		children: t("wizard.settings.promptFormat")
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex gap-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			onClick: () => onChange("single"),
			className: cn("flex-1 rounded-lg border p-3 text-center text-sm font-bold transition-all", value === "single" ? "border-primary bg-primary/10 text-primary" : "border-border bg-surface text-text-secondary hover:border-primary/50"),
			children: t("wizard.settings.singlePrompt")
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			onClick: () => onChange("chained"),
			className: cn("flex-1 rounded-lg border p-3 text-center text-sm font-bold transition-all", value === "chained" ? "border-primary bg-primary/10 text-primary" : "border-border bg-surface text-text-secondary hover:border-primary/50"),
			children: t("wizard.settings.chainedPrompts")
		})]
	})] });
}
// src/components/preview/CopyButton.tsx
function CopyButton({ text, label = "نسخ", size = "md" }) {
	const [copied, setCopied] = (0, import_react.useState)(false);
	const open = useDedicationStore((s) => s.open);
	const handleCopy = async () => {
		if (await copyToClipboard(text)) {
			setCopied(true);
			setTimeout(() => setCopied(false), 2e3);
			open("copy");
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
		onClick: handleCopy,
		size,
		variant: copied ? "secondary" : "primary",
		children: [copied ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { size: 16 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { size: 16 }), copied ? "تم النسخ!" : label]
	});
}
// src/lib/utils/export.ts
function downloadTxt(prompt, filename = "prompt") {
	triggerDownload(prompt.prompts.join("\n\n" + "=".repeat(60) + "\n\n"), `${filename}.txt`, "text/plain");
}
function downloadMd(prompt, filename = "prompt") {
	triggerDownload(prompt.prompts.map((p, i) => prompt.prompts.length > 1 ? `# Prompt ${i + 1}\n\n${p}` : p).join("\n\n---\n\n"), `${filename}.md`, "text/markdown");
}
function downloadJson(prompt, filename = "prompt") {
	triggerDownload(JSON.stringify(prompt, null, 2), `${filename}.json`, "application/json");
}
function triggerDownload(text, filename, mime) {
	const blob = new Blob([text], { type: mime });
	const url = URL.createObjectURL(blob);
	const a = document.createElement("a");
	a.href = url;
	a.download = filename;
	document.body.appendChild(a);
	a.click();
	document.body.removeChild(a);
	URL.revokeObjectURL(url);
}
// src/components/preview/ExportMenu.tsx
function ExportMenu({ prompt, baseName = "prompt-dna" }) {
	const open = useDedicationStore((s) => s.open);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-wrap gap-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				variant: "secondary",
				size: "sm",
				onClick: () => {
					downloadTxt(prompt, baseName);
					open("export");
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { size: 14 }), " .txt"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				variant: "secondary",
				size: "sm",
				onClick: () => {
					downloadMd(prompt, baseName);
					open("export");
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileCode, { size: 14 }), " .md"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				variant: "secondary",
				size: "sm",
				onClick: () => {
					downloadJson(prompt, baseName);
					open("export");
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileBraces, { size: 14 }), " .json"]
			})
		]
	});
}
// src/components/preview/PromptDNAVisualizer.tsx
function PromptDNAVisualizer({ sections, strategy, strategyConfidence }) {
	if (sections.length === 0) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl border border-border bg-surface p-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-3 flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xl",
						children: "🧬"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-sm font-bold text-text-primary",
						children: "الحمض النووي للبرومبت"
					})]
				}), strategy && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 text-xs",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-text-muted",
							children: "الاستراتيجية:"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-md bg-primary/10 px-2 py-0.5 font-bold text-primary",
							children: strategy
						}),
						strategyConfidence !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-text-muted",
							children: [
								"(",
								Math.round(strategyConfidence * 100),
								"%)"
							]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-4 flex h-3 w-full overflow-hidden rounded-full",
				children: sections.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					style: {
						width: `${s.weight}%`,
						backgroundColor: s.color
					},
					title: `${s.name}: ${s.weight}%`
				}, s.category))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 gap-2 sm:grid-cols-3",
				children: sections.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 text-xs",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-3 w-3 rounded-sm",
						style: { backgroundColor: s.color }
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-text-secondary",
						children: [
							s.name,
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-text-muted",
								children: [
									"(",
									s.weight,
									"%)"
								]
							})
						]
					})]
				}, s.category))
			})
		]
	});
}
// src/components/preview/PromptPreview.tsx
function PromptPreview({ prompt }) {
	const [activeIdx, setActiveIdx] = (0, import_react.useState)(0);
	const [expanded, setExpanded] = (0, import_react.useState)(true);
	const activePrompt = prompt.prompts[activeIdx] || "";
	const isChained = prompt.prompts.length > 1;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PromptDNAVisualizer, {
			sections: prompt.dnaSections,
			strategy: prompt.meta.strategy,
			strategyConfidence: prompt.meta.strategyConfidence
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			padding: "lg",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-4 flex flex-wrap items-center justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-xl font-bold text-text-primary",
						children: "برومبتك جاهز 🎉"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1 text-xs text-text-muted",
						children: [
							prompt.meta.selectedTermIds.length,
							" مصطلحاً · ",
							prompt.meta.totalChars.toLocaleString(),
							" حرف ·",
							" ",
							prompt.meta.isChained ? "سلسلة" : "برومبت واحد"
						]
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CopyButton, {
						text: activePrompt,
						label: "نسخ البرومبت"
					})]
				}),
				isChained && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mb-4 flex gap-2 overflow-x-auto",
					children: prompt.prompts.map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => setActiveIdx(i),
						className: cn("whitespace-nowrap rounded-lg border px-3 py-1.5 text-xs font-bold transition-all", i === activeIdx ? "border-primary bg-primary/10 text-primary" : "border-border bg-surface text-text-secondary hover:border-primary/50"),
						children: ["مرحلة ", i + 1]
					}, i))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => setExpanded((v) => !v),
					className: "mb-3 flex items-center gap-1 text-sm font-bold text-primary hover:underline",
					children: [
						expanded ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronUp, { size: 16 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { size: 16 }),
						expanded ? "إخفاء" : "عرض",
						" البرومبت"
					]
				}),
				expanded && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "max-h-[600px] overflow-y-auto rounded-lg border border-border bg-bg p-4 text-sm",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "prose prose-invert max-w-none prose-headings:text-primary prose-strong:text-text-primary prose-code:bg-surface-elevated prose-code:px-1 prose-code:rounded",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Markdown, {
							remarkPlugins: [remarkGfm],
							children: activePrompt
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 border-t border-border pt-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-2 text-xs font-bold text-text-muted",
						children: "تصدير"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExportMenu, { prompt })]
				})
			]
		})]
	});
}
// src/lib/utils/profileFiller.ts
function applyProfileDefaults(answers, profile) {
	if (!profile.enabled) return answers;
	return {
		...answers,
		niche: answers.niche || profile.niche,
		nicheCustom: answers.nicheCustom || profile.nicheCustom,
		audience: answers.audience || profile.defaultAudience,
		audienceCustom: answers.audienceCustom || profile.defaultAudienceCustom,
		tone: answers.tone || profile.preferredTone,
		platform: answers.platform || profile.mainPlatform,
		goal: answers.goal || profile.primaryGoal,
		lengthMode: profile.defaultLengthMode || answers.lengthMode,
		aiModel: profile.defaultAiModel || answers.aiModel,
		outputLanguage: profile.preferredLanguage || answers.outputLanguage
	};
}
// src/app/pages/WizardPage.tsx
var VALID_MODES = [
	"content-creation",
	"learn-skill",
	"channel-strategy",
	"idea-evaluation",
	"custom"
];
function WizardPage() {
	const { mode: modeParam } = useParams();
	const navigate = useNavigate();
	const { t } = useLanguage();
	const isLtr = document.documentElement.dir === "ltr";
	const mode = VALID_MODES.includes(modeParam) ? modeParam : "content-creation";
	const { current: currentPrompt, setCurrent } = usePromptStore();
	const location = useLocation();
	const { answers, setAnswer, setAnswers, setStep, currentStep, nextStep, prevStep, resetContext } = useWizardStore();
	const profile = useProfileStore((s) => s.profile);
	(0, import_react.useEffect)(() => {
		if (mode === "custom") navigate("/custom", { replace: true });
	}, [mode, navigate]);
	(0, import_react.useEffect)(() => {
		resetContext();
		setAnswer("mode", mode);
		setCurrent(null);
		const currentProfile = useProfileStore.getState().profile;
		if (currentProfile.enabled) {
			const freshAnswers = useWizardStore.getState().answers;
			const filled = applyProfileDefaults(freshAnswers, currentProfile);
			setAnswers(filled);
		}
	}, [
		location.key,
		mode,
		resetContext,
		setAnswer,
		setAnswers,
		setCurrent
	]);
	const [generating, setGenerating] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		if (answers.mode !== mode) {
			setAnswer("mode", mode);
			setStep(0);
			setCurrent(null);
		}
	}, [
		answers.mode,
		mode,
		setAnswer,
		setCurrent,
		setStep
	]);
	const steps = (0, import_react.useMemo)(() => buildStepsForMode(mode, t), [mode, t]);
	const step = steps[Math.min(currentStep, steps.length - 1)];
	const canProceed = step?.validate(answers);
	const isLast = currentStep >= steps.length - 1;
	async function handleGenerate() {
		setGenerating(true);
		setError(null);
		try {
			const [metadata, protocols, strategies, compatibility] = await Promise.all([
				loadTermMetadata(),
				loadProtocols(),
				loadStrategies(),
				loadCompatibility()
			]);
			const result = buildPrompt({
				answers,
				termMetadata: metadata,
				protocols,
				strategies,
				compatibility,
				profile
			});
			setCurrent(result);
		} catch {
			setError(t("wizard.generationFailed"));
		} finally {
			setGenerating(false);
		}
	}
	if (currentPrompt) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-4xl px-4 py-10 sm:px-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mb-4 flex items-center justify-between",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				variant: "ghost",
				onClick: () => {
					setCurrent(null);
					resetContext();
					if (profile.enabled) {
						const freshAnswers = useWizardStore.getState().answers;
						setAnswers(applyProfileDefaults(freshAnswers, profile));
					}
					setStep(0);
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 16 }),
					" ",
					t("wizard.newPrompt")
				]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PromptPreview, { prompt: currentPrompt })]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-3xl px-4 py-10 sm:px-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-6 text-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-2xl font-bold text-gradient sm:text-3xl",
				children: t(`modes.${mode}.title`)
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-text-secondary",
				children: t(`modes.${mode}.description`)
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			padding: "lg",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProgressBar, {
					current: currentStep,
					total: steps.length
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mb-1 text-lg font-bold text-text-primary",
					children: step.title
				}),
				step.hint && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-4 text-sm text-text-muted",
					children: step.hint
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mb-6 space-y-4",
					children: step.render()
				}),
				error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mb-4 rounded-lg border border-error/40 bg-error/10 p-3 text-sm text-error",
					children: error
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between gap-2 border-t border-border pt-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "ghost",
						onClick: () => currentStep === 0 ? navigate("/") : prevStep(),
						children: [isLtr ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { size: 16 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 16 }), currentStep === 0 ? t("common.cancel") : t("common.back")]
					}), isLast ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						onClick: handleGenerate,
						loading: generating,
						disabled: !canProceed,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { size: 16 }),
							" ",
							t("wizard.generate")
						]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						onClick: nextStep,
						disabled: !canProceed,
						children: [
							t("common.next"),
							" ",
							isLtr ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 16 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { size: 16 })
						]
					})]
				})
			]
		})]
	});
}
function OptionListWithCustom({ options, value, customValue, onSelect, onCustomChange, customLabel, gridCols = "grid gap-2" }) {
	const { t } = useLanguage();
	const otherSelected = value === "__other__";
	const resolvedCustomLabel = customLabel ?? t("common.other");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: gridCols,
			children: [options.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChoiceCard, {
				label: o.label,
				icon: o.icon,
				selected: value === o.id,
				onSelect: () => onSelect(o.id)
			}, o.id)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChoiceCard, {
				label: resolvedCustomLabel,
				icon: "✏️",
				selected: otherSelected,
				onSelect: () => onSelect("__other__")
			})]
		}), otherSelected && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextAreaInput, {
			label: t("common.writeDetails"),
			value: customValue || "",
			onChange: onCustomChange,
			rows: 2,
			placeholder: t("wizard.fields.customDescriptionPlaceholder")
		})]
	});
}
function isOptionAnswered(value, customValue) {
	return value === "__other__" ? !!customValue?.trim() : !!value;
}
function buildStepsForMode(mode, t) {
	if (mode === "content-creation") return buildContentCreationSteps(t);
	if (mode === "learn-skill") return buildLearnSkillSteps(t);
	if (mode === "channel-strategy") return buildChannelStrategySteps(t);
	if (mode === "idea-evaluation") return buildIdeaEvaluationSteps(t);
	return buildCustomIntroSteps(t);
}
function buildContentCreationSteps(t) {
	return [
		{
			title: t("wizard.steps.contentType.title"),
			hint: t("wizard.steps.contentType.hint"),
			validate: (a) => !!a.contentType,
			render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContentTypeStep, {})
		},
		{
			title: t("wizard.steps.niche.title"),
			hint: t("wizard.fields.nicheHint"),
			validate: (a) => isOptionAnswered(a.niche, a.nicheCustom),
			render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NicheStep, {})
		},
		{
			title: t("wizard.steps.audience.title"),
			hint: t("wizard.steps.audience.hint"),
			validate: (a) => isOptionAnswered(a.audience, a.audienceCustom),
			render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AudienceStep, {})
		},
		{
			title: t("wizard.steps.goalPain.title"),
			hint: t("wizard.steps.goalPain.hint"),
			validate: (a) => isOptionAnswered(a.goal, a.goalCustom) && isOptionAnswered(a.painPoint, a.painPointCustom),
			render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GoalPainStep, {})
		},
		{
			title: t("wizard.steps.platformTone.title"),
			hint: t("wizard.steps.platformTone.hint"),
			validate: (a) => isOptionAnswered(a.platform, a.platformCustom) && isOptionAnswered(a.tone, a.toneCustom),
			render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlatformToneStep, {})
		},
		{
			title: t("wizard.steps.topicCta.title"),
			hint: t("wizard.steps.topicCta.hint"),
			validate: (a) => !!a.topic?.trim() && isOptionAnswered(a.ctaType, a.ctaTypeCustom),
			render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TopicCtaStep, {})
		},
		{
			title: t("wizard.steps.final.title"),
			hint: t("wizard.steps.final.hint"),
			validate: () => true,
			render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinalSettingsStep, {})
		}
	];
}
function ContentTypeStep() {
	const { answers, setAnswer } = useWizardStore();
	const { t } = useLanguage();
	const types = [
		{
			id: "short-video",
			label: t("wizard.contentTypes.shortVideo"),
			icon: "🎬"
		},
		{
			id: "long-video",
			label: t("wizard.contentTypes.longVideo"),
			icon: "📹"
		},
		{
			id: "article",
			label: t("wizard.contentTypes.article"),
			icon: "📝"
		},
		{
			id: "post",
			label: t("wizard.contentTypes.post"),
			icon: "📱"
		},
		{
			id: "carousel",
			label: t("wizard.contentTypes.carousel"),
			icon: "🎠"
		},
		{
			id: "story",
			label: t("wizard.contentTypes.story"),
			icon: "⚡"
		},
		{
			id: "newsletter",
			label: t("wizard.contentTypes.newsletter"),
			icon: "📧"
		},
		{
			id: "podcast",
			label: t("wizard.contentTypes.podcast"),
			icon: "🎙️"
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid gap-2 sm:grid-cols-2",
		children: types.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChoiceCard, {
			label: t.label,
			icon: t.icon,
			selected: answers.contentType === t.id,
			onSelect: () => setAnswer("contentType", t.id)
		}, t.id))
	});
}
function NicheStep() {
	const { answers, setAnswer } = useWizardStore();
	const { t } = useLanguage();
	const niches = [
		{
			id: "تقنية وبرمجة",
			label: t("wizard.niches.tech"),
			icon: "💻"
		},
		{
			id: "صحة ولياقة",
			label: t("wizard.niches.health"),
			icon: "💪"
		},
		{
			id: "طبخ وأكل",
			label: t("wizard.niches.food"),
			icon: "🍳"
		},
		{
			id: "مالية واستثمار",
			label: t("wizard.niches.finance"),
			icon: "💰"
		},
		{
			id: "أعمال وريادة",
			label: t("wizard.niches.business"),
			icon: "📈"
		},
		{
			id: "تعليم وتطوير",
			label: t("wizard.niches.education"),
			icon: "🎓"
		},
		{
			id: "تسويق وبيع",
			label: t("wizard.niches.marketing"),
			icon: "📣"
		},
		{
			id: "ترفيه وفنون",
			label: t("wizard.niches.entertainment"),
			icon: "🎨"
		},
		{
			id: "تطوير ذات",
			label: t("wizard.niches.selfDev"),
			icon: "🌱"
		},
		{
			id: "سفر",
			label: t("wizard.niches.travel"),
			icon: "✈️"
		},
		{
			id: "رياضة",
			label: t("wizard.niches.sports"),
			icon: "⚽"
		},
		{
			id: "جمال وعناية",
			label: t("wizard.niches.beauty"),
			icon: "💄"
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OptionListWithCustom, {
		options: niches,
		value: answers.niche,
		customValue: answers.nicheCustom,
		onSelect: (id) => setAnswer("niche", id),
		onCustomChange: (v) => {
			setAnswer("niche", "__other__");
			setAnswer("nicheCustom", v);
		},
		customLabel: t("wizard.fields.otherNiche"),
		gridCols: "grid gap-2 sm:grid-cols-2"
	});
}
function AudienceStep() {
	const { answers, setAnswer } = useWizardStore();
	const { t } = useLanguage();
	const opts = [
		{
			id: "مبتدئين تماماً في المجال",
			label: t("wizard.audiences.beginner"),
			icon: "🌱"
		},
		{
			id: "متوسطين (عندهم خلفية بسيطة)",
			label: t("wizard.audiences.intermediate"),
			icon: "📗"
		},
		{
			id: "محترفين في المجال",
			label: t("wizard.audiences.advanced"),
			icon: "🏆"
		},
		{
			id: "جمهور عام بدون خلفية محددة",
			label: t("wizard.audiences.general"),
			icon: "🌍"
		},
		{
			id: "صناع قرار / مديرين",
			label: t("wizard.audiences.decisionMakers"),
			icon: "💼"
		},
		{
			id: "طلاب وباحثين",
			label: t("wizard.audiences.students"),
			icon: "🎓"
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OptionListWithCustom, {
		options: opts,
		value: answers.audience,
		customValue: answers.audienceCustom,
		onSelect: (id) => setAnswer("audience", id),
		onCustomChange: (v) => {
			setAnswer("audience", "__other__");
			setAnswer("audienceCustom", v);
		},
		customLabel: t("wizard.fields.otherAudience")
	});
}
function GoalPainStep() {
	const { answers, setAnswer } = useWizardStore();
	const { t } = useLanguage();
	const goals = [
		{
			id: "توعية وزيادة معرفة",
			label: t("wizard.goals.awareness"),
			icon: "💡"
		},
		{
			id: "تشجيع الجمهور على البدء",
			label: t("wizard.goals.starting"),
			icon: "🚀"
		},
		{
			id: "الترويج لمنتج أو خدمة",
			label: t("wizard.goals.promotion"),
			icon: "🛍️"
		},
		{
			id: "الترويج لكورس",
			label: t("wizard.goals.course"),
			icon: "📚"
		},
		{
			id: "بناء براند شخصي",
			label: t("wizard.goals.brand"),
			icon: "⭐"
		},
		{
			id: "زيادة المشاهدات والمتابعين",
			label: t("wizard.goals.views"),
			icon: "📈"
		},
		{
			id: "توليد تفاعل (تعليقات/مشاركات)",
			label: t("wizard.goals.engagement"),
			icon: "💬"
		}
	];
	const pains = [
		{
			id: "شايفين الموضوع صعب ومعقد",
			label: t("wizard.painPoints.tooHard"),
			icon: "😰"
		},
		{
			id: "مش عارفين يبدأوا منين",
			label: t("wizard.painPoints.dontKnowStart"),
			icon: "🤔"
		},
		{
			id: "عندهم معلومات خاطئة عن الموضوع",
			label: t("wizard.painPoints.wrongInfo"),
			icon: "❌"
		},
		{
			id: "بيعانوا من مشكلة عملية محددة",
			label: t("wizard.painPoints.practicalIssue"),
			icon: "🔧"
		},
		{
			id: "مش شايفين الفايدة/القيمة",
			label: t("wizard.painPoints.dontSeeValue"),
			icon: "🤷"
		},
		{
			id: "خايفين من التغيير أو الفشل",
			label: t("wizard.painPoints.fearFailure"),
			icon: "😨"
		},
		{
			id: "مش لاقيين وقت أو فلوس",
			label: t("wizard.painPoints.noTimeMoney"),
			icon: "⏰"
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mb-2 text-xs font-bold text-text-muted",
			children: t("wizard.fields.goal")
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OptionListWithCustom, {
			options: goals,
			value: answers.goal,
			customValue: answers.goalCustom,
			onSelect: (id) => setAnswer("goal", id),
			onCustomChange: (v) => {
				setAnswer("goal", "__other__");
				setAnswer("goalCustom", v);
			},
			customLabel: t("wizard.fields.otherGoal"),
			gridCols: "grid grid-cols-2 gap-2"
		})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mb-2 text-xs font-bold text-text-muted",
			children: t("wizard.fields.audiencePain")
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OptionListWithCustom, {
			options: pains,
			value: answers.painPoint,
			customValue: answers.painPointCustom,
			onSelect: (id) => setAnswer("painPoint", id),
			onCustomChange: (v) => {
				setAnswer("painPoint", "__other__");
				setAnswer("painPointCustom", v);
			},
			customLabel: t("wizard.fields.otherPain"),
			gridCols: "grid grid-cols-2 gap-2"
		})] })]
	});
}
function PlatformToneStep() {
	const { answers, setAnswer } = useWizardStore();
	const { t } = useLanguage();
	const platforms = [
		{
			id: "TikTok",
			label: t("wizard.platforms.tiktok"),
			icon: "🎵"
		},
		{
			id: "Instagram Reels",
			label: t("wizard.platforms.reels"),
			icon: "📸"
		},
		{
			id: "YouTube Shorts",
			label: t("wizard.platforms.shorts"),
			icon: "▶️"
		},
		{
			id: "YouTube (طويل)",
			label: t("wizard.platforms.youtubeLong"),
			icon: "🎥"
		},
		{
			id: "Facebook Reels",
			label: t("wizard.platforms.facebook"),
			icon: "📘"
		},
		{
			id: "LinkedIn",
			label: t("wizard.platforms.linkedin"),
			icon: "💼"
		},
		{
			id: "X (Twitter)",
			label: t("wizard.platforms.x"),
			icon: "🐦"
		},
		{
			id: "مدونة / Blog",
			label: t("wizard.platforms.blog"),
			icon: "📝"
		},
		{
			id: "كل المنصات",
			label: t("wizard.platforms.all"),
			icon: "🌐"
		}
	];
	const tones = [
		{
			id: "كوميدي",
			label: t("wizard.tones.comedic"),
			icon: "😄"
		},
		{
			id: "جدي احترافي",
			label: t("wizard.tones.serious"),
			icon: "🎩"
		},
		{
			id: "تحفيزي",
			label: t("wizard.tones.inspirational"),
			icon: "🔥"
		},
		{
			id: "تعليمي مبسط",
			label: t("wizard.tones.educational"),
			icon: "📖"
		},
		{
			id: "صادم ومثير للجدل",
			label: t("wizard.tones.provocative"),
			icon: "⚡"
		},
		{
			id: "هادئ وودود",
			label: t("wizard.tones.calm"),
			icon: "☕"
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mb-2 text-xs font-bold text-text-muted",
			children: t("wizard.fields.platform")
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OptionListWithCustom, {
			options: platforms,
			value: answers.platform,
			customValue: answers.platformCustom,
			onSelect: (id) => setAnswer("platform", id),
			onCustomChange: (v) => {
				setAnswer("platform", "__other__");
				setAnswer("platformCustom", v);
			},
			customLabel: t("wizard.fields.otherPlatform"),
			gridCols: "grid grid-cols-2 gap-2 sm:grid-cols-3"
		})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mb-2 text-xs font-bold text-text-muted",
			children: t("wizard.fields.tone")
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OptionListWithCustom, {
			options: tones,
			value: answers.tone,
			customValue: answers.toneCustom,
			onSelect: (id) => setAnswer("tone", id),
			onCustomChange: (v) => {
				setAnswer("tone", "__other__");
				setAnswer("toneCustom", v);
			},
			customLabel: t("wizard.fields.otherTone"),
			gridCols: "grid grid-cols-2 gap-2 sm:grid-cols-3"
		})] })]
	});
}
function TopicCtaStep() {
	const { answers, setAnswer } = useWizardStore();
	const { t } = useLanguage();
	const ctas = [
		{
			id: "يتابع الحساب",
			label: t("wizard.ctas.follow"),
			icon: "➕"
		},
		{
			id: "يكتب تعليق",
			label: t("wizard.ctas.comment"),
			icon: "💬"
		},
		{
			id: "يسجل في كورس",
			label: t("wizard.ctas.course"),
			icon: "🎓"
		},
		{
			id: "يشارك الفيديو",
			label: t("wizard.ctas.share"),
			icon: "🔁"
		},
		{
			id: "يبدأ يتعلم / يجرب",
			label: t("wizard.ctas.start"),
			icon: "🚀"
		},
		{
			id: "يشتري منتج",
			label: t("wizard.ctas.buy"),
			icon: "🛒"
		},
		{
			id: "ينضم للقائمة البريدية",
			label: t("wizard.ctas.newsletter"),
			icon: "📧"
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextAreaInput, {
			label: t("wizard.fields.topic"),
			hint: t("wizard.fields.topicHint"),
			value: answers.topic || "",
			onChange: (v) => setAnswer("topic", v),
			placeholder: t("wizard.fields.topicPlaceholder")
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mb-2 text-xs font-bold text-text-muted",
			children: t("wizard.fields.cta")
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OptionListWithCustom, {
			options: ctas,
			value: answers.ctaType,
			customValue: answers.ctaTypeCustom,
			onSelect: (id) => setAnswer("ctaType", id),
			onCustomChange: (v) => {
				setAnswer("ctaType", "__other__");
				setAnswer("ctaTypeCustom", v);
			},
			customLabel: t("wizard.fields.otherCta")
		})] })]
	});
}
function FinalSettingsStep() {
	const { answers, setAnswer } = useWizardStore();
	const { t } = useLanguage();
	const isVideo = answers.contentType === "short-video" || answers.contentType === "long-video";
	const isArticle = answers.contentType === "article";
	const hookStyles = [
		{
			id: "صادم",
			label: t("wizard.hookStyles.shocking"),
			icon: "⚡"
		},
		{
			id: "فضولي",
			label: t("wizard.hookStyles.curious"),
			icon: "🔍"
		},
		{
			id: "عاطفي",
			label: t("wizard.hookStyles.emotional"),
			icon: "❤️"
		},
		{
			id: "موقف يومي",
			label: t("wizard.hookStyles.dailyScene"),
			icon: "🏠"
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LengthModeSlider, {
				value: answers.lengthMode,
				onChange: (v) => setAnswer("lengthMode", v)
			}),
			answers.learningStyle !== "coach" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChainingToggle, {
				value: answers.promptFormat,
				onChange: (v) => setAnswer("promptFormat", v)
			}),
			isVideo && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-2 text-xs font-bold text-text-muted",
					children: t("wizard.settings.hookStyle")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-2 text-xs text-text-muted",
					children: t("wizard.settings.hookStyleHint")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-2 gap-2 sm:grid-cols-4",
					children: hookStyles.map((style) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChoiceCard, {
						label: style.label,
						icon: style.icon,
						selected: answers.hookStyle === style.id,
						onSelect: () => setAnswer("hookStyle", answers.hookStyle === style.id ? void 0 : style.id)
					}, style.id))
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextAreaInput, {
				label: t("wizard.settings.duration"),
				hint: t("wizard.settings.durationHint"),
				value: answers.duration || "",
				onChange: (v) => setAnswer("duration", v),
				rows: 1,
				placeholder: t("wizard.fields.durationPlaceholder")
			})] }),
			isArticle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextAreaInput, {
				label: t("wizard.settings.wordCount"),
				hint: t("wizard.settings.wordCountHint"),
				value: answers.wordCount || "",
				onChange: (v) => setAnswer("wordCount", v),
				rows: 1,
				placeholder: t("wizard.fields.wordCountPlaceholder")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-2 text-xs font-bold text-text-muted",
				children: t("wizard.settings.aiModel")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 gap-2 sm:grid-cols-5",
				children: [
					"chatgpt",
					"claude",
					"gemini",
					"deepseek",
					"agnostic"
				].map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChoiceCard, {
					label: m,
					selected: answers.aiModel === m,
					onSelect: () => setAnswer("aiModel", m)
				}, m))
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextAreaInput, {
				label: t("wizard.settings.notes"),
				value: answers.additionalNotes || "",
				onChange: (v) => setAnswer("additionalNotes", v),
				rows: 2,
				placeholder: t("wizard.settings.notesPlaceholder")
			})
		]
	});
}
function buildLearnSkillSteps(t) {
	return [
		{
			title: t("wizard.steps.skillTerm.title"),
			hint: t("wizard.steps.skillTerm.hint"),
			validate: (a) => !!a.skillTermId,
			render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SkillTermStep, {})
		},
		{
			title: t("wizard.steps.learningStyle.title"),
			hint: t("wizard.steps.learningStyle.hint"),
			validate: (a) => !!a.learningStyle && (a.learningStyle === "coach" || !!a.depthLevel),
			render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LearningStyleStep, {})
		},
		{
			title: t("wizard.steps.final.title"),
			hint: t("wizard.steps.final.hint"),
			validate: () => true,
			render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinalSettingsStep, {})
		}
	];
}
function SkillTermStep() {
	const { answers, setAnswer } = useWizardStore();
	const { t } = useLanguage();
	const [terms, setTerms] = (0, import_react.useState)([]);
	const [q, setQ] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		loadTermMetadata().then((m) => setTerms(m.terms.map((t) => ({
			id: t.id,
			term_en: t.term_en,
			term_ar: t.term_ar
		}))));
	}, []);
	const filtered = terms.filter((t) => t.term_en.toLowerCase().includes(q.toLowerCase()) || t.term_ar.includes(q));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		value: q,
		onChange: (e) => setQ(e.target.value),
		placeholder: t("explorer.searchPlaceholder"),
		className: "mb-3 w-full rounded-lg border border-border bg-surface p-2.5 text-sm text-text-primary placeholder:text-text-muted focus:border-primary focus:outline-none"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "max-h-[400px] space-y-2 overflow-y-auto",
		children: filtered.slice(0, 20).map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChoiceCard, {
			label: `${t.term_ar} — ${t.term_en}`,
			selected: answers.skillTermId === t.id,
			onSelect: () => setAnswer("skillTermId", t.id)
		}, t.id))
	})] });
}
function LearningStyleStep() {
	const { answers, setAnswer } = useWizardStore();
	const { t } = useLanguage();
	const styles = [{
		id: "theory",
		label: t("wizard.learningStyles.theory"),
		desc: t("wizard.learningStyles.theoryDesc"),
		icon: "📖"
	}, {
		id: "coach",
		label: t("wizard.learningStyles.coach"),
		desc: t("wizard.fields.coachDescription"),
		icon: "🎯"
	}];
	const depths = [
		{
			id: "quick",
			label: t("wizard.depths.quick"),
			desc: t("wizard.depths.quickDesc")
		},
		{
			id: "medium",
			label: t("wizard.depths.medium"),
			desc: t("wizard.depths.mediumDesc")
		},
		{
			id: "deep",
			label: t("wizard.depths.deep"),
			desc: t("wizard.depths.deepDesc")
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-2",
				children: styles.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChoiceCard, {
					label: s.label,
					description: s.desc,
					icon: s.icon,
					selected: answers.learningStyle === s.id,
					onSelect: () => setAnswer("learningStyle", s.id)
				}, s.id))
			}),
			answers.learningStyle === "theory" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-2 text-xs font-bold text-text-muted",
				children: t("wizard.fields.depth")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-2",
				children: depths.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChoiceCard, {
					label: o.label,
					description: o.desc,
					selected: answers.depthLevel === o.id,
					onSelect: () => setAnswer("depthLevel", o.id)
				}, o.id))
			})] }),
			answers.learningStyle === "coach" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-lg border border-accent/30 bg-accent/5 p-3 text-xs text-text-secondary",
				children: ["🎯 ", t("wizard.fields.coachNotice")]
			})
		]
	});
}
function buildChannelStrategySteps(t) {
	return [
		{
			title: t("wizard.steps.channelNiche.title"),
			hint: t("wizard.fields.channelNicheHint"),
			validate: (a) => isOptionAnswered(a.channelNiche, a.channelNicheCustom),
			render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChannelNicheStep, {})
		},
		{
			title: t("wizard.steps.channelDetails.title"),
			hint: t("wizard.steps.channelDetails.hint"),
			validate: (a) => isOptionAnswered(a.channelPlatform, a.channelPlatformCustom) && !!a.channelGoal && !!a.channelStatus,
			render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChannelDetailsStep, {})
		},
		{
			title: t("wizard.steps.presentation.title"),
			hint: t("wizard.steps.presentation.hint"),
			validate: (a) => !!a.presentationStyle,
			render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PresentationStep, {})
		},
		{
			title: t("wizard.steps.final.title"),
			hint: t("wizard.steps.final.hint"),
			validate: () => true,
			render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinalSettingsStep, {})
		}
	];
}
function PresentationStep() {
	const { answers, setAnswer } = useWizardStore();
	const { t } = useLanguage();
	const styles = [
		{
			id: "ظهور أمام الكاميرا",
			label: t("wizard.presentationStyles.onCamera"),
			icon: "🎥"
		},
		{
			id: "تعليق صوتي",
			label: t("wizard.presentationStyles.voiceOver"),
			icon: "🎙️"
		},
		{
			id: "نصوص ورسوم",
			label: t("wizard.fields.textAndGraphics"),
			icon: "📝"
		},
		{
			id: "مقابلات وحوارات",
			label: t("wizard.fields.interviews"),
			icon: "🗣️"
		},
		{
			id: "مزيج من الأساليب",
			label: t("wizard.presentationStyles.mixed"),
			icon: "✨"
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid gap-2 sm:grid-cols-2",
		children: styles.map((style) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChoiceCard, {
			label: style.label,
			icon: style.icon,
			selected: answers.presentationStyle === style.id,
			onSelect: () => setAnswer("presentationStyle", style.id)
		}, style.id))
	});
}
function ChannelNicheStep() {
	const { answers, setAnswer } = useWizardStore();
	const { t } = useLanguage();
	const niches = [
		{
			id: "تقنية وبرمجة",
			label: t("wizard.niches.tech"),
			icon: "💻"
		},
		{
			id: "صحة ولياقة",
			label: t("wizard.niches.health"),
			icon: "💪"
		},
		{
			id: "طبخ وأكل",
			label: t("wizard.niches.food"),
			icon: "🍳"
		},
		{
			id: "مالية واستثمار",
			label: t("wizard.niches.finance"),
			icon: "💰"
		},
		{
			id: "أعمال وريادة",
			label: t("wizard.niches.business"),
			icon: "📈"
		},
		{
			id: "تعليم وتطوير",
			label: t("wizard.niches.education"),
			icon: "🎓"
		},
		{
			id: "تسويق وبيع",
			label: t("wizard.niches.marketing"),
			icon: "📣"
		},
		{
			id: "ترفيه وفنون",
			label: t("wizard.niches.entertainment"),
			icon: "🎨"
		},
		{
			id: "تطوير ذات",
			label: t("wizard.niches.selfDev"),
			icon: "🌱"
		},
		{
			id: "سفر",
			label: t("wizard.niches.travel"),
			icon: "✈️"
		},
		{
			id: "رياضة",
			label: t("wizard.niches.sports"),
			icon: "⚽"
		},
		{
			id: "جمال وعناية",
			label: t("wizard.niches.beauty"),
			icon: "💄"
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OptionListWithCustom, {
		options: niches,
		value: answers.channelNiche,
		customValue: answers.channelNicheCustom,
		onSelect: (id) => setAnswer("channelNiche", id),
		onCustomChange: (v) => {
			setAnswer("channelNiche", "__other__");
			setAnswer("channelNicheCustom", v);
		},
		customLabel: t("wizard.fields.otherNiche"),
		gridCols: "grid gap-2 sm:grid-cols-2"
	});
}
function ChannelDetailsStep() {
	const { answers, setAnswer } = useWizardStore();
	const { t } = useLanguage();
	const platforms = [
		{
			id: "YouTube",
			label: t("wizard.platforms.youtube"),
			icon: "▶️"
		},
		{
			id: "TikTok",
			label: t("wizard.platforms.tiktok"),
			icon: "🎵"
		},
		{
			id: "Instagram Reels",
			label: t("wizard.platforms.reels"),
			icon: "📸"
		},
		{
			id: "LinkedIn",
			label: t("wizard.platforms.linkedin"),
			icon: "💼"
		},
		{
			id: "X (Twitter)",
			label: t("wizard.platforms.x"),
			icon: "🐦"
		},
		{
			id: "مدونة / Blog",
			label: t("wizard.platforms.blog"),
			icon: "📝"
		},
		{
			id: "Medium",
			label: t("wizard.platforms.medium"),
			icon: "🖋️"
		},
		{
			id: "Podcast",
			label: t("wizard.platforms.podcast"),
			icon: "🎙️"
		},
		{
			id: "أكثر من منصة",
			label: t("wizard.platforms.multiple"),
			icon: "🌐"
		}
	];
	const goals = [
		{
			id: "مشاهدات ومتابعين",
			label: t("wizard.channelGoals.views"),
			icon: "📈"
		},
		{
			id: "مبيعات",
			label: t("wizard.channelGoals.sales"),
			icon: "🛒"
		},
		{
			id: "براند شخصي",
			label: t("wizard.channelGoals.brand"),
			icon: "⭐"
		},
		{
			id: "تعليم ونشر معرفة",
			label: t("wizard.channelGoals.education"),
			icon: "📚"
		},
		{
			id: "بناء مجتمع",
			label: t("wizard.channelGoals.community"),
			icon: "👥"
		},
		{
			id: "فرص عمل / استشارات",
			label: t("wizard.channelGoals.jobs"),
			icon: "💼"
		}
	];
	const statuses = [
		{
			id: "قناة جديدة",
			label: t("wizard.channelStatuses.new")
		},
		{
			id: "قناة موجودة وأريد تطويرها",
			label: t("wizard.channelStatuses.existing")
		},
		{
			id: "لدي جمهور وأريد مضاعفته",
			label: t("wizard.channelStatuses.audience")
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-2 text-xs font-bold text-text-muted",
				children: t("wizard.fields.platform")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OptionListWithCustom, {
				options: platforms,
				value: answers.channelPlatform,
				customValue: answers.channelPlatformCustom,
				onSelect: (id) => setAnswer("channelPlatform", id),
				onCustomChange: (v) => {
					setAnswer("channelPlatform", "__other__");
					setAnswer("channelPlatformCustom", v);
				},
				customLabel: t("wizard.fields.otherPlatform"),
				gridCols: "grid grid-cols-2 gap-2 sm:grid-cols-3"
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-2 text-xs font-bold text-text-muted",
				children: t("wizard.fields.goal")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 gap-2",
				children: goals.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChoiceCard, {
					label: o.label,
					icon: o.icon,
					selected: answers.channelGoal === o.id,
					onSelect: () => setAnswer("channelGoal", o.id)
				}, o.id))
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-2 text-xs font-bold text-text-muted",
				children: t("wizard.fields.channelStatus")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-2",
				children: statuses.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChoiceCard, {
					label: o.label,
					selected: answers.channelStatus === o.id,
					onSelect: () => setAnswer("channelStatus", o.id)
				}, o.id))
			})] })
		]
	});
}
function buildIdeaEvaluationSteps(t) {
	return [
		{
			title: t("wizard.steps.idea.title"),
			hint: t("wizard.steps.idea.hint"),
			validate: (a) => !!a.ideaText?.trim() && a.ideaText.trim().length > 10 && isOptionAnswered(a.ideaNiche, a.ideaNicheCustom),
			render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IdeaTextStep, {})
		},
		{
			title: t("wizard.steps.strictness.title"),
			hint: t("wizard.steps.strictness.hint"),
			validate: (a) => !!a.evaluationStrictness,
			render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StrictnessStep, {})
		},
		{
			title: t("wizard.steps.final.title"),
			hint: t("wizard.steps.final.hint"),
			validate: () => true,
			render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinalSettingsStep, {})
		}
	];
}
function IdeaTextStep() {
	const { answers, setAnswer } = useWizardStore();
	const { t } = useLanguage();
	const niches = [
		{
			id: "تقنية وبرمجة",
			label: t("wizard.niches.tech"),
			icon: "💻"
		},
		{
			id: "صحة ولياقة",
			label: t("wizard.niches.health"),
			icon: "💪"
		},
		{
			id: "طبخ وأكل",
			label: t("wizard.niches.food"),
			icon: "🍳"
		},
		{
			id: "مالية واستثمار",
			label: t("wizard.niches.finance"),
			icon: "💰"
		},
		{
			id: "أعمال وريادة",
			label: t("wizard.niches.business"),
			icon: "📈"
		},
		{
			id: "تعليم وتطوير",
			label: t("wizard.niches.education"),
			icon: "🎓"
		},
		{
			id: "تسويق وبيع",
			label: t("wizard.niches.marketing"),
			icon: "📣"
		},
		{
			id: "ترفيه وفنون",
			label: t("wizard.niches.entertainment"),
			icon: "🎨"
		},
		{
			id: "تطوير ذات",
			label: t("wizard.niches.selfDev"),
			icon: "🌱"
		}
	];
	const contentTypes = [
		{
			id: "فيديو قصير",
			label: t("wizard.ideaContentTypes.shortVideo"),
			icon: "🎬"
		},
		{
			id: "فيديو طويل",
			label: t("wizard.ideaContentTypes.longVideo"),
			icon: "📹"
		},
		{
			id: "سلسلة",
			label: t("wizard.ideaContentTypes.series"),
			icon: "🔗"
		},
		{
			id: "مقال",
			label: t("wizard.ideaContentTypes.article"),
			icon: "📝"
		},
		{
			id: "بوست",
			label: t("wizard.ideaContentTypes.post"),
			icon: "📱"
		},
		{
			id: "Carousel",
			label: t("wizard.ideaContentTypes.carousel"),
			icon: "🎠"
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextAreaInput, {
				label: t("wizard.fields.idea"),
				value: answers.ideaText || "",
				onChange: (v) => setAnswer("ideaText", v),
				rows: 5,
				placeholder: t("wizard.fields.ideaPlaceholder")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-2 text-xs font-bold text-text-muted",
				children: t("wizard.fields.ideaNiche")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OptionListWithCustom, {
				options: niches,
				value: answers.ideaNiche,
				customValue: answers.ideaNicheCustom,
				onSelect: (id) => setAnswer("ideaNiche", id),
				onCustomChange: (v) => {
					setAnswer("ideaNiche", "__other__");
					setAnswer("ideaNicheCustom", v);
				},
				customLabel: t("wizard.fields.otherNiche"),
				gridCols: "grid grid-cols-2 gap-2 sm:grid-cols-3"
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-2 text-xs font-bold text-text-muted",
				children: t("wizard.fields.ideaContentType")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OptionListWithCustom, {
				options: contentTypes,
				value: answers.ideaContentType,
				customValue: answers.ideaContentTypeCustom,
				onSelect: (id) => setAnswer("ideaContentType", id),
				onCustomChange: (v) => {
					setAnswer("ideaContentType", "__other__");
					setAnswer("ideaContentTypeCustom", v);
				},
				customLabel: t("wizard.fields.otherContentType"),
				gridCols: "grid grid-cols-2 gap-2 sm:grid-cols-3"
			})] })
		]
	});
}
function StrictnessStep() {
	const { answers, setAnswer } = useWizardStore();
	const { t } = useLanguage();
	const levels = [
		{
			id: "gentle",
			label: t("wizard.strictness.gentle"),
			desc: t("wizard.strictness.gentleDesc"),
			icon: "🌱"
		},
		{
			id: "balanced",
			label: t("wizard.strictness.balanced"),
			desc: t("wizard.strictness.balancedDesc"),
			icon: "⚖️"
		},
		{
			id: "brutal",
			label: t("wizard.strictness.brutal"),
			desc: t("wizard.strictness.brutalDesc"),
			icon: "🔥"
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid gap-2",
		children: levels.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChoiceCard, {
			label: o.label,
			description: o.desc,
			icon: o.icon,
			selected: answers.evaluationStrictness === o.id,
			onSelect: () => setAnswer("evaluationStrictness", o.id)
		}, o.id))
	});
}
function buildCustomIntroSteps(t) {
	return [{
		title: t("wizard.custom.title"),
		validate: () => true,
		render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CustomIntroStep, {})
	}];
}
function CustomIntroStep() {
	const { t } = useLanguage();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "rounded-lg border border-warning/40 bg-warning/10 p-4 text-sm text-warning",
		children: t("wizard.custom.instruction")
	});
}
export { WizardPage as default };

//# sourceMappingURL=WizardPage-LKfgvz49.js.map