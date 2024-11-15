/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Beehiiv from "../index";

export interface Automation {
    /** A unique prefixed id of the automation */
    id: Beehiiv.AutomationId;
    status: Beehiiv.AutomationStatus;
    name: string;
    /** The types of events that can trigger the automation. */
    triggerEvents: Beehiiv.AutomationTriggerEvent[];
    description?: string;
}
