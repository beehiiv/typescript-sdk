/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Beehiiv from "../../api/index";
import * as core from "../../core";
import { MilestoneReward } from "./MilestoneReward";

export const Milestone: core.serialization.ObjectSchema<serializers.Milestone.Raw, Beehiiv.Milestone> =
    core.serialization.object({
        id: core.serialization.string(),
        autoFulfill: core.serialization.property("auto_fulfill", core.serialization.boolean()),
        numReferrals: core.serialization.property("num_referrals", core.serialization.number()),
        reward: MilestoneReward,
    });

export declare namespace Milestone {
    interface Raw {
        id: string;
        auto_fulfill: boolean;
        num_referrals: number;
        reward: MilestoneReward.Raw;
    }
}
