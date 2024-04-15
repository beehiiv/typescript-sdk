/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as beehiiv from "../../../../api";
import * as core from "../../../../core";

export const SubscriptionsGetSubscriptionsEmailRequestExpandItem: core.serialization.Schema<
    serializers.SubscriptionsGetSubscriptionsEmailRequestExpandItem.Raw,
    beehiiv.SubscriptionsGetSubscriptionsEmailRequestExpandItem
> = core.serialization.enum_(["stats", "custom_fields", "referrals"]);

export declare namespace SubscriptionsGetSubscriptionsEmailRequestExpandItem {
    type Raw = "stats" | "custom_fields" | "referrals";
}
