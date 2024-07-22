/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Beehiiv from "../index";

/**
 * The milestone object.
 */
export interface Milestone {
    /** A unique prefixed id of the milestone. */
    id: string;
    /** Only available with a promo code reward type. This indicates that an email will automatically be sent when the milestone is reached containing the reward promo code. */
    autoFulfill: boolean;
    /** The number of referrals needed to reach this milestone. */
    numReferrals: number;
    reward: Beehiiv.MilestoneReward;
}
