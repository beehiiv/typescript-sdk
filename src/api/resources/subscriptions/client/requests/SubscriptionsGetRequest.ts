/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Beehiiv from "../../../..";

/**
 * @example
 *     {}
 *
 * @example
 *     {
 *         expand: Beehiiv.SubscriptionsGetRequestExpandItem.Stats
 *     }
 *
 * @example
 *     {
 *         expand: Beehiiv.SubscriptionsGetRequestExpandItem.Stats
 *     }
 *
 * @example
 *     {
 *         expand: Beehiiv.SubscriptionsGetRequestExpandItem.Stats
 *     }
 *
 * @example
 *     {
 *         expand: Beehiiv.SubscriptionsGetRequestExpandItem.Stats
 *     }
 *
 * @example
 *     {
 *         expand: Beehiiv.SubscriptionsGetRequestExpandItem.Stats
 *     }
 */
export interface SubscriptionsGetRequest {
    /**
     * Optional list of expandable objects.<br />`stats` - Returns statistics about the subscription(s).<br />`custom_fields` - Returns an array of custom field values that have been set on the subscription.<br />`referrals` - Returns an array of subscriptions with limited data - `id`, `email`, and `status`. These are the subscriptions that were referred by this subscription.
     */
    expand?: Beehiiv.SubscriptionsGetRequestExpandItem | Beehiiv.SubscriptionsGetRequestExpandItem[];
}
