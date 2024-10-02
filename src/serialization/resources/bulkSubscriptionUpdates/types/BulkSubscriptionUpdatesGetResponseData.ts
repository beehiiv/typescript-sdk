/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Beehiiv from "../../../../api/index";
import * as core from "../../../../core";
import { BulkSubscriptionUpdatesGetResponseDataType } from "./BulkSubscriptionUpdatesGetResponseDataType";
import { BulkSubscriptionUpdatesGetResponseDataStatus } from "./BulkSubscriptionUpdatesGetResponseDataStatus";
import { PublicationId } from "../../ids/types/PublicationId";

export const BulkSubscriptionUpdatesGetResponseData: core.serialization.ObjectSchema<
    serializers.BulkSubscriptionUpdatesGetResponseData.Raw,
    Beehiiv.BulkSubscriptionUpdatesGetResponseData
> = core.serialization.object({
    id: core.serialization.string().optional(),
    type: BulkSubscriptionUpdatesGetResponseDataType.optional(),
    params: core.serialization.string().optional(),
    status: BulkSubscriptionUpdatesGetResponseDataStatus.optional(),
    publicationId: core.serialization.property("publication_id", PublicationId.optional()),
    failureReason: core.serialization.property("failure_reason", core.serialization.string().optional()),
    completed: core.serialization.number().optional(),
    created: core.serialization.number().optional(),
    updated: core.serialization.number().optional(),
    errorLog: core.serialization.property("error_log", core.serialization.list(core.serialization.string()).optional()),
});

export declare namespace BulkSubscriptionUpdatesGetResponseData {
    interface Raw {
        id?: string | null;
        type?: BulkSubscriptionUpdatesGetResponseDataType.Raw | null;
        params?: string | null;
        status?: BulkSubscriptionUpdatesGetResponseDataStatus.Raw | null;
        publication_id?: PublicationId.Raw | null;
        failure_reason?: string | null;
        completed?: number | null;
        created?: number | null;
        updated?: number | null;
        error_log?: string[] | null;
    }
}
