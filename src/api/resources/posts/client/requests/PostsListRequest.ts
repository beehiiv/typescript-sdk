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
 *         expand: Beehiiv.PostsListRequestExpandItem.Stats,
 *         audience: Beehiiv.PostsListRequestAudience.Free,
 *         platform: Beehiiv.PostsListRequestPlatform.Web,
 *         status: Beehiiv.PostsListRequestStatus.Draft,
 *         contentTags: "string",
 *         limit: 1,
 *         page: 1,
 *         orderBy: Beehiiv.PostsListRequestOrderBy.Created,
 *         direction: Beehiiv.PostsListRequestDirection.Asc,
 *         hiddenFromFeed: Beehiiv.PostsListRequestHiddenFromFeed.All
 *     }
 *
 * @example
 *     {
 *         expand: Beehiiv.PostsListRequestExpandItem.Stats,
 *         audience: Beehiiv.PostsListRequestAudience.Free,
 *         platform: Beehiiv.PostsListRequestPlatform.Web,
 *         status: Beehiiv.PostsListRequestStatus.Draft,
 *         contentTags: "string",
 *         limit: 1,
 *         page: 1,
 *         orderBy: Beehiiv.PostsListRequestOrderBy.Created,
 *         direction: Beehiiv.PostsListRequestDirection.Asc,
 *         hiddenFromFeed: Beehiiv.PostsListRequestHiddenFromFeed.All
 *     }
 *
 * @example
 *     {
 *         expand: Beehiiv.PostsListRequestExpandItem.Stats,
 *         audience: Beehiiv.PostsListRequestAudience.Free,
 *         platform: Beehiiv.PostsListRequestPlatform.Web,
 *         status: Beehiiv.PostsListRequestStatus.Draft,
 *         contentTags: "string",
 *         limit: 1,
 *         page: 1,
 *         orderBy: Beehiiv.PostsListRequestOrderBy.Created,
 *         direction: Beehiiv.PostsListRequestDirection.Asc,
 *         hiddenFromFeed: Beehiiv.PostsListRequestHiddenFromFeed.All
 *     }
 *
 * @example
 *     {
 *         expand: Beehiiv.PostsListRequestExpandItem.Stats,
 *         audience: Beehiiv.PostsListRequestAudience.Free,
 *         platform: Beehiiv.PostsListRequestPlatform.Web,
 *         status: Beehiiv.PostsListRequestStatus.Draft,
 *         contentTags: "string",
 *         limit: 1,
 *         page: 1,
 *         orderBy: Beehiiv.PostsListRequestOrderBy.Created,
 *         direction: Beehiiv.PostsListRequestDirection.Asc,
 *         hiddenFromFeed: Beehiiv.PostsListRequestHiddenFromFeed.All
 *     }
 *
 * @example
 *     {
 *         expand: Beehiiv.PostsListRequestExpandItem.Stats,
 *         audience: Beehiiv.PostsListRequestAudience.Free,
 *         platform: Beehiiv.PostsListRequestPlatform.Web,
 *         status: Beehiiv.PostsListRequestStatus.Draft,
 *         contentTags: "string",
 *         limit: 1,
 *         page: 1,
 *         orderBy: Beehiiv.PostsListRequestOrderBy.Created,
 *         direction: Beehiiv.PostsListRequestDirection.Asc,
 *         hiddenFromFeed: Beehiiv.PostsListRequestHiddenFromFeed.All
 *     }
 */
export interface PostsListRequest {
    /**
     * Optional list of expandable objects.<br />`stats` - Returns statistics about the post(s)<br /> `free_web_content` - Returns the web HTML rendered to a free reader<br /> `free_email_content` - Returns the email HTML rendered to a free reader<br /> `free_rss_content` - Returns the RSS feed HTML<br /> `premium_web_content` - Returns the web HTML rendered to a premium reader<br /> `premium_email_content` - Returns the email HTML rendered to a premium reader
     */
    expand?: Beehiiv.PostsListRequestExpandItem | Beehiiv.PostsListRequestExpandItem[];
    /**
     * Optionally filter the results by audience
     */
    audience?: Beehiiv.PostsListRequestAudience;
    /**
     * Optionally filter the results by platform.<br />`web` - Posts only published to web.<br />`email` - Posts only published to email.<br />`both` - Posts published to email and web.<br />`all` - Does not restrict results by platform.
     */
    platform?: Beehiiv.PostsListRequestPlatform;
    /**
     * Optionally filter the results by the status of the post.<br />`draft` - not been scheduled.<br />`confirmed` - The post will be active after the `scheduled_at`.<br />`archived` - The post is no longer active.<br />`all` - Does not restrict results by status.
     */
    status?: Beehiiv.PostsListRequestStatus;
    /**
     * Optionally filter posts by content_tags. Adding a content tag will return any post with that content tag associated to it.<br />Example: Filtering for `content_tags: ["sales","closing"]` will return results of posts that have _either_ sales or closing content_tags.
     */
    contentTags?: string | string[];
    /**
     * A limit on the number of objects to be returned. The limit can range between 1 and 100, and the default is 10.
     */
    limit?: number;
    /**
     * Pagination returns the results in pages. Each page contains the number of results specified by the `limit` (default: 10).<br />If not specified, results 1-10 from page 1 will be returned.
     */
    page?: number;
    /**
     * The field that the results are sorted by. Defaults to created<br /> `created` - The time in which the post was first created.<br /> `publish_date` - The time the post was set to be published.<br /> `displayed_date` - The time displayed in place of the `publish_date`. If no `displayed_date` was set, it will default to the `publish_date`
     */
    orderBy?: Beehiiv.PostsListRequestOrderBy;
    /**
     * The direction that the results are sorted in. Defaults to asc<br /> `asc` - Ascending, sorts from smallest to largest.<br /> `desc` - Descending, sorts from largest to smallest.
     */
    direction?: Beehiiv.PostsListRequestDirection;
    /**
     * Optionally filter the results by the `hidden_from_feed` attribute of the post.<br />`all` - Does not restrict results by `hidden_from_feed`.<br />`true` - Only return posts hidden from the feed.<br />`false` - Only return posts that are visible on the feed.
     */
    hiddenFromFeed?: Beehiiv.PostsListRequestHiddenFromFeed;
}
