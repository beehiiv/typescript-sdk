/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Beehiiv from "../../../../api/index";
import * as core from "../../../../core";

export const WebhooksDeleteResponse: core.serialization.ObjectSchema<
    serializers.WebhooksDeleteResponse.Raw,
    Beehiiv.WebhooksDeleteResponse
> = core.serialization.object({
    message: core.serialization.string().optional(),
});

export declare namespace WebhooksDeleteResponse {
    interface Raw {
        message?: string | null;
    }
}
