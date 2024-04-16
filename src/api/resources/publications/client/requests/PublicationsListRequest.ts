/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Beehiiv from "../../../..";

/**
 * @example
 *     {}
 */
export interface PublicationsListRequest {
    /**
     * Optional list of expandable objects.<br />`stats` - Returns all statistics about the publication(s)<br />`stat_active_subscriptions` - Total number of active free and premium subscriptions<br />`stat_active_premium_subscriptions` - Total number of active premium/paid subscriptions<br />`stat_active_free_subscriptions` - Total number of active free subscriptions<br />`stat_average_open_rate` - The publications historical average open rate<br />`stat_average_click_rate` - The publications historical average click through rate<br />`stat_total_sent` - Total number of emails sent<br />`stat_total_unique_opened` - Total number of uniquely opened emails. Only counts the first open for each subscriber.<br />`stat_total_clicked` - The total number of links clicked from emails.
     */
    expand?: "stats" | "stats"[];
    /**
     * A limit on the number of objects to be returned. The limit can range between 1 and 100, and the default is 10.
     */
    limit?: number;
    /**
     * Pagination returns the results in pages. Each page contains the number of results specified by the `limit` (default: 10).<br />If not specified, results 1-10 from page 1 will be returned.
     */
    page?: number;
    /**
     * The direction that the results are sorted in. Defaults to asc<br /> `asc` - Ascending, sorts from smallest to largest.<br /> `desc` - Descending, sorts from largest to smallest.
     */
    direction?: Beehiiv.PublicationsListRequestDirection;
    /**
     * The field that the results are sorted by. Defaults to created<br /> `created` - The time in which the publication was first created.<br /> `name` - The name of the publication.
     */
    orderBy?: Beehiiv.PublicationsListRequestOrderBy;
}
