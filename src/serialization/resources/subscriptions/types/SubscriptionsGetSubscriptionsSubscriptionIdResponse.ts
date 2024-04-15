/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as beehiiv from "../../../../api";
import * as core from "../../../../core";
import { Subscription } from "../../../types/Subscription";

export const SubscriptionsGetSubscriptionsSubscriptionIdResponse: core.serialization.ObjectSchema<
    serializers.SubscriptionsGetSubscriptionsSubscriptionIdResponse.Raw,
    beehiiv.SubscriptionsGetSubscriptionsSubscriptionIdResponse
> = core.serialization.object({
    data: Subscription,
});

export declare namespace SubscriptionsGetSubscriptionsSubscriptionIdResponse {
    interface Raw {
        data: Subscription.Raw;
    }
}
