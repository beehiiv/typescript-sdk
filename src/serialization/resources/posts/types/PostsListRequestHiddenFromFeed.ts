/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Beehiiv from "../../../../api";
import * as core from "../../../../core";

export const PostsListRequestHiddenFromFeed: core.serialization.Schema<
    serializers.PostsListRequestHiddenFromFeed.Raw,
    Beehiiv.PostsListRequestHiddenFromFeed
> = core.serialization.enum_(["all", "true", "false"]);

export declare namespace PostsListRequestHiddenFromFeed {
    type Raw = "all" | "true" | "false";
}
