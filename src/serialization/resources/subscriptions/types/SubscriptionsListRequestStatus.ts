/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Beehiiv from "../../../../api/index";
import * as core from "../../../../core";

export const SubscriptionsListRequestStatus: core.serialization.Schema<
    serializers.SubscriptionsListRequestStatus.Raw,
    Beehiiv.SubscriptionsListRequestStatus
> = core.serialization.enum_(["validating", "invalid", "pending", "active", "inactive", "all"]);

export declare namespace SubscriptionsListRequestStatus {
    type Raw = "validating" | "invalid" | "pending" | "active" | "inactive" | "all";
}
