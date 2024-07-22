/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Beehiiv from "../../api/index";
import * as core from "../../core";

export const WebhookEventTypesItem: core.serialization.Schema<
    serializers.WebhookEventTypesItem.Raw,
    Beehiiv.WebhookEventTypesItem
> = core.serialization.enum_([
    "post.sent",
    "subscription.confirmed",
    "subscription.created",
    "subscription.deleted",
    "subscription.downgraded",
    "subscription.upgraded",
    "survey.response_submitted",
]);

export declare namespace WebhookEventTypesItem {
    type Raw =
        | "post.sent"
        | "subscription.confirmed"
        | "subscription.created"
        | "subscription.deleted"
        | "subscription.downgraded"
        | "subscription.upgraded"
        | "survey.response_submitted";
}
