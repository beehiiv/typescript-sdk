/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Beehiiv from "..";

export interface Publication {
    /** A unique prefixed id of the publication */
    id: string;
    /** The name of the publication */
    name: string;
    /** A boolean field indicating whether the referral program is active for this publication. */
    referralProgramEnabled: boolean;
    /** The time that the publication was created. Measured in seconds since the Unix epoch */
    created: number;
    stats?: Beehiiv.PublicationStats;
}
