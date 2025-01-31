/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Beehiiv from "../../api/index";
import * as core from "../../core";

export const PostStatsEmail: core.serialization.ObjectSchema<serializers.PostStatsEmail.Raw, Beehiiv.PostStatsEmail> =
    core.serialization.object({
        recipients: core.serialization.number().optional(),
        delivered: core.serialization.number().optional(),
        opens: core.serialization.number().optional(),
        uniqueOpens: core.serialization.property("unique_opens", core.serialization.number().optional()),
        openRate: core.serialization.property("open_rate", core.serialization.number().optional()),
        clicks: core.serialization.number().optional(),
        uniqueClicks: core.serialization.property("unique_clicks", core.serialization.number().optional()),
        clickRate: core.serialization.property("click_rate", core.serialization.number().optional()),
        unsubscribes: core.serialization.number().optional(),
        spamReports: core.serialization.property("spam_reports", core.serialization.number().optional()),
    });

export declare namespace PostStatsEmail {
    interface Raw {
        recipients?: number | null;
        delivered?: number | null;
        opens?: number | null;
        unique_opens?: number | null;
        open_rate?: number | null;
        clicks?: number | null;
        unique_clicks?: number | null;
        click_rate?: number | null;
        unsubscribes?: number | null;
        spam_reports?: number | null;
    }
}
