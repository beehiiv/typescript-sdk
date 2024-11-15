/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Beehiiv from "../../api/index";
import * as core from "../../core";

export const SegmentStatus: core.serialization.Schema<serializers.SegmentStatus.Raw, Beehiiv.SegmentStatus> =
    core.serialization.enum_(["pending", "processing", "completed", "failed"]);

export declare namespace SegmentStatus {
    type Raw = "pending" | "processing" | "completed" | "failed";
}
