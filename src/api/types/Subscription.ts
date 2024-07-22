/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Beehiiv from "../index";

/**
 * The subscription object
 */
export interface Subscription {
    /** The prefixed subscription id */
    id: string;
    email: string;
    /** The status of the subscription.<br>`validating` - The email address is being validated.<br>`invalid` - The email address is invalid.<br>`pending` - The email address is valid, but the subscription is pending double opt-in.<br>`active` - The email was valid and the subscription is active.<br>`inactive` - The subscription was made inactive, possibly due to an unsubscribe.<br>`needs_attention` - The subscription requires approval or denial. */
    status: Beehiiv.SubscriptionExpandedStatus;
    /** The date the subscription was created. Measured in seconds since the Unix epoch */
    created: number;
    /** The current tier of the subscription. */
    subscriptionTier: Beehiiv.SubscriptionExpandedSubscriptionTier;
    /** The current premium tiers of the subscription. Empty if the subscriber is not associated with any premium tiers. */
    subscriptionPremiumTierNames: string[];
    /** The acquisition source; where the subscriber came from */
    utmSource: string;
    /** The acquisition medium; how the subscriber got to your publication */
    utmMedium: string;
    /** The acquisition channel */
    utmChannel: Beehiiv.SubscriptionExpandedUtmChannel;
    /** The acquisition campaign */
    utmCampaign: string;
    /** The website that the subscriber was referred from */
    referringSite: string;
    /** The code associated to this subscriber to refer others. When a new subscription is created with this referral code, credit for the referral goes to this subscription. */
    referralCode: string;
    subscriptionPremiumTiers?: Beehiiv.SubscriptionTiers;
    customFields?: Beehiiv.SubscriptionCustomFields;
    tags?: Beehiiv.SubscriptionTags;
    stats?: Beehiiv.SubscriptionStats;
}
