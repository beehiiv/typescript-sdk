/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Beehiiv from "../../../../api";
import * as core from "../../../../core";

export const BulkSubscriptionUpdatesListResponseDataItemStatus: core.serialization.Schema<
    serializers.BulkSubscriptionUpdatesListResponseDataItemStatus.Raw,
    Beehiiv.BulkSubscriptionUpdatesListResponseDataItemStatus
> = core.serialization.enum_(["pending", "processing", "complete", "failed"]);

export declare namespace BulkSubscriptionUpdatesListResponseDataItemStatus {
    type Raw = "pending" | "processing" | "complete" | "failed";
}
