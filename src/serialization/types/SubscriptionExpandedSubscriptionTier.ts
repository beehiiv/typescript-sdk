/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Beehiiv from "../../api";
import * as core from "../../core";

export const SubscriptionExpandedSubscriptionTier: core.serialization.Schema<
    serializers.SubscriptionExpandedSubscriptionTier.Raw,
    Beehiiv.SubscriptionExpandedSubscriptionTier
> = core.serialization.enum_(["free", "premium"]);

export declare namespace SubscriptionExpandedSubscriptionTier {
    type Raw = "free" | "premium";
}
