/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Beehiiv from "../../api/index";
import * as core from "../../core";

export const MilestoneRewardType: core.serialization.Schema<
    serializers.MilestoneRewardType.Raw,
    Beehiiv.MilestoneRewardType
> = core.serialization.enum_(["physical", "promo_code"]);

export declare namespace MilestoneRewardType {
    type Raw = "physical" | "promo_code";
}
