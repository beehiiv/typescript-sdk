/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as beehiiv from "../../../../api";
import * as core from "../../../../core";

export const SubscriptionsPatchSubscriptionsBulkActionsBulkUpdateRequestSubscriptionsItemCustomFieldsItem: core.serialization.ObjectSchema<
    serializers.SubscriptionsPatchSubscriptionsBulkActionsBulkUpdateRequestSubscriptionsItemCustomFieldsItem.Raw,
    beehiiv.SubscriptionsPatchSubscriptionsBulkActionsBulkUpdateRequestSubscriptionsItemCustomFieldsItem
> = core.serialization.object({
    display: core.serialization.string().optional(),
    value: core.serialization.string().optional(),
    delete: core.serialization.boolean().optional(),
});

export declare namespace SubscriptionsPatchSubscriptionsBulkActionsBulkUpdateRequestSubscriptionsItemCustomFieldsItem {
    interface Raw {
        display?: string | null;
        value?: string | null;
        delete?: boolean | null;
    }
}
