/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Beehiiv from "../../api/index";
import * as core from "../../core";

export const EmailBlastStatus: core.serialization.Schema<serializers.EmailBlastStatus.Raw, Beehiiv.EmailBlastStatus> =
    core.serialization.enum_(["active", "inactive"]);

export declare namespace EmailBlastStatus {
    type Raw = "active" | "inactive";
}
