/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Beehiiv from "../../api/index";
import * as core from "../../core";

export const RequestDirection: core.serialization.Schema<serializers.RequestDirection.Raw, Beehiiv.RequestDirection> =
    core.serialization.enum_(["asc", "desc"]);

export declare namespace RequestDirection {
    type Raw = "asc" | "desc";
}
