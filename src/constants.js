export const COLORS = {
  white: "0deg 0% 100%",
  gray: {
    100: "185deg 5% 95%",
    300: "190deg 5% 80%",
    500: "196deg 4% 60%",
    700: "220deg 5% 40%",
    900: "220deg 3% 20%",
  },
  primary: "340deg 65% 47%",
  secondary: "240deg 60% 63%",
};

export function buildColorRules() {
  let cssRules = "";

  function buildColors(colorObj, base = "") {
    Object.entries(colorObj).forEach(([key, value]) => {
      if (typeof value === "string") {
        cssRules = `
        ${cssRules}
        --color-${base}${key}-base: ${value};
        --color-${base}${key}: hsl(var(--color-${base}${key}-base));
      `;
      } else {
        buildColors(value, `${key}-`);
      }
    });
  }

  buildColors(COLORS);

  return cssRules;
}

export const WEIGHTS = {
  normal: 500,
  medium: 600,
  bold: 800,
};

export const BREAKPOINTS = {
  laptopMax: 1300,
  tabletMax: 950,
  phoneMax: 600,
};

export const QUERIES = {
  laptopAndDown: `(max-width: ${BREAKPOINTS.laptopMax / 16}rem)`,
  tabletAndDown: `(max-width: ${BREAKPOINTS.tabletMax / 16}rem)`,
  phoneAndDown: `(max-width: ${BREAKPOINTS.phoneMax / 16}rem)`,
};
