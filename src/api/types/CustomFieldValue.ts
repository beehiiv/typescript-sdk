/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Beehiiv from "../index";

/**
 * The object required for setting custom field values on a subscription
 */
export interface CustomFieldValue {
    /** The name of the existing custom field */
    name?: string;
    /** The value stored for the subscription */
    value?: Beehiiv.CustomFieldDataType;
}
