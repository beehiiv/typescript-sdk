/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Beehiiv from "../../api";
import * as core from "../../core";

export const PostStatus: core.serialization.Schema<serializers.PostStatus.Raw, Beehiiv.PostStatus> =
    core.serialization.enum_(["draft", "confirmed", "archived"]);

export declare namespace PostStatus {
    type Raw = "draft" | "confirmed" | "archived";
}
