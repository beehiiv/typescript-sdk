/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Beehiiv from "..";

/**
 * A subscribers' journey through an automation flow.
 */
export interface AutomationJourney {
    /** The prefixed automation journey id */
    id: string;
    /** The prefixed automation id */
    automationId: string;
    /** The prefixed subscription id */
    subscriptionId: string;
    status: Beehiiv.AutomationJourneyStatus;
    /** The time that the subscriber started their flow through the automation. Measured in seconds since the Unix epoch. */
    startedAt?: number;
    /** The time that the subscriber finished their flow through the automation. Measured in seconds since the Unix epoch. */
    completedAt?: number;
}
