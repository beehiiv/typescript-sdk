/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Beehiiv from "../../api/index";
import * as core from "../../core";
import { AutomationStatus } from "./AutomationStatus";
import { AutomationTriggerEventsItem } from "./AutomationTriggerEventsItem";

export const Automation: core.serialization.ObjectSchema<serializers.Automation.Raw, Beehiiv.Automation> =
    core.serialization.object({
        id: core.serialization.string(),
        status: AutomationStatus,
        name: core.serialization.string(),
        triggerEvents: core.serialization.property(
            "trigger_events",
            core.serialization.list(AutomationTriggerEventsItem)
        ),
        description: core.serialization.string().optional(),
    });

export declare namespace Automation {
    interface Raw {
        id: string;
        status: AutomationStatus.Raw;
        name: string;
        trigger_events: AutomationTriggerEventsItem.Raw[];
        description?: string | null;
    }
}
