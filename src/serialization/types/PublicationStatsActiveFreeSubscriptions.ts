/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Beehiiv from "../../api";
import * as core from "../../core";

export const PublicationStatsActiveFreeSubscriptions: core.serialization.Schema<
    serializers.PublicationStatsActiveFreeSubscriptions.Raw,
    Beehiiv.PublicationStatsActiveFreeSubscriptions
> = core.serialization.undiscriminatedUnion([core.serialization.number(), core.serialization.boolean()]);

export declare namespace PublicationStatsActiveFreeSubscriptions {
    type Raw = number | boolean;
}