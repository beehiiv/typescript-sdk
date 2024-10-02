/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Beehiiv from "../../../../api/index";
import * as core from "../../../../core";
import { CustomFieldType } from "../../../types/CustomFieldType";

export const CustomFieldInfo: core.serialization.ObjectSchema<
    serializers.CustomFieldInfo.Raw,
    Beehiiv.CustomFieldInfo
> = core.serialization.object({
    id: core.serialization.string().optional(),
    kind: CustomFieldType.optional(),
    display: core.serialization.string().optional(),
    created: core.serialization.number().optional(),
});

export declare namespace CustomFieldInfo {
    interface Raw {
        id?: string | null;
        kind?: CustomFieldType.Raw | null;
        display?: string | null;
        created?: number | null;
    }
}