import { D as require_jsx_runtime } from "./react-vendor-CmXgSTT2.js";
import { a as siteConfig, t as cn } from "./cn-ngelHxLq.js";
// src/components/wizard/TextAreaInput.tsx
var import_jsx_runtime = require_jsx_runtime();
function TextAreaInput({ label, value, onChange, placeholder, hint, rows = 3 }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
			className: "mb-2 block text-sm font-bold text-text-primary",
			children: label
		}),
		hint && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mb-2 text-xs text-text-muted",
			children: hint
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
			value,
			onChange: (e) => onChange(e.target.value),
			placeholder,
			rows,
			className: cn("w-full resize-none rounded-xl border border-border bg-surface p-3 text-sm", "text-text-primary placeholder:text-text-muted", "focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20")
		})
	] });
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
// src/lib/engine/ProtocolComposer.ts
function composeProtocol(file, protocolId, options) {
	const protocol = file.protocols[protocolId];
	if (!protocol) throw new Error(`Unknown protocol: ${protocolId}`);
	const cr = file.common_rules;
	const commonRulesText = [
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
	const protocolRulesText = protocol.behavior_rules.map((r, i) => `${i + 1}. ${r}`).join("\n");
	const lang = options?.outputLanguage || "ar";
	let outputLanguageInstruction = "";
	if (lang === "ar") outputLanguageInstruction = "Respond to the user in PROFESSIONAL EGYPTIAN ARABIC dialect. Not formal MSA. Not heavy slang. Signature voice: «بص، هقولك رأيي من غير مجاملة» / «خلينا نعمل» / «خليني أوضحلك».";
	else if (lang === "en") outputLanguageInstruction = "Respond to the user in clear, professional English.";
	else outputLanguageInstruction = "Respond bilingually: provide the full response in ARABIC first, then an ENGLISH version below. Always label each version.";
	const qp = protocol.question_protocol;
	const questionLines = [qp.first_message_pattern];
	if (qp.questions) for (const q of qp.questions) {
		const examples = q.options_en || q.examples_en || [];
		questionLines.push(`  Q: ${q.ar}\n    (Examples only — the user is free to answer in their own words): ${examples.join(" / ")}`);
	}
	if (qp.diagnostic_questions) for (const q of qp.diagnostic_questions) questionLines.push(`  Q: ${q.ar}`);
	if (qp.clarification_prompt) questionLines.push(`  Clarification: ${qp.clarification_prompt}`);
	const questionProtocolText = questionLines.join("\n");
	const outputStructureText = protocol.output_structure.map((s) => `- ${s}`).join("\n");
	const qualityChecklistText = protocol.quality_checklist.map((q) => `- [ ] ${q}`).join("\n");
	const closingQuestionsText = protocol.closing_questions.map((q) => `- ${q}`).join("\n");
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
// src/lib/engine/TemplateRenderer.ts
function formatKnowledgeBlock(terms) {
	if (terms.length === 0) return "_No terms injected._";
	const byCategory = {};
	for (const t of terms) (byCategory[t.category] ||= []).push(t);
	const blocks = [];
	for (const [category, catTerms] of Object.entries(byCategory)) {
		blocks.push(`## ${humanizeCategory$1(category)} (${catTerms.length} terms)`);
		for (const t of catTerms) blocks.push(`### ${t.term_en} / ${t.term_ar}\n- Summary: ${t.prompt_summary}\n- Example: ${t.prompt_example}`);
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
function formatUserContext(answers, strategy, derived, usedProfile, profileName) {
	const lines = [];
	const resolve = (value, custom) => value === "__other__" ? custom : value;
	const push = (label, value) => {
		if (value !== void 0 && value !== null && value !== "") lines.push(`- **${label}:** ${value}`);
	};
	push("Mode", answers.mode);
	push("Audience", resolve(answers.audience, answers.audienceCustom));
	push("Goal", resolve(answers.goal, answers.goalCustom));
	push("Pain Point", resolve(answers.painPoint, answers.painPointCustom));
	push("Platform", resolve(answers.platform || answers.channelPlatform, answers.platformCustom || answers.channelPlatformCustom));
	push("Idea Content Type", resolve(answers.ideaContentType, answers.ideaContentTypeCustom));
	push("Desired CTA", resolve(answers.ctaType, answers.ctaTypeCustom));
	push("Tone", resolve(answers.tone, answers.toneCustom));
	push("Content Type", answers.contentType);
	push("Topic", answers.topic);
	push("Niche / Field", resolve(answers.niche || answers.channelNiche || answers.ideaNiche, answers.nicheCustom || answers.channelNicheCustom || answers.ideaNicheCustom));
	push("Idea Niche", resolve(answers.ideaNiche, answers.ideaNicheCustom));
	push("Selected Strategy", `${strategy.strategy.name.ar} — ${strategy.strategy.narrative_flow.join(" → ")}`);
	push("Strategy Rationale", strategy.reasoning);
	push("Framework Anchors", strategy.strategy.framework_anchors.join(", "));
	push("Audience Level", derived.audienceLevel);
	push("Normalized Niche", derived.nicheNormalized);
	if (usedProfile) push("Profile", profileName || "Enabled");
	push("Skill Term ID", answers.skillTermId);
	push("Depth Level", answers.depthLevel);
	push("Learning Style", answers.learningStyle);
	push("Channel Goal", answers.channelGoal);
	push("Channel Status", answers.channelStatus);
	push("Presentation Style", answers.presentationStyle);
	push("Idea", answers.ideaText);
	push("Idea Content Type", answers.ideaContentType);
	push("Evaluation Strictness", answers.evaluationStrictness);
	push("Preferred Hook Style", answers.hookStyle);
	push("Target Duration", answers.duration);
	push("Target Word Count", answers.wordCount);
	if (answers.customTermIds?.length) push("Custom Terms Count", answers.customTermIds.length);
	push("Additional Notes", answers.additionalNotes);
	return lines.length > 0 ? lines.join("\n") : "_No context provided._";
}
function substitute(template, vars) {
	return template.replace(/\{\{(\w+)\}\}/g, (_, key) => vars[key] ?? `_missing:${key}_`);
}
function renderTemplate(ctx) {
	const { answers, composed, terms, strategy, derived, usedProfile, profileName, protocolId } = ctx;
	return substitute(TEMPLATE_MAP[protocolId] || TEMPLATE_MAP["content-creation"], {
		role: composed.protocol.role_definition,
		common_rules: composed.commonRulesText,
		protocol_rules: composed.protocolRulesText,
		output_language: composed.outputLanguageInstruction,
		knowledge_block: formatKnowledgeBlock(terms),
		user_context: formatUserContext(answers, strategy, derived, usedProfile, profileName),
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
	const parts = [];
	if (answers.goal && strategy.best_for_goals.includes(answers.goal)) parts.push(`aligned with goal "${answers.goal}"`);
	if (answers.tone && strategy.best_for_tones.includes(answers.tone)) parts.push(`matches tone "${answers.tone}"`);
	if (answers.contentType && strategy.best_for_content_types.includes(answers.contentType)) parts.push(`suited for "${answers.contentType}"`);
	return parts.length > 0 ? `Selected because it's ${parts.join(", ")}.` : `Selected as best general fit for this context.`;
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
export { TextAreaInput as n, buildPrompt as t };

//# sourceMappingURL=engine-xIQ3OYR4.js.map