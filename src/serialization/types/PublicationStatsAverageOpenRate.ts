/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Beehiiv from "../../api/index";
import * as core from "../../core";

export const PublicationStatsAverageOpenRate: core.serialization.Schema<
    serializers.PublicationStatsAverageOpenRate.Raw,
    Beehiiv.PublicationStatsAverageOpenRate
> = core.serialization.undiscriminatedUnion([core.serialization.number(), core.serialization.boolean()]);

export declare namespace PublicationStatsAverageOpenRate {
    type Raw = number | boolean;
}
