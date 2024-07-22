/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Beehiiv from "../index";

/**
 * The subscription tier object.
 */
export interface Tier {
    id: string;
    name: string;
    /** Returns whether or not the tier has any active prices. */
    status: Beehiiv.TierStatus;
    description?: string;
    stats?: Beehiiv.TierStats;
    /** Optional list of prices for a tier. Retrievable by including `expand: [prices]` in the tier request body. */
    prices?: Beehiiv.TierPrice[];
}
