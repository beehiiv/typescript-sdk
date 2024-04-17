/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Beehiiv from "../../../..";

/**
 * @example
 *     {}
 *
 * @example
 *     {
 *         expand: Beehiiv.EmailBlastsGetRequestExpandItem.Stats
 *     }
 *
 * @example
 *     {
 *         expand: Beehiiv.EmailBlastsGetRequestExpandItem.Stats
 *     }
 *
 * @example
 *     {
 *         expand: Beehiiv.EmailBlastsGetRequestExpandItem.Stats
 *     }
 *
 * @example
 *     {
 *         expand: Beehiiv.EmailBlastsGetRequestExpandItem.Stats
 *     }
 *
 * @example
 *     {
 *         expand: Beehiiv.EmailBlastsGetRequestExpandItem.Stats
 *     }
 */
export interface EmailBlastsGetRequest {
    /**
     * Optional list of expandable objects.<br />`stats` - Returns statistics about the email blast(s)<br /> `free_email_content` - Returns the email HTML rendered to a free reader<br /> `premium_email_content` - Returns the email HTML rendered to a premium reader
     */
    expand?: Beehiiv.EmailBlastsGetRequestExpandItem | Beehiiv.EmailBlastsGetRequestExpandItem[];
}
