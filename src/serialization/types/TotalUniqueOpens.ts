/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Beehiiv from "../../api/index";
import * as core from "../../core";

export const TotalUniqueOpens: core.serialization.Schema<serializers.TotalUniqueOpens.Raw, Beehiiv.TotalUniqueOpens> =
    core.serialization.undiscriminatedUnion([core.serialization.number(), core.serialization.boolean()]);

export declare namespace TotalUniqueOpens {
    type Raw = number | boolean;
}
