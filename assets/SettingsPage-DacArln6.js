import { D as require_jsx_runtime, E as ArrowLeft, F as useNavigate, T as ArrowRight, a as Sun, f as Moon, i as Trash, l as RotateCcw, p as Languages, y as Cpu } from "./react-vendor-CmXgSTT2.js";
import { i as useTheme, n as Button, r as useProfileStore } from "./index-TH7iLIY2.js";
import { t as Card } from "./Card-BmfrzAqD.js";
import { i as useSettingsStore, r as useLanguage } from "./cn-ngelHxLq.js";
import { t as usePromptStore } from "./promptStore-CsVMKOak.js";
import { t as useWizardStore } from "./wizardStore-DsKdfTug.js";
// src/components/profile/ProfileForm.tsx
var import_jsx_runtime = require_jsx_runtime();
function ProfileForm() {
	const { t } = useLanguage();
	const { profile, setProfile, enable, disable, reset } = useProfileStore();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
		padding: "lg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-4 flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-lg font-bold text-text-primary",
					children: t("profile.title")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					size: "sm",
					variant: profile.enabled ? "danger" : "primary",
					onClick: profile.enabled ? disable : enable,
					children: profile.enabled ? t("profile.disable") : t("profile.enable")
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-4 text-xs text-text-muted",
				children: t("profile.description")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-3 sm:grid-cols-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "text",
						placeholder: t("profile.namePlaceholder"),
						value: profile.name || "",
						onChange: (e) => setProfile({ name: e.target.value }),
						className: "rounded-lg border border-border bg-surface p-2 text-sm text-text-primary"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "text",
						placeholder: t("profile.nichePlaceholder"),
						value: profile.niche || "",
						onChange: (e) => setProfile({ niche: e.target.value }),
						className: "rounded-lg border border-border bg-surface p-2 text-sm text-text-primary"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "text",
						placeholder: t("profile.audiencePlaceholder"),
						value: profile.defaultAudience || "",
						onChange: (e) => setProfile({ defaultAudience: e.target.value }),
						className: "rounded-lg border border-border bg-surface p-2 text-sm text-text-primary"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "text",
						placeholder: t("profile.tonePlaceholder"),
						value: profile.preferredTone || "",
						onChange: (e) => setProfile({ preferredTone: e.target.value }),
						className: "rounded-lg border border-border bg-surface p-2 text-sm text-text-primary"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "text",
						placeholder: t("profile.platformPlaceholder"),
						value: profile.mainPlatform || "",
						onChange: (e) => setProfile({ mainPlatform: e.target.value }),
						className: "rounded-lg border border-border bg-surface p-2 text-sm text-text-primary"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "text",
						placeholder: t("profile.goalPlaceholder"),
						value: profile.primaryGoal || "",
						onChange: (e) => setProfile({ primaryGoal: e.target.value }),
						className: "rounded-lg border border-border bg-surface p-2 text-sm text-text-primary"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 flex justify-end",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					size: "sm",
					variant: "ghost",
					onClick: reset,
					children: t("profile.reset")
				})
			})
		]
	});
}
// src/app/pages/SettingsPage.tsx
function SettingsPage() {
	const navigate = useNavigate();
	const { lang, setLang, t } = useLanguage();
	const { isDark } = useTheme();
	const { theme, setTheme } = useSettingsStore();
	const { history, clearHistory } = usePromptStore();
	const { reset: resetWizard } = useWizardStore();
	const { reset: resetProfile } = useProfileStore();
	const isLtr = document.documentElement.dir === "ltr";
	const resetAll = () => {
		if (!confirm(t("settings.resetConfirm"))) return;
		resetWizard();
		resetProfile();
		clearHistory();
		localStorage.clear();
		navigate("/");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-3xl px-4 py-10 sm:px-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-6 flex items-center gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				variant: "ghost",
				size: "sm",
				onClick: () => navigate("/"),
				children: [
					isLtr ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { size: 16 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 16 }),
					" ",
					t("common.back")
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-2xl font-bold text-gradient",
				children: t("settings.title")
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProfileForm, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					padding: "lg",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mb-3 flex items-center gap-2 text-lg font-bold text-text-primary",
						children: [isDark ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, { size: 18 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, { size: 18 }), t("settings.appearance")]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: theme === "dark" ? "primary" : "secondary",
							size: "sm",
							onClick: () => setTheme("dark"),
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, { size: 14 }),
								" ",
								t("settings.dark")
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: theme === "light" ? "primary" : "secondary",
							size: "sm",
							onClick: () => setTheme("light"),
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, { size: 14 }),
								" ",
								t("settings.light")
							]
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					padding: "lg",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mb-3 flex items-center gap-2 text-lg font-bold text-text-primary",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Languages, { size: 18 }),
							" ",
							t("settings.language")
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: lang === "ar" ? "primary" : "secondary",
							size: "sm",
							onClick: () => setLang("ar"),
							children: t("settings.languages.ar")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: lang === "en" ? "primary" : "secondary",
							size: "sm",
							onClick: () => setLang("en"),
							children: t("settings.languages.en")
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					padding: "lg",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mb-3 flex items-center gap-2 text-lg font-bold text-text-primary",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cpu, { size: 18 }),
							" ",
							t("settings.data")
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between rounded-lg border border-border bg-surface p-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-bold text-text-primary",
								children: t("history.title")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-text-muted",
								children: t("settings.savedCount", { count: history.length })
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "secondary",
								size: "sm",
								onClick: clearHistory,
								disabled: history.length === 0,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash, { size: 14 }),
									" ",
									t("settings.clear")
								]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between rounded-lg border border-error/40 bg-error/5 p-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-bold text-error",
								children: t("settings.resetAll")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-text-muted",
								children: t("settings.resetDescription")
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "danger",
								size: "sm",
								onClick: resetAll,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { size: 14 }),
									" ",
									t("settings.resetButton")
								]
							})]
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					padding: "lg",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mb-2 text-lg font-bold text-text-primary",
							children: t("settings.about")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-text-secondary",
							children: t("settings.version")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-xs text-text-muted",
							children: t("settings.credits")
						})
					]
				})
			]
		})]
	});
}
export { SettingsPage as default };

//# sourceMappingURL=SettingsPage-DacArln6.js.map