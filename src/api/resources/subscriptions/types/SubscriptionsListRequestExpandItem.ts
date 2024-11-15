/**
 * This file was auto-generated by Fern from our API Definition.
 */

export type SubscriptionsListRequestExpandItem =
    /**
     * Returns statistics about the subscription(s). */
    | "stats"
    /**
     * Returns an array of custom field values that have been set on the subscription. */
    | "custom_fields"
    /**
     * Returns an array of subscriptions with limited data - id, email, and status. These are the subscriptions that were referred by this subscription. */
    | "referrals";

export const SubscriptionsListRequestExpandItem = {
    Stats: "stats",
    CustomFields: "custom_fields",
    Referrals: "referrals",
} as const;
