/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Beehiiv from "../../../../api";
import * as core from "../../../../core";

export const PostsListRequestDirection: core.serialization.Schema<
    serializers.PostsListRequestDirection.Raw,
    Beehiiv.PostsListRequestDirection
> = core.serialization.enum_(["asc", "desc"]);

export declare namespace PostsListRequestDirection {
    type Raw = "asc" | "desc";
}