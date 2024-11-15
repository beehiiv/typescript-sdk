/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Beehiiv from "../../../../api/index";
import * as core from "../../../../core";
import { Milestone } from "../../../types/Milestone";

export const ReferralProgramGetResponse: core.serialization.ObjectSchema<
    serializers.ReferralProgramGetResponse.Raw,
    Beehiiv.ReferralProgramGetResponse
> = core.serialization.object({
    data: core.serialization.list(Milestone),
    limit: core.serialization.number(),
    page: core.serialization.number(),
    totalResults: core.serialization.property("total_results", core.serialization.number()),
    totalPages: core.serialization.property("total_pages", core.serialization.number()),
});

export declare namespace ReferralProgramGetResponse {
    interface Raw {
        data: Milestone.Raw[];
        limit: number;
        page: number;
        total_results: number;
        total_pages: number;
    }
}
