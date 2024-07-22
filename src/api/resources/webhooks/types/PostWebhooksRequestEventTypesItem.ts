/**
 * This file was auto-generated by Fern from our API Definition.
 */

export type PostWebhooksRequestEventTypesItem =
    | "post.sent"
    | "subscription.confirmed"
    | "subscription.created"
    | "subscription.downgraded"
    | "subscription.upgraded"
    | "subscription.deleted"
    | "survey.response_submitted";

export const PostWebhooksRequestEventTypesItem = {
    PostSent: "post.sent",
    SubscriptionConfirmed: "subscription.confirmed",
    SubscriptionCreated: "subscription.created",
    SubscriptionDowngraded: "subscription.downgraded",
    SubscriptionUpgraded: "subscription.upgraded",
    SubscriptionDeleted: "subscription.deleted",
    SurveyResponseSubmitted: "survey.response_submitted",
} as const;
