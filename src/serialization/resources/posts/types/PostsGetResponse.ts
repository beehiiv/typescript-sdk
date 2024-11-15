/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Beehiiv from "../../../../api/index";
import * as core from "../../../../core";
import { Post } from "../../../types/Post";

export const PostsGetResponse: core.serialization.ObjectSchema<
    serializers.PostsGetResponse.Raw,
    Beehiiv.PostsGetResponse
> = core.serialization.object({
    data: Post,
});

export declare namespace PostsGetResponse {
    interface Raw {
        data: Post.Raw;
    }
}
