/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Beehiiv from "../../../../api/index";
import * as core from "../../../../core";
import { Segment } from "../../../types/Segment";

export const SegmentsListResponse: core.serialization.ObjectSchema<
    serializers.SegmentsListResponse.Raw,
    Beehiiv.SegmentsListResponse
> = core.serialization.object({
    data: core.serialization.list(Segment),
    limit: core.serialization.number(),
    page: core.serialization.number(),
    totalResults: core.serialization.property("total_results", core.serialization.number()),
    totalPages: core.serialization.property("total_pages", core.serialization.number()),
});

export declare namespace SegmentsListResponse {
    interface Raw {
        data: Segment.Raw[];
        limit: number;
        page: number;
        total_results: number;
        total_pages: number;
    }
}
