/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Beehiiv from "../../../..";

/**
 * @example
 *     {}
 */
export interface PostsGetRequest {
    /**
     * Optional list of expandable objects.<br>`stats` - Returns statistics about the post(s)<br> `free_web_content` - Returns the web HTML rendered to a free reader<br> `free_email_content` - Returns the email HTML rendered to a free reader<br> `free_rss_content` - Returns the RSS feed HTML<br> `premium_web_content` - Returns the web HTML rendered to a premium reader<br> `premium_email_content` - Returns the email HTML rendered to a premium reader
     */
    expand?: Beehiiv.PostsGetRequestExpandItem | Beehiiv.PostsGetRequestExpandItem[];
}