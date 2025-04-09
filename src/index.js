"use strict";

var sheets = require("twind/sheets");
var twind = require("twind");

const colors = {
	inherit: "inherit",
	current: "currentColor",
	transparent: "transparent",
	black: "#000000",
	white: "#ffffff",
	red: {
		50: "#fff5f5",
		100: "#ffe3e3",
		200: "#ffcaca",
		300: "#ffa3a3",
		400: "#ff6b6b",
		500: "#e53e3e",
		600: "#c53030",
		700: "#9b2c2c",
		800: "#742a2a",
		900: "#4a1515",
		950: "#240808",
	},
	orange: {
		50: "#fff7ed",
		100: "#ffedd5",
		200: "#fed7aa",
		300: "#fdb974",
		400: "#fb923c",
		500: "#f97316",
		600: "#ea580c",
		700: "#c2410c",
		800: "#9a3412",
		900: "#7b2c16",
		950: "#431407",
	},
	amber: {
		50: "#fffbeb",
		100: "#fef3c7",
		200: "#fde68a",
		300: "#fcd34d",
		400: "#fbbf24",
		500: "#f59e0b",
		600: "#d97706",
		700: "#b45309",
		800: "#92400e",
		900: "#78350f",
		950: "#451a03",
	},
	yellow: {
		50: "#fefce8",
		100: "#fef9c3",
		200: "#fef08a",
		300: "#fde047",
		400: "#facc15",
		500: "#eab308",
		600: "#d99704",
		700: "#b47806",
		800: "#925c0e",
		900: "#783f04",
		950: "#451e03",
	},
	lime: {
		50: "#f7fee7",
		100: "#ecfccb",
		200: "#d9f99d",
		300: "#bef264",
		400: "#a3e03b",
		500: "#84cc16",
		600: "#65a30d",
		700: "#4d7c0f",
		800: "#3f6212",
		900: "#365314",
		950: "#1a2e0f",
	},
	green: {
		50: "#f0fdf4",
		100: "#dcfce7",
		200: "#bbf7d0",
		300: "#86efac",
		400: "#4ade80",
		500: "#22c55e",
		600: "#16a34a",
		700: "#15803d",
		800: "#166534",
		900: "#14532d",
		950: "#052e16",
	},
	emerald: {
		50: "#ecfdf5",
		100: "#d1fae5",
		200: "#a7f3d0",
		300: "#6ee7b7",
		400: "#34d399",
		500: "#10b981",
		600: "#059669",
		700: "#047857",
		800: "#065f46",
		900: "#064e3b",
		950: "#022c22",
	},
	teal: {
		50: "#f0f8ff",
		100: "#ccfbf1",
		200: "#99f6e4",
		300: "#5eead4",
		400: "#2dd4bf",
		500: "#14b8a6",
		600: "#0d9488",
		700: "#0f766e",
		800: "#115e59",
		900: "#134e4a",
		950: "#042e29",
	},
	cyan: {
		50: "#e0f7fa",
		100: "#b5f3fe",
		200: "#87e8de",
		300: "#52d6c9",
		400: "#26c6da",
		500: "#00bcd4",
		600: "#00acc1",
		700: "#00897b",
		800: "#006064",
		900: "#004d40",
		950: "#002a25",
	},
	sky: {
		50: "#f0f9ff",
		100: "#e0f2fe",
		200: "#bae6fd",
		300: "#7dd3fc",
		400: "#38bdf8",
		500: "#0ea5e9",
		600: "#0b87ce",
		700: "#0b6cb3",
		800: "#08578c",
		900: "#07497c",
		950: "#032a49",
	},
	blue: {
		50: "#eff6ff",
		100: "#dbeafe",
		200: "#bfdbfe",
		300: "#9ecefa",
		400: "#60a5fa",
		500: "#3b82f6",
		600: "#2563eb",
		700: "#1d4ed8",
		800: "#1e40af",
		900: "#1e3a8a",
		950: "#0c2a4d",
	},
	indigo: {
		50: "#e0f2fe",
		100: "#cdd9fa",
		200: "#a5b4fc",
		300: "#818cf8",
		400: "#6366f1",
		500: "#4f46e5",
		600: "#4338ca",
		700: "#3730a3",
		800: "#312e81",
		900: "#29256d",
		950: "#18173d",
	},
	violet: {
		50: "#f5f3ff",
		100: "#ede9fe",
		200: "#ddd6fe",
		300: "#c4b5fd",
		400: "#a78bfa",
		500: "#8b5cf6",
		600: "#7c3aed",
		700: "#6d28d9",
		800: "#5b21b6",
		900: "#4c1d95",
		950: "#2e1065",
	},
	purple: {
		50: "#f3f4ff",
		100: "#e5e7eb",
		200: "#d4d4d8",
		300: "#a1a1aa",
		400: "#71717a",
		500: "#52525b",
		600: "#3f3f46",
		700: "#27272a",
		800: "#1d1d1f",
		900: "#111827",
		950: "#0b0f17",
	},
	fuchsia: {
		50: "#fdf4ff",
		100: "#fae8ff",
		200: "#f5d0fe",
		300: "#f0abfc",
		400: "#e879f9",
		500: "#d946ef",
		600: "#c026bf",
		700: "#a81b9a",
		800: "#86198f",
		900: "#6d28d9",
		950: "#3b0764",
	},
	pink: {
		50: "#fdf2f8",
		100: "#fce7f3",
		200: "#fbcfe8",
		300: "#f9a8d4",
		400: "#f472b6",
		500: "#ec4899",
		600: "#db2777",
		700: "#be185d",
		800: "#9d174d",
		900: "#831843",
		950: "#4f042e",
	},
	rose: {
		50: "#fff1f2",
		100: "#ffe4e6",
		200: "#fecdd3",
		300: "#fda4af",
		400: "#fb7185",
		500: "#f43f5e",
		600: "#e11d48",
		700: "#be123c",
		800: "#9f1239",
		900: "#881337",
		950: "#4c0519",
	},
	slate: {
		50: "#f8fafc",
		100: "#f1f5f9",
		200: "#e2e8f0",
		300: "#cbd5e1",
		400: "#94a3b8",
		500: "#64748b",
		600: "#475569",
		700: "#334155",
		800: "#1e293b",
		900: "#0f172a",
		950: "#020617",
	},
	gray: {
		50: "#f9fafb",
		100: "#f3f4f6",
		200: "#e5e7eb",
		300: "#d1d5db",
		400: "#9ca3af",
		500: "#6b7280",
		600: "#4b5563",
		700: "#374151",
		800: "#1f2937",
		900: "#111827",
		950: "#030712",
	},
	zinc: {
		50: "#fafafa",
		100: "#f4f4f5",
		200: "#e4e4e7",
		300: "#d4d4d8",
		400: "#a1a1aa",
		500: "#71717a",
		600: "#52525b",
		700: "#3f3f46",
		800: "#27272a",
		900: "#18181b",
		950: "#0a0a0b",
	},
	neutral: {
		50: "#fafafa",
		100: "#f5f5f5",
		200: "#e5e5e5",
		300: "#d4d4d4",
		400: "#a3a3a3",
		500: "#737373",
		600: "#525252",
		700: "#404040",
		800: "#262626",
		900: "#171717",
		950: "#0a0a0a",
	},
	stone: {
		50: "#fafaf9",
		100: "#f5f5f3",
		200: "#e7e5e4",
		300: "#d6d3d1",
		400: "#a8a29e",
		500: "#78716c",
		600: "#57534e",
		700: "#44403c",
		800: "#292524",
		900: "#1c1917",
		950: "#0c0a09",
	},
};

const sheet = sheets.virtualSheet();
twind.setup({
	sheet,
	theme: {
		colors,
	},
});

function resolveClassToCSS(selector, className) {
	sheet.reset();

	const classStr = Array.isArray(className) ? className.join(" ") : className;
	twind.tw(classStr);

	const rules = sheet.target;
	const normalMap = new Map();
	const mediaMap = new Map();

	for (const rule of rules) {
		if (rule.startsWith("@media")) {
			const mediaMatch = rule.match(/^(@media[^{]+)\{([\s\S]+)\}$/);
			if (mediaMatch) {
				const mediaQuery = mediaMatch[1];
				const inner = mediaMatch[2];

				const innerMatch = inner.match(/([^{]+)\{([^}]+)\}/g);
				if (innerMatch) {
					for (const block of innerMatch) {
						const [, rawSel, rawDecl] = block.match(/([^{]+)\{([^}]+)\}/);

						const cleanedSel = rawSel.trim().replace(/\.[^\s]+/, selector);
						const decls = rawDecl.trim().split(/;\s*/).filter(Boolean);

						if (!mediaMap.has(mediaQuery)) mediaMap.set(mediaQuery, new Map());
						const map = mediaMap.get(mediaQuery);

						const arr = map.get(cleanedSel) || [];
						arr.push(...decls);
						map.set(cleanedSel, arr);
					}
				}
			}
		} else {
			const match = rule.match(/^\.([^\s]+)\s*\{([^}]+)\}/);
			if (match) {
				const fullClass = match[1];
				const declarations = match[2].trim();

				let finalSelector = selector;

				const pseudoMatch = fullClass.match(
					/(?:^|:)(hover|focus|active|visited|disabled)/
				);
				if (pseudoMatch) {
					finalSelector += `:${pseudoMatch[1]}`;
				}

				const arr = normalMap.get(finalSelector) || [];
				arr.push(...declarations.split(/;\s*/).filter(Boolean));
				normalMap.set(finalSelector, arr);
			}
		}
	}

	const formatBlock = (sel, decls) =>
		`${sel} {\n  ${[...new Set(decls)].join(";\n  ")};\n}`;

	const output = [];

	for (const [sel, decls] of normalMap) {
		output.push(formatBlock(sel, decls));
	}

	for (const [media, selMap] of mediaMap) {
		const blocks = [];
		for (const [sel, decls] of selMap) {
			blocks.push(formatBlock(sel, decls).replace(/^/gm, "  "));
		}
		output.push(`${media} {\n${blocks.join("\n\n")}\n}`);
	}

	return output.join("\n\n");
}

function resolveSelector(parent, key) {
	if (key.includes("&")) {
		return key.replace(/&/g, parent.trim());
	} else if (parent.trim() !== "") {
		return `${parent.trim()} ${key.trim()}`;
	} else {
		return key.trim();
	}
}

function twindx(structure, parent = "") {
	let css = "";

	for (const key in structure) {
		const value = structure[key];
		const resolvedSelector = resolveSelector(parent, key);

		if (Array.isArray(value)) {
			const [baseClass, nested = {}] = value;
			css += resolveClassToCSS(resolvedSelector, baseClass) + "\n\n";

			if (typeof nested === "object" && nested !== null) {
				css += twindx(nested, resolvedSelector);
			}
		} else if (typeof value === "string") {
			css += resolveClassToCSS(resolvedSelector, value) + "\n\n";
		} else if (typeof value === "object" && value !== null) {
			css += twindx(value, resolvedSelector);
		}
	}

	return css.trim();
}

module.exports = twindx;
