/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as beehiiv from "../../../../api";
import * as core from "../../../../core";

export const SubscriptionsGetSubscriptionsRequestOrderBy: core.serialization.Schema<
    serializers.SubscriptionsGetSubscriptionsRequestOrderBy.Raw,
    beehiiv.SubscriptionsGetSubscriptionsRequestOrderBy
> = core.serialization.enum_(["created", "email"]);

export declare namespace SubscriptionsGetSubscriptionsRequestOrderBy {
    type Raw = "created" | "email";
}
