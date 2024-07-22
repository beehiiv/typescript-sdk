/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Optional list of stats for a tier. Retrievable by including `expand: [stats]` in the tier request body.
 */
export interface TierStats {
    /** Total number of active subscriptions belonging to this tier. */
    activeSubscriptions: number;
}