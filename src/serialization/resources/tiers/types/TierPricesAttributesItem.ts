/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Beehiiv from "../../../../api/index";
import * as core from "../../../../core";
import { TierPriceCurrency } from "./TierPriceCurrency";
import { TierPriceInterval } from "./TierPriceInterval";

export const TierPricesAttributesItem: core.serialization.ObjectSchema<
    serializers.TierPricesAttributesItem.Raw,
    Beehiiv.TierPricesAttributesItem
> = core.serialization.object({
    currency: TierPriceCurrency,
    amountCents: core.serialization.property("amount_cents", core.serialization.number()),
    enabled: core.serialization.boolean().optional(),
    interval: TierPriceInterval,
    intervalDisplay: core.serialization.property("interval_display", core.serialization.string().optional()),
    cta: core.serialization.string().optional(),
    features: core.serialization.list(core.serialization.string()).optional(),
});

export declare namespace TierPricesAttributesItem {
    interface Raw {
        currency: TierPriceCurrency.Raw;
        amount_cents: number;
        enabled?: boolean | null;
        interval: TierPriceInterval.Raw;
        interval_display?: string | null;
        cta?: string | null;
        features?: string[] | null;
    }
}