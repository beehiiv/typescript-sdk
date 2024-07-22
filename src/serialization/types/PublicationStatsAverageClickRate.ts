/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Beehiiv from "../../api/index";
import * as core from "../../core";

export const PublicationStatsAverageClickRate: core.serialization.Schema<
    serializers.PublicationStatsAverageClickRate.Raw,
    Beehiiv.PublicationStatsAverageClickRate
> = core.serialization.undiscriminatedUnion([core.serialization.number(), core.serialization.boolean()]);

export declare namespace PublicationStatsAverageClickRate {
    type Raw = number | boolean;
}
