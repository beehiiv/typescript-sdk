/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Beehiiv from "../../../../api/index";
import * as core from "../../../../core";

export const SubscriptionsPutRequestTier: core.serialization.Schema<
    serializers.SubscriptionsPutRequestTier.Raw,
    Beehiiv.SubscriptionsPutRequestTier
> = core.serialization.enum_(["free", "premium"]);

export declare namespace SubscriptionsPutRequestTier {
    type Raw = "free" | "premium";
}
