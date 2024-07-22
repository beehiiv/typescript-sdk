/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Beehiiv from "../../../../api/index";
import * as core from "../../../../core";

export const PublicationsListRequestExpandItem: core.serialization.Schema<
    serializers.PublicationsListRequestExpandItem.Raw,
    Beehiiv.PublicationsListRequestExpandItem
> = core.serialization.enum_([
    "stats",
    "stat_active_subscriptions",
    "stat_active_premium_subscriptions",
    "stat_active_free_subscriptions",
    "stat_average_open_rate",
    "stat_average_click_rate",
    "stat_total_sent",
    "stat_total_unique_opened",
    "stat_total_clicked",
]);

export declare namespace PublicationsListRequestExpandItem {
    type Raw =
        | "stats"
        | "stat_active_subscriptions"
        | "stat_active_premium_subscriptions"
        | "stat_active_free_subscriptions"
        | "stat_average_open_rate"
        | "stat_average_click_rate"
        | "stat_total_sent"
        | "stat_total_unique_opened"
        | "stat_total_clicked";
}
