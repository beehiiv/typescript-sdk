/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Beehiiv from "../../../../api";
import * as core from "../../../../core";
import { Publication } from "../../../types/Publication";

export const PublicationsListResponse: core.serialization.ObjectSchema<
    serializers.PublicationsListResponse.Raw,
    Beehiiv.PublicationsListResponse
> = core.serialization.object({
    data: core.serialization.list(Publication),
    limit: core.serialization.number(),
    page: core.serialization.number(),
    totalResults: core.serialization.property("total_results", core.serialization.number()),
    totalPages: core.serialization.property("total_pages", core.serialization.number()),
});

export declare namespace PublicationsListResponse {
    interface Raw {
        data: Publication.Raw[];
        limit: number;
        page: number;
        total_results: number;
        total_pages: number;
    }
}