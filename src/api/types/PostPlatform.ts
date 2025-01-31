/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * The platform that the post is or will be published to.
 */
export type PostPlatform = "web" | "email" | "both";

export const PostPlatform = {
    Web: "web",
    Email: "email",
    Both: "both",
} as const;
