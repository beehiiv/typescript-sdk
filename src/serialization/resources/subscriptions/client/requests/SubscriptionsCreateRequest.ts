/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as Beehiiv from "../../../../../api/index";
import * as core from "../../../../../core";
import { CustomFieldValue } from "../../../../types/CustomFieldValue";
import { SubscriptionsCreateRequestDoubleOptOverride } from "../../types/SubscriptionsCreateRequestDoubleOptOverride";
import { SubscriptionsCreateRequestTier } from "../../types/SubscriptionsCreateRequestTier";

export const SubscriptionsCreateRequest: core.serialization.Schema<
    serializers.SubscriptionsCreateRequest.Raw,
    Omit<Beehiiv.SubscriptionsCreateRequest, "undefined">
> = core.serialization.object({
    email: core.serialization.string(),
    reactivateExisting: core.serialization.property("reactivate_existing", core.serialization.boolean().optional()),
    sendWelcomeEmail: core.serialization.property("send_welcome_email", core.serialization.boolean().optional()),
    utmSource: core.serialization.property("utm_source", core.serialization.string().optional()),
    utmMedium: core.serialization.property("utm_medium", core.serialization.string().optional()),
    utmCampaign: core.serialization.property("utm_campaign", core.serialization.string().optional()),
    referringSite: core.serialization.property("referring_site", core.serialization.string().optional()),
    referralCode: core.serialization.property("referral_code", core.serialization.string().optional()),
    customFields: core.serialization.property("custom_fields", core.serialization.list(CustomFieldValue).optional()),
    doubleOptOverride: core.serialization.property(
        "double_opt_override",
        SubscriptionsCreateRequestDoubleOptOverride.optional()
    ),
    tier: SubscriptionsCreateRequestTier.optional(),
    premiumTiers: core.serialization.property(
        "premium_tiers",
        core.serialization.list(core.serialization.string()).optional()
    ),
    premiumTierIds: core.serialization.property(
        "premium_tier_ids",
        core.serialization.list(core.serialization.string()).optional()
    ),
    stripeCustomerId: core.serialization.property("stripe_customer_id", core.serialization.string().optional()),
    automationIds: core.serialization.property(
        "automation_ids",
        core.serialization.list(core.serialization.string()).optional()
    ),
});

export declare namespace SubscriptionsCreateRequest {
    interface Raw {
        email: string;
        reactivate_existing?: boolean | null;
        send_welcome_email?: boolean | null;
        utm_source?: string | null;
        utm_medium?: string | null;
        utm_campaign?: string | null;
        referring_site?: string | null;
        referral_code?: string | null;
        custom_fields?: CustomFieldValue.Raw[] | null;
        double_opt_override?: SubscriptionsCreateRequestDoubleOptOverride.Raw | null;
        tier?: SubscriptionsCreateRequestTier.Raw | null;
        premium_tiers?: string[] | null;
        premium_tier_ids?: string[] | null;
        stripe_customer_id?: string | null;
        automation_ids?: string[] | null;
    }
}
