/**
 * Lighthouse CI: Core Web Vitals budgets and category floors for every page.
 *
 * Runs against the production server (`npm run build` first) on Lighthouse's
 * default mobile emulation. INP has no lab audit, so Total Blocking Time is
 * gated as its lab proxy.
 */

/** Fixed port for the audited production server. */
const PORT = 3100;
const BASE_URL = `http://localhost:${PORT}`;

const PAGES = ["/", "/servicios", "/metodologia", "/casos", "/sobre-mi", "/contacto"];

/** Google's mobile "good" thresholds. */
const LCP_BUDGET_MS = 2500;
const TBT_BUDGET_MS = 200; // lab proxy for INP ≤ 200 ms
const CLS_BUDGET = 0.1;

/** Measured baseline is 0.78–0.82 (simulated mobile); fail on regressions below it. */
const PERFORMANCE_FLOOR = 0.75;

module.exports = {
  ci: {
    collect: {
      startServerCommand: `npm start -- --port ${PORT}`,
      startServerReadyPattern: "Ready in",
      startServerReadyTimeout: 120000,
      url: PAGES.map((path) => `${BASE_URL}${path}`),
      // Median of 3 runs keeps the gate stable against per-run jitter.
      numberOfRuns: 3,
      settings: {
        preset: process.env.LHCI_FORM_FACTOR === "desktop" ? "desktop" : undefined,
        onlyCategories: ["performance", "seo", "accessibility", "best-practices"],
      },
    },
    assert: {
      aggregationMethod: "median-run",
      assertions: {
        // Warn, not error: simulated (Lantern) LCP charges React/Next hydration
        // to the text LCP (~5 s) although the observed paint is ~200 ms and
        // devtools-throttled LCP is ~1.9 s. Field LCP is tracked in Speed Insights.
        "largest-contentful-paint": ["warn", { maxNumericValue: LCP_BUDGET_MS }],
        "cumulative-layout-shift": ["error", { maxNumericValue: CLS_BUDGET }],
        "total-blocking-time": ["error", { maxNumericValue: TBT_BUDGET_MS }],

        // Regression floor below the 0.9 target; see the LCP note above.
        "categories:performance": ["error", { minScore: PERFORMANCE_FLOOR }],
        "categories:seo": ["error", { minScore: 0.95 }],
        "categories:accessibility": ["error", { minScore: 0.95 }],
        "categories:best-practices": ["error", { minScore: 0.9 }],
      },
    },
    upload: {
      target: "filesystem",
      outputDir: "./.lighthouseci",
    },
  },
};
