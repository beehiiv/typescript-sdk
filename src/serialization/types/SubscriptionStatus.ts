/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Beehiiv from "../../api/index";
import * as core from "../../core";

export const SubscriptionStatus: core.serialization.Schema<
    serializers.SubscriptionStatus.Raw,
    Beehiiv.SubscriptionStatus
> = core.serialization.enum_(["validating", "invalid", "pending", "active", "inactive", "needs_attention"]);

export declare namespace SubscriptionStatus {
    type Raw = "validating" | "invalid" | "pending" | "active" | "inactive" | "needs_attention";
}
