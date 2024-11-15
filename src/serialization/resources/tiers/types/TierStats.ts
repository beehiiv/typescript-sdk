/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Beehiiv from "../../../../api/index";
import * as core from "../../../../core";

export const TierStats: core.serialization.ObjectSchema<serializers.TierStats.Raw, Beehiiv.TierStats> =
    core.serialization.object({
        activeSubscriptions: core.serialization.property("active_subscriptions", core.serialization.number()),
    });

export declare namespace TierStats {
    interface Raw {
        active_subscriptions: number;
    }
}
