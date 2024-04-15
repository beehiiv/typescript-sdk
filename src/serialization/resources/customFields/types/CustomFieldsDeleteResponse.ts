/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Beehiiv from "../../../../api";
import * as core from "../../../../core";

export const CustomFieldsDeleteResponse: core.serialization.ObjectSchema<
    serializers.CustomFieldsDeleteResponse.Raw,
    Beehiiv.CustomFieldsDeleteResponse
> = core.serialization.object({
    message: core.serialization.string().optional(),
});

export declare namespace CustomFieldsDeleteResponse {
    interface Raw {
        message?: string | null;
    }
}