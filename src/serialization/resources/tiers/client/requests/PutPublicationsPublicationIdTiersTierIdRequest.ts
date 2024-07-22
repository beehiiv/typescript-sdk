/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as Beehiiv from "../../../../../api/index";
import * as core from "../../../../../core";
import { PutPublicationsPublicationIdTiersTierIdRequestPricesAttributesItem } from "../../types/PutPublicationsPublicationIdTiersTierIdRequestPricesAttributesItem";

export const PutPublicationsPublicationIdTiersTierIdRequest: core.serialization.Schema<
    serializers.PutPublicationsPublicationIdTiersTierIdRequest.Raw,
    Beehiiv.PutPublicationsPublicationIdTiersTierIdRequest
> = core.serialization.object({
    name: core.serialization.string().optional(),
    description: core.serialization.string().optional(),
    pricesAttributes: core.serialization.property(
        "prices_attributes",
        core.serialization.list(PutPublicationsPublicationIdTiersTierIdRequestPricesAttributesItem).optional()
    ),
});

export declare namespace PutPublicationsPublicationIdTiersTierIdRequest {
    interface Raw {
        name?: string | null;
        description?: string | null;
        prices_attributes?: PutPublicationsPublicationIdTiersTierIdRequestPricesAttributesItem.Raw[] | null;
    }
}