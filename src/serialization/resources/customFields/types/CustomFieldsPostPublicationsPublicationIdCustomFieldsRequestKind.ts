/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as beehiiv from "../../../../api";
import * as core from "../../../../core";

export const CustomFieldsPostPublicationsPublicationIdCustomFieldsRequestKind: core.serialization.Schema<
    serializers.CustomFieldsPostPublicationsPublicationIdCustomFieldsRequestKind.Raw,
    beehiiv.CustomFieldsPostPublicationsPublicationIdCustomFieldsRequestKind
> = core.serialization.enum_(["string", "integer", "boolean", "date", "datetime"]);

export declare namespace CustomFieldsPostPublicationsPublicationIdCustomFieldsRequestKind {
    type Raw = "string" | "integer" | "boolean" | "date" | "datetime";
}
