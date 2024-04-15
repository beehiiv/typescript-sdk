/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Beehiiv from "../../../../api";
import * as core from "../../../../core";

export const SegmentsListRequestDirection: core.serialization.Schema<
    serializers.SegmentsListRequestDirection.Raw,
    Beehiiv.SegmentsListRequestDirection
> = core.serialization.enum_(["asc", "desc"]);

export declare namespace SegmentsListRequestDirection {
    type Raw = "asc" | "desc";
}