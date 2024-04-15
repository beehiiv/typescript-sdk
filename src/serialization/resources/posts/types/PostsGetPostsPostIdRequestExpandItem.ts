/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as beehiiv from "../../../../api";
import * as core from "../../../../core";

export const PostsGetPostsPostIdRequestExpandItem: core.serialization.Schema<
    serializers.PostsGetPostsPostIdRequestExpandItem.Raw,
    beehiiv.PostsGetPostsPostIdRequestExpandItem
> = core.serialization.enum_([
    "stats",
    "free_web_content",
    "free_email_content",
    "free_rss_content",
    "premium_web_content",
    "premium_email_content",
]);

export declare namespace PostsGetPostsPostIdRequestExpandItem {
    type Raw =
        | "stats"
        | "free_web_content"
        | "free_email_content"
        | "free_rss_content"
        | "premium_web_content"
        | "premium_email_content";
}
