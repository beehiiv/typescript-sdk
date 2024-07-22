/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Beehiiv from "../index";

/**
 * Optional list of stats for an email blast. Retrievable by including `expand: [stats]` in the email blast request body.
 */
export interface EmailBlastStats {
    /** Stats scoped only to email recipients. Not relevant for posts published only to web */
    email?: Beehiiv.EmailBlastStatsEmail;
    /** An array of click statistics for each URL in the post */
    clicks?: Beehiiv.EmailBlastStatsClicksItem[];
}
