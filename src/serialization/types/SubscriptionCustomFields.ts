/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Beehiiv from "../../api/index";
import * as core from "../../core";
import { CustomField } from "./CustomField";

export const SubscriptionCustomFields: core.serialization.Schema<
    serializers.SubscriptionCustomFields.Raw,
    Beehiiv.SubscriptionCustomFields
> = core.serialization.list(CustomField);

export declare namespace SubscriptionCustomFields {
    type Raw = CustomField.Raw[];
}
