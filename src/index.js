'use strict';

var sheets = require('twind/sheets');
var twind = require('twind');

const sheet = sheets.virtualSheet();
twind.setup({ sheet });

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

function twsx(structure, parent = "") {
  let css = "";

  for (const key in structure) {
    const value = structure[key];
    const resolvedSelector = resolveSelector(parent, key);

    if (Array.isArray(value)) {
      const [baseClass, nested = {}] = value;
      css += resolveClassToCSS(resolvedSelector, baseClass) + "\n\n";

      if (typeof nested === "object" && nested !== null) {
        css += twsx(nested, resolvedSelector);
      }
    } else if (typeof value === "string") {
      css += resolveClassToCSS(resolvedSelector, value) + "\n\n";
    } else if (typeof value === "object" && value !== null) {
      css += twsx(value, resolvedSelector);
    }
  }

  return css.trim();
}

module.exports = twsx;
