/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as Beehiiv from "../../../index";
import * as serializers from "../../../../serialization/index";
import urlJoin from "url-join";
import * as errors from "../../../../errors/index";

export declare namespace Posts {
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

export class Posts {
    constructor(protected readonly _options: Posts.Options) {}

    /**
     * Retrieve all posts belonging to a specific publication
     *
     * @param {Beehiiv.PublicationId} publicationId - The prefixed ID of the publication object
     * @param {Beehiiv.PostsListRequest} request
     * @param {Posts.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Beehiiv.BadRequestError}
     * @throws {@link Beehiiv.NotFoundError}
     * @throws {@link Beehiiv.TooManyRequestsError}
     * @throws {@link Beehiiv.InternalServerError}
     *
     * @example
     *     await client.posts.index("pub_00000000-0000-0000-0000-000000000000")
     */
    public async index(
        publicationId: Beehiiv.PublicationId,
        request: Beehiiv.PostsListRequest = {},
        requestOptions?: Posts.RequestOptions
    ): Promise<Beehiiv.PostsListResponse> {
        const { expand, audience, platform, status, contentTags, limit, page, orderBy, direction, hiddenFromFeed } =
            request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        if (expand != null) {
            if (Array.isArray(expand)) {
                _queryParams["expand"] = expand.map((item) => JSON.stringify(item));
            } else {
                _queryParams["expand"] = JSON.stringify(expand);
            }
        }

        if (audience != null) {
            _queryParams["audience"] = audience;
        }

        if (platform != null) {
            _queryParams["platform"] = platform;
        }

        if (status != null) {
            _queryParams["status"] = status;
        }

        if (contentTags != null) {
            _queryParams["content_tags[]"] = JSON.stringify(contentTags);
        }

        if (limit != null) {
            _queryParams["limit"] = limit.toString();
        }

        if (page != null) {
            _queryParams["page"] = page.toString();
        }

        if (orderBy != null) {
            _queryParams["order_by"] = orderBy;
        }

        if (direction != null) {
            _queryParams["direction"] = direction;
        }

        if (hiddenFromFeed != null) {
            _queryParams["hidden_from_feed"] = hiddenFromFeed;
        }

        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.BeehiivEnvironment.Default,
                `publications/${encodeURIComponent(serializers.PublicationId.jsonOrThrow(publicationId))}/posts`
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
            return serializers.PostsListResponse.parseOrThrow(_response.body, {
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
     * Retreive a single Post belonging to a specific publication
     *
     * @param {Beehiiv.PostId} postId - The prefixed ID of the post object
     * @param {Beehiiv.PublicationId} publicationId - The prefixed ID of the publication object
     * @param {Beehiiv.PostsGetRequest} request
     * @param {Posts.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Beehiiv.BadRequestError}
     * @throws {@link Beehiiv.NotFoundError}
     * @throws {@link Beehiiv.TooManyRequestsError}
     * @throws {@link Beehiiv.InternalServerError}
     *
     * @example
     *     await client.posts.show("post_00000000-0000-0000-0000-000000000000", "pub_00000000-0000-0000-0000-000000000000")
     */
    public async show(
        postId: Beehiiv.PostId,
        publicationId: Beehiiv.PublicationId,
        request: Beehiiv.PostsGetRequest = {},
        requestOptions?: Posts.RequestOptions
    ): Promise<Beehiiv.PostsGetResponse> {
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
                `publications/${encodeURIComponent(
                    serializers.PublicationId.jsonOrThrow(publicationId)
                )}/posts/${encodeURIComponent(serializers.PostId.jsonOrThrow(postId))}`
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
            return serializers.PostsGetResponse.parseOrThrow(_response.body, {
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
     * Delete or Archive a post. Any post that has been confirmed will have it's status changed to `archived`. Posts in the `draft` status will be permenantly deleted.
     *
     * @param {Beehiiv.PostId} postId - The prefixed ID of the post object
     * @param {Beehiiv.PublicationId} publicationId - The prefixed ID of the publication object
     * @param {Posts.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Beehiiv.BadRequestError}
     * @throws {@link Beehiiv.NotFoundError}
     * @throws {@link Beehiiv.TooManyRequestsError}
     * @throws {@link Beehiiv.InternalServerError}
     *
     * @example
     *     await client.posts.delete("post_00000000-0000-0000-0000-000000000000", "pub_00000000-0000-0000-0000-000000000000")
     */
    public async delete(
        postId: Beehiiv.PostId,
        publicationId: Beehiiv.PublicationId,
        requestOptions?: Posts.RequestOptions
    ): Promise<Beehiiv.PostsDeleteResponse> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.BeehiivEnvironment.Default,
                `publications/${encodeURIComponent(
                    serializers.PublicationId.jsonOrThrow(publicationId)
                )}/posts/${encodeURIComponent(serializers.PostId.jsonOrThrow(postId))}`
            ),
            method: "DELETE",
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
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.PostsDeleteResponse.parseOrThrow(_response.body, {
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
