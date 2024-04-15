/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Beehiiv from "..";

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
    activeSubscriptions?: Beehiiv.PublicationStatsActiveSubscriptions;
    /** Total number of active premium/paid subscriptions */
    activePremiumSubscriptions?: Beehiiv.PublicationStatsActivePremiumSubscriptions;
    /** Total number of active free subscriptions */
    activeFreeSubscriptions?: Beehiiv.PublicationStatsActiveFreeSubscriptions;
    /** The publications historical average open rate */
    averageOpenRate?: Beehiiv.PublicationStatsAverageOpenRate;
    /** The publications historical average click through rate */
    averageClickRate?: Beehiiv.PublicationStatsAverageClickRate;
    /** Total number of emails sent */
    totalSent?: Beehiiv.PublicationStatsTotalSent;
    /** Total number of uniquely opened emails. Only counts the first open for each subscriber. */
    totalUniqueOpened?: Beehiiv.PublicationStatsTotalUniqueOpened;
    /** The total number of links clicked from emails. */
    totalClicked?: Beehiiv.PublicationStatsTotalClicked;
}
