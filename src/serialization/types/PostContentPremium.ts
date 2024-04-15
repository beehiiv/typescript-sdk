/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as beehiiv from "../../api";
import * as core from "../../core";

export const PostContentPremium: core.serialization.ObjectSchema<
    serializers.PostContentPremium.Raw,
    beehiiv.PostContentPremium
> = core.serialization.object({
    web: core.serialization.string().optional(),
    email: core.serialization.string().optional(),
});

export declare namespace PostContentPremium {
    interface Raw {
        web?: string | null;
        email?: string | null;
    }
}
