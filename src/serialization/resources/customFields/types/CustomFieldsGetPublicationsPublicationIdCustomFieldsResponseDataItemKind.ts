/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as beehiiv from "../../../../api";
import * as core from "../../../../core";

export const CustomFieldsGetPublicationsPublicationIdCustomFieldsResponseDataItemKind: core.serialization.Schema<
    serializers.CustomFieldsGetPublicationsPublicationIdCustomFieldsResponseDataItemKind.Raw,
    beehiiv.CustomFieldsGetPublicationsPublicationIdCustomFieldsResponseDataItemKind
> = core.serialization.enum_(["string", "integer", "boolean", "date", "datetime"]);

export declare namespace CustomFieldsGetPublicationsPublicationIdCustomFieldsResponseDataItemKind {
    type Raw = "string" | "integer" | "boolean" | "date" | "datetime";
}
