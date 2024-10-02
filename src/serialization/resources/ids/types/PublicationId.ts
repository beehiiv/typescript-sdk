/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Beehiiv from "../../../../api/index";
import * as core from "../../../../core";

export const PublicationId: core.serialization.Schema<serializers.PublicationId.Raw, Beehiiv.PublicationId> =
    core.serialization.string();

export declare namespace PublicationId {
    type Raw = string;
}