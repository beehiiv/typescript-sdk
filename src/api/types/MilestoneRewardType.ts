/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * What type of reward this is.<br>`physical` - A product which must be sent to the subscriber.<br>`promo_code` - A code that is redeemable for goods or services.
 */
export type MilestoneRewardType = "physical" | "promo_code";

export const MilestoneRewardType = {
    Physical: "physical",
    PromoCode: "promo_code",
} as const;