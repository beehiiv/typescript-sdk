/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Beehiiv from "../../api";
import * as core from "../../core";

export const PostStatsWeb: core.serialization.ObjectSchema<serializers.PostStatsWeb.Raw, Beehiiv.PostStatsWeb> =
    core.serialization.object({
        views: core.serialization.number().optional(),
        clicks: core.serialization.number().optional(),
    });

export declare namespace PostStatsWeb {
    interface Raw {
        views?: number | null;
        clicks?: number | null;
    }
}