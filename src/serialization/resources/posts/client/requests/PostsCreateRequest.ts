/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as Beehiiv from "../../../../../api/index";
import * as core from "../../../../../core";
import { Block } from "../../types/Block";
import { PostTemplateId } from "../../../ids/types/PostTemplateId";
import { PostEmailCaptureTypeOverride } from "../../types/PostEmailCaptureTypeOverride";
import { PostSocialShare } from "../../types/PostSocialShare";
import { PostRecipients } from "../../types/PostRecipients";
import { PostEmailSettings } from "../../types/PostEmailSettings";
import { PostWebSettings } from "../../types/PostWebSettings";
import { PostMetadata } from "../../types/PostMetadata";

export const PostsCreateRequest: core.serialization.Schema<
    serializers.PostsCreateRequest.Raw,
    Beehiiv.PostsCreateRequest
> = core.serialization.object({
    bodyContent: core.serialization.property("body_content", core.serialization.string().optional()),
    blocks: core.serialization.list(Block).optional(),
    title: core.serialization.string(),
    subtitle: core.serialization.string().optional(),
    postTemplateId: core.serialization.property("post_template_id", PostTemplateId.optional()),
    scheduledAt: core.serialization.property("scheduled_at", core.serialization.date().optional()),
    customLinkTrackingEnabled: core.serialization.property(
        "custom_link_tracking_enabled",
        core.serialization.boolean().optional()
    ),
    emailCaptureTypeOverride: core.serialization.property(
        "email_capture_type_override",
        PostEmailCaptureTypeOverride.optional()
    ),
    overrideScheduledAt: core.serialization.property("override_scheduled_at", core.serialization.date().optional()),
    socialShare: core.serialization.property("social_share", PostSocialShare.optional()),
    thumbnailImageUrl: core.serialization.property("thumbnail_image_url", core.serialization.string().optional()),
    recipients: PostRecipients.optional(),
    emailSettings: core.serialization.property("email_settings", PostEmailSettings.optional()),
    webSettings: core.serialization.property("web_settings", PostWebSettings.optional()),
    seoSettings: core.serialization.property("seo_settings", PostMetadata.optional()),
    contentTags: core.serialization.property(
        "content_tags",
        core.serialization.list(core.serialization.string()).optional()
    ),
    headers: core.serialization.record(core.serialization.string(), core.serialization.string()).optional(),
    customFields: core.serialization.property(
        "custom_fields",
        core.serialization.record(core.serialization.string(), core.serialization.string()).optional()
    ),
});

export declare namespace PostsCreateRequest {
    interface Raw {
        body_content?: string | null;
        blocks?: Block.Raw[] | null;
        title: string;
        subtitle?: string | null;
        post_template_id?: PostTemplateId.Raw | null;
        scheduled_at?: string | null;
        custom_link_tracking_enabled?: boolean | null;
        email_capture_type_override?: PostEmailCaptureTypeOverride.Raw | null;
        override_scheduled_at?: string | null;
        social_share?: PostSocialShare.Raw | null;
        thumbnail_image_url?: string | null;
        recipients?: PostRecipients.Raw | null;
        email_settings?: PostEmailSettings.Raw | null;
        web_settings?: PostWebSettings.Raw | null;
        seo_settings?: PostMetadata.Raw | null;
        content_tags?: string[] | null;
        headers?: Record<string, string> | null;
        custom_fields?: Record<string, string> | null;
    }
}
