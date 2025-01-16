/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Beehiiv from "../../../../api/index";
import * as core from "../../../../core";

export const PostEmailSettings: core.serialization.ObjectSchema<
    serializers.PostEmailSettings.Raw,
    Beehiiv.PostEmailSettings
> = core.serialization.object({
    fromAddress: core.serialization.property("from_address", core.serialization.string().optional()),
    customLiveUrl: core.serialization.property("custom_live_url", core.serialization.string().optional()),
    displayTitleInEmail: core.serialization.property("display_title_in_email", core.serialization.boolean().optional()),
    displayBylineInEmail: core.serialization.property(
        "display_byline_in_email",
        core.serialization.boolean().optional()
    ),
    displaySubtitleInEmail: core.serialization.property(
        "display_subtitle_in_email",
        core.serialization.boolean().optional()
    ),
    emailHeaderEngagementButtons: core.serialization.property(
        "email_header_engagement_buttons",
        core.serialization.string().optional()
    ),
    emailHeaderSocialShare: core.serialization.property(
        "email_header_social_share",
        core.serialization.string().optional()
    ),
    emailPreviewText: core.serialization.property("email_preview_text", core.serialization.string().optional()),
    emailSubjectLine: core.serialization.property("email_subject_line", core.serialization.string().optional()),
});

export declare namespace PostEmailSettings {
    interface Raw {
        from_address?: string | null;
        custom_live_url?: string | null;
        display_title_in_email?: boolean | null;
        display_byline_in_email?: boolean | null;
        display_subtitle_in_email?: boolean | null;
        email_header_engagement_buttons?: string | null;
        email_header_social_share?: string | null;
        email_preview_text?: string | null;
        email_subject_line?: string | null;
    }
}
