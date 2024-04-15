/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as beehiiv from "../../../../api";
import * as core from "../../../../core";
import { BulkSubscriptionUpdatesGetPublicationsPublicationIdSubcriptionUpdatesIdResponseDataType } from "./BulkSubscriptionUpdatesGetPublicationsPublicationIdSubcriptionUpdatesIdResponseDataType";
import { BulkSubscriptionUpdatesGetPublicationsPublicationIdSubcriptionUpdatesIdResponseDataStatus } from "./BulkSubscriptionUpdatesGetPublicationsPublicationIdSubcriptionUpdatesIdResponseDataStatus";

export const BulkSubscriptionUpdatesGetPublicationsPublicationIdSubcriptionUpdatesIdResponseData: core.serialization.ObjectSchema<
    serializers.BulkSubscriptionUpdatesGetPublicationsPublicationIdSubcriptionUpdatesIdResponseData.Raw,
    beehiiv.BulkSubscriptionUpdatesGetPublicationsPublicationIdSubcriptionUpdatesIdResponseData
> = core.serialization.object({
    id: core.serialization.string().optional(),
    type: BulkSubscriptionUpdatesGetPublicationsPublicationIdSubcriptionUpdatesIdResponseDataType.optional(),
    params: core.serialization.string().optional(),
    status: BulkSubscriptionUpdatesGetPublicationsPublicationIdSubcriptionUpdatesIdResponseDataStatus.optional(),
    publicationId: core.serialization.property("publication_id", core.serialization.string().optional()),
    failureReason: core.serialization.property("failure_reason", core.serialization.string().optional()),
    completed: core.serialization.number().optional(),
    created: core.serialization.number().optional(),
    updated: core.serialization.number().optional(),
    errorLog: core.serialization.property("error_log", core.serialization.list(core.serialization.string()).optional()),
});

export declare namespace BulkSubscriptionUpdatesGetPublicationsPublicationIdSubcriptionUpdatesIdResponseData {
    interface Raw {
        id?: string | null;
        type?: BulkSubscriptionUpdatesGetPublicationsPublicationIdSubcriptionUpdatesIdResponseDataType.Raw | null;
        params?: string | null;
        status?: BulkSubscriptionUpdatesGetPublicationsPublicationIdSubcriptionUpdatesIdResponseDataStatus.Raw | null;
        publication_id?: string | null;
        failure_reason?: string | null;
        completed?: number | null;
        created?: number | null;
        updated?: number | null;
        error_log?: string[] | null;
    }
}
