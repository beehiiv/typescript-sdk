/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Beehiiv from "../../api/index";
import * as core from "../../core";
import { AutomationJourneyId } from "../resources/ids/types/AutomationJourneyId";
import { AutomationId } from "../resources/ids/types/AutomationId";
import { SubscriptionId } from "../resources/ids/types/SubscriptionId";
import { AutomationJourneyStatus } from "./AutomationJourneyStatus";

export const AutomationJourney: core.serialization.ObjectSchema<
    serializers.AutomationJourney.Raw,
    Beehiiv.AutomationJourney
> = core.serialization.object({
    id: AutomationJourneyId,
    automationId: core.serialization.property("automation_id", AutomationId),
    subscriptionId: core.serialization.property("subscription_id", SubscriptionId.optional()),
    email: core.serialization.string().optional(),
    status: AutomationJourneyStatus,
    startedAt: core.serialization.property("started_at", core.serialization.number().optional()),
    completedAt: core.serialization.property("completed_at", core.serialization.number().optional()),
});

export declare namespace AutomationJourney {
    interface Raw {
        id: AutomationJourneyId.Raw;
        automation_id: AutomationId.Raw;
        subscription_id?: SubscriptionId.Raw | null;
        email?: string | null;
        status: AutomationJourneyStatus.Raw;
        started_at?: number | null;
        completed_at?: number | null;
    }
}
