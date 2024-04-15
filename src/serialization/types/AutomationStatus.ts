/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Beehiiv from "../../api";
import * as core from "../../core";

export const AutomationStatus: core.serialization.Schema<serializers.AutomationStatus.Raw, Beehiiv.AutomationStatus> =
    core.serialization.enum_(["running", "finishing", "inactive"]);

export declare namespace AutomationStatus {
    type Raw = "running" | "finishing" | "inactive";
}
