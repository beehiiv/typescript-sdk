/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as Beehiiv from "../../../../../api/index";
import * as core from "../../../../../core";
import { PatchPublicationsPublicationIdTiersTierIdRequestPricesAttributesItem } from "../../types/PatchPublicationsPublicationIdTiersTierIdRequestPricesAttributesItem";

export const PatchPublicationsPublicationIdTiersTierIdRequest: core.serialization.Schema<
    serializers.PatchPublicationsPublicationIdTiersTierIdRequest.Raw,
    Beehiiv.PatchPublicationsPublicationIdTiersTierIdRequest
> = core.serialization.object({
    name: core.serialization.string().optional(),
    description: core.serialization.string().optional(),
    pricesAttributes: core.serialization.property(
        "prices_attributes",
        core.serialization.list(PatchPublicationsPublicationIdTiersTierIdRequestPricesAttributesItem).optional()
    ),
});

export declare namespace PatchPublicationsPublicationIdTiersTierIdRequest {
    interface Raw {
        name?: string | null;
        description?: string | null;
        prices_attributes?: PatchPublicationsPublicationIdTiersTierIdRequestPricesAttributesItem.Raw[] | null;
    }
}
