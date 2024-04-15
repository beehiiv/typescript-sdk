/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Beehiiv from "../../api";
import * as core from "../../core";
import { SegmentType } from "./SegmentType";
import { SegmentStatus } from "./SegmentStatus";

export const Segment: core.serialization.ObjectSchema<serializers.Segment.Raw, Beehiiv.Segment> =
    core.serialization.object({
        id: core.serialization.string(),
        name: core.serialization.string(),
        type: SegmentType,
        lastCalculated: core.serialization.property("last_calculated", core.serialization.number().optional()),
        totalResults: core.serialization.property("total_results", core.serialization.number()),
        status: SegmentStatus,
        active: core.serialization.boolean(),
    });

export declare namespace Segment {
    interface Raw {
        id: string;
        name: string;
        type: SegmentType.Raw;
        last_calculated?: number | null;
        total_results: number;
        status: SegmentStatus.Raw;
        active: boolean;
    }
}
