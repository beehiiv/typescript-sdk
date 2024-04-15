/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "./environments";
import * as core from "./core";
import { Publications } from "./api/resources/publications/client/Client";
import { Posts } from "./api/resources/posts/client/Client";
import { Subscriptions } from "./api/resources/subscriptions/client/Client";
import { Segments } from "./api/resources/segments/client/Client";
import { EmailBlasts } from "./api/resources/emailBlasts/client/Client";
import { ReferralProgram } from "./api/resources/referralProgram/client/Client";
import { CustomFields } from "./api/resources/customFields/client/Client";
import { BulkSubscriptionUpdates } from "./api/resources/bulkSubscriptionUpdates/client/Client";
import { AutomationJourneys } from "./api/resources/automationJourneys/client/Client";
import { Automations } from "./api/resources/automations/client/Client";
import { SubscriptionTags } from "./api/resources/subscriptionTags/client/Client";

export declare namespace BeehiivClient {
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

export class BeehiivClient {
    constructor(protected readonly _options: BeehiivClient.Options) {}

    protected _publications: Publications | undefined;

    public get publications(): Publications {
        return (this._publications ??= new Publications(this._options));
    }

    protected _posts: Posts | undefined;

    public get posts(): Posts {
        return (this._posts ??= new Posts(this._options));
    }

    protected _subscriptions: Subscriptions | undefined;

    public get subscriptions(): Subscriptions {
        return (this._subscriptions ??= new Subscriptions(this._options));
    }

    protected _segments: Segments | undefined;

    public get segments(): Segments {
        return (this._segments ??= new Segments(this._options));
    }

    protected _emailBlasts: EmailBlasts | undefined;

    public get emailBlasts(): EmailBlasts {
        return (this._emailBlasts ??= new EmailBlasts(this._options));
    }

    protected _referralProgram: ReferralProgram | undefined;

    public get referralProgram(): ReferralProgram {
        return (this._referralProgram ??= new ReferralProgram(this._options));
    }

    protected _customFields: CustomFields | undefined;

    public get customFields(): CustomFields {
        return (this._customFields ??= new CustomFields(this._options));
    }

    protected _bulkSubscriptionUpdates: BulkSubscriptionUpdates | undefined;

    public get bulkSubscriptionUpdates(): BulkSubscriptionUpdates {
        return (this._bulkSubscriptionUpdates ??= new BulkSubscriptionUpdates(this._options));
    }

    protected _automationJourneys: AutomationJourneys | undefined;

    public get automationJourneys(): AutomationJourneys {
        return (this._automationJourneys ??= new AutomationJourneys(this._options));
    }

    protected _automations: Automations | undefined;

    public get automations(): Automations {
        return (this._automations ??= new Automations(this._options));
    }

    protected _subscriptionTags: SubscriptionTags | undefined;

    public get subscriptionTags(): SubscriptionTags {
        return (this._subscriptionTags ??= new SubscriptionTags(this._options));
    }
}
