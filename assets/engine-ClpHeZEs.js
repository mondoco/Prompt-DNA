import{n as e}from"./cn-voPTtHUK.js";var t={compact:6,standard:15,comprehensive:25},n={tiktok:[`short-form`,`hook`,`retention`,`vertical`,`scroll-stopper`],reels:[`short-form`,`hook`,`retention`,`vertical`],"youtube-shorts":[`short-form`,`hook`,`retention`],"youtube-long":[`storytelling`,`depth`,`long-form`,`watch-time`],facebook:[`relatability`,`shareability`,`storytelling`],linkedin:[`authority`,`professionalism`,`credibility`,`business`],x:[`hook`,`punchy`,`opinion`,`provocative`],blog:[`depth`,`structure`,`seo`,`long-form`],podcast:[`storytelling`,`conversation`,`depth`],all:[]},r={comedic:[`surprise`,`relatability`,`shock`,`energy`,`humor`],serious:[`credibility`,`authority`,`depth`,`professionalism`],inspirational:[`emotional-arc`,`transformation`,`hope`,`story`],educational:[`framework`,`structure`,`clarity`,`step-by-step`],provocative:[`shock`,`contrarian`,`curiosity`,`emotion`],calm:[`relatability`,`empathy`,`storytelling`]},i=[`HubSpot`,`Cialdini`,`Harvard`,`Stanford`,`Berkeley`,`Sprout`,`BuzzSumo`,`Wistia`,`Neil Patel`,`Copyblogger`,`SEMrush`,`Shopify`,`ConvertKit`,`Unbounce`,`Pixar`,`Robert McKee`,`University of Pennsylvania`,`Social Media Examiner`,`Vidyard`];function a(e,n,r,i){let a=e.terms,s=n.mode;if(s===`custom`&&n.customTermIds?.length)return h(a.filter(e=>n.customTermIds.includes(e.id)),`Custom manual selection`);if(s===`learn-skill`&&n.skillTermId){let e=a.find(e=>e.id===n.skillTermId);if(e){let t=new Set(e.related_terms.slice(0,3)),n=a.filter(e=>t.has(e.id));return h([e,...n],`Learn-skill focus: ${e.term_en} (+${n.length} related)`)}}let c=t[n.lengthMode||`standard`],l=a.map(e=>({term:e,base:o(e,n,s,i)}));l.sort((e,t)=>t.base-e.base);let u=l.slice(0,30),d=f(r),g=u.map(({term:e,base:t})=>({term:e,base:t,withCompat:t+.1*m(p(e.id,u.map(e=>e.term.id),d))*100}));g.sort((e,t)=>t.withCompat-e.withCompat);let _=Math.max(3,Math.floor(c/3)),v={},y=[];for(let{term:e}of g)if(v[e.category]=(v[e.category]||0)+1,v[e.category]<=_&&y.push(e),y.length>=c)break;return h(y,`6-criteria selection (top ${y.length} of ${g.length})`)}function o(e,t,n,r){let i=s(e,t,n),a=c(e,r),o=l(e,r),f=u(e,r),p=d(e);return .3*i+.2*a+.15*o+.15*f+.1*p}function s(e,t,n){let r=(e.injection_weight[n]||0)*10,i=0,a=(t.painPoint||``).toLowerCase();return a.includes(`صعب`)&&e.tags.includes(`framework`)&&(i+=5),a.includes(`يبدأ`)&&e.tags.includes(`hook`)&&(i+=5),a.includes(`معلومات خاطئة`)&&e.tags.includes(`shock`)&&(i+=8),Math.min(100,r+i)}function c(e,t){let r=n[t.platformKey]||[];if(r.length===0)return 50;let i=e.tags.filter(e=>r.includes(e)).length;return Math.min(100,i*25)}function l(e,t){let n=r[t.toneKey]||[];if(n.length===0)return 50;let i=e.tags.filter(e=>n.includes(e)).length;return Math.min(100,i*30)}function u(e,t){return{beginner:{beginner:100,intermediate:60,advanced:20},intermediate:{beginner:70,intermediate:100,advanced:70},advanced:{beginner:40,intermediate:70,advanced:100}}[t.audienceLevel]?.[e.complexity]??50}function d(e){let t=50;for(let n of i)e.prompt_summary.includes(n)&&(t+=8);return e.prompt_summary.length>200&&(t+=5),e.related_terms.length>=4&&(t+=5),(e.prompt_example.includes(`🇪🇬`)||e.prompt_example.length>100)&&(t+=5),Math.min(100,t)}function f(e){let t=new Map;for(let n of e.pairs){let e=n.a<n.b?`${n.a}-${n.b}`:`${n.b}-${n.a}`;t.set(e,n.score)}return t}function p(e,t,n){let r=0,i=0;for(let a of t){if(a===e)continue;let t=e<a?`${e}-${a}`:`${a}-${e}`;r+=n.get(t)??.2,i++}return i>0?r/i:.2}function m(e){return(e+1)/2}function h(e,t){return{selected:e,reason:t,totalWeight:e.reduce((e,t)=>e+Object.values(t.injection_weight).reduce((e,t)=>e+t,0),0),categoryBreakdown:e.reduce((e,t)=>(e[t.category]=(e[t.category]||0)+1,e),{})}}function g(e,t,n){let r=e.protocols[t];if(!r)throw Error(`Unknown protocol: ${t}`);let i=e.common_rules,a=[`- OUTPUT LANGUAGE: ${i.output_language_instruction.default}`,`- OVERRIDE: ${i.output_language_instruction.user_override}`,`- BILINGUAL EXAMPLES: ${i.bilingual_examples_rule}`,`- FRAMEWORK REFERENCES: ${i.framework_reference_rule}`,`- EMOJIS: ${i.emoji_strategy}`,`- CLOSING: ${i.closing_rule}`,`- ANTI-GENERIC: ${i.anti_generic_rule}`,`- NO FLATTERY (critique modes): ${i.no_flattery_rule}`,`- FORMATTING: ${i.formatting_rule}`].join(`
`),o=r.behavior_rules.map((e,t)=>`${t+1}. ${e}`).join(`
`),s=n?.outputLanguage||`ar`,c=``;c=s===`ar`?`Respond to the user in PROFESSIONAL EGYPTIAN ARABIC dialect. Not formal MSA. Not heavy slang. Signature voice: «بص، هقولك رأيي من غير مجاملة» / «خلينا نعمل» / «خليني أوضحلك».`:s===`en`?`Respond to the user in clear, professional English.`:`Respond bilingually: provide the full response in ARABIC first, then an ENGLISH version below. Always label each version.`;let l=r.question_protocol,u=[l.first_message_pattern];if(l.questions)for(let e of l.questions){let t=e.options_en||e.examples_en||[];u.push(`  Q: ${e.ar}\n    (Examples only — the user is free to answer in their own words): ${t.join(` / `)}`)}if(l.diagnostic_questions)for(let e of l.diagnostic_questions)u.push(`  Q: ${e.ar}`);l.clarification_prompt&&u.push(`  Clarification: ${l.clarification_prompt}`);let d=u.join(`
`),f=r.output_structure.map(e=>`- ${e}`).join(`
`),p=r.quality_checklist.map(e=>`- [ ] ${e}`).join(`
`),m=r.closing_questions.map(e=>`- ${e}`).join(`
`);return{protocol:r,commonRulesText:a,protocolRulesText:o,outputLanguageInstruction:c,questionProtocolText:d,outputStructureText:f,qualityChecklistText:p,closingQuestionsText:m}}var _={"content-creation":`# ROLE
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
`,"learn-skill":`# ROLE
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
`,"channel-strategy":`# ROLE
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
`,"idea-evaluation":`# ROLE
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
`,custom:`# ROLE
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
`};function v(e){if(e.length===0)return`_No terms injected._`;let t={};for(let n of e)(t[n.category]||=[]).push(n);let n=[];for(let[e,r]of Object.entries(t)){n.push(`## ${y(e)} (${r.length} terms)`);for(let e of r)n.push(`### ${e.term_en} / ${e.term_ar}\n- Summary: ${e.prompt_summary}\n- Example: ${e.prompt_example}`)}return n.join(`

`)}function y(e){return{"writing-hacks":`Writing Hacks`,storytelling:`Storytelling`,"camera-presence":`Camera Presence`,hooks:`Hook & Micro Hooks`,cta:`Call to Action`,editing:`Editing & Montage`}[e]||e}function b(e,t,n,r,i){let a=[],o=(e,t)=>e===`__other__`?t:e,s=(e,t)=>{t!=null&&t!==``&&a.push(`- **${e}:** ${t}`)};return s(`Mode`,e.mode),s(`Audience`,o(e.audience,e.audienceCustom)),s(`Goal`,o(e.goal,e.goalCustom)),s(`Pain Point`,o(e.painPoint,e.painPointCustom)),s(`Platform`,o(e.platform||e.channelPlatform,e.platformCustom||e.channelPlatformCustom)),s(`Idea Content Type`,o(e.ideaContentType,e.ideaContentTypeCustom)),s(`Desired CTA`,o(e.ctaType,e.ctaTypeCustom)),s(`Tone`,o(e.tone,e.toneCustom)),s(`Content Type`,e.contentType),s(`Topic`,e.topic),s(`Niche / Field`,o(e.niche||e.channelNiche||e.ideaNiche,e.nicheCustom||e.channelNicheCustom||e.ideaNicheCustom)),s(`Idea Niche`,o(e.ideaNiche,e.ideaNicheCustom)),s(`Selected Strategy`,`${t.strategy.name.ar} — ${t.strategy.narrative_flow.join(` → `)}`),s(`Strategy Rationale`,t.reasoning),s(`Framework Anchors`,t.strategy.framework_anchors.join(`, `)),s(`Audience Level`,n.audienceLevel),s(`Normalized Niche`,n.nicheNormalized),r&&s(`Profile`,i||`Enabled`),s(`Skill Term ID`,e.skillTermId),s(`Depth Level`,e.depthLevel),s(`Channel Goal`,e.channelGoal),s(`Channel Status`,e.channelStatus),s(`Presentation Style`,e.presentationStyle),s(`Idea`,e.ideaText),s(`Idea Content Type`,e.ideaContentType),s(`Evaluation Strictness`,e.evaluationStrictness),s(`Preferred Hook Style`,e.hookStyle),s(`Target Duration`,e.duration),s(`Target Word Count`,e.wordCount),e.customTermIds?.length&&s(`Custom Terms Count`,e.customTermIds.length),s(`Additional Notes`,e.additionalNotes),a.length>0?a.join(`
`):`_No context provided._`}function x(e,t){return e.replace(/\{\{(\w+)\}\}/g,(e,n)=>t[n]??`_missing:${n}_`)}function S(e){let{answers:t,composed:n,terms:r,strategy:i,derived:a,usedProfile:o,profileName:s}=e;return x(_[t.mode]||_[`content-creation`],{role:n.protocol.role_definition,common_rules:n.commonRulesText,protocol_rules:n.protocolRulesText,output_language:n.outputLanguageInstruction,knowledge_block:v(r),user_context:b(t,i,a,o,s),question_protocol:n.questionProtocolText,output_structure:n.outputStructureText,quality_checklist:n.qualityChecklistText,closing_questions:n.closingQuestionsText}).trim()}var C={chatgpt:`> You are running inside ChatGPT. Follow the structured instructions below exactly. Think step by step in private before responding. Do not skip the DISCOVERY phase.`,claude:`> You are running inside Claude. This prompt uses Markdown sections. Respect all XML-inline constraints and follow the QUALITY CHECKLIST at the end before responding.`,gemini:`> You are running inside Gemini. Sections are clearly labeled with # headers. Preserve the order of execution. Do not omit the QUESTION PROTOCOL.`,deepseek:`> You are running inside DeepSeek. The instructions below are directive. Follow them in sequence, without skipping. Prioritize the DISCOVERY phase over any urge to generate content immediately.`,agnostic:`> This prompt is model-agnostic. Follow the structure exactly. Do not skip any phase.`};function w(e,t){return`${C[t]||C.agnostic}\n\n${e}`}var T={"content-creation":[{title:`Stage 1 — Discovery`,objective:`Ask the 5 discovery questions and wait for the user to answer. Do NOT write any content yet.`,appendTask:`**END YOUR RESPONSE HERE.** Do not generate any script or post yet. Wait for the user to answer the 5 questions. Confirm each answer as you receive it.`},{title:`Stage 2 — Generation`,objective:`Using the brief collected in Stage 1, generate the full script with 3 HOOK options, segmented CONTENT, and a matched CTA.`,appendTask:`Assume the user has already answered the 5 discovery questions in the previous turn. Generate the full content now, following the CONTENT CREATION structure exactly. Include Visual & Editing notes after the script.`},{title:`Stage 3 — Evaluation & Refinement`,objective:`Critique the generated content using the injected frameworks, score it out of 10, and propose 3 concrete improvements.`,appendTask:`Now critique the content you just produced (or the version the user will paste). Score it out of 10 using the following criteria: Hook strength, Content clarity, CTA effectiveness, Pacing, and Editing potential. For each criterion, give 1 concrete improvement. End with one "if I could change ONE thing" recommendation.`}],"learn-skill":[{title:`Stage 1 — Deep Explanation`,objective:`Deliver the deep explanation with numbered rules, bilingual examples, and a summary table.`,appendTask:`Deliver the full learn-skill explanation following the structure: one-line framing → numbered rules with bilingual examples → summary table → coach's tip. End there.`},{title:`Stage 2 — Practice Exercises`,objective:`Provide 3 short practice exercises the user can do to apply the term immediately.`,appendTask:`Now generate 3 practical exercises the user can complete within 10 minutes each, applying the term from Stage 1. For each: title + instructions + success criteria.`},{title:`Stage 3 — Quiz & Grading`,objective:`Ask 5 quiz questions, wait for answers, then grade and explain.`,appendTask:`Now write 5 quiz questions (mix of MCQ and short-answer) testing understanding of the term. Wait for the user to answer, then grade each answer and explain what they got right or wrong.`}],"channel-strategy":[{title:`Stage 1 — Diagnosis`,objective:`Ask the 5 diagnostic questions about the channel and analyze the answers.`,appendTask:`Ask the 5 diagnostic questions (niche, platform, goal, status, presentation). Wait for answers. Then produce a one-page diagnosis: strengths, weaknesses, and 3 quick wins.`},{title:`Stage 2 — 30-Day Plan`,objective:`Produce a detailed 30-day content plan (week by week).`,appendTask:`Based on the diagnosis from Stage 1, produce a 30-day content plan divided into 4 weeks. For each week: theme + 3 content ideas + posting schedule + success metric.`},{title:`Stage 3 — Performance System`,objective:`Build a tracking system the user can run weekly to measure progress.`,appendTask:`Now build a weekly performance tracking system: metrics to measure (with target ranges), a 10-minute weekly review checklist, and a decision framework for "keep / adjust / kill" any content format.`}],"idea-evaluation":[{title:`Stage 1 — Score & Critique`,objective:`Score the idea out of 10 and list every flaw, each tied to a framework.`,appendTask:`Deliver ONLY the score + direct critique (numbered flaws, each tied to a framework). Do NOT propose alternatives yet — end your response after the critique.`},{title:`Stage 2 — 3 Alternative Angles`,objective:`Propose 3 alternative angles and 3 hooks for the strongest one.`,appendTask:`Now propose 3 alternative angles (name + 2-line pitch + virality reason). Then pick the strongest angle and propose 3 hook options (comedic / curiosity / relatable).`},{title:`Stage 3 — Refinement`,objective:`Deep-dive on the chosen angle with a full outline.`,appendTask:`Assume the user picked one angle. Produce a full outline for it: hook (with 3 variants), 5-7 content beats, CTA, and a visual direction note. End with a go/no-go recommendation.`}],custom:[{title:`Stage 1 — Structure Proposal`,objective:`Confirm the selected terms and propose a structure.`,appendTask:`Confirm the selected terms in one line, then propose a 2-3 pillar structure for applying them. Wait for user approval before proceeding.`},{title:`Stage 2 — Term-by-Term Application`,objective:`Apply each term in balanced depth.`,appendTask:`Apply each selected term with a real example and a practical tip. Divide your response space equally across all terms.`},{title:`Stage 3 — Integration`,objective:`Show how the terms interconnect and produce one worked example.`,appendTask:`Show how the applied terms interconnect, then produce one fully worked example that combines all of them.`}]};function E(e,t){let n=T[t]||T[`content-creation`],r=[];for(let t of n)r.push(`## ${t.title}\n\n> **Objective:** ${t.objective}\n\n${e}\n\n---\n\n## CHAIN INSTRUCTION\n\n${t.appendTask}\n`);return r}function D(e,t){if(t.mode!==`content-creation`)return k(e,t.mode);let n=e.strategies.map(e=>({strategy:e,score:O(e,t)}));n.sort((e,t)=>t.score-e.score);let r=n[0],i=n[1],a=i?r.score-i.score:r.score,o=Math.min(1,Math.max(.2,a/Math.max(r.score,1)));return{strategy:r.strategy,confidence:o,reasoning:A(r.strategy,t),alternatives:n.slice(1,4).map(e=>({strategy:e.strategy,score:e.score}))}}function O(e,t){let n=0;t.goal&&(e.best_for_goals.includes(t.goal)?n+=30:e.best_for_goals.some(e=>e.includes(t.goal.split(` `)[0]))&&(n+=10)),t.tone&&(e.best_for_tones.includes(t.tone)?n+=25:e.best_for_tones.some(e=>e.includes(t.tone.split(` `)[0]))&&(n+=8)),t.contentType&&e.best_for_content_types.includes(t.contentType)&&(n+=20),t.painPoint&&[`خايفين من الفشل`,`عندهم معلومات خاطئة`,`شايفين الموضوع صعب`].some(e=>t.painPoint?.includes(e))&&[`problem-solution`,`myth-busting`,`contrarian-truth`].includes(e.id)&&(n+=15);let r=(t.platform||``).toLowerCase();return(r.includes(`tiktok`)||r.includes(`reel`)||r.includes(`short`))&&([`contrarian-truth`,`listicle-countdown`,`before-after-bridge`].includes(e.id)&&(n+=12),e.id===`tutorial-breakdown`&&(n-=8)),t.audience===`مبتدئين تماماً في المجال`&&((e.id===`tutorial-breakdown`||e.id===`myth-busting`)&&(n+=10),e.id===`contrarian-truth`&&(n-=5)),n}function k(e,t){let n={"content-creation":`problem-solution`,"learn-skill":`tutorial-breakdown`,"channel-strategy":`tutorial-breakdown`,"idea-evaluation":`myth-busting`,custom:`problem-solution`};return{strategy:e.strategies.find(e=>e.id===n[t])||e.strategies[0],confidence:.5,reasoning:`Default strategy for mode "${t}".`,alternatives:[]}}function A(e,t){let n=[];return t.goal&&e.best_for_goals.includes(t.goal)&&n.push(`aligned with goal "${t.goal}"`),t.tone&&e.best_for_tones.includes(t.tone)&&n.push(`matches tone "${t.tone}"`),t.contentType&&e.best_for_content_types.includes(t.contentType)&&n.push(`suited for "${t.contentType}"`),n.length>0?`Selected because it's ${n.join(`, `)}.`:`Selected as best general fit for this context.`}function j(e,t){return e<t?`${e}-${t}`:`${t}-${e}`}function M(e,t){if(t.length<2)return t;let n=new Map;for(let t of e.pairs)n.set(j(t.a,t.b),t.score);let r=[...t].sort((e,t)=>{let n=Object.values(e.injection_weight).reduce((e,t)=>e+t,0);return Object.values(t.injection_weight).reduce((e,t)=>e+t,0)-n}),i=[];for(let t of r){let r=!1;for(let a of i)if((n.get(j(t.id,a.id))??e.default_compatibility)<-.15){r=!0;break}r||i.push(t)}return i}function N(e,t){return{answers:e,profile:t,usedProfile:!!t&&t.enabled===!0,derived:P(e),createdAt:new Date().toISOString(),version:`1.0.0`}}function P(e){return{audienceLevel:F(e.audience),platformKey:I(e.platform||e.channelPlatform||``),toneKey:L(e.tone||``),nicheNormalized:R(e.niche||e.channelNiche||e.ideaNiche||``),goalCategory:z(e.goal||``)}}function F(e){if(!e)return`intermediate`;let t=e.toLowerCase();return t.includes(`مبتدئ`)||t.includes(`beginner`)||t.includes(`absolute`)?`beginner`:t.includes(`محترف`)||t.includes(`خبر`)||t.includes(`advanced`)||t.includes(`expert`)?`advanced`:`intermediate`}function I(e){let t=e.toLowerCase();return t.includes(`tiktok`)?`tiktok`:t.includes(`reel`)?`reels`:t.includes(`short`)?`youtube-shorts`:t.includes(`youtube`)?`youtube-long`:t.includes(`facebook`)?`facebook`:t.includes(`linkedin`)?`linkedin`:t.includes(`twitter`)||t.includes(`x`)?`x`:t.includes(`blog`)||t.includes(`مدون`)||t.includes(`medium`)?`blog`:t.includes(`podcast`)||t.includes(`بودكاست`)?`podcast`:`all`}function L(e){let t=e.toLowerCase();return t.includes(`كوميد`)||t.includes(`comedic`)||t.includes(`funny`)?`comedic`:t.includes(`جدي`)||t.includes(`serious`)||t.includes(`formal`)?`serious`:t.includes(`تحفيز`)||t.includes(`inspir`)?`inspirational`:t.includes(`صادم`)||t.includes(`provocative`)||t.includes(`controversial`)?`provocative`:t.includes(`هادئ`)||t.includes(`calm`)||t.includes(`friendly`)?`calm`:`educational`}function R(e){let t=e.trim().toLowerCase();return t?t.includes(`تقني`)||t.includes(`برمج`)||t.includes(`tech`)?`tech`:t.includes(`صحة`)||t.includes(`لياقة`)||t.includes(`health`)||t.includes(`fitness`)?`health`:t.includes(`طبخ`)||t.includes(`أكل`)||t.includes(`food`)||t.includes(`cook`)?`food`:t.includes(`مالي`)||t.includes(`استثمار`)||t.includes(`finance`)?`finance`:t.includes(`أعمال`)||t.includes(`ريادة`)||t.includes(`business`)?`business`:t.includes(`تعليم`)||t.includes(`تعلم`)||t.includes(`educat`)?`education`:t.includes(`تسويق`)||t.includes(`بيع`)||t.includes(`market`)?`marketing`:t.includes(`ترفيه`)||t.includes(`فن`)||t.includes(`entertain`)?`entertainment`:t.includes(`تطوير ذات`)||t.includes(`self`)?`self-dev`:t.includes(`سفر`)||t.includes(`travel`)?`travel`:t.includes(`رياضة`)||t.includes(`sport`)?`sports`:t.includes(`جمال`)||t.includes(`عناية`)||t.includes(`beauty`)?`beauty`:t.slice(0,20):``}function z(e){let t=e.toLowerCase();return t.includes(`توعية`)||t.includes(`awareness`)?`awareness`:t.includes(`تشجيع`)||t.includes(`starting`)||t.includes(`يبدأ`)?`starting`:t.includes(`منتج`)||t.includes(`خدمة`)||t.includes(`promotion`)?`promotion`:t.includes(`كورس`)||t.includes(`course`)?`course`:t.includes(`براند`)||t.includes(`brand`)?`brand`:t.includes(`مشاهد`)||t.includes(`views`)?`views`:t.includes(`تفاعل`)||t.includes(`engagement`)?`engagement`:`unknown`}function B(e){let{answers:t,termMetadata:n,protocols:r,strategies:i,compatibility:o,profile:s}=e,c=N(t,s),l=D(i,t);c.strategy=l;let u=a(n,t,o,c.derived),d=M(o,u.selected.map(e=>l.strategy.recommended_term_ids.includes(e.id)?{...e,injection_weight:Object.fromEntries(Object.entries(e.injection_weight).map(([e,t])=>[e,t+3]))}:e)),f=g(r,t.mode,{outputLanguage:t.outputLanguage}),p=w(S({answers:t,composed:f,terms:d,strategy:l,derived:c.derived,usedProfile:c.usedProfile,profileName:s?.name}),t.aiModel),m=t.promptFormat===`chained`,h=m?E(p,t.mode):[p],_=H(u.categoryBreakdown);return{id:V(),prompts:h,meta:{mode:t.mode,protocolId:f.protocol.id,lengthMode:t.lengthMode,selectedTermIds:d.map(e=>e.id),categoryBreakdown:u.categoryBreakdown,language:t.outputLanguage,isChained:m,totalChars:h.reduce((e,t)=>e+t.length,0),generatedAt:new Date().toISOString(),strategy:l.strategy.id,strategyConfidence:l.confidence,usedProfile:c.usedProfile,profileName:s?.name},dnaSections:_}}function V(){return`p_${Date.now()}_${Math.random().toString(36).slice(2,8)}`}function H(t){let n=Object.values(t).reduce((e,t)=>e+t,0)||1,r=e.theme.colors.categories;return Object.entries(t).map(([t,i])=>({name:U(t),category:t,weight:Math.round(i/n*100),color:r[t]||e.theme.colors.primary,termIds:[]}))}function U(e){return{"writing-hacks":`Writing Hacks`,storytelling:`Storytelling`,"camera-presence":`Camera Presence`,hooks:`Hooks`,cta:`CTA`,editing:`Editing`}[e]||e}export{B as t};