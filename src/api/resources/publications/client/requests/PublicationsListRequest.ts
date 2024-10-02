/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Beehiiv from "../../../../index";

/**
 * @example
 *     {}
 */
export interface PublicationsListRequest {
    /**
     * Optionally expand the results by adding additional information like subscription counts and engagement stats.
     */
    expand?: Beehiiv.PublicationsRequestExpandItem[] | Beehiiv.PublicationsRequestExpandItem[][];
    /**
     * A limit on the number of objects to be returned. The limit can range between 1 and 100, and the default is 10.
     */
    limit?: number;
    /**
     * Pagination returns the results in pages. Each page contains the number of results specified by the `limit` (default: 10).<br>If not specified, results 1-10 from page 1 will be returned.
     */
    page?: number;
    /**
     * The direction that the results are sorted in. Defaults to asc<br> `asc` - Ascending, sorts from smallest to largest.<br> `desc` - Descending, sorts from largest to smallest.
     */
    direction?: Beehiiv.RequestDirection;
    /**
     * The field that the results are sorted by. Defaults to created<br> `created` - The time in which the publication was first created.<br> `name` - The name of the publication.
     */
    orderBy?: Beehiiv.PublicationsListRequestOrderBy;
}
