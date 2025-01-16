/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Beehiiv from "../../api/index";
import * as core from "../../core";

export const SubscriptionJwtToken: core.serialization.ObjectSchema<
    serializers.SubscriptionJwtToken.Raw,
    Beehiiv.SubscriptionJwtToken
> = core.serialization.object({
    jwtToken: core.serialization.property("jwt_token", core.serialization.string()),
});

export declare namespace SubscriptionJwtToken {
    interface Raw {
        jwt_token: string;
    }
}
