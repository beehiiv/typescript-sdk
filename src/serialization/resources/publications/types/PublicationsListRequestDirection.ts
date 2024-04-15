/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Beehiiv from "../../../../api";
import * as core from "../../../../core";

export const PublicationsListRequestDirection: core.serialization.Schema<
    serializers.PublicationsListRequestDirection.Raw,
    Beehiiv.PublicationsListRequestDirection
> = core.serialization.enum_(["asc", "desc"]);

export declare namespace PublicationsListRequestDirection {
    type Raw = "asc" | "desc";
}