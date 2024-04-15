/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as beehiiv from "../../../../api";
import * as core from "../../../../core";

export const SubscriptionsPatchSubscriptionsBulkUpdateStatusRequestNewStatus: core.serialization.Schema<
    serializers.SubscriptionsPatchSubscriptionsBulkUpdateStatusRequestNewStatus.Raw,
    beehiiv.SubscriptionsPatchSubscriptionsBulkUpdateStatusRequestNewStatus
> = core.serialization.enum_(["active", "inactive"]);

export declare namespace SubscriptionsPatchSubscriptionsBulkUpdateStatusRequestNewStatus {
    type Raw = "active" | "inactive";
}
