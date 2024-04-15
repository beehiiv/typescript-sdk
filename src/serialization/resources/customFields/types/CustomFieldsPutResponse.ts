/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Beehiiv from "../../../../api";
import * as core from "../../../../core";
import { CustomFieldsPutResponseData } from "./CustomFieldsPutResponseData";

export const CustomFieldsPutResponse: core.serialization.ObjectSchema<
    serializers.CustomFieldsPutResponse.Raw,
    Beehiiv.CustomFieldsPutResponse
> = core.serialization.object({
    data: CustomFieldsPutResponseData.optional(),
});

export declare namespace CustomFieldsPutResponse {
    interface Raw {
        data?: CustomFieldsPutResponseData.Raw | null;
    }
}