/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Beehiiv from "../../../../api/index";
import * as core from "../../../../core";

export const WebhookEventType: core.serialization.Schema<serializers.WebhookEventType.Raw, Beehiiv.WebhookEventType> =
    core.serialization.enum_([
        "post.sent",
        "subscription.confirmed",
        "subscription.created",
        "subscription.downgraded",
        "subscription.upgraded",
        "subscription.deleted",
        "survey.response_submitted",
    ]);

export declare namespace WebhookEventType {
    type Raw =
        | "post.sent"
        | "subscription.confirmed"
        | "subscription.created"
        | "subscription.downgraded"
        | "subscription.upgraded"
        | "subscription.deleted"
        | "survey.response_submitted";
}
