/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../..";
import * as beehiiv from "../../../../../api";
import * as core from "../../../../../core";

export const CustomFieldsPutPublicationsPublicationIdCustomFieldsIdRequest: core.serialization.Schema<
    serializers.CustomFieldsPutPublicationsPublicationIdCustomFieldsIdRequest.Raw,
    beehiiv.CustomFieldsPutPublicationsPublicationIdCustomFieldsIdRequest
> = core.serialization.object({
    display: core.serialization.string().optional(),
});

export declare namespace CustomFieldsPutPublicationsPublicationIdCustomFieldsIdRequest {
    interface Raw {
        display?: string | null;
    }
}
