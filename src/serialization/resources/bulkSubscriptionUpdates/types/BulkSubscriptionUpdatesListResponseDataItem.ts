/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Beehiiv from "../../../../api/index";
import * as core from "../../../../core";
import { BulkSubscriptionUpdatesListResponseDataItemType } from "./BulkSubscriptionUpdatesListResponseDataItemType";
import { BulkSubscriptionUpdatesListResponseDataItemStatus } from "./BulkSubscriptionUpdatesListResponseDataItemStatus";

export const BulkSubscriptionUpdatesListResponseDataItem: core.serialization.ObjectSchema<
    serializers.BulkSubscriptionUpdatesListResponseDataItem.Raw,
    Beehiiv.BulkSubscriptionUpdatesListResponseDataItem
> = core.serialization.object({
    id: core.serialization.string().optional(),
    type: BulkSubscriptionUpdatesListResponseDataItemType.optional(),
    params: core.serialization.string().optional(),
    status: BulkSubscriptionUpdatesListResponseDataItemStatus.optional(),
    publicationId: core.serialization.property("publication_id", core.serialization.string().optional()),
    failureReason: core.serialization.property("failure_reason", core.serialization.string().optional()),
    completed: core.serialization.number().optional(),
    created: core.serialization.number().optional(),
    updated: core.serialization.number().optional(),
    errorLog: core.serialization.property("error_log", core.serialization.list(core.serialization.string()).optional()),
});

export declare namespace BulkSubscriptionUpdatesListResponseDataItem {
    interface Raw {
        id?: string | null;
        type?: BulkSubscriptionUpdatesListResponseDataItemType.Raw | null;
        params?: string | null;
        status?: BulkSubscriptionUpdatesListResponseDataItemStatus.Raw | null;
        publication_id?: string | null;
        failure_reason?: string | null;
        completed?: number | null;
        created?: number | null;
        updated?: number | null;
        error_log?: string[] | null;
    }
}
