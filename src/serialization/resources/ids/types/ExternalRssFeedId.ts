/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Beehiiv from "../../../../api/index";
import * as core from "../../../../core";

export const ExternalRssFeedId: core.serialization.Schema<
    serializers.ExternalRssFeedId.Raw,
    Beehiiv.ExternalRssFeedId
> = core.serialization.string();

export declare namespace ExternalRssFeedId {
    type Raw = string;
}
