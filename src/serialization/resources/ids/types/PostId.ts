/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Beehiiv from "../../../../api/index";
import * as core from "../../../../core";

export const PostId: core.serialization.Schema<serializers.PostId.Raw, Beehiiv.PostId> = core.serialization.string();

export declare namespace PostId {
    type Raw = string;
}
