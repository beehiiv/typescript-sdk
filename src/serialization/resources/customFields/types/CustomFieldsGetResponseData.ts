/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Beehiiv from "../../../../api";
import * as core from "../../../../core";
import { CustomFieldsGetResponseDataKind } from "./CustomFieldsGetResponseDataKind";

export const CustomFieldsGetResponseData: core.serialization.ObjectSchema<
    serializers.CustomFieldsGetResponseData.Raw,
    Beehiiv.CustomFieldsGetResponseData
> = core.serialization.object({
    id: core.serialization.string().optional(),
    display: core.serialization.string().optional(),
    kind: CustomFieldsGetResponseDataKind.optional(),
    created: core.serialization.number().optional(),
});

export declare namespace CustomFieldsGetResponseData {
    interface Raw {
        id?: string | null;
        display?: string | null;
        kind?: CustomFieldsGetResponseDataKind.Raw | null;
        created?: number | null;
    }
}
