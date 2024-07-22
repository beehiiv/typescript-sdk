/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as Beehiiv from "../../../../../api/index";
import * as core from "../../../../../core";
import { SubscriptionsPutRequestSubscriptionsItem } from "../../types/SubscriptionsPutRequestSubscriptionsItem";

export const SubscriptionsPutRequest: core.serialization.Schema<
    serializers.SubscriptionsPutRequest.Raw,
    Beehiiv.SubscriptionsPutRequest
> = core.serialization.object({
    subscriptions: core.serialization.list(SubscriptionsPutRequestSubscriptionsItem).optional(),
});

export declare namespace SubscriptionsPutRequest {
    interface Raw {
        subscriptions?: SubscriptionsPutRequestSubscriptionsItem.Raw[] | null;
    }
}
