/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Beehiiv from "../../../index";

export interface PostsListResponse {
    data: Beehiiv.Post[];
    /** The limit placed on the results. If no limit was specified in the request,this defaults to 10. */
    limit: number;
    /** The page number the results are from. If no page was specified in the request, this defaults to page 1. */
    page: number;
    /** The total number of results from all pages. */
    totalResults: number;
    /** The total number of pages. */
    totalPages: number;
}
