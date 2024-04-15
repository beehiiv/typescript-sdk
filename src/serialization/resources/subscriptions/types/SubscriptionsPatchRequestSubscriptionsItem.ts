/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Beehiiv from "../../../../api";
import * as core from "../../../../core";
import { SubscriptionsPatchRequestSubscriptionsItemTier } from "./SubscriptionsPatchRequestSubscriptionsItemTier";
import { SubscriptionsPatchRequestSubscriptionsItemCustomFieldsItem } from "./SubscriptionsPatchRequestSubscriptionsItemCustomFieldsItem";

export const SubscriptionsPatchRequestSubscriptionsItem: core.serialization.ObjectSchema<
    serializers.SubscriptionsPatchRequestSubscriptionsItem.Raw,
    Beehiiv.SubscriptionsPatchRequestSubscriptionsItem
> = core.serialization.object({
    subscriptionId: core.serialization.property("subscription_id", core.serialization.string()),
    tier: SubscriptionsPatchRequestSubscriptionsItemTier.optional(),
    unsubscribe: core.serialization.boolean().optional(),
    customFields: core.serialization.property(
        "custom_fields",
        core.serialization.list(SubscriptionsPatchRequestSubscriptionsItemCustomFieldsItem).optional()
    ),
});

export declare namespace SubscriptionsPatchRequestSubscriptionsItem {
    interface Raw {
        subscription_id: string;
        tier?: SubscriptionsPatchRequestSubscriptionsItemTier.Raw | null;
        unsubscribe?: boolean | null;
        custom_fields?: SubscriptionsPatchRequestSubscriptionsItemCustomFieldsItem.Raw[] | null;
    }
}
