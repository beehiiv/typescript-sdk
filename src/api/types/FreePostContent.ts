/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * The requested free post HTML. This HTML has paywalls enforced.
 */
export interface FreePostContent {
    /** The web HTML rendered to a free or annonomous reader. */
    web?: string;
    /** The email HTML rendered to a free reader. */
    email?: string;
    /** The HTML that is rendered in RSS feeds. */
    rss?: string;
}