/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Beehiiv from "../../../../api/index";
import * as core from "../../../../core";
import { PostWebRecipients } from "./PostWebRecipients";
import { PostEmailRecipients } from "./PostEmailRecipients";

export const PostRecipients: core.serialization.ObjectSchema<serializers.PostRecipients.Raw, Beehiiv.PostRecipients> =
    core.serialization.object({
        web: PostWebRecipients,
        email: PostEmailRecipients,
    });

export declare namespace PostRecipients {
    interface Raw {
        web: PostWebRecipients.Raw;
        email: PostEmailRecipients.Raw;
    }
}
