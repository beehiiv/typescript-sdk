/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Beehiiv from "../../../../api/index";
import * as core from "../../../../core";

export const PostOrderBy: core.serialization.Schema<serializers.PostOrderBy.Raw, Beehiiv.PostOrderBy> =
    core.serialization.enum_(["created", "publish_date", "displayed_date"]);

export declare namespace PostOrderBy {
    type Raw = "created" | "publish_date" | "displayed_date";
}