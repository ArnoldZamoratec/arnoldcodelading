import { track } from "@vercel/analytics";

/**
 * Tracking plan. Each event maps to a decision:
 * - cta_clicked: which placements drive people toward contact (keep/remove CTAs).
 * - contact_form_started / contact_form_submitted / contact_form_failed:
 *   form funnel drop-off and delivery errors.
 * - calendly_event_scheduled: booked calls, the strongest conversion.
 *
 * Properties never carry PII or free text from the visitor.
 */
type AnalyticsEvents = {
  cta_clicked: { location: string; destination: string };
  contact_form_started: Record<string, never>;
  contact_form_submitted: { project_type: string };
  contact_form_failed: { reason: "validation" | "server" | "network" };
  calendly_event_scheduled: Record<string, never>;
};

export type AnalyticsEventName = keyof AnalyticsEvents;

export function trackEvent<Name extends AnalyticsEventName>(
  name: Name,
  ...properties: AnalyticsEvents[Name] extends Record<string, never>
    ? []
    : [AnalyticsEvents[Name]]
) {
  track(name, properties[0]);
}
