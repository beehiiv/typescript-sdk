/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as Beehiiv from "../../../index";
import * as serializers from "../../../../serialization/index";
import urlJoin from "url-join";
import * as errors from "../../../../errors/index";

export declare namespace BulkSubscriptionUpdates {
    interface Options {
        environment?: core.Supplier<environments.BeehiivEnvironment | string>;
        token: core.Supplier<core.BearerToken>;
        fetcher?: core.FetchFunction;
    }

    interface RequestOptions {
        /** The maximum time to wait for a response in seconds. */
        timeoutInSeconds?: number;
        /** The number of times to retry the request. Defaults to 2. */
        maxRetries?: number;
        /** A hook to abort the request. */
        abortSignal?: AbortSignal;
    }
}

export class BulkSubscriptionUpdates {
    constructor(protected readonly _options: BulkSubscriptionUpdates.Options) {}

    /**
     * Returns a list of Subscription Update objects for a publication.
     *
     * @param {Beehiiv.PublicationId} publicationId - The prefixed ID of the publication object
     * @param {BulkSubscriptionUpdates.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Beehiiv.BadRequestError}
     * @throws {@link Beehiiv.NotFoundError}
     * @throws {@link Beehiiv.TooManyRequestsError}
     * @throws {@link Beehiiv.InternalServerError}
     *
     * @example
     *     await client.bulkSubscriptionUpdates.index("publicationId")
     */
    public async index(
        publicationId: Beehiiv.PublicationId,
        requestOptions?: BulkSubscriptionUpdates.RequestOptions
    ): Promise<Beehiiv.BulkSubscriptionUpdatesListResponse> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.BeehiivEnvironment.Default,
                `publications/${encodeURIComponent(
                    serializers.PublicationId.jsonOrThrow(publicationId)
                )}/bulk_subscription_updates`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@beehiiv/sdk",
                "X-Fern-SDK-Version": "0.1.6",
                "User-Agent": "@beehiiv/sdk/0.1.6",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.BulkSubscriptionUpdatesListResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                skipValidation: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Beehiiv.BadRequestError(
                        serializers.Error_.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 404:
                    throw new Beehiiv.NotFoundError(
                        serializers.Error_.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 429:
                    throw new Beehiiv.TooManyRequestsError(
                        serializers.Error_.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 500:
                    throw new Beehiiv.InternalServerError(
                        serializers.Error_.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                default:
                    throw new errors.BeehiivError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.BeehiivError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.BeehiivTimeoutError();
            case "unknown":
                throw new errors.BeehiivError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Returns a single Subscription Update object for a publication.
     *
     * @param {Beehiiv.PublicationId} publicationId - The prefixed ID of the publication object
     * @param {string} id - The ID of the Subscription Update object
     * @param {BulkSubscriptionUpdates.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Beehiiv.BadRequestError}
     * @throws {@link Beehiiv.NotFoundError}
     * @throws {@link Beehiiv.TooManyRequestsError}
     * @throws {@link Beehiiv.InternalServerError}
     *
     * @example
     *     await client.bulkSubscriptionUpdates.show("publicationId", "id")
     */
    public async show(
        publicationId: Beehiiv.PublicationId,
        id: string,
        requestOptions?: BulkSubscriptionUpdates.RequestOptions
    ): Promise<Beehiiv.BulkSubscriptionUpdatesGetResponse> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.BeehiivEnvironment.Default,
                `publications/${encodeURIComponent(
                    serializers.PublicationId.jsonOrThrow(publicationId)
                )}/bulk_subscription_updates/${encodeURIComponent(id)}`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@beehiiv/sdk",
                "X-Fern-SDK-Version": "0.1.6",
                "User-Agent": "@beehiiv/sdk/0.1.6",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.BulkSubscriptionUpdatesGetResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                skipValidation: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Beehiiv.BadRequestError(
                        serializers.Error_.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 404:
                    throw new Beehiiv.NotFoundError(
                        serializers.Error_.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 429:
                    throw new Beehiiv.TooManyRequestsError(
                        serializers.Error_.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 500:
                    throw new Beehiiv.InternalServerError(
                        serializers.Error_.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                default:
                    throw new errors.BeehiivError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.BeehiivError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.BeehiivTimeoutError();
            case "unknown":
                throw new errors.BeehiivError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Bulk update multiple subscriptions fields, including status, custom fields, and tiers.
     *
     * @param {Beehiiv.PublicationId} publicationId - The prefixed ID of the publication object
     * @param {Beehiiv.BulkSubscriptionsPutRequest} request
     * @param {BulkSubscriptionUpdates.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Beehiiv.BadRequestError}
     * @throws {@link Beehiiv.NotFoundError}
     * @throws {@link Beehiiv.TooManyRequestsError}
     * @throws {@link Beehiiv.InternalServerError}
     *
     * @example
     *     await client.bulkSubscriptionUpdates.put("publicationId", {
     *         subscriptions: [{
     *                 subscriptionId: "sub_1234-5678-9012-3456-7890",
     *                 tier: "premium",
     *                 stripeCustomerId: "cus_1234567890",
     *                 unsubscribe: false,
     *                 customFields: [{
     *                         name: "custom_field_name",
     *                         value: "custom_field_value"
     *                     }, {
     *                         name: "custom_field_name_2",
     *                         value: "custom_field_value_2"
     *                     }]
     *             }, {
     *                 subscriptionId: "sub_9876-5432-1098-7654-3210",
     *                 tier: "free",
     *                 stripeCustomerId: "cus_1234567890",
     *                 unsubscribe: true,
     *                 customFields: [{
     *                         name: "custom_field_name_3",
     *                         value: "custom_field_value_3"
     *                     }, {
     *                         name: "custom_field_name_4",
     *                         value: "custom_field_value_4"
     *                     }]
     *             }]
     *     })
     */
    public async put(
        publicationId: Beehiiv.PublicationId,
        request: Beehiiv.BulkSubscriptionsPutRequest = {},
        requestOptions?: BulkSubscriptionUpdates.RequestOptions
    ): Promise<Beehiiv.SubscriptionsPatchResponse> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.BeehiivEnvironment.Default,
                `publications/${encodeURIComponent(
                    serializers.PublicationId.jsonOrThrow(publicationId)
                )}/subscriptions/bulk_actions`
            ),
            method: "PUT",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@beehiiv/sdk",
                "X-Fern-SDK-Version": "0.1.6",
                "User-Agent": "@beehiiv/sdk/0.1.6",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.BulkSubscriptionsPutRequest.jsonOrThrow(request, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.SubscriptionsPatchResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                skipValidation: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Beehiiv.BadRequestError(
                        serializers.Error_.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 404:
                    throw new Beehiiv.NotFoundError(
                        serializers.Error_.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 429:
                    throw new Beehiiv.TooManyRequestsError(
                        serializers.Error_.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 500:
                    throw new Beehiiv.InternalServerError(
                        serializers.Error_.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                default:
                    throw new errors.BeehiivError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.BeehiivError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.BeehiivTimeoutError();
            case "unknown":
                throw new errors.BeehiivError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Bulk update multiple subscriptions fields, including status, custom fields, and tiers.
     *
     * @param {Beehiiv.PublicationId} publicationId - The prefixed ID of the publication object
     * @param {Beehiiv.BulkSubscriptionsPatchRequest} request
     * @param {BulkSubscriptionUpdates.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Beehiiv.BadRequestError}
     * @throws {@link Beehiiv.NotFoundError}
     * @throws {@link Beehiiv.TooManyRequestsError}
     * @throws {@link Beehiiv.InternalServerError}
     *
     * @example
     *     await client.bulkSubscriptionUpdates.patch("publicationId", {
     *         subscriptions: [{
     *                 subscriptionId: "sub_1234-5678-9012-3456-7890",
     *                 tier: "premium",
     *                 stripeCustomerId: "cus_1234567890",
     *                 unsubscribe: false,
     *                 customFields: [{
     *                         name: "custom_field_name",
     *                         value: "custom_field_value"
     *                     }, {
     *                         name: "custom_field_name_2",
     *                         value: "custom_field_value_2"
     *                     }]
     *             }, {
     *                 subscriptionId: "sub_9876-5432-1098-7654-3210",
     *                 tier: "free",
     *                 stripeCustomerId: "cus_1234567890",
     *                 unsubscribe: true,
     *                 customFields: [{
     *                         name: "custom_field_name_3",
     *                         value: "custom_field_value_3"
     *                     }, {
     *                         name: "custom_field_name_4",
     *                         value: "custom_field_value_4"
     *                     }]
     *             }]
     *     })
     */
    public async patch(
        publicationId: Beehiiv.PublicationId,
        request: Beehiiv.BulkSubscriptionsPatchRequest = {},
        requestOptions?: BulkSubscriptionUpdates.RequestOptions
    ): Promise<Beehiiv.SubscriptionsPatchResponse> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.BeehiivEnvironment.Default,
                `publications/${encodeURIComponent(
                    serializers.PublicationId.jsonOrThrow(publicationId)
                )}/subscriptions/bulk_actions`
            ),
            method: "PATCH",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@beehiiv/sdk",
                "X-Fern-SDK-Version": "0.1.6",
                "User-Agent": "@beehiiv/sdk/0.1.6",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.BulkSubscriptionsPatchRequest.jsonOrThrow(request, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.SubscriptionsPatchResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                skipValidation: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Beehiiv.BadRequestError(
                        serializers.Error_.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 404:
                    throw new Beehiiv.NotFoundError(
                        serializers.Error_.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 429:
                    throw new Beehiiv.TooManyRequestsError(
                        serializers.Error_.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 500:
                    throw new Beehiiv.InternalServerError(
                        serializers.Error_.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                default:
                    throw new errors.BeehiivError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.BeehiivError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.BeehiivTimeoutError();
            case "unknown":
                throw new errors.BeehiivError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Bulk update subscriptions' status.
     *
     * @param {Beehiiv.PublicationId} publicationId - The prefixed ID of the publication object
     * @param {Beehiiv.BulkSubscriptionsStatusPutRequest} request
     * @param {BulkSubscriptionUpdates.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.bulkSubscriptionUpdates.putStatus("publicationId", {
     *         subscriptionIds: ["sub_1234-5678-9012-3456-7890", "sub_9876-5432-1098-7654-3210"],
     *         newStatus: "active"
     *     })
     */
    public async putStatus(
        publicationId: Beehiiv.PublicationId,
        request: Beehiiv.BulkSubscriptionsStatusPutRequest,
        requestOptions?: BulkSubscriptionUpdates.RequestOptions
    ): Promise<void> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.BeehiivEnvironment.Default,
                `publications/${encodeURIComponent(serializers.PublicationId.jsonOrThrow(publicationId))}/subscriptions`
            ),
            method: "PUT",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@beehiiv/sdk",
                "X-Fern-SDK-Version": "0.1.6",
                "User-Agent": "@beehiiv/sdk/0.1.6",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.BulkSubscriptionsStatusPutRequest.jsonOrThrow(request, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return;
        }

        if (_response.error.reason === "status-code") {
            throw new errors.BeehiivError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.BeehiivError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.BeehiivTimeoutError();
            case "unknown":
                throw new errors.BeehiivError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Bulk update subscriptions' status.
     *
     * @param {Beehiiv.PublicationId} publicationId - The prefixed ID of the publication object
     * @param {Beehiiv.BulkSubscriptionsStatusPatchRequest} request
     * @param {BulkSubscriptionUpdates.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.bulkSubscriptionUpdates.patchStatus("publicationId", {
     *         subscriptionIds: ["sub_1234-5678-9012-3456-7890", "sub_9876-5432-1098-7654-3210"],
     *         newStatus: "active"
     *     })
     */
    public async patchStatus(
        publicationId: Beehiiv.PublicationId,
        request: Beehiiv.BulkSubscriptionsStatusPatchRequest,
        requestOptions?: BulkSubscriptionUpdates.RequestOptions
    ): Promise<void> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.BeehiivEnvironment.Default,
                `publications/${encodeURIComponent(serializers.PublicationId.jsonOrThrow(publicationId))}/subscriptions`
            ),
            method: "PATCH",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@beehiiv/sdk",
                "X-Fern-SDK-Version": "0.1.6",
                "User-Agent": "@beehiiv/sdk/0.1.6",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.BulkSubscriptionsStatusPatchRequest.jsonOrThrow(request, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return;
        }

        if (_response.error.reason === "status-code") {
            throw new errors.BeehiivError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.BeehiivError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.BeehiivTimeoutError();
            case "unknown":
                throw new errors.BeehiivError({
                    message: _response.error.errorMessage,
                });
        }
    }

    protected async _getAuthorizationHeader(): Promise<string> {
        return `Bearer ${await core.Supplier.get(this._options.token)}`;
    }
}
