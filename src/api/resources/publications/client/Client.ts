/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as Beehiiv from "../../../index";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization/index";
import * as errors from "../../../../errors/index";

export declare namespace Publications {
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

export class Publications {
    constructor(protected readonly _options: Publications.Options) {}

    /**
     * Retrieve all publications associated with your API key.
     *
     * @param {Beehiiv.PublicationsListRequest} request
     * @param {Publications.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Beehiiv.BadRequestError}
     * @throws {@link Beehiiv.NotFoundError}
     * @throws {@link Beehiiv.TooManyRequestsError}
     * @throws {@link Beehiiv.InternalServerError}
     *
     * @example
     *     await client.publications.index()
     */
    public async index(
        request: Beehiiv.PublicationsListRequest = {},
        requestOptions?: Publications.RequestOptions
    ): Promise<Beehiiv.PublicationsListResponse> {
        const { expand, limit, page, direction, orderBy } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        if (expand != null) {
            if (Array.isArray(expand)) {
                _queryParams["expand"] = expand.map((item) => JSON.stringify(item));
            } else {
                _queryParams["expand"] = JSON.stringify(expand);
            }
        }

        if (limit != null) {
            _queryParams["limit"] = limit.toString();
        }

        if (page != null) {
            _queryParams["page"] = page.toString();
        }

        if (direction != null) {
            _queryParams["direction"] = direction;
        }

        if (orderBy != null) {
            _queryParams["order_by"] = orderBy;
        }

        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.BeehiivEnvironment.Default,
                "publications"
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@beehiiv/sdk",
                "X-Fern-SDK-Version": "0.1.1",
                "User-Agent": "@beehiiv/sdk/0.1.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.PublicationsListResponse.parseOrThrow(_response.body, {
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
     * Retrieve a single publication
     *
     * @param {Beehiiv.PublicationId} publicationId - The prefixed ID of the publication object
     * @param {Beehiiv.PublicationsGetRequest} request
     * @param {Publications.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Beehiiv.BadRequestError}
     * @throws {@link Beehiiv.NotFoundError}
     * @throws {@link Beehiiv.TooManyRequestsError}
     * @throws {@link Beehiiv.InternalServerError}
     *
     * @example
     *     await client.publications.show("pub_ad76629e-4a39-43ad-8055-0ee89dc6db15")
     */
    public async show(
        publicationId: Beehiiv.PublicationId,
        request: Beehiiv.PublicationsGetRequest = {},
        requestOptions?: Publications.RequestOptions
    ): Promise<Beehiiv.PublicationsGetResponse> {
        const { expand } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        if (expand != null) {
            if (Array.isArray(expand)) {
                _queryParams["expand"] = expand.map((item) => JSON.stringify(item));
            } else {
                _queryParams["expand"] = JSON.stringify(expand);
            }
        }

        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.BeehiivEnvironment.Default,
                `publications/${encodeURIComponent(serializers.PublicationId.jsonOrThrow(publicationId))}`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@beehiiv/sdk",
                "X-Fern-SDK-Version": "0.1.1",
                "User-Agent": "@beehiiv/sdk/0.1.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.PublicationsGetResponse.parseOrThrow(_response.body, {
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

    protected async _getAuthorizationHeader(): Promise<string> {
        return `Bearer ${await core.Supplier.get(this._options.token)}`;
    }
}
