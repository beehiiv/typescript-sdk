/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Beehiiv from "../../../../api/index";
import * as core from "../../../../core";

export const HeadingLevel: core.serialization.Schema<serializers.HeadingLevel.Raw, Beehiiv.HeadingLevel> =
    core.serialization.enum_(["1", "2", "3", "4", "5", "6"]);

export declare namespace HeadingLevel {
    type Raw = "1" | "2" | "3" | "4" | "5" | "6";
}
