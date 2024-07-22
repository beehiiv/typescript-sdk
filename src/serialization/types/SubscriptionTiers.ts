/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Beehiiv from "../../api/index";
import * as core from "../../core";
import { SubscriptionTiersItem } from "./SubscriptionTiersItem";

export const SubscriptionTiers: core.serialization.Schema<
    serializers.SubscriptionTiers.Raw,
    Beehiiv.SubscriptionTiers
> = core.serialization.list(SubscriptionTiersItem);

export declare namespace SubscriptionTiers {
    type Raw = SubscriptionTiersItem.Raw[];
}