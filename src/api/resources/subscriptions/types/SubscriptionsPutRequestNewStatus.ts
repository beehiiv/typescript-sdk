/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * The new status value to apply to these subscription IDs
 */
export type SubscriptionsPutRequestNewStatus = "active" | "inactive";

export const SubscriptionsPutRequestNewStatus = {
    Active: "active",
    Inactive: "inactive",
} as const;