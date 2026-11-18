// src/data/term-metadata.json
var version = "1.0.0";
var total_terms = 65;
var description = "Adapter layer metadata for knowledge injection. Each term provides a compact prompt_summary + prompt_example for use in the prompt engine, plus tags/weights for the TermSelector algorithm.";
var terms = [
	{
		"id": 1,
		"term_en": "AIDA (Attention-Interest-Desire-Action)",
		"term_ar": "آيدا",
		"category": "writing-hacks",
		"tags": [
			"framework",
			"copywriting",
			"persuasion",
			"ads",
			"funnel"
		],
		"use_cases": [
			"content-creation",
			"learn-skill",
			"idea-evaluation"
		],
		"complexity": "beginner",
		"related_terms": [
			2,
			3,
			4,
			8
		],
		"prompt_summary": "A 4-stage persuasion framework: Attention → Interest → Desire → Action. Use for ads, sales copy, and structured video scripts. Attention grabs the eye, Interest builds curiosity with a fact, Desire shows the life-improvement, Action gives a clear next step.",
		"prompt_example": "Attention: لقطة مقربة لطبق صحي مذهل. Interest: أكلاتنا بتعمل الوزن بدون حرمان. Desire: هتوفر فلوس الدايت وتستمتع بالطعم. Action: اطلب دلوقتي واستخدم كود HEALTH10.",
		"injection_weight": {
			"content-creation": 9,
			"learn-skill": 7,
			"idea-evaluation": 6,
			"channel-strategy": 5,
			"custom": 5
		}
	},
	{
		"id": 2,
		"term_en": "PAS (Problem-Agitate-Solve)",
		"term_ar": "باس",
		"category": "writing-hacks",
		"tags": [
			"framework",
			"copywriting",
			"pain-point",
			"persuasion",
			"retention"
		],
		"use_cases": [
			"content-creation",
			"learn-skill",
			"idea-evaluation"
		],
		"complexity": "beginner",
		"related_terms": [
			1,
			3,
			4,
			38
		],
		"prompt_summary": "Problem → Agitate → Solve. Name the audience's pain, amplify its negative consequences, then present your solution. Creates tension that the solution releases. Boosts CTR by ~12% vs traditional writing.",
		"prompt_example": "Problem: بتنزل فيديوهات ومحدش بيتفرج عليها؟ Agitate: بتضيع ساعات في التصوير والمونتاج وفي الآخر 200 مشاهدة. Solve: ابدأ بخطاف مبني على PAS في أول 3 ثواني — فيديو واحد كفاية تفرق.",
		"injection_weight": {
			"content-creation": 9,
			"learn-skill": 7,
			"idea-evaluation": 7,
			"channel-strategy": 5,
			"custom": 5
		}
	},
	{
		"id": 3,
		"term_en": "FAB (Features-Advantages-Benefits)",
		"term_ar": "فاب",
		"category": "writing-hacks",
		"tags": [
			"framework",
			"product-marketing",
			"benefits",
			"value-proposition"
		],
		"use_cases": [
			"content-creation",
			"learn-skill",
			"channel-strategy"
		],
		"complexity": "intermediate",
		"related_terms": [
			1,
			2,
			4,
			7
		],
		"prompt_summary": "Features → Advantages → Benefits. Lead with the real-life benefit, not the technical feature. People buy the benefit (health, time, status), not the feature (motor, spec). Harvard research confirms benefits drive purchases more than features.",
		"prompt_example": "Feature: تطبيق فيه منبه ذكي وفلتر أولويات. Advantage: بيوفر وقت إعداد المهام يدوياً. Benefit: هتخلص شغلك بدري وترجع لعيلتك وصحتك.",
		"injection_weight": {
			"content-creation": 7,
			"learn-skill": 7,
			"idea-evaluation": 5,
			"channel-strategy": 6,
			"custom": 5
		}
	},
	{
		"id": 4,
		"term_en": "WIIFM (What's In It For Me?)",
		"term_ar": "ويفم",
		"category": "writing-hacks",
		"tags": [
			"framework",
			"audience-first",
			"value",
			"hook",
			"benefits"
		],
		"use_cases": [
			"content-creation",
			"learn-skill",
			"idea-evaluation",
			"channel-strategy"
		],
		"complexity": "beginner",
		"related_terms": [
			1,
			2,
			7,
			38
		],
		"prompt_summary": "Answer the audience's #1 question in the first 3 seconds: 'What do I gain?'. Make every video answer this immediately. Content that answers WIIFM clearly gets the most shares (Social Media Examiner).",
		"prompt_example": "هتقدر تلاقي وظيفة خلال 3 شهور، وهتضاعف دخلك بعد سنة — وأنت بتدرس البرمجة part-time.",
		"injection_weight": {
			"content-creation": 10,
			"learn-skill": 8,
			"idea-evaluation": 7,
			"channel-strategy": 6,
			"custom": 5
		}
	},
	{
		"id": 5,
		"term_en": "Bucket Brigades",
		"term_ar": "بكت بريغيدز",
		"category": "writing-hacks",
		"tags": [
			"copywriting",
			"retention",
			"transitions",
			"curiosity",
			"mid-content"
		],
		"use_cases": ["content-creation", "learn-skill"],
		"complexity": "intermediate",
		"related_terms": [
			6,
			8,
			9,
			33,
			34
		],
		"prompt_summary": "Short transition phrases inserted mid-content to re-hook the reader: 'But here's what you need to know!', 'Stay with me, the surprise is coming!'. Raises Time-on-Page by ~15% (SEMrush). The promise must be fulfilled.",
		"prompt_example": "بس فيه حاجة لازم تعرفها! … استنى عليا شوية … لسه مخلصناش المفاجآت!",
		"injection_weight": {
			"content-creation": 8,
			"learn-skill": 6,
			"idea-evaluation": 4,
			"channel-strategy": 4,
			"custom": 4
		}
	},
	{
		"id": 6,
		"term_en": "Power Words",
		"term_ar": "باور ووردز",
		"category": "writing-hacks",
		"tags": [
			"copywriting",
			"emotion",
			"headlines",
			"persuasion",
			"vocabulary"
		],
		"use_cases": [
			"content-creation",
			"learn-skill",
			"idea-evaluation"
		],
		"complexity": "beginner",
		"related_terms": [
			1,
			7,
			9,
			31,
			38
		],
		"prompt_summary": "Emotionally-charged words that shift decisions: Exclusive, Secret, Free, Amazing, Revolutionary. Use sparingly — overuse kills credibility. Best placed in headlines and hooks. Can lift engagement by ~12% (Copyblogger).",
		"prompt_example": "احصل على تصميماتنا الخيالية اللي هتبهرك وتبهر عميلك! (بدل: عندنا خدمة تصميم)",
		"injection_weight": {
			"content-creation": 7,
			"learn-skill": 6,
			"idea-evaluation": 5,
			"channel-strategy": 4,
			"custom": 4
		}
	},
	{
		"id": 7,
		"term_en": "Benefit-Driven Headlines",
		"term_ar": "العناوين المحفزة بالمنافع",
		"category": "writing-hacks",
		"tags": [
			"headlines",
			"benefits",
			"copywriting",
			"A/B-testing",
			"CTR"
		],
		"use_cases": [
			"content-creation",
			"learn-skill",
			"idea-evaluation",
			"channel-strategy"
		],
		"complexity": "beginner",
		"related_terms": [
			3,
			4,
			6,
			31
		],
		"prompt_summary": "Headlines that sell the end-result (not the topic) with a specific number or mini-story. 'Lose 5kg in a month' beats 'Best weight-loss program'. Drives ~21% more shares than feature-based headlines (BuzzSumo).",
		"prompt_example": "وفّر 50% من وقتك كل يوم (بدل: أفضل تطبيق لتنظيم الوقت) — إزاي أحمد وفّر 3 ساعات يومياً؟",
		"injection_weight": {
			"content-creation": 9,
			"learn-skill": 7,
			"idea-evaluation": 8,
			"channel-strategy": 7,
			"custom": 5
		}
	},
	{
		"id": 8,
		"term_en": "Open Loops",
		"term_ar": "الدوائر المفتوحة",
		"category": "writing-hacks",
		"tags": [
			"retention",
			"curiosity",
			"psychology",
			"hooks",
			"storytelling",
			"watch-time"
		],
		"use_cases": [
			"content-creation",
			"learn-skill",
			"idea-evaluation",
			"channel-strategy"
		],
		"complexity": "intermediate",
		"related_terms": [
			5,
			9,
			33,
			34,
			37
		],
		"prompt_summary": "Open a curiosity loop early ('By the end of this video, I'll show you the secret…') and close it only at the end. Based on the Zeigarnik Effect (brain fixates on incomplete tasks). Close it too fast = lost tension; too slow = audience leaves.",
		"prompt_example": "في نهاية الفيديو هقولك سر حصري استخدمه أغنى المسوقين — استنى للآخر.",
		"injection_weight": {
			"content-creation": 10,
			"learn-skill": 8,
			"idea-evaluation": 7,
			"channel-strategy": 6,
			"custom": 6
		}
	},
	{
		"id": 9,
		"term_en": "Snappy Sentences",
		"term_ar": "الجمل الخاطفة",
		"category": "writing-hacks",
		"tags": [
			"copywriting",
			"rhythm",
			"quotability",
			"engagement",
			"memorability"
		],
		"use_cases": [
			"content-creation",
			"learn-skill",
			"idea-evaluation"
		],
		"complexity": "beginner",
		"related_terms": [
			5,
			6,
			8
		],
		"prompt_summary": "Very short, punchy, quotable sentences that break rhythm and stick in memory: 'Time to change.', 'Start.', 'Stop.', 'Resist.'. Microcopy research shows short sentences stick better than long ones. Make them quotable for social sharing.",
		"prompt_example": "آن الأوان للتغيير. ابدأ. استيقظ. توقّف. قاوم.",
		"injection_weight": {
			"content-creation": 7,
			"learn-skill": 5,
			"idea-evaluation": 6,
			"channel-strategy": 4,
			"custom": 4
		}
	},
	{
		"id": 10,
		"term_en": "Scarcity & Urgency Tactics",
		"term_ar": "أساليب الندرة والإلحاح",
		"category": "writing-hacks",
		"tags": [
			"cta",
			"psychology",
			"FOMO",
			"sales",
			"persuasion"
		],
		"use_cases": [
			"content-creation",
			"learn-skill",
			"channel-strategy",
			"idea-evaluation"
		],
		"complexity": "intermediate",
		"related_terms": [
			41,
			42,
			43,
			44,
			45
		],
		"prompt_summary": "Limited-time or limited-quantity messaging that triggers FOMO. Powerful ONLY when the scarcity is real — fake urgency destroys trust. Use a countdown timer or capped seats. Best when there's genuine time/resource limitation.",
		"prompt_example": "التسجيل مفتوح لأسبوع واحد فقط — المقاعد محدودة لـ 50 شخص. سجّل الآن قبل نفاد المقاعد.",
		"injection_weight": {
			"content-creation": 7,
			"learn-skill": 6,
			"idea-evaluation": 5,
			"channel-strategy": 7,
			"custom": 4
		}
	},
	{
		"id": 11,
		"term_en": "Hero's Journey",
		"term_ar": "رحلة البطل",
		"category": "storytelling",
		"tags": [
			"narrative",
			"structure",
			"emotional-arc",
			"transformation",
			"case-study"
		],
		"use_cases": [
			"content-creation",
			"learn-skill",
			"idea-evaluation",
			"channel-strategy"
		],
		"complexity": "intermediate",
		"related_terms": [
			12,
			13,
			14,
			18,
			19
		],
		"prompt_summary": "A narrative structure where the protagonist starts with a goal, faces challenges, gets help from a mentor, battles, and transforms. Stages include Call to Adventure, Refusal, Mentor, Trials, Victory. Resonates because the audience sees themselves in the arc. Stanford research: stories are remembered 22x more than raw facts.",
		"prompt_example": "شاب قرر يبدأ قناة يوتيوب (Call) — خاف في الأول (Refusal) — قابل صانع محتوى خبرة (Mentor) — فشل 3 مرات (Trials) — وصل لـ 100 ألف مشترك (Victory).",
		"injection_weight": {
			"content-creation": 9,
			"learn-skill": 8,
			"idea-evaluation": 7,
			"channel-strategy": 7,
			"custom": 5
		}
	},
	{
		"id": 12,
		"term_en": "Conflict and Resolution",
		"term_ar": "الصراع والحل",
		"category": "storytelling",
		"tags": [
			"narrative",
			"drama",
			"tension",
			"problem-solving",
			"engagement"
		],
		"use_cases": [
			"content-creation",
			"learn-skill",
			"idea-evaluation"
		],
		"complexity": "beginner",
		"related_terms": [
			11,
			13,
			18,
			38
		],
		"prompt_summary": "Conflict = the obstacle blocking the protagonist's goal. Resolution = how they overcome it. The Epiphany moment (sudden insight) flips the story. Conflict can be internal (fear, doubt) or external (competitor, money). Robert McKee's 'Story' insists conflict is the foundation of any compelling plot.",
		"prompt_example": "مدرب لياقة بيعاني إن المتدربين بينسحبوا — الصراع: التزام ضعيف — لحظة التنوير: جدول 20 دقيقة فقط — الحل: التزام 90% بدل 40%.",
		"injection_weight": {
			"content-creation": 8,
			"learn-skill": 7,
			"idea-evaluation": 8,
			"channel-strategy": 5,
			"custom": 5
		}
	},
	{
		"id": 13,
		"term_en": "Narrative Arc",
		"term_ar": "القوس السردي",
		"category": "storytelling",
		"tags": [
			"narrative",
			"structure",
			"pacing",
			"foreshadowing",
			"engagement"
		],
		"use_cases": [
			"content-creation",
			"learn-skill",
			"idea-evaluation"
		],
		"complexity": "intermediate",
		"related_terms": [
			11,
			12,
			16,
			18
		],
		"prompt_summary": "The 5-stage dramatic shape: Exposition → Rising Action → Climax → Falling Action → Denouement. Helps the audience follow the story and link beginning to end. Use foreshadowing in the opening to make the ending feel earned. For ads: setup the problem → escalate → deliver the solution → show the result.",
		"prompt_example": "Exposition: عرض مشكلة العميل — Rising: تصعيد المشكلة — Climax: تقديم الحل — Falling: النتيجة — Denouement: التحول النهائي.",
		"injection_weight": {
			"content-creation": 8,
			"learn-skill": 7,
			"idea-evaluation": 7,
			"channel-strategy": 5,
			"custom": 5
		}
	},
	{
		"id": 14,
		"term_en": "Character Development",
		"term_ar": "تطوير الشخصية",
		"category": "storytelling",
		"tags": [
			"narrative",
			"transformation",
			"empathy",
			"arc",
			"case-study"
		],
		"use_cases": [
			"content-creation",
			"learn-skill",
			"channel-strategy",
			"idea-evaluation"
		],
		"complexity": "intermediate",
		"related_terms": [
			11,
			12,
			13,
			20
		],
		"prompt_summary": "The visible change a character goes through during the story. Audiences bond with the character when they see the transformation from weakness to growth. Show the turning points, not just the before/after. Make the change logical — grounded in real situations, not a sudden flip.",
		"prompt_example": "ماجد كان بيفشل في كل مشروع — قرر يتعلم من أخطائه — سافر يتدرب مع خبير — تحوّل من يائس لشخص متحمس وناجح في سنتين.",
		"injection_weight": {
			"content-creation": 7,
			"learn-skill": 6,
			"idea-evaluation": 6,
			"channel-strategy": 7,
			"custom": 5
		}
	},
	{
		"id": 15,
		"term_en": "Plot Twist",
		"term_ar": "التحوّل المفاجئ",
		"category": "storytelling",
		"tags": [
			"narrative",
			"surprise",
			"memorability",
			"virality",
			"storytelling"
		],
		"use_cases": [
			"content-creation",
			"learn-skill",
			"idea-evaluation"
		],
		"complexity": "advanced",
		"related_terms": [
			11,
			13,
			18,
			35
		],
		"prompt_summary": "A sudden, logical shift that reframes everything before it. Breaks prediction, keeps tension. Must be set up by earlier clues — otherwise it feels like a trick. Berkeley research: surprise activates the brain's pleasure centers. Successful twists drive word-of-mouth.",
		"prompt_example": "كنت فاكر إن المنتج ده معمول لكمال الأجسام بس — طلع ينفع أي حد حتى لو مش بيلعب رياضة، وده اللي ضاعف مبيعاته.",
		"injection_weight": {
			"content-creation": 7,
			"learn-skill": 5,
			"idea-evaluation": 7,
			"channel-strategy": 5,
			"custom": 4
		}
	},
	{
		"id": 16,
		"term_en": "Pacing",
		"term_ar": "الإيقاع السردي",
		"category": "storytelling",
		"tags": [
			"narrative",
			"rhythm",
			"retention",
			"editing",
			"engagement"
		],
		"use_cases": [
			"content-creation",
			"learn-skill",
			"idea-evaluation",
			"channel-strategy"
		],
		"complexity": "intermediate",
		"related_terms": [
			13,
			18,
			47,
			56
		],
		"prompt_summary": "The speed at which events unfold. Too fast = audience gets lost; too slow = audience leaves. Mix quiet reflection moments with action moments. Cut non-essential details. In short-form video every second counts — pacing IS the retention strategy.",
		"prompt_example": "لو بتحكي قصة نجاح مشروع، ما تقفزش من البداية للنجاح فوراً — اعرض المراحل بترتيبها ووقفة تأمل بين كل مرحلة.",
		"injection_weight": {
			"content-creation": 8,
			"learn-skill": 6,
			"idea-evaluation": 7,
			"channel-strategy": 6,
			"custom": 5
		}
	},
	{
		"id": 17,
		"term_en": "Setting",
		"term_ar": "بيئة الأحداث",
		"category": "storytelling",
		"tags": [
			"narrative",
			"immersion",
			"atmosphere",
			"visual",
			"context"
		],
		"use_cases": ["content-creation", "learn-skill"],
		"complexity": "beginner",
		"related_terms": [
			11,
			13,
			25,
			51
		],
		"prompt_summary": "The time and place where the story unfolds. Specific details (sounds, clothes, streets, weather) make the audience feel inside the world. Pixar invests heavily in setting realism. A distinctive or unexpected setting adds wonder and memorability.",
		"prompt_example": "لو المحتوى عن التكنولوجيا، خلي الخلفية مكتب عصري في وادي السيليكون — يبني إحساس بالابتكار قبل أول كلمة.",
		"injection_weight": {
			"content-creation": 6,
			"learn-skill": 5,
			"idea-evaluation": 5,
			"channel-strategy": 4,
			"custom": 4
		}
	},
	{
		"id": 18,
		"term_en": "Climax",
		"term_ar": "الذروة",
		"category": "storytelling",
		"tags": [
			"narrative",
			"tension",
			"peak",
			"resolution",
			"engagement"
		],
		"use_cases": [
			"content-creation",
			"learn-skill",
			"idea-evaluation"
		],
		"complexity": "intermediate",
		"related_terms": [
			11,
			12,
			13,
			16
		],
		"prompt_summary": "The peak of tension where the outcome is decided. Without a real climax, the story feels flat. Build up gradually; then hit it hard. TV series use 'mini-climaxes' at the end of each episode to keep viewers returning. After the climax, close fast and clear (or leave a hook).",
		"prompt_example": "صاحب مشروع على وشك الإفلاس — الذروة: مستثمر ضخم بيتصل في آخر لحظة — القرار هنا يحدد مصير الشركة كلها.",
		"injection_weight": {
			"content-creation": 8,
			"learn-skill": 6,
			"idea-evaluation": 6,
			"channel-strategy": 5,
			"custom": 4
		}
	},
	{
		"id": 19,
		"term_en": "Theme",
		"term_ar": "الفكرة الرئيسية",
		"category": "storytelling",
		"tags": [
			"narrative",
			"meaning",
			"core-message",
			"values",
			"memorability"
		],
		"use_cases": [
			"content-creation",
			"learn-skill",
			"channel-strategy",
			"idea-evaluation"
		],
		"complexity": "intermediate",
		"related_terms": [
			11,
			14,
			20
		],
		"prompt_summary": "The underlying value or message the story carries (sacrifice, friendship, courage, self-improvement). Stories without a theme feel shallow. Pick ONE clear theme; multiple themes split attention. A strong theme makes the content live in memory far longer.",
		"prompt_example": "فيلم أكشن ظاهره حرب — لكن ثيمته الأساسية 'التضحية'. في محتوى تسويقي، الثيمة ممكن تكون 'النجاح متاح للجميع'.",
		"injection_weight": {
			"content-creation": 7,
			"learn-skill": 6,
			"idea-evaluation": 7,
			"channel-strategy": 7,
			"custom": 4
		}
	},
	{
		"id": 20,
		"term_en": "Moral / Lesson",
		"term_ar": "العِبرة أو الدرس",
		"category": "storytelling",
		"tags": [
			"narrative",
			"takeaway",
			"actionable",
			"sharing",
			"engagement"
		],
		"use_cases": [
			"content-creation",
			"learn-skill",
			"channel-strategy",
			"idea-evaluation"
		],
		"complexity": "beginner",
		"related_terms": [
			11,
			14,
			19,
			42
		],
		"prompt_summary": "The explicit or implicit teaching the audience takes away. Best placed at the end. Should be actionable — something the audience can apply tomorrow. University of Pennsylvania research: stories with a clear lesson get more social shares. Avoid preaching; keep it natural.",
		"prompt_example": "في آخر القصة: 'الفشل بداية النجاح — بشرط تتقبل النقد وتتعلم منه.' وفي محتوى تسويقي: 'ادفع شوية في صحتك، بدل ما تدفع كتير بعدين.'",
		"injection_weight": {
			"content-creation": 7,
			"learn-skill": 6,
			"idea-evaluation": 6,
			"channel-strategy": 6,
			"custom": 4
		}
	},
	{
		"id": 21,
		"term_en": "On-Camera Persona",
		"term_ar": "الشخصية أمام الكاميرا",
		"category": "camera-presence",
		"tags": [
			"confidence",
			"personality",
			"authenticity",
			"amplification",
			"credibility"
		],
		"use_cases": [
			"content-creation",
			"learn-skill",
			"channel-strategy",
			"idea-evaluation"
		],
		"complexity": "intermediate",
		"related_terms": [
			22,
			24,
			25,
			27
		],
		"prompt_summary": "Your real personality + 20% amplification for the camera. Not fake — just the more vivid, energetic version of you. Confidence transfers to the audience and boosts credibility. Inconsistency between words and body language kills trust instantly.",
		"prompt_example": "شخص خجول بطبيعته — قدام الكاميرا يظهر بشخصية أكثر حيوية وجرأة بنسبة 20% — الجمهور يحس بالثقة وينجذب.",
		"injection_weight": {
			"content-creation": 6,
			"learn-skill": 6,
			"idea-evaluation": 6,
			"channel-strategy": 7,
			"custom": 4
		}
	},
	{
		"id": 22,
		"term_en": "Vocal Projection",
		"term_ar": "إخراج الصوت",
		"category": "camera-presence",
		"tags": [
			"voice",
			"clarity",
			"breathing",
			"energy",
			"audio"
		],
		"use_cases": [
			"content-creation",
			"learn-skill",
			"channel-strategy"
		],
		"complexity": "intermediate",
		"related_terms": [
			21,
			24,
			28,
			30
		],
		"prompt_summary": "Delivering your voice clearly, with appropriate power — no shouting, no mumbling. Low or rushed voice makes viewers leave early. Train diaphragmatic breathing; raise voice at key points; lower for detail. Use a good mic; space sentences for comprehension.",
		"prompt_example": "لو بتشرح موضوع صعب، ارفع صوتك عند النقطة المهمة وخليه أهدأ في الشرح التفصيلي — وافصل بين الجمل عشان المشاهد يستوعب.",
		"injection_weight": {
			"content-creation": 6,
			"learn-skill": 6,
			"idea-evaluation": 5,
			"channel-strategy": 6,
			"custom": 4
		}
	},
	{
		"id": 23,
		"term_en": "Scripting vs. Improvisation",
		"term_ar": "الكتابة مقابل الارتجال",
		"category": "camera-presence",
		"tags": [
			"preparation",
			"authenticity",
			"outline",
			"fluency",
			"delivery"
		],
		"use_cases": [
			"content-creation",
			"learn-skill",
			"channel-strategy"
		],
		"complexity": "intermediate",
		"related_terms": [
			21,
			22,
			24,
			30
		],
		"prompt_summary": "Balance between writing the script and improvising live. Beginners: write an outline with key beats, not every word. Confident speakers: reduce the script to bullet points. Script the opening + closing, improvise the middle. Never memorize word-for-word — audiences smell fake.",
		"prompt_example": "مبتدئ يكتب النقاط الأساسية بالترتيب — يبدأ بجمل مكتوبة ومرتبة — ويسيب مساحة للعفوية في منتصف الفيديو — النتيجة: احترافية بدون تصنّع.",
		"injection_weight": {
			"content-creation": 7,
			"learn-skill": 6,
			"idea-evaluation": 5,
			"channel-strategy": 6,
			"custom": 4
		}
	},
	{
		"id": 24,
		"term_en": "Energy & Engagement",
		"term_ar": "الطاقة والتفاعل",
		"category": "camera-presence",
		"tags": [
			"energy",
			"interaction",
			"engagement",
			"waves",
			"presence"
		],
		"use_cases": [
			"content-creation",
			"learn-skill",
			"channel-strategy"
		],
		"complexity": "beginner",
		"related_terms": [
			21,
			22,
			25,
			26
		],
		"prompt_summary": "Make the audience feel like part of a dialogue, not a lecture. Ask direct questions, share personal stories, mix high-energy moments with calm ones. Energy should come in WAVES, not a flat wall. Bump your camera energy by 20% above your natural level — it appears on screen as 'normal'.",
		"prompt_example": "ابدأ بسؤال: 'مين فيكم بيعاني من الفيديوهات اللي مش بتجيب مشاهدات؟' — امزج قصة شخصية — بدّل بين حماس وهدوء.",
		"injection_weight": {
			"content-creation": 7,
			"learn-skill": 6,
			"idea-evaluation": 6,
			"channel-strategy": 6,
			"custom": 4
		}
	},
	{
		"id": 25,
		"term_en": "Facial Expressions",
		"term_ar": "تعابير الوجه",
		"category": "camera-presence",
		"tags": [
			"nonverbal",
			"emotion",
			"credibility",
			"authenticity",
			"engagement"
		],
		"use_cases": [
			"content-creation",
			"learn-skill",
			"channel-strategy"
		],
		"complexity": "beginner",
		"related_terms": [
			21,
			24,
			26,
			27
		],
		"prompt_summary": "Nonverbal communication that carries meaning and emotion. Happy topic = bright face; painful topic = serious face. The camera AMPLIFIES every expression — small expressions become big on screen. Match face to the emotional register of each sentence.",
		"prompt_example": "بتتكلم عن موضوع مبهج؟ خلي وشك مبتسم ومشرق. بتشرح مشكلة مؤلمة؟ خلي وشك جاد ومتأثر — مش مبتسم.",
		"injection_weight": {
			"content-creation": 6,
			"learn-skill": 5,
			"idea-evaluation": 5,
			"channel-strategy": 5,
			"custom": 4
		}
	},
	{
		"id": 26,
		"term_en": "Gestures",
		"term_ar": "إيماءات اليدين",
		"category": "camera-presence",
		"tags": [
			"nonverbal",
			"clarity",
			"rhythm",
			"emphasis",
			"presence"
		],
		"use_cases": [
			"content-creation",
			"learn-skill",
			"channel-strategy"
		],
		"complexity": "beginner",
		"related_terms": [
			21,
			24,
			25,
			27
		],
		"prompt_summary": "Hand movements that clarify points and prevent the 'statue' look. Use gestures to emphasize, divide paragraphs, or show size/shape. Every gesture must have a purpose. Sync gestures with speech. Avoid random flailing — it distracts.",
		"prompt_example": "حركة يد لتوضيح حجم شيء — رفع كف للدلالة على التوقف — إشارة بالأصابع لعدّ 3 نقاط — كله متزامن مع الكلام.",
		"injection_weight": {
			"content-creation": 6,
			"learn-skill": 5,
			"idea-evaluation": 5,
			"channel-strategy": 5,
			"custom": 4
		}
	},
	{
		"id": 27,
		"term_en": "Posture",
		"term_ar": "وضعية الجسم",
		"category": "camera-presence",
		"tags": [
			"nonverbal",
			"confidence",
			"first-impression",
			"presence",
			"authority"
		],
		"use_cases": [
			"content-creation",
			"learn-skill",
			"channel-strategy"
		],
		"complexity": "beginner",
		"related_terms": [
			21,
			25,
			26,
			30
		],
		"prompt_summary": "Good posture = confidence + respect. Open chest, relaxed shoulders, straight back (not stiff). Avoid slouching or leaning. Balance weight evenly when standing. People judge from the first glance — posture is the first glance.",
		"prompt_example": "لو واقف، وزّع وزنك على القدمين — لو قاعد، خلي ظهرك مستقيم بدون تشنج — كتفين مسترخيين — صدر مفتوح.",
		"injection_weight": {
			"content-creation": 5,
			"learn-skill": 5,
			"idea-evaluation": 4,
			"channel-strategy": 5,
			"custom": 3
		}
	},
	{
		"id": 28,
		"term_en": "Filler Words Control",
		"term_ar": "السيطرة على كلمات الحشو",
		"category": "camera-presence",
		"tags": [
			"voice",
			"clarity",
			"professionalism",
			"pauses",
			"delivery"
		],
		"use_cases": [
			"content-creation",
			"learn-skill",
			"channel-strategy"
		],
		"complexity": "beginner",
		"related_terms": [
			22,
			23,
			30
		],
		"prompt_summary": "'آه' / 'ممم' / 'يعني' — some are natural, too many kill professionalism. Silent pauses beat any filler word. Practice: record yourself, count fillers in first 2 minutes, cut them in half. Prepare clearly so you don't flee to fillers.",
		"prompt_example": "بدل 'آه' أو 'ممم' — خد نفس صامت لثانية — الجمهور بيستوعب أكتر والاحترافية بتزيد.",
		"injection_weight": {
			"content-creation": 6,
			"learn-skill": 6,
			"idea-evaluation": 5,
			"channel-strategy": 5,
			"custom": 3
		}
	},
	{
		"id": 29,
		"term_en": "Audience Awareness",
		"term_ar": "الوعي بالجمهور",
		"category": "camera-presence",
		"tags": [
			"audience",
			"tone",
			"vocabulary",
			"context",
			"empathy"
		],
		"use_cases": [
			"content-creation",
			"learn-skill",
			"idea-evaluation",
			"channel-strategy"
		],
		"complexity": "intermediate",
		"related_terms": [
			4,
			21,
			24,
			38,
			39
		],
		"prompt_summary": "Know WHO is watching, their knowledge level, interests, and viewing context. Tech-savvy youth = fast speech, English terms. Older rural audience = no jargon, familiar references. Consider context: are they watching with sound on? On mobile? During commute?",
		"prompt_example": "جمهور شباب تقني؟ اتكلم أسرع واستخدم مصطلحات إنجليزية. جمهور كبار سن في الريف؟ قلل المصطلحات واربط بكلامهم اليومي.",
		"injection_weight": {
			"content-creation": 9,
			"learn-skill": 7,
			"idea-evaluation": 8,
			"channel-strategy": 8,
			"custom": 5
		}
	},
	{
		"id": 30,
		"term_en": "Warm-up Exercises",
		"term_ar": "تمرينات الإحماء",
		"category": "camera-presence",
		"tags": [
			"preparation",
			"voice",
			"body",
			"confidence",
			"pre-shoot"
		],
		"use_cases": ["learn-skill", "channel-strategy"],
		"complexity": "beginner",
		"related_terms": [
			22,
			24,
			27,
			28
		],
		"prompt_summary": "Simple voice + body warm-ups before shooting. Breathing exercises (inhale nose, exhale mouth), tongue/jaw rolls, shoulder/neck stretches. Actors and singers warm up before every performance. 1-2 minutes of warm-up can shift your entire energy on camera.",
		"prompt_example": "قبل التصوير: 3 دقايق تنفس + تحريك اللسان والفك + تمدد الكتفين والرقبة — سجّل فيديو قصير تجريبي تضبط بيه نبرة الصوت والمزاج.",
		"injection_weight": {
			"content-creation": 3,
			"learn-skill": 5,
			"idea-evaluation": 3,
			"channel-strategy": 5,
			"custom": 3
		}
	},
	{
		"id": 31,
		"term_en": "Hook Sentence",
		"term_ar": "جملة الخطاف",
		"category": "hooks",
		"tags": [
			"hook",
			"opening",
			"first-3-seconds",
			"retention",
			"curiosity"
		],
		"use_cases": [
			"content-creation",
			"learn-skill",
			"idea-evaluation",
			"channel-strategy",
			"custom"
		],
		"complexity": "beginner",
		"related_terms": [
			32,
			33,
			34,
			35,
			38,
			39
		],
		"prompt_summary": "The very first sentence that stops the scroll. Must be short, curious, and open a question in the viewer's mind. Wistia research: the first 10 seconds decide whether the viewer stays (80% drop-off threshold). In educational content: start with a shocking question or an unexpected statistic — then deliver on the promise.",
		"prompt_example": "🇪🇬 «عمرك حسيت إن 24 ساعة في اليوم مش كفاية؟» / 🇺🇸 \"Ever felt like 24 hours a day isn't enough?\"",
		"injection_weight": {
			"content-creation": 10,
			"learn-skill": 8,
			"idea-evaluation": 10,
			"channel-strategy": 7,
			"custom": 8
		}
	},
	{
		"id": 32,
		"term_en": "Pattern Interrupt",
		"term_ar": "كسر النمط",
		"category": "hooks",
		"tags": [
			"hook",
			"surprise",
			"visual-shock",
			"attention-reset",
			"scroll-stopper"
		],
		"use_cases": [
			"content-creation",
			"learn-skill",
			"idea-evaluation",
			"custom"
		],
		"complexity": "intermediate",
		"related_terms": [
			31,
			33,
			35,
			36
		],
		"prompt_summary": "Do something unexpected — visually or sonically — to break the viewer's autopilot. Change camera angle suddenly, drop an object, switch lighting, insert a B-roll cut. Must stay relevant to the topic; random shocks distract. Use once or twice per video, not constantly.",
		"prompt_example": "🇪🇬 ابدأ الفيديو وأنت بترمي الموبايل على المكتب وتقول: «امسح نص الفيديوهات اللي صورتها بالطريقة دي!» / 🇺🇸 \"Stop making videos like this! Here's why nobody watches them.\"",
		"injection_weight": {
			"content-creation": 9,
			"learn-skill": 7,
			"idea-evaluation": 8,
			"channel-strategy": 6,
			"custom": 6
		}
	},
	{
		"id": 33,
		"term_en": "Curiosity Gap",
		"term_ar": "فجوة الفضول",
		"category": "hooks",
		"tags": [
			"hook",
			"curiosity",
			"retention",
			"open-loop",
			"psychology"
		],
		"use_cases": [
			"content-creation",
			"learn-skill",
			"idea-evaluation",
			"channel-strategy",
			"custom"
		],
		"complexity": "beginner",
		"related_terms": [
			31,
			34,
			35,
			36,
			37
		],
		"prompt_summary": "Reveal part of the answer, hide the crucial part. The brain naturally hunts missing information. Example structure: '3 steps to double sales — the 3rd one is the game-changer.' Must ALWAYS deliver real value at the end, or credibility dies.",
		"prompt_example": "🇪🇬 «فيه 3 خطوات هتضاعف مبيعاتك، الخطوة التالتة بالذات هي اللي هتغير اللعبة.» / 🇺🇸 \"There are 3 steps to double your sales — and the third one is a total game-changer.\"",
		"injection_weight": {
			"content-creation": 10,
			"learn-skill": 8,
			"idea-evaluation": 9,
			"channel-strategy": 7,
			"custom": 7
		}
	},
	{
		"id": 34,
		"term_en": "Open Loop",
		"term_ar": "الحلقة المفتوحة",
		"category": "hooks",
		"tags": [
			"hook",
			"retention",
			"curiosity",
			"watch-time",
			"zeigarnik"
		],
		"use_cases": [
			"content-creation",
			"learn-skill",
			"idea-evaluation",
			"channel-strategy",
			"custom"
		],
		"complexity": "intermediate",
		"related_terms": [
			31,
			33,
			37,
			8
		],
		"prompt_summary": "Open a promise at the start ('By the end of this video, I'll show you the secret...') and close it ONLY at the end. Grounded in the Zeigarnik Effect — the brain fixates on incomplete tasks. Must be closed; if you don't deliver, the audience feels cheated and won't return.",
		"prompt_example": "🇪🇬 «بعد شوية هقولك إزاي تحل مشكلة الفيديوهات اللي مش بتجيب مشاهدات — بس خلينا الأول نتكلم عن...» / 🇺🇸 \"In a moment I'll reveal how to fix low-view videos — but first, let's talk about...\"",
		"injection_weight": {
			"content-creation": 10,
			"learn-skill": 8,
			"idea-evaluation": 8,
			"channel-strategy": 7,
			"custom": 8
		}
	},
	{
		"id": 35,
		"term_en": "Shock Value",
		"term_ar": "قيمة الصدمة",
		"category": "hooks",
		"tags": [
			"hook",
			"surprise",
			"statistics",
			"attention",
			"memorability"
		],
		"use_cases": [
			"content-creation",
			"learn-skill",
			"idea-evaluation",
			"custom"
		],
		"complexity": "intermediate",
		"related_terms": [
			31,
			32,
			33,
			38
		],
		"prompt_summary": "Open with a genuinely surprising fact, number, or statement. Goal: wake up attention, not shock for shock's sake. Must be TRUE — fake statistics destroy credibility. Pair the shock with an immediate positive solution ('Here's how to protect yourself').",
		"prompt_example": "🇪🇬 «هل تعرف إن 80% من المشاهدين بيقفلوا الفيديو خلال أول 15 ثانية؟» / 🇺🇸 \"Did you know 80% of viewers drop off within the first 15 seconds?\"",
		"injection_weight": {
			"content-creation": 8,
			"learn-skill": 7,
			"idea-evaluation": 7,
			"channel-strategy": 5,
			"custom": 5
		}
	},
	{
		"id": 36,
		"term_en": "Teaser",
		"term_ar": "المُشوِّق",
		"category": "hooks",
		"tags": [
			"hook",
			"preview",
			"series",
			"retention",
			"return-viewer"
		],
		"use_cases": [
			"content-creation",
			"learn-skill",
			"channel-strategy"
		],
		"complexity": "beginner",
		"related_terms": [
			34,
			37,
			13
		],
		"prompt_summary": "A small preview of upcoming content that creates anticipation — like movie trailers. Best used at the END of current video to preview the next one. Don't reveal everything — save the biggest surprise for the actual episode.",
		"prompt_example": "🇪🇬 «استنونا الأسبوع الجاي، هنعرض أسرار التصوير الاحترافي بالموبايل.» / 🇺🇸 \"Next week: the secrets of professional mobile videography.\"",
		"injection_weight": {
			"content-creation": 7,
			"learn-skill": 5,
			"idea-evaluation": 5,
			"channel-strategy": 8,
			"custom": 4
		}
	},
	{
		"id": 37,
		"term_en": "Cliffhanger",
		"term_ar": "النهاية المُعلّقة",
		"category": "hooks",
		"tags": [
			"hook",
			"retention",
			"series",
			"suspense",
			"next-episode"
		],
		"use_cases": ["content-creation", "channel-strategy"],
		"complexity": "intermediate",
		"related_terms": [
			34,
			36,
			13,
			18
		],
		"prompt_summary": "End in the middle of the peak — cut at the moment of highest tension. Drives follow-ups in serialized content. Only use if you actually HAVE a next episode. Don't stretch the wait — deliver the payoff in the next part or trust dies.",
		"prompt_example": "🇪🇬 «إنهاء الحلقة بسؤال: وتفتكر إيه اللي حصل بعد كده؟ استنى الفيديو الجاي.» / 🇺🇸 \"And guess what happened next? Wait for the next episode.\"",
		"injection_weight": {
			"content-creation": 7,
			"learn-skill": 5,
			"idea-evaluation": 5,
			"channel-strategy": 8,
			"custom": 4
		}
	},
	{
		"id": 38,
		"term_en": "Emotional Hook",
		"term_ar": "الخطاف العاطفي",
		"category": "hooks",
		"tags": [
			"hook",
			"emotion",
			"empathy",
			"relatability",
			"memorability"
		],
		"use_cases": [
			"content-creation",
			"learn-skill",
			"idea-evaluation",
			"channel-strategy",
			"custom"
		],
		"complexity": "intermediate",
		"related_terms": [
			31,
			33,
			39,
			40,
			12
		],
		"prompt_summary": "Target a specific emotion — fear, joy, sadness, hope, love. The audience feels the content speaks to THEM personally. Use human stories, direct emotional questions, expressive music. Must be authentic — cheap emotional manipulation backfires. End with hope or empowerment, not despair.",
		"prompt_example": "🇪🇬 «بتحس أحيانًا إنك لوحدك وسط الزحمة؟» / 🇺🇸 \"Ever feel alone even in a crowded room?\"",
		"injection_weight": {
			"content-creation": 10,
			"learn-skill": 7,
			"idea-evaluation": 8,
			"channel-strategy": 7,
			"custom": 7
		}
	},
	{
		"id": 39,
		"term_en": "Relatable Scenario",
		"term_ar": "سيناريو قريب من الجمهور",
		"category": "hooks",
		"tags": [
			"hook",
			"relatability",
			"empathy",
			"daily-life",
			"trust"
		],
		"use_cases": [
			"content-creation",
			"learn-skill",
			"idea-evaluation",
			"channel-strategy",
			"custom"
		],
		"complexity": "beginner",
		"related_terms": [
			31,
			38,
			40,
			4
		],
		"prompt_summary": "Show a real daily-life moment your audience lives every day — they should think 'that's EXACTLY me!'. Use familiar characters (mother rushing kids to school, employee late for work, salary gone in the first week). Add granular details (prices, transport, daily routine) for realism.",
		"prompt_example": "🇪🇬 «شخص بيقبض راتبه أول الشهر ويصرفه في أسبوع، وبعدها يقضي باقي الشهر على المكرونة.» / 🇺🇸 \"Someone who spends their salary in the first week, then lives on ramen the rest of the month.\"",
		"injection_weight": {
			"content-creation": 10,
			"learn-skill": 7,
			"idea-evaluation": 9,
			"channel-strategy": 7,
			"custom": 7
		}
	},
	{
		"id": 40,
		"term_en": "Anecdotal Lead",
		"term_ar": "مقدمة قصصية مختصرة",
		"category": "hooks",
		"tags": [
			"hook",
			"storytelling",
			"personal",
			"human",
			"informal"
		],
		"use_cases": [
			"content-creation",
			"learn-skill",
			"idea-evaluation",
			"custom"
		],
		"complexity": "beginner",
		"related_terms": [
			11,
			31,
			38,
			39
		],
		"prompt_summary": "Open with a short personal story or funny incident you or someone you know experienced. Breaks formality, humanizes the speaker. Must be SHORT and connected to the title — don't delay the main idea. Real or realistic moments only.",
		"prompt_example": "🇪🇬 «من أسبوع فات، قابلت واحد كان بيحكي لي إنه تعبان من الشغل 12 ساعة كل يوم...» / 🇺🇸 \"Last week I met a guy who told me he's exhausted from 12-hour workdays...\"",
		"injection_weight": {
			"content-creation": 8,
			"learn-skill": 6,
			"idea-evaluation": 7,
			"channel-strategy": 6,
			"custom": 6
		}
	},
	{
		"id": 41,
		"term_en": "Direct CTA",
		"term_ar": "الدعوة المباشرة لاتخاذ إجراء",
		"category": "cta",
		"tags": [
			"cta",
			"conversion",
			"clarity",
			"direct",
			"sales"
		],
		"use_cases": [
			"content-creation",
			"learn-skill",
			"channel-strategy",
			"custom"
		],
		"complexity": "beginner",
		"related_terms": [
			42,
			43,
			44,
			45,
			10
		],
		"prompt_summary": "An explicit ask: 'Buy now', 'Sign up', 'Click here', 'Call us'. Leaves no confusion about the next step. Always pair with a value reason ('Get 20% off') rather than a bare command. Unbounce research: direct CTAs boost conversions because they eliminate friction.",
		"prompt_example": "🇪🇬 «اشترِ الآن واحصل على خصم 20%» / 🇺🇸 \"Buy now and get 20% off.\"",
		"injection_weight": {
			"content-creation": 8,
			"learn-skill": 5,
			"idea-evaluation": 5,
			"channel-strategy": 7,
			"custom": 5
		}
	},
	{
		"id": 42,
		"term_en": "Transitional CTA",
		"term_ar": "الدعوة الانتقالية",
		"category": "cta",
		"tags": [
			"cta",
			"nurturing",
			"trust-building",
			"micro-conversion",
			"funnel"
		],
		"use_cases": [
			"content-creation",
			"learn-skill",
			"channel-strategy",
			"custom"
		],
		"complexity": "intermediate",
		"related_terms": [
			41,
			43,
			45
		],
		"prompt_summary": "A softer ask for audiences not ready to buy: 'Watch the demo', 'Join the newsletter', 'Try the free version'. Moves the viewer one step closer without asking for money yet. Essential for educational and long-form content — build trust first, then monetize.",
		"prompt_example": "🇪🇬 «لو مهتم تعرف أكتر، سجل إيميلك وهيوصلك جزء تجريبي مجاني» / 🇺🇸 \"Want to learn more? Join the free trial.\"",
		"injection_weight": {
			"content-creation": 8,
			"learn-skill": 6,
			"idea-evaluation": 5,
			"channel-strategy": 8,
			"custom": 5
		}
	},
	{
		"id": 43,
		"term_en": "Social Proof CTA",
		"term_ar": "الدعوة بالدليل الاجتماعي",
		"category": "cta",
		"tags": [
			"cta",
			"social-proof",
			"trust",
			"credibility",
			"cialdini"
		],
		"use_cases": [
			"content-creation",
			"learn-skill",
			"channel-strategy",
			"custom"
		],
		"complexity": "intermediate",
		"related_terms": [
			41,
			42,
			44,
			45
		],
		"prompt_summary": "Leverage the fact that people follow other people. Use real numbers ('Join 10,000 students'), customer reviews, or named testimonials. Cialdini's research confirms we trust decisions that others have made successfully. Must use REAL numbers — fake proof backfires fast.",
		"prompt_example": "🇪🇬 «انضم لـ10,000 شخص استفادوا من البرنامج — شوف تقييماتهم 4.8/5» / 🇺🇸 \"Join 10,000 students who've benefited — rated 4.8/5.\"",
		"injection_weight": {
			"content-creation": 8,
			"learn-skill": 5,
			"idea-evaluation": 5,
			"channel-strategy": 8,
			"custom": 5
		}
	},
	{
		"id": 44,
		"term_en": "Urgency CTA",
		"term_ar": "الدعوة مع عامل الاستعجال",
		"category": "cta",
		"tags": [
			"cta",
			"urgency",
			"fomo",
			"time-pressure",
			"sales"
		],
		"use_cases": [
			"content-creation",
			"learn-skill",
			"channel-strategy",
			"custom"
		],
		"complexity": "intermediate",
		"related_terms": [
			10,
			41,
			42,
			45
		],
		"prompt_summary": "Time-bound or quantity-bound CTA that triggers FOMO. Only works if scarcity is REAL — fake countdowns destroy trust permanently. Use a real countdown timer on the landing page. When the offer ends, END it — don't extend silently.",
		"prompt_example": "🇪🇬 «العرض مستمر 24 ساعة فقط — سجّل الآن قبل نفاد المقاعد» / 🇺🇸 \"Offer valid for 24 hours only — register before seats run out.\"",
		"injection_weight": {
			"content-creation": 7,
			"learn-skill": 5,
			"idea-evaluation": 5,
			"channel-strategy": 7,
			"custom": 5
		}
	},
	{
		"id": 45,
		"term_en": "Incentive CTA",
		"term_ar": "الدعوة مع حافز أو مكافأة",
		"category": "cta",
		"tags": [
			"cta",
			"incentive",
			"reward",
			"lead-magnet",
			"conversion"
		],
		"use_cases": [
			"content-creation",
			"learn-skill",
			"channel-strategy",
			"custom"
		],
		"complexity": "intermediate",
		"related_terms": [
			41,
			42,
			44
		],
		"prompt_summary": "Add a reward for immediate action: free E-book, template, bonus video, discount code. ConvertKit research: digital lead magnets (E-books, templates) rapidly build email lists. Make the incentive REAL and valuable — a cheap bonus feels like a bribe.",
		"prompt_example": "🇪🇬 «سجّل دلوقتي وهتاخد الفيديو التعليمي الإضافي ببلاش — لفترة محدودة» / 🇺🇸 \"Sign up now and get the bonus tutorial FREE — limited time.\"",
		"injection_weight": {
			"content-creation": 7,
			"learn-skill": 5,
			"idea-evaluation": 5,
			"channel-strategy": 8,
			"custom": 5
		}
	},
	{
		"id": 46,
		"term_en": "Strong Opening Sequence",
		"term_ar": "ابدأ بقصة قوية",
		"category": "editing",
		"tags": [
			"editing",
			"opening",
			"first-5-seconds",
			"retention",
			"hook-visual"
		],
		"use_cases": [
			"content-creation",
			"learn-skill",
			"channel-strategy",
			"custom"
		],
		"complexity": "beginner",
		"related_terms": [
			31,
			32,
			47,
			55
		],
		"prompt_summary": "The first 5 seconds determine stay-or-go. Open with a teaser shot from the video's climax, or a bold on-screen title. Must connect directly to what comes next — not a random visual. This is the visual counterpart to Hook Sentence.",
		"prompt_example": "اعرض لقطة تشويقية من أهم لحظة في الفيديو قبل الإنترو — أو عنواناً جذاباً على الشاشة في أول ثانية.",
		"injection_weight": {
			"content-creation": 9,
			"learn-skill": 6,
			"idea-evaluation": 8,
			"channel-strategy": 6,
			"custom": 6
		}
	},
	{
		"id": 47,
		"term_en": "Maintain Pace",
		"term_ar": "حافظ على الإيقاع",
		"category": "editing",
		"tags": [
			"editing",
			"pacing",
			"cuts",
			"rhythm",
			"retention"
		],
		"use_cases": [
			"content-creation",
			"learn-skill",
			"channel-strategy",
			"custom"
		],
		"complexity": "intermediate",
		"related_terms": [
			16,
			48,
			57,
			61
		],
		"prompt_summary": "Quick cuts for short videos (TikTok/Reels); slower pace for educational long-form. Watch your own video multiple times and cut any moment that drags. Pacing IS retention — a bored viewer swipes.",
		"prompt_example": "راجع الفيديو بعد المونتاج — احذف أي جزء ممل أو مكرر — في Shorts: قطع سريع، في تعليمي طويل: إيقاع أهدأ لكن مش ممل.",
		"injection_weight": {
			"content-creation": 8,
			"learn-skill": 6,
			"idea-evaluation": 7,
			"channel-strategy": 7,
			"custom": 5
		}
	},
	{
		"id": 48,
		"term_en": "B-Roll",
		"term_ar": "اللقطات الداعمة",
		"category": "editing",
		"tags": [
			"editing",
			"visual-support",
			"context",
			"variety",
			"engagement"
		],
		"use_cases": [
			"content-creation",
			"learn-skill",
			"custom"
		],
		"complexity": "beginner",
		"related_terms": [
			17,
			46,
			47,
			51
		],
		"prompt_summary": "Supporting footage inserted over the main talking-head to break monotony and add context. If you're talking about nature, show forests and rivers. B-roll supports the narration — it's not decoration; every cut should reinforce a point.",
		"prompt_example": "بتتكلم عن السفر؟ اعرض مشاهد شوارع طوكيو. بتشرح تطبيق؟ اعرض Screen Recording للواجهة.",
		"injection_weight": {
			"content-creation": 8,
			"learn-skill": 6,
			"idea-evaluation": 6,
			"channel-strategy": 6,
			"custom": 5
		}
	},
	{
		"id": 49,
		"term_en": "Audio Quality is King",
		"term_ar": "جودة الصوت هي الأساس",
		"category": "editing",
		"tags": [
			"editing",
			"audio",
			"noise-reduction",
			"clarity",
			"professionalism"
		],
		"use_cases": [
			"content-creation",
			"learn-skill",
			"channel-strategy",
			"custom"
		],
		"complexity": "beginner",
		"related_terms": [
			22,
			28,
			50,
			56
		],
		"prompt_summary": "Bad audio ruins a good video faster than bad visuals. Apply noise reduction, normalize levels, and ensure the voice is louder than the music. Viewers tolerate low-res video; they never tolerate unclear audio.",
		"prompt_example": "استخدم Noise Reduction لإزالة الضوضاء — اضبط Audio Levels لتوحيد الصوت — راجع قبل التصدير.",
		"injection_weight": {
			"content-creation": 9,
			"learn-skill": 7,
			"idea-evaluation": 6,
			"channel-strategy": 7,
			"custom": 6
		}
	},
	{
		"id": 50,
		"term_en": "Subtitles / Text Overlay",
		"term_ar": "الترجمات والنصوص",
		"category": "editing",
		"tags": [
			"editing",
			"accessibility",
			"sound-off",
			"retention",
			"clarity"
		],
		"use_cases": [
			"content-creation",
			"learn-skill",
			"channel-strategy",
			"custom"
		],
		"complexity": "beginner",
		"related_terms": [
			49,
			61,
			64
		],
		"prompt_summary": "The book cites ~85% of social media views happen with sound off at least sometimes. Subtitles keep viewers engaged with no audio. Add on-screen text for key words and phrases. Make subtitles readable (large, contrasting background).",
		"prompt_example": "أضف ترجمة للكلام — أضف النصوص الأساسية على الشاشة — استخدم خط واضح وخلفية متباينة.",
		"injection_weight": {
			"content-creation": 9,
			"learn-skill": 6,
			"idea-evaluation": 6,
			"channel-strategy": 7,
			"custom": 6
		}
	},
	{
		"id": 51,
		"term_en": "Color Grading",
		"term_ar": "معالجة الألوان",
		"category": "editing",
		"tags": [
			"editing",
			"visual",
			"aesthetic",
			"mood",
			"professional-look"
		],
		"use_cases": [
			"content-creation",
			"learn-skill",
			"custom"
		],
		"complexity": "intermediate",
		"related_terms": [
			48,
			54,
			60
		],
		"prompt_summary": "Adjust colors, lighting, and contrast to match the scene's mood. Subtle touch = professional; heavy filters = amateur. Keep consistency across clips — a video with 5 different color temperatures feels broken.",
		"prompt_example": "ضبط ألوان هادئ لفيديو تأملي — دافئ لفيديو عائلي — بارد لفيديو تقني — بدون فلاتر مبالغ فيها.",
		"injection_weight": {
			"content-creation": 6,
			"learn-skill": 5,
			"idea-evaluation": 4,
			"channel-strategy": 5,
			"custom": 4
		}
	},
	{
		"id": 52,
		"term_en": "Segment Your Content",
		"term_ar": "تقسيم المحتوى",
		"category": "editing",
		"tags": [
			"editing",
			"structure",
			"sections",
			"navigation",
			"transitions"
		],
		"use_cases": [
			"content-creation",
			"learn-skill",
			"channel-strategy",
			"custom"
		],
		"complexity": "beginner",
		"related_terms": [
			13,
			47,
			60,
			62
		],
		"prompt_summary": "Break long videos into clearly labeled sections ('Step 1', 'Tip 2', 'Common mistake #3') with visual transitions. Helps viewers follow the structure and reduces early exit. Especially critical for educational content over 2 minutes.",
		"prompt_example": "اعرض فاصل بعنوان «الخطوة الأولى» — ثم «النصيحة التالية» — المشاهد عارف دايماً هو فين.",
		"injection_weight": {
			"content-creation": 7,
			"learn-skill": 6,
			"idea-evaluation": 5,
			"channel-strategy": 6,
			"custom": 5
		}
	},
	{
		"id": 53,
		"term_en": "Short vs. Long",
		"term_ar": "الفيديو القصير والطويل",
		"category": "editing",
		"tags": [
			"editing",
			"platform",
			"format",
			"strategy",
			"content-length"
		],
		"use_cases": [
			"content-creation",
			"learn-skill",
			"channel-strategy",
			"custom"
		],
		"complexity": "beginner",
		"related_terms": [55, 63],
		"prompt_summary": "Short-form (TikTok/Reels/Shorts) for quick hooks and viral reach; long-form (YouTube) for depth and monetization. Mix both for a diverse audience. Repurpose long-form into 3-5 short clips, and use short-form to funnel to long-form.",
		"prompt_example": "TikTok: 30-60 ثانية للانتشار. YouTube: 8-15 دقيقة للتعليم والتسويق. حوّل كل فيديو طويل إلى 3 Shorts.",
		"injection_weight": {
			"content-creation": 7,
			"learn-skill": 5,
			"idea-evaluation": 6,
			"channel-strategy": 9,
			"custom": 4
		}
	},
	{
		"id": 54,
		"term_en": "Moderate Visual Effects",
		"term_ar": "استخدام المؤثرات بتوازن",
		"category": "editing",
		"tags": [
			"editing",
			"effects",
			"animation",
			"restraint",
			"clarity"
		],
		"use_cases": [
			"content-creation",
			"learn-skill",
			"custom"
		],
		"complexity": "beginner",
		"related_terms": [
			51,
			57,
			60,
			61
		],
		"prompt_summary": "Effects add fun when purposeful; excess distracts. Animated text should be simple and clear. Every effect should serve the story, not decorate it. Rule of thumb: if you notice the effect, it's too much.",
		"prompt_example": "استخدم Animated Text لتوضيح كلمة — ليس لإضافة حركة دائمة — إذا لاحظ الجمهور المؤثر قبل المحتوى، فهو مبالغ فيه.",
		"injection_weight": {
			"content-creation": 5,
			"learn-skill": 4,
			"idea-evaluation": 4,
			"channel-strategy": 5,
			"custom": 3
		}
	},
	{
		"id": 55,
		"term_en": "Optimal Video Length",
		"term_ar": "المدة المثالية للفيديو",
		"category": "editing",
		"tags": [
			"editing",
			"length",
			"platform",
			"attention-span",
			"strategy"
		],
		"use_cases": [
			"content-creation",
			"learn-skill",
			"channel-strategy",
			"custom"
		],
		"complexity": "beginner",
		"related_terms": [
			53,
			61,
			63
		],
		"prompt_summary": "Sprout Social (cited in the book): the optimal social video is 1-2 minutes for marketing topics. Educational YouTube content can run 10+ minutes if depth requires. Rule: the video should be as long as it needs to be — and not one second longer.",
		"prompt_example": "فيديو تسويقي: 1-2 دقيقة. فيديو تعليمي YouTube: 8-15 دقيقة. لا تُطل بلا سبب — كل ثانية لازم تضيف قيمة.",
		"injection_weight": {
			"content-creation": 8,
			"learn-skill": 6,
			"idea-evaluation": 7,
			"channel-strategy": 7,
			"custom": 5
		}
	},
	{
		"id": 56,
		"term_en": "Background Music",
		"term_ar": "الموسيقى الخلفية",
		"category": "editing",
		"tags": [
			"editing",
			"music",
			"mood",
			"emotion",
			"audio"
		],
		"use_cases": [
			"content-creation",
			"learn-skill",
			"channel-strategy",
			"custom"
		],
		"complexity": "beginner",
		"related_terms": [
			38,
			49,
			51
		],
		"prompt_summary": "Music sets the emotional mood. Use Royalty-Free tracks (Epidemic Sound, Artlist, YouTube Audio Library). The music must NEVER overpower the voice. Music that fights the message kills the message.",
		"prompt_example": "محتوى هادئ: موسيقى Lo-fi. محتوى حماسي: موسيقى Energetic. المهم: صوت الموسيقى أقل من صوت المتحدث.",
		"injection_weight": {
			"content-creation": 7,
			"learn-skill": 5,
			"idea-evaluation": 5,
			"channel-strategy": 5,
			"custom": 5
		}
	},
	{
		"id": 57,
		"term_en": "Jump Cuts",
		"term_ar": "القطع السريع",
		"category": "editing",
		"tags": [
			"editing",
			"cuts",
			"speed",
			"removal",
			"pace"
		],
		"use_cases": [
			"content-creation",
			"learn-skill",
			"custom"
		],
		"complexity": "beginner",
		"related_terms": [
			47,
			54,
			61
		],
		"prompt_summary": "Cut out silences, pauses, and dull moments to accelerate pace. Great for talking-head content. Too many jump cuts = disorienting and uncomfortable. Use them where the viewer would otherwise get bored.",
		"prompt_example": "احذف فترات الصمت الطويلة — أزل التوقفات بين الجمل — لكن ما تقطعش كل ثانية عشان ما يبقاش الفيديو مشتت.",
		"injection_weight": {
			"content-creation": 7,
			"learn-skill": 5,
			"idea-evaluation": 5,
			"channel-strategy": 5,
			"custom": 4
		}
	},
	{
		"id": 58,
		"term_en": "Proofwatching",
		"term_ar": "مراجعة الفيديو قبل النشر",
		"category": "editing",
		"tags": [
			"editing",
			"quality-control",
			"review",
			"accuracy",
			"professionalism"
		],
		"use_cases": [
			"content-creation",
			"learn-skill",
			"channel-strategy",
			"custom"
		],
		"complexity": "beginner",
		"related_terms": [
			50,
			64,
			65
		],
		"prompt_summary": "Watch the FULL video before publishing. Check: audio sync, subtitle accuracy, on-screen text spelling, color consistency, CTA visibility. Never publish blind — one bad export kills a great piece of content.",
		"prompt_example": "شاهد الفيديو كامل مرة أخيرة — تأكد من تزامن الصوت والترجمة — صحح الأخطاء الإملائية — تحقق من وضوح الـCTA.",
		"injection_weight": {
			"content-creation": 7,
			"learn-skill": 5,
			"idea-evaluation": 4,
			"channel-strategy": 6,
			"custom": 4
		}
	},
	{
		"id": 59,
		"term_en": "End Screen CTA",
		"term_ar": "دعوة في شاشة النهاية",
		"category": "editing",
		"tags": [
			"editing",
			"cta",
			"youtube",
			"watch-time",
			"retention"
		],
		"use_cases": [
			"content-creation",
			"channel-strategy",
			"custom"
		],
		"complexity": "beginner",
		"related_terms": [
			41,
			53,
			36,
			37
		],
		"prompt_summary": "Use the last 5-10 seconds to prompt Subscribe + suggest another video. Increases total Watch Time by keeping the viewer on your channel. YouTube-native feature — plan the video edit around it.",
		"prompt_example": "شاشة النهاية: زر Subscribe + فيديو مقترح مرتبط + جملة «لو الفيديو ده عجبك، شوف ده كمان».",
		"injection_weight": {
			"content-creation": 6,
			"learn-skill": 4,
			"idea-evaluation": 4,
			"channel-strategy": 8,
			"custom": 4
		}
	},
	{
		"id": 60,
		"term_en": "Transitions",
		"term_ar": "الانتقالات بين المشاهد",
		"category": "editing",
		"tags": [
			"editing",
			"transitions",
			"flow",
			"style",
			"coherence"
		],
		"use_cases": [
			"content-creation",
			"learn-skill",
			"custom"
		],
		"complexity": "beginner",
		"related_terms": [
			52,
			54,
			57
		],
		"prompt_summary": "Instead of the default Fade, use Swipe/Zoom/Whip-pan when it fits the content. But variety ≠ quality — pick ONE style of transition and stick to it, or the video feels like a color festival. Consistency > variety.",
		"prompt_example": "استخدم Swipe للانتقال بين الأقسام — Zoom للانتقال من لقطة قريبة لبعيدة — وابدأ بثبات على أسلوب واحد.",
		"injection_weight": {
			"content-creation": 6,
			"learn-skill": 5,
			"idea-evaluation": 4,
			"channel-strategy": 5,
			"custom": 4
		}
	},
	{
		"id": 61,
		"term_en": "Be Concise",
		"term_ar": "الاختصار والإيجاز",
		"category": "editing",
		"tags": [
			"editing",
			"conciseness",
			"cutting",
			"efficiency",
			"respect"
		],
		"use_cases": [
			"content-creation",
			"learn-skill",
			"channel-strategy",
			"custom"
		],
		"complexity": "beginner",
		"related_terms": [
			47,
			55,
			57
		],
		"prompt_summary": "If a sentence takes 60 seconds to say but can be said in 30 — cut it. The viewer loves concise, information-dense content. Repetition is the enemy of retention. Every word must justify its presence.",
		"prompt_example": "دقيقة كاملة في النص ممكن تتقال في 30 ثانية؟ قص الجزء المكرر. المشاهد بيحب الإيجاز المليء بالمعلومات.",
		"injection_weight": {
			"content-creation": 9,
			"learn-skill": 7,
			"idea-evaluation": 8,
			"channel-strategy": 7,
			"custom": 6
		}
	},
	{
		"id": 62,
		"term_en": "Storyboarding",
		"term_ar": "التخطيط المسبق للمشاهد",
		"category": "editing",
		"tags": [
			"editing",
			"pre-production",
			"planning",
			"efficiency",
			"structure"
		],
		"use_cases": [
			"content-creation",
			"learn-skill",
			"channel-strategy",
			"custom"
		],
		"complexity": "intermediate",
		"related_terms": [
			13,
			52,
			46
		],
		"prompt_summary": "Before editing, sketch the shot sequence: what's on screen, what's heard, and what emotion flows through. Saves hours during shooting and editing. Every successful ad/short/reel was storyboarded before it was filmed.",
		"prompt_example": "ارسم مخطط بسيط: مشهد 1 (افتتاحية + Hook) → مشهد 2 (تعريف المشكلة) → مشهد 3 (الحل) → مشهد 4 (الـCTA).",
		"injection_weight": {
			"content-creation": 8,
			"learn-skill": 5,
			"idea-evaluation": 6,
			"channel-strategy": 6,
			"custom": 5
		}
	},
	{
		"id": 63,
		"term_en": "Platform-Specific Editing",
		"term_ar": "المونتاج حسب المنصة",
		"category": "editing",
		"tags": [
			"editing",
			"platform",
			"aspect-ratio",
			"optimization",
			"reach"
		],
		"use_cases": [
			"content-creation",
			"learn-skill",
			"channel-strategy",
			"custom"
		],
		"complexity": "intermediate",
		"related_terms": [
			53,
			55,
			65
		],
		"prompt_summary": "Facebook: 4:5 or square. TikTok/Reels: 9:16 vertical. YouTube long-form: 16:9 landscape. Wrong aspect ratio = algorithm penalizes + visual cropping. Editing for one platform and cross-posting everywhere is a losing strategy.",
		"prompt_example": "TikTok: 9:16 رأسي — Facebook: 4:5 أو مربع — YouTube: 16:9 أفقي — لا تستخدم مقاس واحد لكل المنصات.",
		"injection_weight": {
			"content-creation": 7,
			"learn-skill": 5,
			"idea-evaluation": 6,
			"channel-strategy": 8,
			"custom": 5
		}
	},
	{
		"id": 64,
		"term_en": "Captions",
		"term_ar": "النصوص التوضيحية",
		"category": "editing",
		"tags": [
			"editing",
			"text",
			"summary",
			"accessibility",
			"speed-reading"
		],
		"use_cases": [
			"content-creation",
			"learn-skill",
			"channel-strategy",
			"custom"
		],
		"complexity": "beginner",
		"related_terms": [
			50,
			58,
			47
		],
		"prompt_summary": "Beyond subtitles — short summary text overlays for each major idea. Helps fast-scrollers catch the essence at 2x playback speed. Keep text minimal, large, and on screen for at least 1.5 seconds per line.",
		"prompt_example": "بجانب الترجمة الحرفية — اعرض ملخص قصير للفكرة الأساسية على الشاشة — «3 أخطاء» ثم «الخطأ الأول» وهكذا.",
		"injection_weight": {
			"content-creation": 7,
			"learn-skill": 5,
			"idea-evaluation": 5,
			"channel-strategy": 6,
			"custom": 4
		}
	},
	{
		"id": 65,
		"term_en": "Analyze Performance",
		"term_ar": "تحليل الأداء والتعلم",
		"category": "editing",
		"tags": [
			"editing",
			"analytics",
			"iteration",
			"optimization",
			"learning"
		],
		"use_cases": [
			"learn-skill",
			"channel-strategy",
			"custom"
		],
		"complexity": "intermediate",
		"related_terms": [
			58,
			63,
			47
		],
		"prompt_summary": "After publishing, open Analytics. Where do viewers drop off? What's the retention curve? Use the data to fix the next video's editing. Every published video is a lab experiment — treat the analytics as feedback, not vanity metrics.",
		"prompt_example": "افتح Analytics: فين المشاهدين بيخرجوا؟ إزاي تعدل الـ Hook والمونتاج المرة الجاية عشان تحافظ عليهم؟",
		"injection_weight": {
			"content-creation": 7,
			"learn-skill": 6,
			"idea-evaluation": 6,
			"channel-strategy": 10,
			"custom": 5
		}
	}
];
var term_metadata_default = {
	version,
	total_terms: 65,
	description,
	terms
};
export { term_metadata_default as default, description, terms, total_terms, version };

//# sourceMappingURL=term-metadata.js.map