/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as beehiiv from "../../../../api";
import * as core from "../../../../core";

export const SubscriptionsPatchSubscriptionsBulkActionsBulkUpdateRequestSubscriptionsItemTier: core.serialization.Schema<
    serializers.SubscriptionsPatchSubscriptionsBulkActionsBulkUpdateRequestSubscriptionsItemTier.Raw,
    beehiiv.SubscriptionsPatchSubscriptionsBulkActionsBulkUpdateRequestSubscriptionsItemTier
> = core.serialization.enum_(["free", "premium"]);

export declare namespace SubscriptionsPatchSubscriptionsBulkActionsBulkUpdateRequestSubscriptionsItemTier {
    type Raw = "free" | "premium";
}
