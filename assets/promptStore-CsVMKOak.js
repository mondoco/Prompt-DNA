import { O as create } from "./react-vendor-CmXgSTT2.js";
import { o as createJSONStorage, s as persist } from "./cn-ngelHxLq.js";
// src/lib/store/promptStore.ts
var usePromptStore = create()(persist((set, get) => ({
	current: null,
	history: [],
	isGenerating: false,
	setCurrent: (prompt) => {
		set({ current: prompt });
		if (prompt) set((s) => ({ history: [prompt, ...s.history.filter((h) => h.id !== prompt.id)].slice(0, 50) }));
	},
	setIsGenerating: (isGenerating) => set({ isGenerating }),
	removeFromHistory: (id) => set((s) => ({ history: s.history.filter((h) => h.id !== id) })),
	clearHistory: () => set({ history: [] }),
	loadFromHistory: (id) => {
		const p = get().history.find((h) => h.id === id);
		if (p) {
			set({ current: p });
			return p;
		}
		return null;
	}
}), {
	name: "prompt-dna-history",
	storage: createJSONStorage(() => localStorage),
	partialize: (state) => ({ history: state.history })
}));
export { usePromptStore as t };

//# sourceMappingURL=promptStore-CsVMKOak.js.map