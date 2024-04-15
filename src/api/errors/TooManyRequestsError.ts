/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as errors from "../../errors";
import * as Beehiiv from "..";

export class TooManyRequestsError extends errors.BeehiivError {
    constructor(body: Beehiiv.Error_) {
        super({
            message: "TooManyRequestsError",
            statusCode: 429,
            body: body,
        });
        Object.setPrototypeOf(this, TooManyRequestsError.prototype);
    }
}