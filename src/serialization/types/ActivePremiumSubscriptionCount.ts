/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Beehiiv from "../../api/index";
import * as core from "../../core";

export const ActivePremiumSubscriptionCount: core.serialization.Schema<
    serializers.ActivePremiumSubscriptionCount.Raw,
    Beehiiv.ActivePremiumSubscriptionCount
> = core.serialization.undiscriminatedUnion([core.serialization.number(), core.serialization.boolean()]);

export declare namespace ActivePremiumSubscriptionCount {
    type Raw = number | boolean;
}
