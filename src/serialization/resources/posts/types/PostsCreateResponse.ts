/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Beehiiv from "../../../../api/index";
import * as core from "../../../../core";
import { PostCreate } from "../../../types/PostCreate";

export const PostsCreateResponse: core.serialization.ObjectSchema<
    serializers.PostsCreateResponse.Raw,
    Beehiiv.PostsCreateResponse
> = core.serialization.object({
    data: PostCreate,
});

export declare namespace PostsCreateResponse {
    interface Raw {
        data: PostCreate.Raw;
    }
}
