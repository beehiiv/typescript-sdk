/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Beehiiv from "../../../../api/index";
import * as core from "../../../../core";

export const PostPublicationsPublicationIdTiersRequestPricesAttributesItemCurrency: core.serialization.Schema<
    serializers.PostPublicationsPublicationIdTiersRequestPricesAttributesItemCurrency.Raw,
    Beehiiv.PostPublicationsPublicationIdTiersRequestPricesAttributesItemCurrency
> = core.serialization.enum_(["usd", "aud", "cad", "eur", "inr", "brl"]);

export declare namespace PostPublicationsPublicationIdTiersRequestPricesAttributesItemCurrency {
    type Raw = "usd" | "aud" | "cad" | "eur" | "inr" | "brl";
}
