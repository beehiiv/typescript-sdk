/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as beehiiv from "..";

/**
 * Optional list of stats for a publication. Retrievable by including an `expand` array in the publication request body. Add `"stats"` to the array to retrieve all, or add individual stats (prefaced with `stat_`) to only retrieve specific ones.
 *
 * Examples:
 * {
 * "expand": ["stats"]
 * }
 *
 * {
 * "expand": ["stat_active_subscriptions", "stat_average_click_rate"]
 * }
 */
export interface PublicationStats {
    /** Total number of active free and premium subscriptions */
    activeSubscriptions?: beehiiv.PublicationStatsActiveSubscriptions;
    /** Total number of active premium/paid subscriptions */
    activePremiumSubscriptions?: beehiiv.PublicationStatsActivePremiumSubscriptions;
    /** Total number of active free subscriptions */
    activeFreeSubscriptions?: beehiiv.PublicationStatsActiveFreeSubscriptions;
    /** The publications historical average open rate */
    averageOpenRate?: beehiiv.PublicationStatsAverageOpenRate;
    /** The publications historical average click through rate */
    averageClickRate?: beehiiv.PublicationStatsAverageClickRate;
    /** Total number of emails sent */
    totalSent?: beehiiv.PublicationStatsTotalSent;
    /** Total number of uniquely opened emails. Only counts the first open for each subscriber. */
    totalUniqueOpened?: beehiiv.PublicationStatsTotalUniqueOpened;
    /** The total number of links clicked from emails. */
    totalClicked?: beehiiv.PublicationStatsTotalClicked;
}
