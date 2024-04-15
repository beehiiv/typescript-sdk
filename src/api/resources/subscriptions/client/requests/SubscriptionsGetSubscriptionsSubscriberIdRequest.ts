/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as beehiiv from "../../../..";

/**
 * @example
 *     {}
 *
 * @example
 *     {
 *         expand: beehiiv.SubscriptionsGetSubscriptionsSubscriberIdRequestExpandItem.Stats
 *     }
 *
 * @example
 *     {
 *         expand: beehiiv.SubscriptionsGetSubscriptionsSubscriberIdRequestExpandItem.Stats
 *     }
 *
 * @example
 *     {
 *         expand: beehiiv.SubscriptionsGetSubscriptionsSubscriberIdRequestExpandItem.Stats
 *     }
 *
 * @example
 *     {
 *         expand: beehiiv.SubscriptionsGetSubscriptionsSubscriberIdRequestExpandItem.Stats
 *     }
 *
 * @example
 *     {
 *         expand: beehiiv.SubscriptionsGetSubscriptionsSubscriberIdRequestExpandItem.Stats
 *     }
 */
export interface SubscriptionsGetSubscriptionsSubscriberIdRequest {
    /**
     * Optional list of expandable objects.<br>`stats` - Returns statistics about the subscription(s).<br>`custom_fields` - Returns an array of custom field values that have been set on the subscription.<br>`referrals` - Returns an array of subscriptions with limited data - `id`, `email`, and `status`. These are the subscriptions that were referred by this subscription.
     */
    expand?:
        | beehiiv.SubscriptionsGetSubscriptionsSubscriberIdRequestExpandItem
        | beehiiv.SubscriptionsGetSubscriptionsSubscriberIdRequestExpandItem[];
}
