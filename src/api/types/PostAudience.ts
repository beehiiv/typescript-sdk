/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * The audience that the post is available to on the web. Only applicable if the platform is `web` or `both`.
 */
export type PostAudience = "free" | "premium" | "both";

export const PostAudience = {
    Free: "free",
    Premium: "premium",
    Both: "both",
} as const;