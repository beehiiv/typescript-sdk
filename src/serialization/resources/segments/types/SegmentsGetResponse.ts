/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Beehiiv from "../../../../api/index";
import * as core from "../../../../core";

export const SegmentsGetResponse: core.serialization.ObjectSchema<
    serializers.SegmentsGetResponse.Raw,
    Beehiiv.SegmentsGetResponse
> = core.serialization.object({
    data: core.serialization.list(core.serialization.string()),
    limit: core.serialization.number(),
    page: core.serialization.number(),
    totalResults: core.serialization.property("total_results", core.serialization.number()),
    totalPages: core.serialization.property("total_pages", core.serialization.number()),
});

export declare namespace SegmentsGetResponse {
    interface Raw {
        data: string[];
        limit: number;
        page: number;
        total_results: number;
        total_pages: number;
    }
}
