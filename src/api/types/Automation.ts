/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as beehiiv from "..";

export interface Automation {
    /** A unique prefixed id of the automation */
    id: string;
    status: beehiiv.AutomationStatus;
    name: string;
    description?: string;
}
