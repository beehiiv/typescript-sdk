/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as beehiiv from "..";

export interface Post {
    /** The prefixed post id */
    id: string;
    /** The subtitle displayed in web views */
    subtitle: string;
    /** The title displayed in web views */
    title: string;
    /** An array of author names */
    authors: string[];
    /** The time the post was created. Measured in seconds since the Unix epoch */
    created: number;
    /** The status of the post.<br>`draft` - not been scheduled.<br>`confirmed` - The post will be active after the `scheduled_at`.<br>`archived` - The post is no longer active. */
    status: beehiiv.PostStatus;
    /** The time the post was set to be published. Measured in seconds since the Unix epoch */
    publishDate?: number;
    /** The time displayed in place of the `publish_date`. Measured in seconds since the Unix epoch */
    displayedDate?: number;
    /** A flag to indicate if a split test was done. Only applicable to email posts. */
    splitTested: boolean;
    /** The email subject line. In cases of A/B Testing, this will be adjusted to the winning subject line. */
    subjectLine: string;
    /** The email preview text */
    previewText: string;
    /** The web slug where this post can be accessed. */
    slug: string;
    /** The URL of the thumbnail. Defaults to the Publication logo if not set. */
    thumbnailUrl: string;
    /** The full URL where this post can be accessed on the web. Only applicable if the platform is `web` or `both`. */
    webUrl: string;
    /** The audience that the post is available to on the web. Only applicable if the platform is `web` or `both`. */
    audience: beehiiv.PostAudience;
    /** The platform that the post is or will be published to. */
    platform: beehiiv.PostPlatform;
    /** All content tags that were associated with the post. */
    contentTags: string[];
    /** Meta tag description for the post, called SEO Description in the admin UI */
    metaDefaultDescription?: string;
    /** meta tag title for the post, called SEO Title in the admin UI */
    metaDefaultTitle?: string;
    content?: beehiiv.PostContent;
    stats?: beehiiv.PostStats;
    /** A flag to indicate if the post is hidden from the website feed. */
    hiddenFromFeed: boolean;
}
