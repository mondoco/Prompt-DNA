import { O as create } from "./react-vendor-CmXgSTT2.js";
import { a as siteConfig, o as createJSONStorage, s as persist } from "./cn-ngelHxLq.js";
// src/lib/store/wizardStore.ts
var DEFAULT_ANSWERS = {
	mode: "content-creation",
	outputLanguage: siteConfig.defaults.outputLanguage,
	aiModel: siteConfig.defaults.aiModel,
	lengthMode: siteConfig.defaults.lengthMode,
	promptFormat: siteConfig.defaults.promptFormat
};
var CONTEXT_KEYS = [
	"contentType",
	"niche",
	"nicheCustom",
	"topic",
	"audience",
	"audienceCustom",
	"goal",
	"goalCustom",
	"painPoint",
	"painPointCustom",
	"platform",
	"platformCustom",
	"ctaType",
	"ctaTypeCustom",
	"tone",
	"toneCustom",
	"duration",
	"hookStyle",
	"wordCount",
	"skillTermId",
	"depthLevel",
	"channelPlatform",
	"channelPlatformCustom",
	"channelNiche",
	"channelNicheCustom",
	"channelGoal",
	"channelStatus",
	"presentationStyle",
	"ideaText",
	"ideaNiche",
	"ideaNicheCustom",
	"ideaContentType",
	"ideaContentTypeCustom",
	"evaluationStrictness",
	"customTermIds",
	"additionalNotes"
];
var useWizardStore = create()(persist((set) => ({
	answers: { ...DEFAULT_ANSWERS },
	currentStep: 0,
	sessionId: crypto.randomUUID(),
	setAnswer: (key, value) => set((s) => ({ answers: {
		...s.answers,
		[key]: value
	} })),
	setAnswers: (patch) => set((s) => ({ answers: {
		...s.answers,
		...patch
	} })),
	reset: () => set({
		answers: { ...DEFAULT_ANSWERS },
		currentStep: 0
	}),
	resetContext: () => set((s) => {
		const newAnswers = { ...s.answers };
		for (const key of CONTEXT_KEYS) delete newAnswers[key];
		newAnswers.mode = s.answers.mode;
		newAnswers.aiModel = s.answers.aiModel;
		newAnswers.lengthMode = s.answers.lengthMode;
		newAnswers.outputLanguage = s.answers.outputLanguage;
		newAnswers.promptFormat = s.answers.promptFormat;
		return {
			answers: newAnswers,
			currentStep: 0
		};
	}),
	startNewSession: () => set((s) => {
		const newAnswers = { ...s.answers };
		for (const key of CONTEXT_KEYS) delete newAnswers[key];
		newAnswers.mode = s.answers.mode;
		newAnswers.aiModel = s.answers.aiModel;
		newAnswers.lengthMode = s.answers.lengthMode;
		newAnswers.outputLanguage = s.answers.outputLanguage;
		newAnswers.promptFormat = s.answers.promptFormat;
		return {
			answers: newAnswers,
			currentStep: 0,
			sessionId: crypto.randomUUID()
		};
	}),
	setStep: (step) => set({ currentStep: step }),
	nextStep: () => set((s) => ({ currentStep: s.currentStep + 1 })),
	prevStep: () => set((s) => ({ currentStep: Math.max(0, s.currentStep - 1) }))
}), {
	name: "prompt-dna-wizard",
	storage: createJSONStorage(() => localStorage)
}));
export { useWizardStore as t };

//# sourceMappingURL=wizardStore-DsKdfTug.js.map