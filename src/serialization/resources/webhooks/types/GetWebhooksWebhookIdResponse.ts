/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Beehiiv from "../../../../api/index";
import * as core from "../../../../core";
import { Webhook } from "../../../types/Webhook";

export const GetWebhooksWebhookIdResponse: core.serialization.ObjectSchema<
    serializers.GetWebhooksWebhookIdResponse.Raw,
    Beehiiv.GetWebhooksWebhookIdResponse
> = core.serialization.object({
    data: Webhook,
});

export declare namespace GetWebhooksWebhookIdResponse {
    interface Raw {
        data: Webhook.Raw;
    }
}
