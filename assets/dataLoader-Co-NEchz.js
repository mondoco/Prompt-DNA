import { a as __vitePreload } from "./index-GPjYnjx-.js";
// src/lib/utils/dataLoader.ts
var rawKBCache = null;
var rawTermMapCache = null;
var metadataCache = null;
var protocolsCache = null;
var strategiesCache = null;
var compatibilityCache = null;
async function loadTermMetadata() {
	if (metadataCache) return metadataCache;
	metadataCache = (await __vitePreload(() => import("./term-metadata-BdsPGiwE.js"), [], import.meta.url)).default;
	return metadataCache;
}
async function loadProtocols() {
	if (protocolsCache) return protocolsCache;
	protocolsCache = (await __vitePreload(() => import("./interaction-protocols-WwmSqxzx.js"), [], import.meta.url)).default;
	return protocolsCache;
}
async function loadStrategies() {
	if (strategiesCache) return strategiesCache;
	strategiesCache = (await __vitePreload(() => import("./strategies-VDFCEe3N.js"), [], import.meta.url)).default;
	return strategiesCache;
}
async function loadCompatibility() {
	if (compatibilityCache) return compatibilityCache;
	compatibilityCache = (await __vitePreload(() => import("./term-compatibility-Bq79Kv5O.js"), [], import.meta.url)).default;
	return compatibilityCache;
}
async function loadRawKnowledgeBase() {
	if (rawKBCache) return rawKBCache;
	const res = await fetch(`./data/knowledge-base.json`);
	if (!res.ok) throw new Error("Failed to load knowledge base");
	rawKBCache = await res.json();
	return rawKBCache;
}
async function getRawTermMap() {
	if (rawTermMapCache) return rawTermMapCache;
	const kb = await loadRawKnowledgeBase();
	const map = /* @__PURE__ */ new Map();
	let runningId = 1;
	for (const section of kb.sections) for (const item of section.items) {
		const id = item.id ?? runningId;
		map.set(id, item);
		runningId = id + 1;
	}
	rawTermMapCache = map;
	return map;
}
var examplesEnCache = null;
async function loadEnglishExamples() {
	if (examplesEnCache) return examplesEnCache;
	examplesEnCache = (await __vitePreload(() => import("./term-examples-en-zOPEr9RF.js"), [], import.meta.url)).default.examples;
	return examplesEnCache;
}
function getEnglishExampleSync(termId) {
	return examplesEnCache?.[String(termId)];
}
export { loadProtocols as a, loadEnglishExamples as i, getRawTermMap as n, loadStrategies as o, loadCompatibility as r, loadTermMetadata as s, getEnglishExampleSync as t };

//# sourceMappingURL=dataLoader-Co-NEchz.js.map