import { trackEvent } from "@/lib/analytics";

// CTA clicks are tracked declaratively: any element with data-cta="<location>"
// reports cta_clicked, so server components don't need a client boundary.
document.addEventListener(
  "click",
  (event) => {
    const target = event.target;

    if (!(target instanceof Element)) {
      return;
    }

    const cta = target.closest<HTMLElement>("[data-cta]");

    if (!cta?.dataset.cta) {
      return;
    }

    trackEvent("cta_clicked", {
      location: cta.dataset.cta,
      destination: cta.getAttribute("href") ?? "",
    });
  },
  { capture: true },
);

// Calendly's embed posts lifecycle messages to the parent window.
window.addEventListener("message", (event) => {
  const isCalendlyOrigin =
    event.origin === "https://calendly.com" ||
    event.origin.endsWith(".calendly.com");

  if (!isCalendlyOrigin) {
    return;
  }

  const data = event.data as { event?: unknown } | null;

  if (data?.event === "calendly.event_scheduled") {
    trackEvent("calendly_event_scheduled");
  }
});
