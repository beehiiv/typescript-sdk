/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as beehiiv from "../../../../api";
import * as core from "../../../../core";

export const SubscriptionsPutSubscriptionsSubscriptionIdRequestCustomFieldsItem: core.serialization.ObjectSchema<
    serializers.SubscriptionsPutSubscriptionsSubscriptionIdRequestCustomFieldsItem.Raw,
    beehiiv.SubscriptionsPutSubscriptionsSubscriptionIdRequestCustomFieldsItem
> = core.serialization.object({
    name: core.serialization.string().optional(),
    value: core.serialization.string().optional(),
    delete: core.serialization.boolean().optional(),
});

export declare namespace SubscriptionsPutSubscriptionsSubscriptionIdRequestCustomFieldsItem {
    interface Raw {
        name?: string | null;
        value?: string | null;
        delete?: boolean | null;
    }
}
