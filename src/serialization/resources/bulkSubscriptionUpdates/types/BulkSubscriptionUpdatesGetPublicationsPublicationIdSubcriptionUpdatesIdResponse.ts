/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as beehiiv from "../../../../api";
import * as core from "../../../../core";
import { BulkSubscriptionUpdatesGetPublicationsPublicationIdSubcriptionUpdatesIdResponseData } from "./BulkSubscriptionUpdatesGetPublicationsPublicationIdSubcriptionUpdatesIdResponseData";

export const BulkSubscriptionUpdatesGetPublicationsPublicationIdSubcriptionUpdatesIdResponse: core.serialization.ObjectSchema<
    serializers.BulkSubscriptionUpdatesGetPublicationsPublicationIdSubcriptionUpdatesIdResponse.Raw,
    beehiiv.BulkSubscriptionUpdatesGetPublicationsPublicationIdSubcriptionUpdatesIdResponse
> = core.serialization.object({
    data: BulkSubscriptionUpdatesGetPublicationsPublicationIdSubcriptionUpdatesIdResponseData.optional(),
});

export declare namespace BulkSubscriptionUpdatesGetPublicationsPublicationIdSubcriptionUpdatesIdResponse {
    interface Raw {
        data?: BulkSubscriptionUpdatesGetPublicationsPublicationIdSubcriptionUpdatesIdResponseData.Raw | null;
    }
}
