/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Beehiiv from "../../api/index";
import * as core from "../../core";

export const DoubleOptOverride: core.serialization.Schema<
    serializers.DoubleOptOverride.Raw,
    Beehiiv.DoubleOptOverride
> = core.serialization.string();

export declare namespace DoubleOptOverride {
    type Raw = string;
}
