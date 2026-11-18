import { r as __toESM } from "./rolldown-runtime.js";
import { C as ChevronDown, D as require_jsx_runtime, R as require_react, S as ChevronUp, _ as FileBraces, b as Copy, g as FileCode, h as FileText, t as Markdown, w as Check } from "./react-vendor.js";
import { a as siteConfig, r as useLanguage, t as cn } from "./cn.js";
import { c as useDedicationStore, l as Button, t as getEnglishExampleSync } from "./index.js";
import { t as Card } from "./Card.js";
import { t as remarkGfm } from "./markdown-vendor.js";
import { t as copyToClipboard } from "./clipboard.js";
// src/components/preview/CopyButton.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
function CopyButton({ text, label, size = "md" }) {
	const [copied, setCopied] = (0, import_react.useState)(false);
	const open = useDedicationStore((s) => s.open);
	const { t } = useLanguage();
	const handleCopy = async () => {
		if (await copyToClipboard(text)) {
			setCopied(true);
			setTimeout(() => setCopied(false), 2e3);
			open("copy");
		}
	};
	const finalLabel = label || t("common.copy");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
		onClick: handleCopy,
		size,
		variant: copied ? "secondary" : "primary",
		children: [copied ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { size: 16 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { size: 16 }), copied ? t("common.copied") : finalLabel]
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
	const { t } = useLanguage();
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
						children: t("dna.title")
					})]
				}), strategy && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 text-xs",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-text-muted",
							children: [t("dna.strategy"), ":"]
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
	const { t } = useLanguage();
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
						children: t("preview.ready")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-xs text-text-muted",
						children: t("preview.meta", {
							terms: prompt.meta.selectedTermIds.length,
							chars: prompt.meta.totalChars.toLocaleString(),
							format: prompt.meta.isChained ? t("preview.chained") : t("preview.single")
						})
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CopyButton, {
						text: activePrompt,
						label: t("preview.copyPrompt")
					})]
				}),
				isChained && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mb-4 flex gap-2 overflow-x-auto",
					children: prompt.prompts.map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setActiveIdx(i),
						className: cn("whitespace-nowrap rounded-lg border px-3 py-1.5 text-xs font-bold transition-all", i === activeIdx ? "border-primary bg-primary/10 text-primary" : "border-border bg-surface text-text-secondary hover:border-primary/50"),
						children: t("preview.stage", { n: i + 1 })
					}, i))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => setExpanded((v) => !v),
					className: "mb-3 flex items-center gap-1 text-sm font-bold text-primary hover:underline",
					children: [
						expanded ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronUp, { size: 16 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { size: 16 }),
						expanded ? t("preview.hide") : t("preview.show"),
						" ",
						t("preview.prompt")
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
						children: t("preview.export")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExportMenu, { prompt })]
				})
			]
		})]
	});
}
// src/lib/engine/TermSelector.ts
var LENGTH_TARGETS = {
	compact: 6,
	standard: 15,
	comprehensive: 25
};
var PLATFORM_TAGS = {
	tiktok: [
		"short-form",
		"hook",
		"retention",
		"vertical",
		"scroll-stopper"
	],
	reels: [
		"short-form",
		"hook",
		"retention",
		"vertical"
	],
	"youtube-shorts": [
		"short-form",
		"hook",
		"retention"
	],
	"youtube-long": [
		"storytelling",
		"depth",
		"long-form",
		"watch-time"
	],
	facebook: [
		"relatability",
		"shareability",
		"storytelling"
	],
	linkedin: [
		"authority",
		"professionalism",
		"credibility",
		"business"
	],
	x: [
		"hook",
		"punchy",
		"opinion",
		"provocative"
	],
	blog: [
		"depth",
		"structure",
		"seo",
		"long-form"
	],
	podcast: [
		"storytelling",
		"conversation",
		"depth"
	],
	all: []
};
var TONE_TAGS = {
	comedic: [
		"surprise",
		"relatability",
		"shock",
		"energy",
		"humor"
	],
	serious: [
		"credibility",
		"authority",
		"depth",
		"professionalism"
	],
	inspirational: [
		"emotional-arc",
		"transformation",
		"hope",
		"story"
	],
	educational: [
		"framework",
		"structure",
		"clarity",
		"step-by-step"
	],
	provocative: [
		"shock",
		"contrarian",
		"curiosity",
		"emotion"
	],
	calm: [
		"relatability",
		"empathy",
		"storytelling"
	]
};
var CITATION_KEYWORDS = [
	"HubSpot",
	"Cialdini",
	"Harvard",
	"Stanford",
	"Berkeley",
	"Sprout",
	"BuzzSumo",
	"Wistia",
	"Neil Patel",
	"Copyblogger",
	"SEMrush",
	"Shopify",
	"ConvertKit",
	"Unbounce",
	"Pixar",
	"Robert McKee",
	"University of Pennsylvania",
	"Social Media Examiner",
	"Vidyard"
];
function selectTerms(metadata, answers, compatibility, derived) {
	const allTerms = metadata.terms;
	const mode = answers.mode;
	if (mode === "custom" && answers.customTermIds?.length) return wrapResult(allTerms.filter((t) => answers.customTermIds.includes(t.id)), "Custom manual selection");
	if (mode === "learn-skill" && answers.skillTermId) {
		const target = allTerms.find((t) => t.id === answers.skillTermId);
		if (target) {
			const isCoach = answers.learningStyle === "coach";
			const relatedIds = isCoach ? /* @__PURE__ */ new Set() : new Set(target.related_terms.slice(0, 3));
			const related = allTerms.filter((t) => relatedIds.has(t.id));
			const selected = [target, ...related];
			const reasonSuffix = isCoach ? "(coach: focus term only)" : `(+${related.length} related)`;
			return wrapResult(selected, `Learn-skill focus: ${target.term_en} ${reasonSuffix}`);
		}
	}
	const limit = LENGTH_TARGETS[answers.lengthMode || "standard"];
	const pass1 = allTerms.map((t) => ({
		term: t,
		base: computeBaseScore(t, answers, mode, derived)
	}));
	pass1.sort((a, b) => b.base - a.base);
	const top30 = pass1.slice(0, 30);
	const compatLookup = buildCompatLookup(compatibility);
	const pass2 = top30.map(({ term, base }) => {
		return {
			term,
			base,
			withCompat: base + .1 * normalizeCompat(avgCompatibilityWithSet(term.id, top30.map((x) => x.term.id), compatLookup)) * 100
		};
	});
	pass2.sort((a, b) => b.withCompat - a.withCompat);
	const categoryCap = Math.max(3, Math.floor(limit / 3));
	const categoryCount = {};
	const selected = [];
	for (const { term } of pass2) {
		categoryCount[term.category] = (categoryCount[term.category] || 0) + 1;
		if (categoryCount[term.category] <= categoryCap) selected.push(term);
		if (selected.length >= limit) break;
	}
	return wrapResult(selected, `6-criteria selection (top ${selected.length} of ${pass2.length})`);
}
function computeBaseScore(term, answers, mode, derived) {
	const R = computeRelevance(term, answers, mode);
	const P = computePlatformFit(term, derived);
	const T = computeToneFit(term, derived);
	const D = computeDifficultyFit(term, derived);
	const Q = computeQualityEvidence(term);
	return .3 * R + .2 * P + .15 * T + .15 * D + .1 * Q;
}
function computeRelevance(term, answers, mode) {
	const weight = (term.injection_weight[mode] || 0) * 10;
	let bonus = 0;
	const painLower = (answers.painPoint || "").toLowerCase();
	if (painLower.includes("صعب") && term.tags.includes("framework")) bonus += 5;
	if (painLower.includes("يبدأ") && term.tags.includes("hook")) bonus += 5;
	if (painLower.includes("معلومات خاطئة") && term.tags.includes("shock")) bonus += 8;
	return Math.min(100, weight + bonus);
}
function computePlatformFit(term, derived) {
	const platformTags = PLATFORM_TAGS[derived.platformKey] || [];
	if (platformTags.length === 0) return 50;
	const hits = term.tags.filter((t) => platformTags.includes(t)).length;
	return Math.min(100, hits * 25);
}
function computeToneFit(term, derived) {
	const toneTags = TONE_TAGS[derived.toneKey] || [];
	if (toneTags.length === 0) return 50;
	const hits = term.tags.filter((t) => toneTags.includes(t)).length;
	return Math.min(100, hits * 30);
}
function computeDifficultyFit(term, derived) {
	return {
		beginner: {
			beginner: 100,
			intermediate: 60,
			advanced: 20
		},
		intermediate: {
			beginner: 70,
			intermediate: 100,
			advanced: 70
		},
		advanced: {
			beginner: 40,
			intermediate: 70,
			advanced: 100
		}
	}[derived.audienceLevel]?.[term.complexity] ?? 50;
}
function computeQualityEvidence(term) {
	let score = 50;
	for (const kw of CITATION_KEYWORDS) if (term.prompt_summary.includes(kw)) score += 8;
	if (term.prompt_summary.length > 200) score += 5;
	if (term.related_terms.length >= 4) score += 5;
	if (term.prompt_example.includes("🇪🇬") || term.prompt_example.length > 100) score += 5;
	return Math.min(100, score);
}
function buildCompatLookup(file) {
	const map = /* @__PURE__ */ new Map();
	for (const p of file.pairs) {
		const key = p.a < p.b ? `${p.a}-${p.b}` : `${p.b}-${p.a}`;
		map.set(key, p.score);
	}
	return map;
}
function avgCompatibilityWithSet(termId, otherIds, lookup) {
	let sum = 0;
	let count = 0;
	for (const other of otherIds) {
		if (other === termId) continue;
		const key = termId < other ? `${termId}-${other}` : `${other}-${termId}`;
		sum += lookup.get(key) ?? .2;
		count++;
	}
	return count > 0 ? sum / count : .2;
}
function normalizeCompat(raw) {
	return (raw + 1) / 2;
}
function wrapResult(selected, reason) {
	return {
		selected,
		reason,
		totalWeight: selected.reduce((sum, t) => sum + Object.values(t.injection_weight).reduce((s, w) => s + w, 0), 0),
		categoryBreakdown: selected.reduce((acc, t) => {
			acc[t.category] = (acc[t.category] || 0) + 1;
			return acc;
		}, {})
	};
}
// src/lib/engine/protocol-translations-en.ts
var COMMON_RULES_EN = {
	outputLanguageDefault: "Respond to the user in clear, professional English. Do not use Arabic unless quoting an example.",
	outputLanguageOverride: "If user context specifies output_language = 'ar', respond in professional Egyptian Arabic. If 'bilingual', provide parallel English + Arabic versions.",
	bilingualExamples: "Every time you provide an example, provide TWO versions: (1) 🇺🇸 English example, (2) 🇪🇬 Egyptian Arabic example. Always label them explicitly.",
	frameworkReferences: "Reference specific frameworks by their English names (AIDA, PAS, FAB, WIIFM, Open Loops, Bucket Brigades, Pattern Interrupt, Curiosity Gap, etc.) so the user can research them independently. Never say 'a framework'.",
	emojis: "Use strategic emojis sparingly: 🎯 for goals, 🚀 for action, 💡 for insights, 📊 for analysis, ✅ for checklists, ⚠️ for warnings, 🎣 for hooks, 📝 for content.",
	closing: "End every response with follow-up questions or next steps. Never end flat. The user must always know 'what do I do next?'.",
	antiGeneric: "Never give generic advice. Every recommendation must trace to a specific term in the knowledge base.",
	noFlattery: "In critique/evaluation mode, do NOT open with praise. Lead with the numeric score and the flaws. Praise, if any, comes last.",
	formatting: "Use markdown structure: H2 for main sections, H3 for sub-sections, tables for comparisons, numbered lists for steps, **bold** for key terms."
};
var PROTOCOL_EN_OVERRIDES = {
	"content-creation": {
		behaviorRuleFixes: [{
			find: "لا تنسى اللايك والشير",
			replace: "Don't forget to like and share"
		}, {
			find: "أغنى المسوقين",
			replace: "the richest marketers"
		}],
		questionProtocol: {
			firstMessagePattern: "Excellent! Let's create [content type] that stops the scroll from the very first second. Before I write a single word, I need 5 quick answers:",
			questions: [
				{
					key: "audience",
					question: "Who is the target audience?"
				},
				{
					key: "goal",
					question: "What's the primary goal of the content?"
				},
				{
					key: "pain_point",
					question: "What's the biggest problem your audience faces?"
				},
				{
					key: "platform",
					question: "Where will you publish?"
				},
				{
					key: "cta",
					question: "What should the viewer do after the content?"
				}
			]
		},
		closingQuestions: [
			"Do you want an alternative Hook with a different tone (comedic / serious / shocking)?",
			"Would you like me to turn the script into a detailed Storyboard for each scene?",
			"Want me to add suggested music cues and transitions for each second?"
		]
	},
	"learn-skill": {
		behaviorRuleFixes: [
			{
				find: "قسم Hook & Micro Hooks",
				replace: "section 'Hook & Micro Hooks'"
			},
			{
				find: "كتاب «أهم 50 مصطلح في عالم صناعة المحتوى»",
				replace: "the source book 'Top 50 Content Creation Terms'"
			},
			{
				find: "هاني شاكر",
				replace: "Hani Shaker"
			}
		],
		questionProtocol: {
			firstMessagePattern: "Based on the source book 'Top 50 Content Creation Terms', specifically the [section name] section, I'll break down [concept name] into [N] golden rules:",
			clarificationPrompt: "If you want a deeper or lighter explanation, tell me your current level (beginner/intermediate/advanced) and I'll adjust the depth."
		},
		closingQuestions: [
			"Want a practical example applied to your current content?",
			"Shall I give you a quick 3-question quiz to verify your understanding?",
			"Want to move to the next term in the same section?"
		]
	},
	"learn-skill-coach": {
		behaviorRuleFixes: [{
			find: "هياخدك",
			replace: "will guide you"
		}],
		questionProtocol: {
			firstMessagePattern: "All set — we're going to practice [term name]. I'll give you ONE exercise now — do it and send me the result, and I'll grade you out of 50.",
			clarificationPrompt: "If you need an example of the exercise before doing it, say so. If you're ready, do it and send."
		},
		closingQuestions: [
			"Want to move on to a harder exercise, or retry this one with your edits?",
			"Want to apply the same exercise to another term?",
			"Want extra tips on your weakest area?"
		]
	},
	"channel-strategy": {
		behaviorRuleFixes: [{
			find: "هاني شاكر",
			replace: "Hani Shaker"
		}],
		questionProtocol: {
			firstMessagePattern: "Currently, the knowledge source available to me is 'Top 50 Content Creation Terms' by Hani Shaker. Let me show you how to use it to grow your channel, then I'll ask you 5 diagnostic questions to build the plan:",
			diagnosticQuestions: [
				{
					key: "niche",
					question: "What's your channel's specific niche?"
				},
				{
					key: "platform",
					question: "Which platform do you publish on? (YouTube / TikTok / Instagram / Multiple)"
				},
				{
					key: "goal",
					question: "What's your primary goal? (Views / Sales / Personal brand / Education)"
				},
				{
					key: "status",
					question: "What's your channel's current status? (New / Existing but want to grow / Have audience and want to scale)"
				},
				{
					key: "presentation",
					question: "Presentation style? (On camera / Voice Over / No appearance / Mixed)"
				}
			]
		},
		closingQuestions: ["After answering the 5 questions, I can build you a 30-day plan with detailed scenarios ready to shoot.", "Want to start with analyzing your current channel before building the plan?"]
	},
	"idea-evaluation": {
		behaviorRuleFixes: [
			{
				find: "فكرة حلوة لكن",
				replace: "good idea but"
			},
			{
				find: "المصطلح مش Relatable للمبتدئ",
				replace: "the term is not relatable to beginners"
			},
			{
				find: "بص، هقولك رأيي من غير مجاملة",
				replace: "Look, I'll give you my honest opinion without sugar-coating"
			}
		],
		questionProtocol: {
			firstMessagePattern: "Look, I'll give you my honest opinion without sugar-coating: [direct one-line assessment]. Here's the detailed critique:",
			clarificationPrompt: "If you want a gentler or harsher evaluation, say so — but my default is full honesty."
		},
		closingQuestions: [
			"Which of the 3 angles did you like most? Shall we build the script on it?",
			"Want me to write a full script for the angle you pick?",
			"Would you like to A/B test 3 different Hooks on a small audience before shooting?"
		]
	},
	custom: {
		behaviorRuleFixes: [{
			find: "Egyptian Arabic",
			replace: "English"
		}, {
			find: "قائمة",
			replace: "list"
		}],
		questionProtocol: {
			firstMessagePattern: "All set — you'll be working on [N] terms: [list]. Let me confirm the order we'll follow before I start:",
			clarificationPrompt: "If you want to add or remove a term, now is the right time."
		},
		closingQuestions: ["Want to add an extra term that complements your selection?", "Shall I convert this prompt into a chained prompts sequence?"]
	}
};
// src/lib/engine/ProtocolComposer.ts
function composeProtocol(file, protocolId, options) {
	const protocol = file.protocols[protocolId];
	if (!protocol) throw new Error(`Unknown protocol: ${protocolId}`);
	const lang = options?.outputLanguage || "ar";
	const isEn = lang === "en";
	const enOverride = isEn ? PROTOCOL_EN_OVERRIDES[protocolId] : void 0;
	const cr = file.common_rules;
	const commonRulesText = isEn ? [
		`- OUTPUT LANGUAGE: ${COMMON_RULES_EN.outputLanguageDefault}`,
		`- OVERRIDE: ${COMMON_RULES_EN.outputLanguageOverride}`,
		`- BILINGUAL EXAMPLES: ${COMMON_RULES_EN.bilingualExamples}`,
		`- FRAMEWORK REFERENCES: ${COMMON_RULES_EN.frameworkReferences}`,
		`- EMOJIS: ${COMMON_RULES_EN.emojis}`,
		`- CLOSING: ${COMMON_RULES_EN.closing}`,
		`- ANTI-GENERIC: ${COMMON_RULES_EN.antiGeneric}`,
		`- NO FLATTERY: ${COMMON_RULES_EN.noFlattery}`,
		`- FORMATTING: ${COMMON_RULES_EN.formatting}`
	].join("\n") : [
		`- OUTPUT LANGUAGE: ${cr.output_language_instruction.default}`,
		`- OVERRIDE: ${cr.output_language_instruction.user_override}`,
		`- BILINGUAL EXAMPLES: ${cr.bilingual_examples_rule}`,
		`- FRAMEWORK REFERENCES: ${cr.framework_reference_rule}`,
		`- EMOJIS: ${cr.emoji_strategy}`,
		`- CLOSING: ${cr.closing_rule}`,
		`- ANTI-GENERIC: ${cr.anti_generic_rule}`,
		`- NO FLATTERY (critique modes): ${cr.no_flattery_rule}`,
		`- FORMATTING: ${cr.formatting_rule}`
	].join("\n");
	let behaviorRules = protocol.behavior_rules.slice();
	if (isEn && enOverride?.behaviorRuleFixes) behaviorRules = behaviorRules.map((rule) => {
		let fixed = rule;
		for (const fix of enOverride.behaviorRuleFixes) fixed = fixed.split(fix.find).join(fix.replace);
		return fixed;
	});
	const protocolRulesText = behaviorRules.map((r, i) => `${i + 1}. ${r}`).join("\n");
	let outputLanguageInstruction = "";
	if (lang === "ar") outputLanguageInstruction = "Respond to the user in PROFESSIONAL EGYPTIAN ARABIC dialect. Not formal MSA. Not heavy slang. Signature voice: «بص، هقولك رأيي من غير مجاملة» / «خلينا نعمل» / «خليني أوضحلك».";
	else if (lang === "en") outputLanguageInstruction = "Respond to the user in clear, professional English. Do not use Arabic unless quoting an example.";
	else outputLanguageInstruction = "Respond bilingually: provide the full response in ENGLISH first, then an ARABIC version below. Always label each version.";
	const qp = protocol.question_protocol;
	const qpEn = enOverride?.questionProtocol;
	const questionLines = [isEn && qpEn ? qpEn.firstMessagePattern : qp.first_message_pattern];
	if (qp.questions) for (const q of qp.questions) {
		const examples = q.options_en || q.examples_en || [];
		const questionText = isEn && qpEn?.questions ? qpEn.questions.find((x) => x.key === q.key)?.question ?? q.ar : q.ar;
		questionLines.push(`  Q: ${questionText}\n    (Examples only — the user may answer in their own words): ${examples.join(" / ")}`);
	}
	if (qp.diagnostic_questions) for (const q of qp.diagnostic_questions) {
		const questionText = isEn && qpEn?.diagnosticQuestions ? qpEn.diagnosticQuestions.find((x) => x.key === q.key)?.question ?? q.ar : q.ar;
		questionLines.push(`  Q: ${questionText}`);
	}
	if (qp.clarification_prompt) {
		const clar = isEn && qpEn?.clarificationPrompt ? qpEn.clarificationPrompt : qp.clarification_prompt;
		questionLines.push(`  Clarification: ${clar}`);
	}
	const questionProtocolText = questionLines.join("\n");
	const outputStructureText = protocol.output_structure.map((s) => `- ${s}`).join("\n");
	const qualityChecklistText = protocol.quality_checklist.map((q) => `- [ ] ${q}`).join("\n");
	const closingQuestionsText = (isEn && enOverride?.closingQuestions ? enOverride.closingQuestions : protocol.closing_questions).map((q) => `- ${q}`).join("\n");
	return {
		protocol,
		commonRulesText,
		protocolRulesText,
		outputLanguageInstruction,
		questionProtocolText,
		outputStructureText,
		qualityChecklistText,
		closingQuestionsText
	};
}
var TEMPLATE_MAP = {
	"content-creation": `# ROLE
{{role}}

# COMMON RULES (apply to EVERY response, without exception)
{{common_rules}}

# BEHAVIOR PROTOCOL
{{protocol_rules}}

# OUTPUT LANGUAGE
{{output_language}}

# KNOWLEDGE BASE (injected frameworks from the source book)
{{knowledge_block}}

# USER CONTEXT (the brief)
{{user_context}}

# YOUR TASK
You are in CONTENT CREATION mode. Follow this exact sequence:

**PHASE 1 — DISCOVERY (MANDATORY)**
Do NOT write any content immediately. Begin by asking the user the 5 discovery questions below. If the user context already provides answers, acknowledge them briefly and skip to Phase 2.

**PHASE 2 — CONFIRMATION**
In ONE line, confirm your understanding of the brief, then proceed.

**PHASE 3 — CREATION**
Produce the final content divided explicitly into three sections:
- 🎣 HOOK — provide 3 alternative options (labeled A/B/C) for A/B testing
- 📝 CONTENT — segmented body with timing cues
- 🎯 CTA — matched to the stated goal (not generic)

After the content, add:
- 🎬 VISUAL & EDITING NOTES — B-roll suggestions, camera angles, on-screen text, pacing

# QUESTION PROTOCOL (for Phase 1)
{{question_protocol}}

# OUTPUT STRUCTURE
{{output_structure}}

# QUALITY CHECKLIST (self-verify before responding)
{{quality_checklist}}

# CLOSING
After delivering the content, end with these follow-up questions:
{{closing_questions}}
`,
	"learn-skill": `# ROLE
{{role}}

# COMMON RULES (apply to EVERY response, without exception)
{{common_rules}}

# BEHAVIOR PROTOCOL
{{protocol_rules}}

# OUTPUT LANGUAGE
{{output_language}}

# KNOWLEDGE BASE (injected terms — explain ONLY these)
{{knowledge_block}}

# USER CONTEXT
{{user_context}}

# YOUR TASK
You are in LEARN SKILL mode. Your goal: transform the selected term(s) into a memorable, actionable lesson.

**STRUCTURE:**
1. Open with a ONE-LINE framing of why this concept matters in 2026 — no generic intro
2. Break the term down into numbered RULES or LAWS (e.g., "3 golden rules")
3. Each rule must include:
   - Rule name (bolded)
   - 1-2 sentence explanation
   - 🇪🇬 Egyptian Arabic example
   - 🇺🇸 English example
4. Close with a summary table: | Rule | Question it answers |
5. Add a "Coach's Tip" — one sentence of practical wisdom

**CITATION RULE:** Always cite the source book "أهم 50 مصطلح في عالم صناعة المحتوى" by Hani Shaker and the specific section name.

# OUTPUT STRUCTURE
{{output_structure}}

# QUALITY CHECKLIST (self-verify before responding)
{{quality_checklist}}

# CLOSING
{{closing_questions}}
`,
	"learn-skill-coach": `# ROLE
{{role}}

# COMMON RULES (apply to EVERY response, without exception)
{{common_rules}}

# BEHAVIOR PROTOCOL (STRICT — this is a coaching session, not a lecture)
{{protocol_rules}}

# OUTPUT LANGUAGE
{{output_language}}

# KNOWLEDGE BASE (the SINGLE term you are coaching)
{{knowledge_block}}

# USER CONTEXT
{{user_context}}

# YOUR TASK
You are in INTERACTIVE COACH mode. Your goal: make the user PRACTICE, not READ.

**SESSION FLOW:**

**Turn 1 — Assign:**
- Open with ONE line: name the term and set the tone ("تمام، هنشتغل عملي").
- Present ONE exercise that takes 60 seconds (on-camera/audio) or 3-5 sentences (writing).
- STOP. Do not explain further. Do not give a sample. Do not reveal the rubric. Wait for the user's submission.

**Turn 2 — Evaluate (only after the user submits):**
- Show a score table with EXACTLY 5 rows (10 points each, total 50):
  | المعيار | الدرجة | التبرير |
  |---------|-------|---------|
  | الالتزام بالتعليمات | X/10 | ... |
  | وضوح الفكرة | X/10 | ... |
  | تطبيق المصطلح | X/10 | ... |
  | الإبداع والأصالة | X/10 | ... |
  | قابلية التحسين | X/10 | ... |
  | **المجموع** | **X/50** | |
- Give EXACTLY 2 specific improvements. Not 3, not 5. Two.
- Ask: "أكمل بتمرين أصعب، أم تعيد ده بتعديلاتك؟"
- STOP. Wait for the user's choice.

**Turn 3+ — Progress:**
- If score ≥ 40: next exercise is harder.
- If score ≤ 29: repeat the concept with a simpler exercise.
- If 30-39: same difficulty, different scenario.

**CRITICAL RULES:**
- NEVER give more than 1 exercise per turn.
- NEVER dump theory. Max 3 sentences before the exercise.
- NEVER exceed 200 words per message.
- NEVER be vague ("حاول تحسن"). Always specify what to change.

# QUESTION PROTOCOL
{{question_protocol}}

# OUTPUT STRUCTURE
{{output_structure}}

# QUALITY CHECKLIST (self-verify before responding)
{{quality_checklist}}

# CLOSING
{{closing_questions}}
`,
	"channel-strategy": `# ROLE
{{role}}

# COMMON RULES (apply to EVERY response, without exception)
{{common_rules}}

# BEHAVIOR PROTOCOL
{{protocol_rules}}

# OUTPUT LANGUAGE
{{output_language}}

# KNOWLEDGE BASE (strategic frameworks available to you)
{{knowledge_block}}

# USER CONTEXT
{{user_context}}

# YOUR TASK
You are in CHANNEL STRATEGY mode. Build a phased action plan.

**STRUCTURE:**
1. 📚 OPEN by clarifying which knowledge sources you actually have access to. Never fabricate references.
2. 🗺️ MAP each relevant section of the book to a specific channel-growth use case in a comparison table
3. 📅 PROPOSE a 4-phase plan (Week 1 / 2 / 3 / 4) — each phase must have:
   - Objective (one line)
   - 3 concrete actions
   - Success metric
4. ❓ END with 5 diagnostic questions about the user's channel before building the final plan

**CRITICAL:** Do NOT build the fully personalized plan until the 5 diagnostic questions are answered. Offer the phased template as a preview only.

# OUTPUT STRUCTURE
{{output_structure}}

# QUALITY CHECKLIST (self-verify before responding)
{{quality_checklist}}

# CLOSING
{{closing_questions}}
`,
	"idea-evaluation": `# ROLE
{{role}}

# COMMON RULES (apply to EVERY response, without exception)
{{common_rules}}

# BEHAVIOR PROTOCOL
{{protocol_rules}}

# OUTPUT LANGUAGE
{{output_language}}

# KNOWLEDGE BASE (diagnostic frameworks to ground your critique)
{{knowledge_block}}

# USER CONTEXT
{{user_context}}

# YOUR TASK
You are in IDEA EVALUATION mode. Be brutally honest.

**STRUCTURE:**
1. 📊 OPEN with a numeric score (X/10) and a ONE-LINE verdict. Never open with praise.
2. 🔍 DIRECT CRITIQUE — numbered flaws, each tied to a specific framework from the knowledge base (e.g., "not Relatable to beginners")
3. 🚀 3 ALTERNATIVE ANGLES — for each: name + 2-line pitch + why it could go viral
4. 🎣 3 HOOK OPTIONS for the recommended angle: one comedic, one curiosity-based, one relatable
5. 📋 FINAL EVALUATION TABLE — 5 criteria × score out of 10
6. 💡 "What I actually recommend" — one line
7. ❓ 9 FOLLOW-UP QUESTIONS locking down the next step (platform, length, tone, statistics, CTA, etc.)

**TONE RULE:** No flattery. No "فكرة حلوة لكن...". Lead with the score and the flaws. If there's praise, it comes LAST.

# OUTPUT STRUCTURE
{{output_structure}}

# QUALITY CHECKLIST (self-verify before responding)
{{quality_checklist}}

# CLOSING
{{closing_questions}}
`,
	custom: `# ROLE
{{role}}

# COMMON RULES (apply to EVERY response, without exception)
{{common_rules}}

# BEHAVIOR PROTOCOL
{{protocol_rules}}

# OUTPUT LANGUAGE
{{output_language}}

# KNOWLEDGE BASE (injected terms — apply ONLY these, nothing else)
{{knowledge_block}}

# USER CONTEXT
{{user_context}}

# YOUR TASK
You are in CUSTOM mode. Apply ONLY the terms the user explicitly selected — no more, no less.

**STRUCTURE:**
1. 📋 CONFIRM the list of selected terms in one line before proceeding
2. 🎯 If 5+ terms selected, propose a structure (e.g., "3 pillars") and get confirmation first
3. 📚 Apply each term in a balanced way — no term dominates
4. 📊 Close with a summary of how the terms interconnect
5. ❓ Follow-up questions

**BALANCE RULE:** Divide your response space equally across all selected terms.

# OUTPUT STRUCTURE
{{output_structure}}

# QUALITY CHECKLIST (self-verify before responding)
{{quality_checklist}}

# CLOSING
{{closing_questions}}
`
};
// src/lib/i18n/valueTranslations.ts
var AR_TO_EN = {
	"مبتدئين تماماً في المجال": "Absolute beginners",
	"متوسطين (عندهم خلفية بسيطة)": "Intermediate — basic background",
	"محترفين في المجال": "Advanced professionals",
	"جمهور عام بدون خلفية محددة": "General audience",
	"صناع قرار / مديرين": "Decision makers / Managers",
	"طلاب وباحثين": "Students & Researchers",
	"مبتدئين تماماً بدون خلفية": "Absolute beginners",
	"طلاب كليات حاسبات": "CS students",
	"شباب يغيّرون مجالهم": "Career switchers",
	"مبرمجين بخبرة": "Experienced developers",
	"جمهور عام مهتم بالتكنولوجيا": "General tech audience",
	"توعية وزيادة معرفة": "Awareness & Education",
	"تشجيع الجمهور على البدء": "Encourage starting",
	"الترويج لمنتج أو خدمة": "Promote product/service",
	"الترويج لكورس": "Promote a course",
	"بناء براند شخصي": "Personal brand",
	"زيادة المشاهدات والمتابعين": "Increase views & followers",
	"توليد تفاعل (تعليقات/مشاركات)": "Generate engagement",
	"توعية بأهمية الموضوع": "Awareness",
	"تشجيع على البدء": "Encourage starting",
	"زيادة المشاهدات": "Increase views",
	"شايفين الموضوع صعب ومعقد": "Seems too hard",
	"مش عارفين يبدأوا منين": "Don't know where to start",
	"عندهم معلومات خاطئة عن الموضوع": "Have wrong information",
	"بيعانوا من مشكلة عملية محددة": "Facing a practical problem",
	"مش شايفين الفايدة/القيمة": "Don't see the value",
	"خايفين من التغيير أو الفشل": "Fear of change or failure",
	"مش لاقيين وقت أو فلوس": "No time or money",
	"شايفين الموضوع صعب": "Seems hard",
	"خايفين من الرياضيات/الإنجليزي": "Fear of math/English",
	"خايفين من AI": "Fear of AI",
	"مش عارفين فرص العمل": "Unclear job market",
	"TikTok": "TikTok",
	"Instagram Reels": "Instagram Reels",
	"YouTube Shorts": "YouTube Shorts",
	"YouTube (طويل)": "YouTube (long)",
	"Facebook Reels": "Facebook Reels",
	"LinkedIn": "LinkedIn",
	"X (Twitter)": "X (Twitter)",
	"مدونة / Blog": "Blog",
	"كل المنصات": "All platforms",
	"أكثر من منصة": "Multiple platforms",
	"كوميدي": "Comedic",
	"جدي احترافي": "Serious professional",
	"تحفيزي": "Inspirational",
	"تعليمي مبسط": "Simple educational",
	"صادم ومثير للجدل": "Provocative",
	"هادئ وودود": "Calm & friendly",
	"يتابع الحساب": "Follow the account",
	"يكتب تعليق": "Write a comment",
	"يسجل في كورس": "Enroll in course",
	"يشارك الفيديو": "Share the content",
	"يبدأ يتعلم / يجرب": "Start learning / try it",
	"يشتري منتج": "Buy the product",
	"ينضم للقائمة البريدية": "Join the newsletter",
	"يبدأ يتعلم": "Start learning",
	"فيديو قصير (15-60 ثانية)": "Short video (15-60s)",
	"فيديو طويل (5+ دقائق)": "Long video (5+ min)",
	"مقال / Blog Post": "Article / Blog Post",
	"بوست سوشيال": "Social post",
	"Carousel (شرائح متعددة)": "Carousel",
	"Story / Reel تفاعلي": "Story / Reel",
	"Newsletter / بريد دوري": "Newsletter",
	"Podcast / بودكاست": "Podcast",
	"تقنية وبرمجة": "Tech & Programming",
	"صحة ولياقة": "Health & Fitness",
	"طبخ وأكل": "Food & Cooking",
	"مالية واستثمار": "Finance & Investing",
	"أعمال وريادة": "Business & Entrepreneurship",
	"تعليم وتطوير": "Education & Development",
	"تسويق وبيع": "Marketing & Sales",
	"ترفيه وفنون": "Entertainment & Arts",
	"تطوير ذات": "Self Development",
	"سفر": "Travel",
	"رياضة": "Sports",
	"جمال وعناية": "Beauty & Care",
	"صادم": "Shocking",
	"فضولي": "Curious",
	"عاطفي": "Emotional",
	"موقف يومي": "Daily scene",
	"theory": "Theoretical",
	"coach": "Interactive coach",
	"quick": "Quick",
	"medium": "Medium",
	"deep": "Comprehensive",
	"أمام الكاميرا": "On camera",
	"Voice Over": "Voice Over",
	"بدون ظهور": "No appearance",
	"مزيج من الأساليب": "Mixed styles",
	"مشاهدات ومتابعين": "Views & followers",
	"مبيعات": "Sales",
	"براند شخصي": "Personal brand",
	"تعليم ونشر معرفة": "Education & knowledge",
	"بناء مجتمع": "Community building",
	"فرص عمل / استشارات": "Jobs / consulting",
	"قناة جديدة": "New channel",
	"قناة موجودة وأريد تطويرها": "Existing, want to grow",
	"لدي جمهور وأريد مضاعفته": "Have audience, want to scale",
	"gentle": "Gentle",
	"balanced": "Balanced",
	"brutal": "Very direct"
};
function toEnglish(value) {
	if (!value) return void 0;
	const trimmed = value.trim();
	return AR_TO_EN[trimmed] ?? trimmed;
}
// src/lib/engine/TemplateRenderer.ts
function formatKnowledgeBlock(terms, lang) {
	if (terms.length === 0) return "_No terms injected._";
	const byCategory = {};
	for (const t of terms) (byCategory[t.category] ||= []).push(t);
	const blocks = [];
	for (const [category, catTerms] of Object.entries(byCategory)) {
		blocks.push(`## ${humanizeCategory$1(category)} (${catTerms.length} terms)`);
		for (const t of catTerms) {
			const example = lang === "en" ? getEnglishExampleSync(t.id) || t.prompt_example : t.prompt_example;
			blocks.push(`### ${t.term_en} / ${t.term_ar}\n- Summary: ${t.prompt_summary}\n- Example: ${example}`);
		}
	}
	return blocks.join("\n\n");
}
function humanizeCategory$1(cat) {
	return {
		"writing-hacks": "Writing Hacks",
		storytelling: "Storytelling",
		"camera-presence": "Camera Presence",
		hooks: "Hook & Micro Hooks",
		cta: "Call to Action",
		editing: "Editing & Montage"
	}[cat] || cat;
}
function formatUserContext(answers, strategy, derived, usedProfile, profileName, lang) {
	const lines = [];
	const tr = lang === "en" ? toEnglish : (v) => v;
	const resolve = (value, custom) => value === "__other__" ? custom : value;
	const push = (label, value) => {
		if (value !== void 0 && value !== null && value !== "") lines.push(`- **${label}:** ${value}`);
	};
	push("Output Language", lang === "ar" ? "Arabic" : lang === "en" ? "English" : "Bilingual (Arabic + English)");
	push("Output Language Instruction", lang === "ar" ? "Respond in professional Egyptian Arabic dialect." : lang === "en" ? "Respond in clear, professional English. Translate any Arabic instructions/examples in this prompt before responding. Provide examples in English only." : "Provide parallel Arabic + English versions (Arabic first, English second).");
	push("Mode", answers.mode);
	push("Niche / Field", tr(resolve(answers.niche || answers.channelNiche || answers.ideaNiche, answers.nicheCustom || answers.channelNicheCustom || answers.ideaNicheCustom)));
	push("Audience", tr(resolve(answers.audience, answers.audienceCustom)));
	push("Goal", tr(resolve(answers.goal, answers.goalCustom)));
	push("Pain Point", tr(resolve(answers.painPoint, answers.painPointCustom)));
	push("Platform", tr(resolve(answers.platform || answers.channelPlatform, answers.platformCustom || answers.channelPlatformCustom)));
	push("Tone", tr(resolve(answers.tone, answers.toneCustom)));
	push("Content Type", tr(answers.contentType));
	push("Topic", answers.topic);
	push("Desired CTA", tr(resolve(answers.ctaType, answers.ctaTypeCustom)));
	push("Preferred Hook Style", tr(answers.hookStyle));
	push("Target Duration", answers.duration);
	push("Target Word Count", answers.wordCount);
	push("Selected Strategy", `${strategy.strategy.name.en} — ${strategy.strategy.narrative_flow.join(" → ")}`);
	push("Strategy Rationale", strategy.reasoning);
	push("Framework Anchors", strategy.strategy.framework_anchors.join(", "));
	push("Audience Level", derived.audienceLevel);
	push("Normalized Niche", derived.nicheNormalized);
	if (usedProfile) push("Profile", profileName || "Enabled");
	push("Skill Term ID", answers.skillTermId);
	push("Learning Style", tr(answers.learningStyle));
	push("Depth Level", tr(answers.depthLevel));
	push("Channel Goal", tr(answers.channelGoal));
	push("Channel Status", tr(answers.channelStatus));
	push("Presentation Style", tr(answers.presentationStyle));
	push("Idea", answers.ideaText);
	push("Idea Content Type", tr(resolve(answers.ideaContentType, answers.ideaContentTypeCustom)));
	push("Evaluation Strictness", tr(answers.evaluationStrictness));
	if (answers.customTermIds?.length) push("Custom Terms Count", answers.customTermIds.length);
	push("Additional Notes", answers.additionalNotes);
	return lines.length > 0 ? lines.join("\n") : "_No context provided._";
}
function substitute(template, vars) {
	return template.replace(/\{\{(\w+)\}\}/g, (_, key) => vars[key] ?? `_missing:${key}_`);
}
function renderTemplate(ctx) {
	const { answers, composed, terms, strategy, derived, usedProfile, profileName, protocolId } = ctx;
	const template = TEMPLATE_MAP[protocolId] || TEMPLATE_MAP["content-creation"];
	const lang = answers.outputLanguage;
	return substitute(template, {
		role: composed.protocol.role_definition,
		common_rules: composed.commonRulesText,
		protocol_rules: composed.protocolRulesText,
		output_language: composed.outputLanguageInstruction,
		knowledge_block: formatKnowledgeBlock(terms, lang),
		user_context: formatUserContext(answers, strategy, derived, usedProfile, profileName, lang),
		question_protocol: composed.questionProtocolText,
		output_structure: composed.outputStructureText,
		quality_checklist: composed.qualityChecklistText,
		closing_questions: composed.closingQuestionsText
	}).trim();
}
// src/lib/engine/ModelOptimizer.ts
var MODEL_HEADERS = {
	chatgpt: "> You are running inside ChatGPT. Follow the structured instructions below exactly. Think step by step in private before responding. Do not skip the DISCOVERY phase.",
	claude: "> You are running inside Claude. This prompt uses Markdown sections. Respect all XML-inline constraints and follow the QUALITY CHECKLIST at the end before responding.",
	gemini: "> You are running inside Gemini. Sections are clearly labeled with # headers. Preserve the order of execution. Do not omit the QUESTION PROTOCOL.",
	deepseek: "> You are running inside DeepSeek. The instructions below are directive. Follow them in sequence, without skipping. Prioritize the DISCOVERY phase over any urge to generate content immediately.",
	agnostic: "> This prompt is model-agnostic. Follow the structure exactly. Do not skip any phase."
};
function optimizeForModel(prompt, model) {
	return `${MODEL_HEADERS[model] || MODEL_HEADERS.agnostic}\n\n${prompt}`;
}
// src/lib/engine/ChainingComposer.ts
var CHAINS = {
	"content-creation": [
		{
			title: "Stage 1 — Discovery",
			objective: "Ask the 5 discovery questions and wait for the user to answer. Do NOT write any content yet.",
			appendTask: "**END YOUR RESPONSE HERE.** Do not generate any script or post yet. Wait for the user to answer the 5 questions. Confirm each answer as you receive it."
		},
		{
			title: "Stage 2 — Generation",
			objective: "Using the brief collected in Stage 1, generate the full script with 3 HOOK options, segmented CONTENT, and a matched CTA.",
			appendTask: "Assume the user has already answered the 5 discovery questions in the previous turn. Generate the full content now, following the CONTENT CREATION structure exactly. Include Visual & Editing notes after the script."
		},
		{
			title: "Stage 3 — Evaluation & Refinement",
			objective: "Critique the generated content using the injected frameworks, score it out of 10, and propose 3 concrete improvements.",
			appendTask: "Now critique the content you just produced (or the version the user will paste). Score it out of 10 using the following criteria: Hook strength, Content clarity, CTA effectiveness, Pacing, and Editing potential. For each criterion, give 1 concrete improvement. End with one \"if I could change ONE thing\" recommendation."
		}
	],
	"learn-skill": [
		{
			title: "Stage 1 — Deep Explanation",
			objective: "Deliver the deep explanation with numbered rules, bilingual examples, and a summary table.",
			appendTask: "Deliver the full learn-skill explanation following the structure: one-line framing → numbered rules with bilingual examples → summary table → coach's tip. End there."
		},
		{
			title: "Stage 2 — Practice Exercises",
			objective: "Provide 3 short practice exercises the user can do to apply the term immediately.",
			appendTask: "Now generate 3 practical exercises the user can complete within 10 minutes each, applying the term from Stage 1. For each: title + instructions + success criteria."
		},
		{
			title: "Stage 3 — Quiz & Grading",
			objective: "Ask 5 quiz questions, wait for answers, then grade and explain.",
			appendTask: "Now write 5 quiz questions (mix of MCQ and short-answer) testing understanding of the term. Wait for the user to answer, then grade each answer and explain what they got right or wrong."
		}
	],
	"channel-strategy": [
		{
			title: "Stage 1 — Diagnosis",
			objective: "Ask the 5 diagnostic questions about the channel and analyze the answers.",
			appendTask: "Ask the 5 diagnostic questions (niche, platform, goal, status, presentation). Wait for answers. Then produce a one-page diagnosis: strengths, weaknesses, and 3 quick wins."
		},
		{
			title: "Stage 2 — 30-Day Plan",
			objective: "Produce a detailed 30-day content plan (week by week).",
			appendTask: "Based on the diagnosis from Stage 1, produce a 30-day content plan divided into 4 weeks. For each week: theme + 3 content ideas + posting schedule + success metric."
		},
		{
			title: "Stage 3 — Performance System",
			objective: "Build a tracking system the user can run weekly to measure progress.",
			appendTask: "Now build a weekly performance tracking system: metrics to measure (with target ranges), a 10-minute weekly review checklist, and a decision framework for \"keep / adjust / kill\" any content format."
		}
	],
	"idea-evaluation": [
		{
			title: "Stage 1 — Score & Critique",
			objective: "Score the idea out of 10 and list every flaw, each tied to a framework.",
			appendTask: "Deliver ONLY the score + direct critique (numbered flaws, each tied to a framework). Do NOT propose alternatives yet — end your response after the critique."
		},
		{
			title: "Stage 2 — 3 Alternative Angles",
			objective: "Propose 3 alternative angles and 3 hooks for the strongest one.",
			appendTask: "Now propose 3 alternative angles (name + 2-line pitch + virality reason). Then pick the strongest angle and propose 3 hook options (comedic / curiosity / relatable)."
		},
		{
			title: "Stage 3 — Refinement",
			objective: "Deep-dive on the chosen angle with a full outline.",
			appendTask: "Assume the user picked one angle. Produce a full outline for it: hook (with 3 variants), 5-7 content beats, CTA, and a visual direction note. End with a go/no-go recommendation."
		}
	],
	custom: [
		{
			title: "Stage 1 — Structure Proposal",
			objective: "Confirm the selected terms and propose a structure.",
			appendTask: "Confirm the selected terms in one line, then propose a 2-3 pillar structure for applying them. Wait for user approval before proceeding."
		},
		{
			title: "Stage 2 — Term-by-Term Application",
			objective: "Apply each term in balanced depth.",
			appendTask: "Apply each selected term with a real example and a practical tip. Divide your response space equally across all terms."
		},
		{
			title: "Stage 3 — Integration",
			objective: "Show how the terms interconnect and produce one worked example.",
			appendTask: "Show how the applied terms interconnect, then produce one fully worked example that combines all of them."
		}
	]
};
function chainPrompt(basePrompt, mode) {
	const stages = CHAINS[mode] || CHAINS["content-creation"];
	const prompts = [];
	for (const stage of stages) prompts.push(`## ${stage.title}\n\n> **Objective:** ${stage.objective}\n\n${basePrompt}\n\n---\n\n## CHAIN INSTRUCTION\n\n${stage.appendTask}\n`);
	return prompts;
}
// src/lib/engine/StrategyPlanner.ts
function planStrategy(file, answers) {
	if (answers.mode !== "content-creation") return pickDefaultForMode(file, answers.mode);
	const scored = file.strategies.map((s) => ({
		strategy: s,
		score: scoreStrategy(s, answers)
	}));
	scored.sort((a, b) => b.score - a.score);
	const top = scored[0];
	const runner = scored[1];
	const gap = runner ? top.score - runner.score : top.score;
	const confidence = Math.min(1, Math.max(.2, gap / Math.max(top.score, 1)));
	return {
		strategy: top.strategy,
		confidence,
		reasoning: buildReasoning(top.strategy, answers),
		alternatives: scored.slice(1, 4).map((x) => ({
			strategy: x.strategy,
			score: x.score
		}))
	};
}
function scoreStrategy(strategy, answers) {
	let score = 0;
	if (answers.goal) {
		if (strategy.best_for_goals.includes(answers.goal)) score += 30;
		else if (strategy.best_for_goals.some((g) => g.includes(answers.goal.split(" ")[0]))) score += 10;
	}
	if (answers.tone) {
		if (strategy.best_for_tones.includes(answers.tone)) score += 25;
		else if (strategy.best_for_tones.some((t) => t.includes(answers.tone.split(" ")[0]))) score += 8;
	}
	if (answers.contentType) {
		if (strategy.best_for_content_types.includes(answers.contentType)) score += 20;
	}
	if (answers.painPoint) {
		if ([
			"خايفين من الفشل",
			"عندهم معلومات خاطئة",
			"شايفين الموضوع صعب"
		].some((p) => answers.painPoint?.includes(p))) {
			if ([
				"problem-solution",
				"myth-busting",
				"contrarian-truth"
			].includes(strategy.id)) score += 15;
		}
	}
	const platform = (answers.platform || "").toLowerCase();
	if (platform.includes("tiktok") || platform.includes("reel") || platform.includes("short")) {
		if ([
			"contrarian-truth",
			"listicle-countdown",
			"before-after-bridge"
		].includes(strategy.id)) score += 12;
		if (strategy.id === "tutorial-breakdown") score -= 8;
	}
	if (answers.audience === "مبتدئين تماماً في المجال") {
		if (strategy.id === "tutorial-breakdown" || strategy.id === "myth-busting") score += 10;
		if (strategy.id === "contrarian-truth") score -= 5;
	}
	return score;
}
function pickDefaultForMode(file, mode) {
	const map = {
		"content-creation": "problem-solution",
		"learn-skill": "tutorial-breakdown",
		"channel-strategy": "tutorial-breakdown",
		"idea-evaluation": "myth-busting",
		custom: "problem-solution"
	};
	return {
		strategy: file.strategies.find((s) => s.id === map[mode]) || file.strategies[0],
		confidence: .5,
		reasoning: `Default strategy for mode "${mode}".`,
		alternatives: []
	};
}
function buildReasoning(strategy, answers) {
	const lang = answers.outputLanguage;
	const parts = [];
	if (answers.goal && strategy.best_for_goals.includes(answers.goal)) parts.push(lang === "en" ? `aligned with goal "${translateToEn(answers.goal)}"` : `aligned with goal "${answers.goal}"`);
	if (answers.tone && strategy.best_for_tones.includes(answers.tone)) parts.push(lang === "en" ? `matches tone "${translateToEn(answers.tone)}"` : `matches tone "${answers.tone}"`);
	if (answers.contentType && strategy.best_for_content_types.includes(answers.contentType)) parts.push(`suited for "${answers.contentType}"`);
	return parts.length > 0 ? `Selected because it's ${parts.join(", ")}.` : `Selected as best general fit for this context.`;
}
function translateToEn(v) {
	return {
		"تشجيع الجمهور على البدء": "encourage starting",
		"توعية وزيادة معرفة": "awareness",
		"الترويج لمنتج أو خدمة": "product promotion",
		"الترويج لكورس": "course promotion",
		"بناء براند شخصي": "personal brand",
		"زيادة المشاهدات والمتابعين": "views & followers",
		"توليد تفاعل": "engagement",
		"كوميدي": "comedic",
		"جدي احترافي": "serious",
		"تحفيزي": "inspirational",
		"تعليمي مبسط": "educational",
		"صادم ومثير للجدل": "provocative",
		"هادئ وودود": "calm"
	}[v] ?? v;
}
// src/lib/engine/CompatibilityChecker.ts
function pairKey(a, b) {
	return a < b ? `${a}-${b}` : `${b}-${a}`;
}
function filterConflicts(file, terms) {
	if (terms.length < 2) return terms;
	const lookup = /* @__PURE__ */ new Map();
	for (const p of file.pairs) lookup.set(pairKey(p.a, p.b), p.score);
	const sorted = [...terms].sort((a, b) => {
		const wa = Object.values(a.injection_weight).reduce((s, w) => s + w, 0);
		return Object.values(b.injection_weight).reduce((s, w) => s + w, 0) - wa;
	});
	const kept = [];
	for (const t of sorted) {
		let hasConflict = false;
		for (const k of kept) if ((lookup.get(pairKey(t.id, k.id)) ?? file.default_compatibility) < -.15) {
			hasConflict = true;
			break;
		}
		if (!hasConflict) kept.push(t);
	}
	return kept;
}
// src/lib/engine/ContextBuilder.ts
function buildUserContext(answers, profile) {
	return {
		answers,
		profile,
		usedProfile: !!profile && profile.enabled === true,
		derived: deriveContext(answers),
		createdAt: (/* @__PURE__ */ new Date()).toISOString(),
		version: "1.0.0"
	};
}
function deriveContext(answers) {
	return {
		audienceLevel: deriveAudienceLevel(answers.audience),
		platformKey: derivePlatformKey(answers.platform || answers.channelPlatform || ""),
		toneKey: deriveToneKey(answers.tone || ""),
		nicheNormalized: normalizeNiche(answers.niche || answers.channelNiche || answers.ideaNiche || ""),
		goalCategory: deriveGoalCategory(answers.goal || "")
	};
}
function deriveAudienceLevel(audience) {
	if (!audience) return "intermediate";
	const a = audience.toLowerCase();
	if (a.includes("مبتدئ") || a.includes("beginner") || a.includes("absolute")) return "beginner";
	if (a.includes("محترف") || a.includes("خبر") || a.includes("advanced") || a.includes("expert")) return "advanced";
	return "intermediate";
}
function derivePlatformKey(platform) {
	const p = platform.toLowerCase();
	if (p.includes("tiktok")) return "tiktok";
	if (p.includes("reel")) return "reels";
	if (p.includes("short")) return "youtube-shorts";
	if (p.includes("youtube")) return "youtube-long";
	if (p.includes("facebook")) return "facebook";
	if (p.includes("linkedin")) return "linkedin";
	if (p.includes("twitter") || p.includes("x")) return "x";
	if (p.includes("blog") || p.includes("مدون") || p.includes("medium")) return "blog";
	if (p.includes("podcast") || p.includes("بودكاست")) return "podcast";
	return "all";
}
function deriveToneKey(tone) {
	const t = tone.toLowerCase();
	if (t.includes("كوميد") || t.includes("comedic") || t.includes("funny")) return "comedic";
	if (t.includes("جدي") || t.includes("serious") || t.includes("formal")) return "serious";
	if (t.includes("تحفيز") || t.includes("inspir")) return "inspirational";
	if (t.includes("صادم") || t.includes("provocative") || t.includes("controversial")) return "provocative";
	if (t.includes("هادئ") || t.includes("calm") || t.includes("friendly")) return "calm";
	return "educational";
}
function normalizeNiche(niche) {
	const n = niche.trim().toLowerCase();
	if (!n) return "";
	if (n.includes("تقني") || n.includes("برمج") || n.includes("tech")) return "tech";
	if (n.includes("صحة") || n.includes("لياقة") || n.includes("health") || n.includes("fitness")) return "health";
	if (n.includes("طبخ") || n.includes("أكل") || n.includes("food") || n.includes("cook")) return "food";
	if (n.includes("مالي") || n.includes("استثمار") || n.includes("finance")) return "finance";
	if (n.includes("أعمال") || n.includes("ريادة") || n.includes("business")) return "business";
	if (n.includes("تعليم") || n.includes("تعلم") || n.includes("educat")) return "education";
	if (n.includes("تسويق") || n.includes("بيع") || n.includes("market")) return "marketing";
	if (n.includes("ترفيه") || n.includes("فن") || n.includes("entertain")) return "entertainment";
	if (n.includes("تطوير ذات") || n.includes("self")) return "self-dev";
	if (n.includes("سفر") || n.includes("travel")) return "travel";
	if (n.includes("رياضة") || n.includes("sport")) return "sports";
	if (n.includes("جمال") || n.includes("عناية") || n.includes("beauty")) return "beauty";
	return n.slice(0, 20);
}
function deriveGoalCategory(goal) {
	const g = goal.toLowerCase();
	if (g.includes("توعية") || g.includes("awareness")) return "awareness";
	if (g.includes("تشجيع") || g.includes("starting") || g.includes("يبدأ")) return "starting";
	if (g.includes("منتج") || g.includes("خدمة") || g.includes("promotion")) return "promotion";
	if (g.includes("كورس") || g.includes("course")) return "course";
	if (g.includes("براند") || g.includes("brand")) return "brand";
	if (g.includes("مشاهد") || g.includes("views")) return "views";
	if (g.includes("تفاعل") || g.includes("engagement")) return "engagement";
	return "unknown";
}
// src/lib/engine/PromptBuilder.ts
function buildPrompt(input) {
	const { answers, termMetadata, protocols, strategies, compatibility, profile } = input;
	const context = buildUserContext(answers, profile);
	const strategyDecision = planStrategy(strategies, answers);
	context.strategy = strategyDecision;
	const resolvedProtocolId = answers.mode === "learn-skill" && answers.learningStyle === "coach" ? "learn-skill-coach" : answers.mode;
	const selection = selectTerms(termMetadata, answers, compatibility, context.derived);
	const compatible = filterConflicts(compatibility, selection.selected.map((t) => {
		if (!strategyDecision.strategy.recommended_term_ids.includes(t.id)) return t;
		return {
			...t,
			injection_weight: Object.fromEntries(Object.entries(t.injection_weight).map(([k, v]) => [k, v + 3]))
		};
	}));
	const optimized = optimizeForModel(renderTemplate({
		answers,
		composed: composeProtocol(protocols, resolvedProtocolId, { outputLanguage: answers.outputLanguage }),
		terms: compatible,
		strategy: strategyDecision,
		derived: context.derived,
		usedProfile: context.usedProfile,
		profileName: profile?.name,
		protocolId: resolvedProtocolId
	}), answers.aiModel);
	const isChained = answers.promptFormat === "chained" && answers.learningStyle !== "coach";
	const prompts = isChained ? chainPrompt(optimized, answers.mode) : [optimized];
	const dnaSections = buildDnaSections(selection.categoryBreakdown);
	return {
		id: generateId(),
		prompts,
		answers: { ...answers },
		meta: {
			mode: answers.mode,
			protocolId: resolvedProtocolId,
			lengthMode: answers.lengthMode,
			selectedTermIds: compatible.map((t) => t.id),
			categoryBreakdown: selection.categoryBreakdown,
			language: answers.outputLanguage,
			isChained,
			totalChars: prompts.reduce((s, p) => s + p.length, 0),
			generatedAt: (/* @__PURE__ */ new Date()).toISOString(),
			strategy: strategyDecision.strategy.id,
			strategyConfidence: strategyDecision.confidence,
			usedProfile: context.usedProfile,
			profileName: profile?.name
		},
		dnaSections
	};
}
function generateId() {
	return `p_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
}
function buildDnaSections(breakdown) {
	const total = Object.values(breakdown).reduce((s, n) => s + n, 0) || 1;
	const colors = siteConfig.theme.colors.categories;
	return Object.entries(breakdown).map(([category, count]) => ({
		name: humanizeCategory(category),
		category,
		weight: Math.round(count / total * 100),
		color: colors[category] || siteConfig.theme.colors.primary,
		termIds: []
	}));
}
function humanizeCategory(cat) {
	return {
		"writing-hacks": "Writing Hacks",
		storytelling: "Storytelling",
		"camera-presence": "Camera Presence",
		hooks: "Hooks",
		cta: "CTA",
		editing: "Editing"
	}[cat] || cat;
}
export { PromptPreview as n, buildPrompt as t };

//# sourceMappingURL=engine.js.map