/**
 * This file was auto-generated by Fern from our API Definition.
 */

export type PostsListRequestExpandItem =
    /**
     * Returns statistics about the post(s). */
    | "stats"
    /**
     * Returns the web HTML rendered to a free reader. */
    | "free_web_content"
    /**
     * Returns the email HTML rendered to a free reader. */
    | "free_email_content"
    /**
     * Returns the RSS feed HTML. */
    | "free_rss_content"
    /**
     * Returns the web HTML rendered to a premium reader. */
    | "premium_web_content"
    /**
     * Returns the email HTML rendered to a premium reader. */
    | "premium_email_content";

export const PostsListRequestExpandItem = {
    Stats: "stats",
    FreeWebContent: "free_web_content",
    FreeEmailContent: "free_email_content",
    FreeRssContent: "free_rss_content",
    PremiumWebContent: "premium_web_content",
    PremiumEmailContent: "premium_email_content",
} as const;
