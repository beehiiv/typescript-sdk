/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Beehiiv from "../../../../api/index";
import * as core from "../../../../core";

export const SubscriptionsPatchRequestNewStatus: core.serialization.Schema<
    serializers.SubscriptionsPatchRequestNewStatus.Raw,
    Beehiiv.SubscriptionsPatchRequestNewStatus
> = core.serialization.enum_(["active", "inactive"]);

export declare namespace SubscriptionsPatchRequestNewStatus {
    type Raw = "active" | "inactive";
}
