/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as Beehiiv from "../../..";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization";
import * as errors from "../../../../errors";

export declare namespace Subscriptions {
    interface Options {
        environment?: core.Supplier<environments.BeehiivEnvironment | string>;
        token: core.Supplier<core.BearerToken>;
        fetcher?: core.FetchFunction;
    }

    interface RequestOptions {
        timeoutInSeconds?: number;
        maxRetries?: number;
    }
}

export class Subscriptions {
    constructor(protected readonly _options: Subscriptions.Options) {}

    /**
     * Retrieve all subscriptions belonging to a specific publication
     * @throws {@link Beehiiv.BadRequestError}
     * @throws {@link Beehiiv.NotFoundError}
     * @throws {@link Beehiiv.TooManyRequestsError}
     * @throws {@link Beehiiv.InternalServerError}
     *
     * @example
     *     await beehiiv.subscriptions.list("pub_00000000-0000-0000-0000-000000000000", {
     *         email: "clark@dailyplanet.com"
     *     })
     */
    public async list(
        publicationId: string,
        request: Beehiiv.SubscriptionsListRequest = {},
        requestOptions?: Subscriptions.RequestOptions
    ): Promise<Beehiiv.SubscriptionsListResponse> {
        const { expand, status, tier, limit, page, email, orderBy, direction } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        if (expand != null) {
            if (Array.isArray(expand)) {
                _queryParams["expand[]"] = expand.map((item) => item);
            } else {
                _queryParams["expand[]"] = expand;
            }
        }

        if (status != null) {
            _queryParams["status"] = status;
        }

        if (tier != null) {
            _queryParams["tier"] = tier;
        }

        if (limit != null) {
            _queryParams["limit"] = limit.toString();
        }

        if (page != null) {
            _queryParams["page"] = page.toString();
        }

        if (email != null) {
            _queryParams["email"] = email;
        }

        if (orderBy != null) {
            _queryParams["order_by"] = orderBy;
        }

        if (direction != null) {
            _queryParams["direction"] = direction;
        }

        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.BeehiivEnvironment.Default,
                `publications/${publicationId}/subscriptions`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "beehiiv",
                "X-Fern-SDK-Version": "0.1.4",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return await serializers.SubscriptionsListResponse.parseOrThrow(_response.body, {
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
                        await serializers.Error_.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 404:
                    throw new Beehiiv.NotFoundError(
                        await serializers.Error_.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 429:
                    throw new Beehiiv.TooManyRequestsError(
                        await serializers.Error_.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 500:
                    throw new Beehiiv.InternalServerError(
                        await serializers.Error_.parseOrThrow(_response.error.body, {
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
     * Create new subscriptions for a publication.
     * @throws {@link Beehiiv.BadRequestError}
     * @throws {@link Beehiiv.NotFoundError}
     * @throws {@link Beehiiv.TooManyRequestsError}
     * @throws {@link Beehiiv.InternalServerError}
     *
     * @example
     *     await beehiiv.subscriptions.create("pub_00000000-0000-0000-0000-000000000000", {
     *         email: "bruce.wayne@wayneenterprise.com",
     *         reactivateExisting: false,
     *         sendWelcomeEmail: false,
     *         utmSource: "WayneEnterprise",
     *         utmMedium: "organic",
     *         utmCampaign: "fall_2022_promotion",
     *         referringSite: "www.wayneenterprise.com/blog",
     *         customFields: [{
     *                 name: "First Name",
     *                 value: "Bruce"
     *             }, {
     *                 name: "Last Name",
     *                 value: "Wayne"
     *             }],
     *         automationIds: ["aut_00000000-0000-0000-0000-000000000000"]
     *     })
     */
    public async create(
        publicationId: string,
        request: Beehiiv.SubscriptionsCreateRequest,
        requestOptions?: Subscriptions.RequestOptions
    ): Promise<Beehiiv.SubscriptionsCreateResponse> {
        const { undefined, ..._body } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        if (undefined != null) {
            _queryParams["undefined"] = undefined;
        }

        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.BeehiivEnvironment.Default,
                `publications/${publicationId}/subscriptions`
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "beehiiv",
                "X-Fern-SDK-Version": "0.1.4",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            body: await serializers.SubscriptionsCreateRequest.jsonOrThrow(_body, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return await serializers.SubscriptionsCreateResponse.parseOrThrow(_response.body, {
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
                        await serializers.Error_.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 404:
                    throw new Beehiiv.NotFoundError(
                        await serializers.Error_.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 429:
                    throw new Beehiiv.TooManyRequestsError(
                        await serializers.Error_.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 500:
                    throw new Beehiiv.InternalServerError(
                        await serializers.Error_.parseOrThrow(_response.error.body, {
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
     * Bulk update subscriptions' field values (standard fields and custom fields)
     * @throws {@link Beehiiv.BadRequestError}
     * @throws {@link Beehiiv.NotFoundError}
     * @throws {@link Beehiiv.TooManyRequestsError}
     * @throws {@link Beehiiv.InternalServerError}
     *
     * @example
     *     await beehiiv.subscriptions.put("publicationId")
     */
    public async put(
        publicationId: string,
        request: Beehiiv.SubscriptionsPutRequest = {},
        requestOptions?: Subscriptions.RequestOptions
    ): Promise<Beehiiv.SubscriptionsPutResponse> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.BeehiivEnvironment.Default,
                `publications/${publicationId}/subscriptions/bulk_actions`
            ),
            method: "PUT",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "beehiiv",
                "X-Fern-SDK-Version": "0.1.4",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            body: await serializers.SubscriptionsPutRequest.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return await serializers.SubscriptionsPutResponse.parseOrThrow(_response.body, {
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
                        await serializers.Error_.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 404:
                    throw new Beehiiv.NotFoundError(
                        await serializers.Error_.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 429:
                    throw new Beehiiv.TooManyRequestsError(
                        await serializers.Error_.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 500:
                    throw new Beehiiv.InternalServerError(
                        await serializers.Error_.parseOrThrow(_response.error.body, {
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
     * Bulk update subscriptions' field values (standard fields and custom fields)
     * @throws {@link Beehiiv.BadRequestError}
     * @throws {@link Beehiiv.NotFoundError}
     * @throws {@link Beehiiv.TooManyRequestsError}
     * @throws {@link Beehiiv.InternalServerError}
     *
     * @example
     *     await beehiiv.subscriptions.patch("publicationId")
     */
    public async patch(
        publicationId: string,
        request: Beehiiv.SubscriptionsPatchRequest = {},
        requestOptions?: Subscriptions.RequestOptions
    ): Promise<Beehiiv.SubscriptionsPatchResponse> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.BeehiivEnvironment.Default,
                `publications/${publicationId}/subscriptions/bulk_actions`
            ),
            method: "PATCH",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "beehiiv",
                "X-Fern-SDK-Version": "0.1.4",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            body: await serializers.SubscriptionsPatchRequest.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return await serializers.SubscriptionsPatchResponse.parseOrThrow(_response.body, {
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
                        await serializers.Error_.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 404:
                    throw new Beehiiv.NotFoundError(
                        await serializers.Error_.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 429:
                    throw new Beehiiv.TooManyRequestsError(
                        await serializers.Error_.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 500:
                    throw new Beehiiv.InternalServerError(
                        await serializers.Error_.parseOrThrow(_response.error.body, {
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
     * Retrieve a single subscription belonging to a specific email address in a specific publication
     * @throws {@link Beehiiv.BadRequestError}
     * @throws {@link Beehiiv.NotFoundError}
     * @throws {@link Beehiiv.TooManyRequestsError}
     * @throws {@link Beehiiv.InternalServerError}
     *
     * @example
     *     await beehiiv.subscriptions.get("pub_00000000-0000-0000-0000-000000000000", "work@example.com")
     */
    public async get(
        publicationId: string,
        email: string,
        request: Beehiiv.SubscriptionsGetRequest = {},
        requestOptions?: Subscriptions.RequestOptions
    ): Promise<Beehiiv.SubscriptionsGetResponse> {
        const { expand } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        if (expand != null) {
            if (Array.isArray(expand)) {
                _queryParams["expand[]"] = expand.map((item) => item);
            } else {
                _queryParams["expand[]"] = expand;
            }
        }

        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.BeehiivEnvironment.Default,
                `publications/${publicationId}/subscriptions/by_email/${email}`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "beehiiv",
                "X-Fern-SDK-Version": "0.1.4",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return await serializers.SubscriptionsGetResponse.parseOrThrow(_response.body, {
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
                        await serializers.Error_.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 404:
                    throw new Beehiiv.NotFoundError(
                        await serializers.Error_.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 429:
                    throw new Beehiiv.TooManyRequestsError(
                        await serializers.Error_.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 500:
                    throw new Beehiiv.InternalServerError(
                        await serializers.Error_.parseOrThrow(_response.error.body, {
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
     * Delete a subscription.
     *
     * **This cannot be undone** All data associated with the subscription will also be deleted. We recommend unsubscribing when possible instead of deleting.
     *
     * If a premium subscription is deleted they will no longer be billed.
     * @throws {@link Beehiiv.BadRequestError}
     * @throws {@link Beehiiv.NotFoundError}
     * @throws {@link Beehiiv.TooManyRequestsError}
     * @throws {@link Beehiiv.InternalServerError}
     *
     * @example
     *     await beehiiv.subscriptions.delete("sub_00000000-0000-0000-0000-000000000000", "pub_00000000-0000-0000-0000-000000000000")
     */
    public async delete(
        subscriptionId: string,
        publicationId: string,
        requestOptions?: Subscriptions.RequestOptions
    ): Promise<Record<string, unknown>> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.BeehiivEnvironment.Default,
                `publications/${publicationId}/subscriptions/${subscriptionId}`
            ),
            method: "DELETE",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "beehiiv",
                "X-Fern-SDK-Version": "0.1.4",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return await serializers.subscriptions.delete.Response.parseOrThrow(_response.body, {
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
                        await serializers.Error_.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 404:
                    throw new Beehiiv.NotFoundError(
                        await serializers.Error_.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 429:
                    throw new Beehiiv.TooManyRequestsError(
                        await serializers.Error_.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 500:
                    throw new Beehiiv.InternalServerError(
                        await serializers.Error_.parseOrThrow(_response.error.body, {
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

    protected async _getAuthorizationHeader() {
        return `Bearer ${await core.Supplier.get(this._options.token)}`;
    }
}
