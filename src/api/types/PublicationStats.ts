/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Beehiiv from "../index";

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
    activeSubscriptions?: Beehiiv.ActiveSubscriptionCount;
    /** Total number of active premium/paid subscriptions */
    activePremiumSubscriptions?: Beehiiv.ActivePremiumSubscriptionCount;
    /** Total number of active free subscriptions */
    activeFreeSubscriptions?: Beehiiv.ActiveFreeSubscriptionCount;
    /** The publications historical average open rate */
    averageOpenRate?: Beehiiv.AverageOpenRate;
    /** The publications historical average click through rate */
    averageClickRate?: Beehiiv.AverageClickRate;
    /** Total number of emails sent */
    totalSent?: Beehiiv.TotalEmailsSent;
    /** Total number of uniquely opened emails. Only counts the first open for each subscriber. */
    totalUniqueOpened?: Beehiiv.TotalUniqueOpens;
    /** The total number of links clicked from emails. */
    totalClicked?: Beehiiv.TotalClicks;
}
