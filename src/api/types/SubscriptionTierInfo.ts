/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Beehiiv from "../index";

export interface SubscriptionTierInfo {
    id: Beehiiv.TierId;
    name: string;
    /** Returns whether or not the tier has any active prices. */
    status: Beehiiv.SubscriptionTierInfoStatus;
}
