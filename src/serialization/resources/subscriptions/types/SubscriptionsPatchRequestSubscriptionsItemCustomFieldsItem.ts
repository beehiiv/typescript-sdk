/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Beehiiv from "../../../../api";
import * as core from "../../../../core";

export const SubscriptionsPatchRequestSubscriptionsItemCustomFieldsItem: core.serialization.ObjectSchema<
    serializers.SubscriptionsPatchRequestSubscriptionsItemCustomFieldsItem.Raw,
    Beehiiv.SubscriptionsPatchRequestSubscriptionsItemCustomFieldsItem
> = core.serialization.object({
    display: core.serialization.string().optional(),
    value: core.serialization.string().optional(),
    delete: core.serialization.boolean().optional(),
});

export declare namespace SubscriptionsPatchRequestSubscriptionsItemCustomFieldsItem {
    interface Raw {
        display?: string | null;
        value?: string | null;
        delete?: boolean | null;
    }
}
