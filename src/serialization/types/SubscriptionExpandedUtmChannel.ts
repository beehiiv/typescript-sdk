/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Beehiiv from "../../api/index";
import * as core from "../../core";

export const SubscriptionExpandedUtmChannel: core.serialization.Schema<
    serializers.SubscriptionExpandedUtmChannel.Raw,
    Beehiiv.SubscriptionExpandedUtmChannel
> = core.serialization.enum_([
    "",
    "website",
    "import",
    "embed",
    "api",
    "referral",
    "recommendation",
    "magic_link",
    "boost",
    "boost_send",
    "boost_direct_link",
]);

export declare namespace SubscriptionExpandedUtmChannel {
    type Raw =
        | ""
        | "website"
        | "import"
        | "embed"
        | "api"
        | "referral"
        | "recommendation"
        | "magic_link"
        | "boost"
        | "boost_send"
        | "boost_direct_link";
}
