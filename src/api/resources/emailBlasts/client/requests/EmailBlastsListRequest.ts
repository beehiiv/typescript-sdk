/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Beehiiv from "../../../../index";

/**
 * @example
 *     {}
 */
export interface EmailBlastsListRequest {
    /**
     * Optional list of expandable objects.
     */
    expand?: Beehiiv.EmailBlastsListRequestExpandItem | Beehiiv.EmailBlastsListRequestExpandItem[];
    /**
     * Optionally filter the results by the status of the email blast. Defaults to active.
     */
    status?: Beehiiv.EmailBlastsListRequestStatus;
    /**
     * A limit on the number of objects to be returned. The limit can range between 1 and 100, and the default is 10.
     */
    limit?: number;
    /**
     * Pagination returns the results in pages. Each page contains the number of results specified by the `limit` (default: 10). If not specified, results 1-10 from page 1 will be returned.
     */
    page?: number;
    /**
     * The field that the results are sorted by. Defaults to created.
     */
    orderBy?: Beehiiv.EmailBlastsListRequestOrderBy;
    /**
     * The direction that the results are sorted in. Defaults to desc.
     */
    direction?: Beehiiv.RequestDirection;
}
