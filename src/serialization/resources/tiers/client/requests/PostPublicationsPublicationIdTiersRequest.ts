/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as Beehiiv from "../../../../../api/index";
import * as core from "../../../../../core";
import { PostPublicationsPublicationIdTiersRequestPricesAttributesItem } from "../../types/PostPublicationsPublicationIdTiersRequestPricesAttributesItem";

export const PostPublicationsPublicationIdTiersRequest: core.serialization.Schema<
    serializers.PostPublicationsPublicationIdTiersRequest.Raw,
    Beehiiv.PostPublicationsPublicationIdTiersRequest
> = core.serialization.object({
    name: core.serialization.string(),
    description: core.serialization.string().optional(),
    pricesAttributes: core.serialization.property(
        "prices_attributes",
        core.serialization.list(PostPublicationsPublicationIdTiersRequestPricesAttributesItem).optional()
    ),
});

export declare namespace PostPublicationsPublicationIdTiersRequest {
    interface Raw {
        name: string;
        description?: string | null;
        prices_attributes?: PostPublicationsPublicationIdTiersRequestPricesAttributesItem.Raw[] | null;
    }
}