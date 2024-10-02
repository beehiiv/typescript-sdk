/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Beehiiv from "../../../index";

export interface SubscriptionsPutRequestSubscriptionsItem {
    subscriptionId: Beehiiv.SubscriptionId;
    /** The Tier of the Subscription (not required) */
    tier?: Beehiiv.SubscriptionsPutRequestSubscriptionsItemTier;
    /** The Stripe Customer ID of the subscription (not required) */
    stripeCustomerId?: string;
    /** A boolean value specifying whether to unsubscribe this subscription from the publication (not required) */
    unsubscribe?: boolean;
    /** An array of custom field objects to update */
    customFields?: Beehiiv.SubscriptionsPutRequestSubscriptionsItemCustomFieldsItem[];
}