/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as Beehiiv from "../../../../../api/index";
import * as core from "../../../../../core";
import { UpdateTierPriceRequest } from "../../types/UpdateTierPriceRequest";

export const UpdatePutTierRequest: core.serialization.Schema<
    serializers.UpdatePutTierRequest.Raw,
    Beehiiv.UpdatePutTierRequest
> = core.serialization.object({
    name: core.serialization.string().optional(),
    description: core.serialization.string().optional(),
    pricesAttributes: core.serialization.property(
        "prices_attributes",
        core.serialization.list(UpdateTierPriceRequest).optional()
    ),
});

export declare namespace UpdatePutTierRequest {
    interface Raw {
        name?: string | null;
        description?: string | null;
        prices_attributes?: UpdateTierPriceRequest.Raw[] | null;
    }
}