/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Beehiiv from "../../../..";

/**
 * @example
 *     {
 *         email: "example@example.com",
 *         subscriptionId: "sub_00000000-0000-0000-0000-000000000000"
 *     }
 *
 * @example
 *     {
 *         email: "example@example.com",
 *         subscriptionId: "sub_00000000-0000-0000-0000-000000000000"
 *     }
 *
 * @example
 *     {
 *         email: "example@example.com",
 *         subscriptionId: "sub_00000000-0000-0000-0000-000000000000"
 *     }
 *
 * @example
 *     {
 *         email: "example@example.com",
 *         subscriptionId: "sub_00000000-0000-0000-0000-000000000000"
 *     }
 *
 * @example
 *     {
 *         email: "example@example.com",
 *         subscriptionId: "sub_00000000-0000-0000-0000-000000000000"
 *     }
 *
 * @example
 *     {
 *         email: "example@example.com",
 *         subscriptionId: "sub_00000000-0000-0000-0000-000000000000"
 *     }
 */
export interface AutomationJourneysCreateRequest {
    /** The email address associated with the subscription */
    email?: string;
    /** The prefixed ID of the subscription */
    subscriptionId?: string;
    /** Override publication double-opt settings for this subscription. */
    doubleOptOverride?: Beehiiv.AutomationJourneysCreateRequestDoubleOptOverride;
}
