/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Beehiiv from "../../api/index";
import * as core from "../../core";
import { RewardId } from "../resources/ids/types/RewardId";
import { MilestoneRewardType } from "./MilestoneRewardType";

export const MilestoneReward: core.serialization.ObjectSchema<
    serializers.MilestoneReward.Raw,
    Beehiiv.MilestoneReward
> = core.serialization.object({
    id: RewardId,
    name: core.serialization.string(),
    description: core.serialization.string(),
    imageUrl: core.serialization.property("image_url", core.serialization.string()),
    type: MilestoneRewardType,
});

export declare namespace MilestoneReward {
    interface Raw {
        id: RewardId.Raw;
        name: string;
        description: string;
        image_url: string;
        type: MilestoneRewardType.Raw;
    }
}
