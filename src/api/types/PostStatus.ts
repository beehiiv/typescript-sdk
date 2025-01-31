/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * The status of the post.<br>`draft` - not been scheduled.<br>`confirmed` - The post will be active after the `scheduled_at`.<br>`archived` - The post is no longer active.
 */
export type PostStatus = "draft" | "confirmed" | "archived";

export const PostStatus = {
    Draft: "draft",
    Confirmed: "confirmed",
    Archived: "archived",
} as const;
