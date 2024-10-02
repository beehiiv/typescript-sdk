/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Beehiiv from "../../../../api/index";
import * as core from "../../../../core";
import { EndpointId } from "../../ids/types/EndpointId";
import { WebhookEventType } from "./WebhookEventType";

export const Webhook: core.serialization.ObjectSchema<serializers.Webhook.Raw, Beehiiv.Webhook> =
    core.serialization.object({
        id: EndpointId,
        url: core.serialization.string(),
        created: core.serialization.number(),
        updated: core.serialization.number(),
        eventTypes: core.serialization.property("event_types", core.serialization.list(WebhookEventType)),
        description: core.serialization.string(),
    });

export declare namespace Webhook {
    interface Raw {
        id: EndpointId.Raw;
        url: string;
        created: number;
        updated: number;
        event_types: WebhookEventType.Raw[];
        description: string;
    }
}