/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as Beehiiv from "../../..";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization";
import * as errors from "../../../../errors";

export declare namespace CustomFields {
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

export class CustomFields {
    constructor(protected readonly _options: CustomFields.Options) {}

    /**
     * View a specific custom field on a publication
     * @throws {@link Beehiiv.BadRequestError}
     * @throws {@link Beehiiv.NotFoundError}
     * @throws {@link Beehiiv.TooManyRequestsError}
     * @throws {@link Beehiiv.InternalServerError}
     *
     * @example
     *     await beehiiv.customFields.get("publicationId", "id")
     */
    public async get(
        publicationId: string,
        id: string,
        requestOptions?: CustomFields.RequestOptions
    ): Promise<Beehiiv.CustomFieldsGetResponse> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.BeehiivEnvironment.Default,
                `publications/${publicationId}/custom_fields/${id}`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "",
                "X-Fern-SDK-Version": "0.1.2",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return await serializers.CustomFieldsGetResponse.parseOrThrow(_response.body, {
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
     * Create a custom field on a publication, for use in subscriptions
     * @throws {@link Beehiiv.BadRequestError}
     * @throws {@link Beehiiv.NotFoundError}
     * @throws {@link Beehiiv.TooManyRequestsError}
     * @throws {@link Beehiiv.InternalServerError}
     *
     * @example
     *     await beehiiv.customFields.create("publicationId", {
     *         kind: Beehiiv.CustomFieldsCreateRequestKind.String,
     *         display: "display"
     *     })
     */
    public async create(
        publicationId: string,
        request: Beehiiv.CustomFieldsCreateRequest,
        requestOptions?: CustomFields.RequestOptions
    ): Promise<Beehiiv.CustomFieldsCreateResponse> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.BeehiivEnvironment.Default,
                `publications/${publicationId}/custom_fields`
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "",
                "X-Fern-SDK-Version": "0.1.2",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            body: await serializers.CustomFieldsCreateRequest.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return await serializers.CustomFieldsCreateResponse.parseOrThrow(_response.body, {
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
     * Update a custom field on a publication
     * @throws {@link Beehiiv.BadRequestError}
     * @throws {@link Beehiiv.NotFoundError}
     * @throws {@link Beehiiv.TooManyRequestsError}
     * @throws {@link Beehiiv.InternalServerError}
     *
     * @example
     *     await beehiiv.customFields.put("publicationId", "id")
     */
    public async put(
        publicationId: string,
        id: string,
        request: Beehiiv.CustomFieldsPutRequest = {},
        requestOptions?: CustomFields.RequestOptions
    ): Promise<Beehiiv.CustomFieldsPutResponse> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.BeehiivEnvironment.Default,
                `publications/${publicationId}/custom_fields/${id}`
            ),
            method: "PUT",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "",
                "X-Fern-SDK-Version": "0.1.2",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            body: await serializers.CustomFieldsPutRequest.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return await serializers.CustomFieldsPutResponse.parseOrThrow(_response.body, {
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
     * Delete a custom field from a publication
     * @throws {@link Beehiiv.BadRequestError}
     * @throws {@link Beehiiv.NotFoundError}
     * @throws {@link Beehiiv.TooManyRequestsError}
     * @throws {@link Beehiiv.InternalServerError}
     *
     * @example
     *     await beehiiv.customFields.delete("publicationId", "id")
     */
    public async delete(
        publicationId: string,
        id: string,
        requestOptions?: CustomFields.RequestOptions
    ): Promise<Beehiiv.CustomFieldsDeleteResponse> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.BeehiivEnvironment.Default,
                `publications/${publicationId}/custom_fields/${id}`
            ),
            method: "DELETE",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "",
                "X-Fern-SDK-Version": "0.1.2",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return await serializers.CustomFieldsDeleteResponse.parseOrThrow(_response.body, {
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
     * Update a custom field on a publication
     * @throws {@link Beehiiv.BadRequestError}
     * @throws {@link Beehiiv.NotFoundError}
     * @throws {@link Beehiiv.TooManyRequestsError}
     * @throws {@link Beehiiv.InternalServerError}
     *
     * @example
     *     await beehiiv.customFields.patch("publicationId", "id")
     */
    public async patch(
        publicationId: string,
        id: string,
        request: Beehiiv.CustomFieldsPatchRequest = {},
        requestOptions?: CustomFields.RequestOptions
    ): Promise<Beehiiv.CustomFieldsPatchResponse> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.BeehiivEnvironment.Default,
                `publications/${publicationId}/custom_fields/${id}`
            ),
            method: "PATCH",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "",
                "X-Fern-SDK-Version": "0.1.2",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            body: await serializers.CustomFieldsPatchRequest.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return await serializers.CustomFieldsPatchResponse.parseOrThrow(_response.body, {
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
