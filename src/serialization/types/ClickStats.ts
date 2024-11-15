/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Beehiiv from "../../api/index";
import * as core from "../../core";
import { PostClickStatsEmail } from "./PostClickStatsEmail";
import { PostClickStatsWeb } from "./PostClickStatsWeb";

export const ClickStats: core.serialization.ObjectSchema<serializers.ClickStats.Raw, Beehiiv.ClickStats> =
    core.serialization.object({
        url: core.serialization.string().optional(),
        email: PostClickStatsEmail.optional(),
        web: PostClickStatsWeb.optional(),
        totalClicks: core.serialization.property("total_clicks", core.serialization.number().optional()),
        totalUniqueClicks: core.serialization.property("total_unique_clicks", core.serialization.number().optional()),
        totalClickThroughRate: core.serialization.property(
            "total_click_through_rate",
            core.serialization.number().optional()
        ),
    });

export declare namespace ClickStats {
    interface Raw {
        url?: string | null;
        email?: PostClickStatsEmail.Raw | null;
        web?: PostClickStatsWeb.Raw | null;
        total_clicks?: number | null;
        total_unique_clicks?: number | null;
        total_click_through_rate?: number | null;
    }
}
