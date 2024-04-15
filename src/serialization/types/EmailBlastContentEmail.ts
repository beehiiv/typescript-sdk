/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Beehiiv from "../../api";
import * as core from "../../core";

export const EmailBlastContentEmail: core.serialization.ObjectSchema<
    serializers.EmailBlastContentEmail.Raw,
    Beehiiv.EmailBlastContentEmail
> = core.serialization.object({
    free: core.serialization.string().optional(),
    premium: core.serialization.string().optional(),
});

export declare namespace EmailBlastContentEmail {
    interface Raw {
        free?: string | null;
        premium?: string | null;
    }
}