/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Beehiiv from "../../../../api/index";
import * as core from "../../../../core";
import { CustomFieldInfo } from "./CustomFieldInfo";

export const CustomFieldIndexResponse: core.serialization.ObjectSchema<
    serializers.CustomFieldIndexResponse.Raw,
    Beehiiv.CustomFieldIndexResponse
> = core.serialization.object({
    data: core.serialization.list(CustomFieldInfo).optional(),
    limit: core.serialization.number().optional(),
    page: core.serialization.number().optional(),
    totalResults: core.serialization.property("total_results", core.serialization.number().optional()),
    totalPages: core.serialization.property("total_pages", core.serialization.number().optional()),
});

export declare namespace CustomFieldIndexResponse {
    interface Raw {
        data?: CustomFieldInfo.Raw[] | null;
        limit?: number | null;
        page?: number | null;
        total_results?: number | null;
        total_pages?: number | null;
    }
}
