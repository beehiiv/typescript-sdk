/**
 * This file was auto-generated by Fern from our API Definition.
 */

export type PostsListRequestStatus = "draft" | "confirmed" | "archived" | "all";

export const PostsListRequestStatus = {
    Draft: "draft",
    Confirmed: "confirmed",
    Archived: "archived",
    All: "all",
} as const;