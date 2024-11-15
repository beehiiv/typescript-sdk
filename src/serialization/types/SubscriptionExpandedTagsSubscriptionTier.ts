/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Beehiiv from "../../api/index";
import * as core from "../../core";

export const SubscriptionExpandedTagsSubscriptionTier: core.serialization.Schema<
    serializers.SubscriptionExpandedTagsSubscriptionTier.Raw,
    Beehiiv.SubscriptionExpandedTagsSubscriptionTier
> = core.serialization.enum_(["free", "premium"]);

export declare namespace SubscriptionExpandedTagsSubscriptionTier {
    type Raw = "free" | "premium";
}
