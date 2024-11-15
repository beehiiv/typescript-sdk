/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Beehiiv from "../../../../api/index";
import * as core from "../../../../core";
import { Post } from "../../../types/Post";

export const PostsListResponse: core.serialization.ObjectSchema<
    serializers.PostsListResponse.Raw,
    Beehiiv.PostsListResponse
> = core.serialization.object({
    data: core.serialization.list(Post),
    limit: core.serialization.number(),
    page: core.serialization.number(),
    totalResults: core.serialization.property("total_results", core.serialization.number()),
    totalPages: core.serialization.property("total_pages", core.serialization.number()),
});

export declare namespace PostsListResponse {
    interface Raw {
        data: Post.Raw[];
        limit: number;
        page: number;
        total_results: number;
        total_pages: number;
    }
}
