/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * The style of the call to action.
 */
export type RssCtaStyle =
    | "CTA button"
    | "CTA link"
    | "Title as link"
    | "Thumbnail as link"
    | "Title and thumbnail as link";

export const RssCtaStyle = {
    CtaButton: "CTA button",
    CtaLink: "CTA link",
    TitleAsLink: "Title as link",
    ThumbnailAsLink: "Thumbnail as link",
    TitleAndThumbnailAsLink: "Title and thumbnail as link",
} as const;
