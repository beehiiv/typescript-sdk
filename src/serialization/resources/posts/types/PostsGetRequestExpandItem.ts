/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Beehiiv from "../../../../api";
import * as core from "../../../../core";

export const PostsGetRequestExpandItem: core.serialization.Schema<
    serializers.PostsGetRequestExpandItem.Raw,
    Beehiiv.PostsGetRequestExpandItem
> = core.serialization.enum_([
    "stats",
    "free_web_content",
    "free_email_content",
    "free_rss_content",
    "premium_web_content",
    "premium_email_content",
]);

export declare namespace PostsGetRequestExpandItem {
    type Raw =
        | "stats"
        | "free_web_content"
        | "free_email_content"
        | "free_rss_content"
        | "premium_web_content"
        | "premium_email_content";
}