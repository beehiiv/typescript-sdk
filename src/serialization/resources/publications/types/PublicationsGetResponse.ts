/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Beehiiv from "../../../../api/index";
import * as core from "../../../../core";
import { Publication } from "../../../types/Publication";

export const PublicationsGetResponse: core.serialization.ObjectSchema<
    serializers.PublicationsGetResponse.Raw,
    Beehiiv.PublicationsGetResponse
> = core.serialization.object({
    data: Publication,
});

export declare namespace PublicationsGetResponse {
    interface Raw {
        data: Publication.Raw;
    }
}
