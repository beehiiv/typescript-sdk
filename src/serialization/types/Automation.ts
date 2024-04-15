/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Beehiiv from "../../api";
import * as core from "../../core";
import { AutomationStatus } from "./AutomationStatus";

export const Automation: core.serialization.ObjectSchema<serializers.Automation.Raw, Beehiiv.Automation> =
    core.serialization.object({
        id: core.serialization.string(),
        status: AutomationStatus,
        name: core.serialization.string(),
        description: core.serialization.string().optional(),
    });

export declare namespace Automation {
    interface Raw {
        id: string;
        status: AutomationStatus.Raw;
        name: string;
        description?: string | null;
    }
}