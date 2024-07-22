/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Beehiiv from "../../../../api/index";
import * as core from "../../../../core";

export const SubscriptionsPutResponseData: core.serialization.ObjectSchema<
    serializers.SubscriptionsPutResponseData.Raw,
    Beehiiv.SubscriptionsPutResponseData
> = core.serialization.object({
    subscriptionUpdateId: core.serialization.property("subscription_update_id", core.serialization.string().optional()),
});

export declare namespace SubscriptionsPutResponseData {
    interface Raw {
        subscription_update_id?: string | null;
    }
}
