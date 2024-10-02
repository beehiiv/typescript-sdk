/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Beehiiv from "../../../index";

export interface BulkSubscriptionUpdatesGetResponseData {
    /** The ID of the update object */
    id?: string;
    /** The type of update (status or bulk) */
    type?: Beehiiv.BulkSubscriptionUpdatesGetResponseDataType;
    /** The parameters passed in for the update */
    params?: string;
    /** The status of the update */
    status?: Beehiiv.BulkSubscriptionUpdatesGetResponseDataStatus;
    /** The publication ID associated with this update */
    publicationId?: Beehiiv.PublicationId;
    /** If the job as a whole fails, this will detail the errors encountered */
    failureReason?: string;
    /** The timestamp of the job's completion */
    completed?: number;
    /** The timestamp of the job's creation */
    created?: number;
    /** The timestamp of the job's update */
    updated?: number;
    /** An array of errors encountered for individual updates within the job */
    errorLog?: string[];
}
