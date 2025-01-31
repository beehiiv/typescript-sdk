/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Beehiiv from "../../api/index";
import * as core from "../../core";

export const CustomFieldType: core.serialization.Schema<serializers.CustomFieldType.Raw, Beehiiv.CustomFieldType> =
    core.serialization.enum_(["string", "integer", "boolean", "date", "datetime", "list"]);

export declare namespace CustomFieldType {
    type Raw = "string" | "integer" | "boolean" | "date" | "datetime" | "list";
}
