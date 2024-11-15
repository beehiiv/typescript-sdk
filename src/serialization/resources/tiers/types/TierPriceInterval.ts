/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Beehiiv from "../../../../api/index";
import * as core from "../../../../core";

export const TierPriceInterval: core.serialization.Schema<
    serializers.TierPriceInterval.Raw,
    Beehiiv.TierPriceInterval
> = core.serialization.enum_(["month", "year"]);

export declare namespace TierPriceInterval {
    type Raw = "month" | "year";
}
