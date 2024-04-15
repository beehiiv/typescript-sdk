/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Beehiiv from "../../../../api";
import * as core from "../../../../core";
import { AutomationJourney } from "../../../types/AutomationJourney";

export const AutomationJourneysGetResponse: core.serialization.ObjectSchema<
    serializers.AutomationJourneysGetResponse.Raw,
    Beehiiv.AutomationJourneysGetResponse
> = core.serialization.object({
    data: AutomationJourney.optional(),
});

export declare namespace AutomationJourneysGetResponse {
    interface Raw {
        data?: AutomationJourney.Raw | null;
    }
}
