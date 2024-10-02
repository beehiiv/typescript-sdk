/**
 * This file was auto-generated by Fern from our API Definition.
 */

export type SegmentRequestStatus = "pending" | "processing" | "completed" | "failed" | "all";

export const SegmentRequestStatus = {
    Pending: "pending",
    Processing: "processing",
    Completed: "completed",
    Failed: "failed",
    All: "all",
} as const;