/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Returns whether or not the tier has any active prices.
 */
export type SubscriptionTierInfoStatus = "active" | "archived";

export const SubscriptionTierInfoStatus = {
    Active: "active",
    Archived: "archived",
} as const;