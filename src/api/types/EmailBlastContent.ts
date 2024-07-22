/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Beehiiv from "../index";

/**
 * Optional html content for an email blast. Retrievable by including any of `expand: [free_email_content, premium_email_content]` in the post request body.
 *
 * **Note:** Generating HTML is slow. We recommend only requesting the HTML versions you need at the time.
 */
export interface EmailBlastContent {
    email?: Beehiiv.EmailBlastContentEmail;
}
