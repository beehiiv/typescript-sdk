# Reference

## Automation Journeys

<details><summary><code>client.automationJourneys.<a href="/src/api/resources/automationJourneys/client/Client.ts">create</a>(publicationId, automationId, { ...params }) -> Beehiiv.AutomationJourneysResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Add an existing subscription to an automation flow. Requires the automation to have an active _Add by API_ trigger. The specified `email` or `subscription_id` will be matched against your existing subscribers. If an existing subscriber is found, they will be enrolled immediately.<br><br>
Looking to enroll new subscribers? Use the **[Create Subscription](/api-reference/subscriptions/create)** endpoint instead and specify the `automation_ids` param.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.automationJourneys.create(
    "pub_00000000-0000-0000-0000-000000000000",
    "aut_00000000-0000-0000-0000-000000000000",
    {
        email: "test@example.com",
        doubleOptOverride: "on",
    }
);
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**publicationId:** `Beehiiv.PublicationId` — The prefixed ID of the publication object

</dd>
</dl>

<dl>
<dd>

**automationId:** `Beehiiv.AutomationId` — The prefixed ID of the automation object

</dd>
</dl>

<dl>
<dd>

**request:** `Beehiiv.AutomationJourneysCreateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AutomationJourneys.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.automationJourneys.<a href="/src/api/resources/automationJourneys/client/Client.ts">index</a>(publicationId, automationId) -> Beehiiv.AutomationJourneysIndexResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve a list of automation journeys that have occurred within a specific automation.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.automationJourneys.index(
    "pub_00000000-0000-0000-0000-000000000000",
    "aut_00000000-0000-0000-0000-000000000000"
);
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**publicationId:** `Beehiiv.PublicationId` — The prefixed ID of the publication object

</dd>
</dl>

<dl>
<dd>

**automationId:** `Beehiiv.AutomationId` — The prefixed ID of the automation object

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AutomationJourneys.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.automationJourneys.<a href="/src/api/resources/automationJourneys/client/Client.ts">show</a>(publicationId, automationId, automationJourneyId) -> Beehiiv.AutomationJourneysResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve a single automation journey by ID.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.automationJourneys.show(
    "pub_00000000-0000-0000-0000-000000000000",
    "aut_00000000-0000-0000-0000-000000000000",
    "aj_00000000-0000-0000-0000-000000000000"
);
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**publicationId:** `Beehiiv.PublicationId` — The prefixed ID of the publication object

</dd>
</dl>

<dl>
<dd>

**automationId:** `Beehiiv.AutomationId` — The prefixed ID of the automation object

</dd>
</dl>

<dl>
<dd>

**automationJourneyId:** `Beehiiv.AutomationJourneyId` — The prefixed automation journey id

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AutomationJourneys.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Automations

<details><summary><code>client.automations.<a href="/src/api/resources/automations/client/Client.ts">index</a>(publicationId, { ...params }) -> Beehiiv.AutomationsListResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.automations.index("pub_00000000-0000-0000-0000-000000000000");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**publicationId:** `Beehiiv.PublicationId` — The prefixed ID of the publication object

</dd>
</dl>

<dl>
<dd>

**request:** `Beehiiv.AutomationsListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Automations.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.automations.<a href="/src/api/resources/automations/client/Client.ts">show</a>(publicationId, automationId) -> Beehiiv.AutomationsGetResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.automations.show("pub_00000000-0000-0000-0000-000000000000", "aut_00000000-0000-0000-0000-000000000000");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**publicationId:** `Beehiiv.PublicationId` — The prefixed ID of the publication object

</dd>
</dl>

<dl>
<dd>

**automationId:** `Beehiiv.AutomationId` — The prefixed ID of the automation object

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Automations.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Bulk Subscription Updates

<details><summary><code>client.bulkSubscriptionUpdates.<a href="/src/api/resources/bulkSubscriptionUpdates/client/Client.ts">index</a>(publicationId) -> Beehiiv.BulkSubscriptionUpdatesListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of Subscription Update objects for a publication.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.bulkSubscriptionUpdates.index("publicationId");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**publicationId:** `Beehiiv.PublicationId` — The prefixed ID of the publication object

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BulkSubscriptionUpdates.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.bulkSubscriptionUpdates.<a href="/src/api/resources/bulkSubscriptionUpdates/client/Client.ts">show</a>(publicationId, id) -> Beehiiv.BulkSubscriptionUpdatesGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a single Subscription Update object for a publication.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.bulkSubscriptionUpdates.show("publicationId", "id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**publicationId:** `Beehiiv.PublicationId` — The prefixed ID of the publication object

</dd>
</dl>

<dl>
<dd>

**id:** `string` — The ID of the Subscription Update object

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BulkSubscriptionUpdates.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.bulkSubscriptionUpdates.<a href="/src/api/resources/bulkSubscriptionUpdates/client/Client.ts">put</a>(publicationId, { ...params }) -> Beehiiv.SubscriptionsPatchResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Bulk update multiple subscriptions fields, including status, custom fields, and tiers.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.bulkSubscriptionUpdates.put("publicationId", {
    subscriptions: [
        {
            subscriptionId: "sub_1234-5678-9012-3456-7890",
            tier: "premium",
            stripeCustomerId: "cus_1234567890",
            unsubscribe: false,
            customFields: [
                {
                    name: "custom_field_name",
                    value: "custom_field_value",
                },
                {
                    name: "custom_field_name_2",
                    value: "custom_field_value_2",
                },
            ],
        },
        {
            subscriptionId: "sub_9876-5432-1098-7654-3210",
            tier: "free",
            stripeCustomerId: "cus_1234567890",
            unsubscribe: true,
            customFields: [
                {
                    name: "custom_field_name_3",
                    value: "custom_field_value_3",
                },
                {
                    name: "custom_field_name_4",
                    value: "custom_field_value_4",
                },
            ],
        },
    ],
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**publicationId:** `Beehiiv.PublicationId` — The prefixed ID of the publication object

</dd>
</dl>

<dl>
<dd>

**request:** `Beehiiv.BulkSubscriptionsPutRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BulkSubscriptionUpdates.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.bulkSubscriptionUpdates.<a href="/src/api/resources/bulkSubscriptionUpdates/client/Client.ts">patch</a>(publicationId, { ...params }) -> Beehiiv.SubscriptionsPatchResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Bulk update multiple subscriptions fields, including status, custom fields, and tiers.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.bulkSubscriptionUpdates.patch("publicationId", {
    subscriptions: [
        {
            subscriptionId: "sub_1234-5678-9012-3456-7890",
            tier: "premium",
            stripeCustomerId: "cus_1234567890",
            unsubscribe: false,
            customFields: [
                {
                    name: "custom_field_name",
                    value: "custom_field_value",
                },
                {
                    name: "custom_field_name_2",
                    value: "custom_field_value_2",
                },
            ],
        },
        {
            subscriptionId: "sub_9876-5432-1098-7654-3210",
            tier: "free",
            stripeCustomerId: "cus_1234567890",
            unsubscribe: true,
            customFields: [
                {
                    name: "custom_field_name_3",
                    value: "custom_field_value_3",
                },
                {
                    name: "custom_field_name_4",
                    value: "custom_field_value_4",
                },
            ],
        },
    ],
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**publicationId:** `Beehiiv.PublicationId` — The prefixed ID of the publication object

</dd>
</dl>

<dl>
<dd>

**request:** `Beehiiv.BulkSubscriptionsPatchRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BulkSubscriptionUpdates.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.bulkSubscriptionUpdates.<a href="/src/api/resources/bulkSubscriptionUpdates/client/Client.ts">putStatus</a>(publicationId, { ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Bulk update subscriptions' status.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.bulkSubscriptionUpdates.putStatus("publicationId", {
    subscriptionIds: ["sub_1234-5678-9012-3456-7890", "sub_9876-5432-1098-7654-3210"],
    newStatus: "active",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**publicationId:** `Beehiiv.PublicationId` — The prefixed ID of the publication object

</dd>
</dl>

<dl>
<dd>

**request:** `Beehiiv.BulkSubscriptionsStatusPutRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BulkSubscriptionUpdates.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.bulkSubscriptionUpdates.<a href="/src/api/resources/bulkSubscriptionUpdates/client/Client.ts">patchStatus</a>(publicationId, { ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Bulk update subscriptions' status.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.bulkSubscriptionUpdates.patchStatus("publicationId", {
    subscriptionIds: ["sub_1234-5678-9012-3456-7890", "sub_9876-5432-1098-7654-3210"],
    newStatus: "active",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**publicationId:** `Beehiiv.PublicationId` — The prefixed ID of the publication object

</dd>
</dl>

<dl>
<dd>

**request:** `Beehiiv.BulkSubscriptionsStatusPatchRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BulkSubscriptionUpdates.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Custom Fields

<details><summary><code>client.customFields.<a href="/src/api/resources/customFields/client/Client.ts">create</a>(publicationId, { ...params }) -> Beehiiv.CustomFieldResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a custom field on a publication, for use in subscriptions

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.customFields.create("publicationId", {
    kind: "string",
    display: "Display",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**publicationId:** `Beehiiv.PublicationId` — The prefixed ID of the publication object

</dd>
</dl>

<dl>
<dd>

**request:** `Beehiiv.CustomFieldsCreateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CustomFields.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.customFields.<a href="/src/api/resources/customFields/client/Client.ts">show</a>(publicationId, id) -> Beehiiv.CustomFieldResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

View a specific custom field on a publication

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.customFields.show("publicationId", "id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**publicationId:** `Beehiiv.PublicationId` — The prefixed ID of the publication object

</dd>
</dl>

<dl>
<dd>

**id:** `string` — The ID of the Custom Fields object

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CustomFields.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.customFields.<a href="/src/api/resources/customFields/client/Client.ts">index</a>(publicationId) -> Beehiiv.CustomFieldIndexResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List all custom fields on a publication

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.customFields.index("publicationId");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**publicationId:** `Beehiiv.PublicationId` — The prefixed ID of the publication object

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CustomFields.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.customFields.<a href="/src/api/resources/customFields/client/Client.ts">put</a>(publicationId, id, { ...params }) -> Beehiiv.CustomFieldResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update a custom field on a publication

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.customFields.put("publicationId", "id", {
    display: "New Display",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**publicationId:** `Beehiiv.PublicationId` — The prefixed ID of the publication object

</dd>
</dl>

<dl>
<dd>

**id:** `string` — The ID of the Custom Fields object

</dd>
</dl>

<dl>
<dd>

**request:** `Beehiiv.CustomFieldsPutRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CustomFields.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.customFields.<a href="/src/api/resources/customFields/client/Client.ts">patch</a>(publicationId, id, { ...params }) -> Beehiiv.CustomFieldsPatchResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update a custom field on a publication

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.customFields.patch("publicationId", "id", {
    display: "New Display",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**publicationId:** `Beehiiv.PublicationId` — The prefixed ID of the publication object

</dd>
</dl>

<dl>
<dd>

**id:** `string` — The ID of the Custom Fields object

</dd>
</dl>

<dl>
<dd>

**request:** `Beehiiv.CustomFieldsPatchRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CustomFields.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.customFields.<a href="/src/api/resources/customFields/client/Client.ts">delete</a>(publicationId, id) -> Beehiiv.CustomFieldsDeleteResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a custom field from a publication

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.customFields.delete("publicationId", "id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**publicationId:** `Beehiiv.PublicationId` — The prefixed ID of the publication object

</dd>
</dl>

<dl>
<dd>

**id:** `string` — The ID of the Custom Fields object

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CustomFields.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Email Blasts

<details><summary><code>client.emailBlasts.<a href="/src/api/resources/emailBlasts/client/Client.ts">index</a>(publicationId, { ...params }) -> Beehiiv.EmailBlastsListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve all email blasts belonging to a specific publication

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.emailBlasts.index("pub_00000000-0000-0000-0000-000000000000");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**publicationId:** `Beehiiv.PublicationId` — The prefixed ID of the publication object

</dd>
</dl>

<dl>
<dd>

**request:** `Beehiiv.EmailBlastsListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EmailBlasts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.emailBlasts.<a href="/src/api/resources/emailBlasts/client/Client.ts">show</a>(publicationId, emailBlastId, { ...params }) -> Beehiiv.EmailBlastsGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve a single email blast belonging to a specific publication

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.emailBlasts.show("pub_00000000-0000-0000-0000-000000000000", "blast_00000000-0000-0000-0000-000000000000");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**publicationId:** `Beehiiv.PublicationId` — The prefixed ID of the publication object

</dd>
</dl>

<dl>
<dd>

**emailBlastId:** `Beehiiv.EmailBlastId` — The prefixed ID of the email blast object

</dd>
</dl>

<dl>
<dd>

**request:** `Beehiiv.EmailBlastsGetRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EmailBlasts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Posts

<details><summary><code>client.posts.<a href="/src/api/resources/posts/client/Client.ts">create</a>(publicationId, { ...params }) -> Beehiiv.PostsCreateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<Note title="Currently in beta" icon="b">
  This feature is currently in beta, the API is subject to change, and available only to Enterprise users.<br/><br/>To inquire about Enterprise pricing,
  please visit our <a href="https://www.beehiiv.com/enterprise">Enterprise page</a>.
</Note>
Create a post for a specific publication.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.posts.create("pub_00000000-0000-0000-0000-000000000000", {
    title: "The Kitchen Sink Post (refactored version)",
    subtitle: "Contains lots of examples of each block type and the various settings you could use",
    blocks: [
        {
            type: "heading",
            level: "2",
            textAlignment: "center",
            text: "This is my block!!!",
            anchorHeader: false,
            anchorIncludeInToc: false,
        },
        {
            type: "list",
            listType: "ordered",
            items: ["a", "b", "c"],
        },
        {
            type: "list",
            listType: "ordered",
            items: ["d", "e", "f"],
            startNumber: 4,
        },
        {
            type: "list",
            listType: "unordered",
            items: ["g", "h", "i"],
            startNumber: 4,
        },
        {
            type: "table",
            headerRow: true,
            headerColumn: true,
            rows: [
                [
                    {
                        text: "A",
                    },
                    {
                        text: "B",
                        alignment: "center",
                    },
                    {
                        text: "C",
                        alignment: "right",
                    },
                ],
                [
                    {
                        text: "D",
                        alignment: "right",
                    },
                    {
                        text: "E",
                        alignment: "center",
                    },
                    {
                        text: "F",
                        alignment: "left",
                    },
                ],
            ],
        },
        {
            type: "table",
            rows: [
                [
                    {
                        text: "A",
                    },
                    {
                        text: "B",
                    },
                    {
                        text: "C",
                    },
                ],
                [
                    {
                        text: "D",
                    },
                    {
                        text: "E",
                    },
                    {
                        text: "F",
                    },
                ],
            ],
        },
        {
            type: "table",
            headerRow: false,
            rows: [
                [
                    {
                        text: "A",
                    },
                    {
                        text: "B",
                    },
                    {
                        text: "C",
                    },
                ],
                [
                    {
                        text: "D",
                    },
                    {
                        text: "E",
                    },
                    {
                        text: "F",
                    },
                ],
            ],
        },
        {
            type: "columns",
            columns: [
                {
                    blocks: [
                        {
                            type: "paragraph",
                            plaintext: "Marble Column 1 {{email}}",
                        },
                    ],
                },
                {
                    blocks: [
                        {
                            type: "image",
                            imageUrl: "https://cdn.britannica.com/89/164789-050-D6B5E2C7/Barack-Obama-2012.jpg",
                            url: "https://www.whitehouse.gov/",
                            title: "Barry O",
                            altText: "A picture of Barry Obama",
                            caption: "One Cool President",
                            captionAlignment: "center",
                            imageAlignment: "right",
                            width: 75,
                        },
                    ],
                },
            ],
        },
        {
            type: "advertisement",
            opportunityId: "d8dfa6be-24b5-4cad-8350-ae44366dbd4c",
        },
        {
            type: "image",
            imageUrl: "https://cdn.britannica.com/89/164789-050-D6B5E2C7/Barack-Obama-2012.jpg",
            url: "https://www.whitehouse.gov/",
            title: "Barry O",
            altText: "A picture of Barry Obama",
            caption: "One Cool President",
            captionAlignment: "center",
            imageAlignment: "right",
            width: 75,
        },
        {
            type: "paragraph",
            formattedText: [
                {
                    text: "This is going to be ",
                },
                {
                    text: "a really, really awesome time ",
                    styling: ["bold"],
                },
                {
                    text: "Are you ready for this?",
                    styling: ["italic", "bold"],
                },
            ],
        },
        {
            type: "button",
            href: "/subscribe",
            target: "_blank",
            alignment: "center",
            size: "large",
            text: "Subscribe",
        },
        {
            type: "button",
            href: "/signup",
            target: "_blank",
            alignment: "right",
            size: "small",
            text: "Sign Up",
        },
        {
            type: "button",
            href: "/",
            target: "_blank",
            text: "View Posts",
        },
        {
            type: "heading",
            level: "4",
            textAlignment: "right",
            text: "This is my block!!!",
            anchorHeader: true,
            anchorIncludeInToc: true,
        },
    ],
    postTemplateId: "post_template_00000000-0000-0000-0000-000000000000",
    scheduledAt: "2024-12-25T12:00:00Z",
    customLinkTrackingEnabled: true,
    emailCaptureTypeOverride: "none",
    overrideScheduledAt: "2022-10-26T14:01:16Z",
    socialShare: "comments_and_likes_only",
    thumbnailImageUrl:
        "https://images.squarespace-cdn.com/content/v1/56e4ca0540261d39b90e4b18/1605047208324-PONGEYKEAKTMM1LANHJ5/1ED706BF-A70B-4F26-B3D5-266B449DDA8A_1_105_c.jpeg",
    emailSettings: {
        fromAddress: "from_address",
        customLiveUrl: "https://beehiiv.com",
        displayTitleInEmail: true,
        displayBylineInEmail: true,
        displaySubtitleInEmail: true,
        emailHeaderEngagementButtons: "email_header_engagement_buttons",
        emailHeaderSocialShare: "email_header_social_share",
        emailPreviewText: "email_preview_text",
        emailSubjectLine: "email_subject_line",
    },
    webSettings: {
        displayThumbnailOnWeb: true,
        hideFromFeed: true,
        slug: "and-this-is-gonna-rock",
    },
    seoSettings: {
        defaultDescription: "default_description",
        defaultTitle: "default_title",
        ogDescription: "OpenGraph description",
        ogTitle: "Opengraph Title",
        twitterDescription: "Twitter Stuff",
        twitterTitle: "My Twitter Article",
    },
    contentTags: ["Obama", "Care", "Rocks", "Healthcare"],
    recipients: {
        web: {
            tierIds: ["premium"],
        },
        email: {
            tierIds: ["premium", "free"],
            includeSegmentIds: ["seg_6426b403-39f5-42bd-86e9-9533fb0099e7"],
            excludeSegmentIds: ["seg_e34b4085-aef6-449f-a699-7563f915f852"],
        },
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**publicationId:** `Beehiiv.PublicationId` — The prefixed ID of the publication object

</dd>
</dl>

<dl>
<dd>

**request:** `Beehiiv.PostsCreateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Posts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.posts.<a href="/src/api/resources/posts/client/Client.ts">index</a>(publicationId, { ...params }) -> Beehiiv.PostsListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve all posts belonging to a specific publication

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.posts.index("pub_00000000-0000-0000-0000-000000000000");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**publicationId:** `Beehiiv.PublicationId` — The prefixed ID of the publication object

</dd>
</dl>

<dl>
<dd>

**request:** `Beehiiv.PostsListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Posts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.posts.<a href="/src/api/resources/posts/client/Client.ts">show</a>(postId, publicationId, { ...params }) -> Beehiiv.PostsGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retreive a single Post belonging to a specific publication

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.posts.show("post_00000000-0000-0000-0000-000000000000", "pub_00000000-0000-0000-0000-000000000000");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**postId:** `Beehiiv.PostId` — The prefixed ID of the post object

</dd>
</dl>

<dl>
<dd>

**publicationId:** `Beehiiv.PublicationId` — The prefixed ID of the publication object

</dd>
</dl>

<dl>
<dd>

**request:** `Beehiiv.PostsGetRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Posts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.posts.<a href="/src/api/resources/posts/client/Client.ts">delete</a>(postId, publicationId) -> Beehiiv.PostsDeleteResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete or Archive a post. Any post that has been confirmed will have it's status changed to `archived`. Posts in the `draft` status will be permenantly deleted.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.posts.delete("post_00000000-0000-0000-0000-000000000000", "pub_00000000-0000-0000-0000-000000000000");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**postId:** `Beehiiv.PostId` — The prefixed ID of the post object

</dd>
</dl>

<dl>
<dd>

**publicationId:** `Beehiiv.PublicationId` — The prefixed ID of the publication object

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Posts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Publications

<details><summary><code>client.publications.<a href="/src/api/resources/publications/client/Client.ts">index</a>({ ...params }) -> Beehiiv.PublicationsListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve all publications associated with your API key.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.publications.index();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Beehiiv.PublicationsListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Publications.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.publications.<a href="/src/api/resources/publications/client/Client.ts">show</a>(publicationId, { ...params }) -> Beehiiv.PublicationsGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve a single publication

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.publications.show("pub_ad76629e-4a39-43ad-8055-0ee89dc6db15");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**publicationId:** `Beehiiv.PublicationId` — The prefixed ID of the publication object

</dd>
</dl>

<dl>
<dd>

**request:** `Beehiiv.PublicationsGetRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Publications.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Referral Program

<details><summary><code>client.referralProgram.<a href="/src/api/resources/referralProgram/client/Client.ts">show</a>(publicationId, { ...params }) -> Beehiiv.ReferralProgramGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve details about the publication's referral program, including milestones and rewards.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.referralProgram.show("pub_00000000-0000-0000-0000-000000000000");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**publicationId:** `Beehiiv.PublicationId` — The prefixed ID of the publication object

</dd>
</dl>

<dl>
<dd>

**request:** `Beehiiv.ReferralProgramGetRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ReferralProgram.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Segments

<details><summary><code>client.segments.<a href="/src/api/resources/segments/client/Client.ts">index</a>(publicationId, { ...params }) -> Beehiiv.SegmentsListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve information about all segments belonging to a specific publication

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.segments.index("pub_00000000-0000-0000-0000-000000000000");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**publicationId:** `Beehiiv.PublicationId` — The prefixed ID of the publication object

</dd>
</dl>

<dl>
<dd>

**request:** `Beehiiv.SegmentsListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Segments.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.segments.<a href="/src/api/resources/segments/client/Client.ts">show</a>(publicationId, segmentId, { ...params }) -> Beehiiv.SegmentShowResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve information about a specific segment belonging to a publication

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.segments.show("pub_00000000-0000-0000-0000-000000000000", "seg_00000000-0000-0000-0000-000000000000");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**publicationId:** `Beehiiv.PublicationId` — The prefixed ID of the publication object

</dd>
</dl>

<dl>
<dd>

**segmentId:** `Beehiiv.SegmentId` — The prefixed ID of the segment object

</dd>
</dl>

<dl>
<dd>

**request:** `Beehiiv.SegmentsShowRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Segments.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.segments.<a href="/src/api/resources/segments/client/Client.ts">expandResults</a>(publicationId, segmentId, { ...params }) -> Beehiiv.SegmentsGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List the Subscriber Ids from the most recent calculation of a specific publication.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.segments.expandResults(
    "pub_00000000-0000-0000-0000-000000000000",
    "seg_00000000-0000-0000-0000-000000000000"
);
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**publicationId:** `Beehiiv.PublicationId` — The prefixed ID of the publication object

</dd>
</dl>

<dl>
<dd>

**segmentId:** `Beehiiv.SegmentId` — The prefixed ID of the segment object

</dd>
</dl>

<dl>
<dd>

**request:** `Beehiiv.SegmentsGetRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Segments.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.segments.<a href="/src/api/resources/segments/client/Client.ts">delete</a>(publicationId, segmentId) -> Beehiiv.SegmentDeleteResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a segment. Deleting the segment does not effect the subscriptions in the segment.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.segments.delete("pub_00000000-0000-0000-0000-000000000000", "seg_00000000-0000-0000-0000-000000000000");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**publicationId:** `Beehiiv.PublicationId` — The prefixed ID of the publication object

</dd>
</dl>

<dl>
<dd>

**segmentId:** `Beehiiv.SegmentId` — The prefixed ID of the segment object

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Segments.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Subscriptions

<details><summary><code>client.subscriptions.<a href="/src/api/resources/subscriptions/client/Client.ts">create</a>(publicationId, { ...params }) -> Beehiiv.SubscriptionResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create new subscriptions for a publication.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.subscriptions.create("pub_00000000-0000-0000-0000-000000000000", {
    email: "bruce.wayne@wayneenterprise.com",
    reactivateExisting: false,
    sendWelcomeEmail: false,
    utmSource: "WayneEnterprise",
    utmMedium: "organic",
    utmCampaign: "fall_2022_promotion",
    referringSite: "www.wayneenterprise.com/blog",
    customFields: [
        {
            name: "First Name",
            value: "Bruce",
        },
        {
            name: "Last Name",
            value: "Wayne",
        },
    ],
    stripeCustomerId: "stripe_customer_id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**publicationId:** `Beehiiv.PublicationId` — The prefixed ID of the publication object

</dd>
</dl>

<dl>
<dd>

**request:** `Beehiiv.SubscriptionsCreateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Subscriptions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.subscriptions.<a href="/src/api/resources/subscriptions/client/Client.ts">index</a>(publicationId, { ...params }) -> Beehiiv.SubscriptionsListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve all subscriptions belonging to a specific publication

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.subscriptions.index("pub_00000000-0000-0000-0000-000000000000", {
    email: "clark@dailyplanet.com",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**publicationId:** `Beehiiv.PublicationId` — The prefixed ID of the publication object

</dd>
</dl>

<dl>
<dd>

**request:** `Beehiiv.SubscriptionsListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Subscriptions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.subscriptions.<a href="/src/api/resources/subscriptions/client/Client.ts">getByEmail</a>(publicationId, email, { ...params }) -> Beehiiv.SubscriptionResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<Info>Please note that this endpoint requires the email to be URL encoded. Please reference your language's documentation for the correct method of encoding.</Info> Retrieve a single subscription belonging to a specific email address in a specific publication.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.subscriptions.getByEmail("pub_00000000-0000-0000-0000-000000000000", "work@example.com");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**publicationId:** `Beehiiv.PublicationId` — The prefixed ID of the publication object

</dd>
</dl>

<dl>
<dd>

**email:** `string` — The ID of the subscriber object

</dd>
</dl>

<dl>
<dd>

**request:** `Beehiiv.SubscriptionsGetRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Subscriptions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.subscriptions.<a href="/src/api/resources/subscriptions/client/Client.ts">getById</a>(publicationId, subscriptionId, { ...params }) -> Beehiiv.SubscriptionResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<Info>In previous versions of the API, another endpoint existed to retrieve a subscription by the subscriber ID. This endpoint is now deprecated and will be removed in a future version of the API. Please use this endpoint instead. The subscription ID can be found by exporting a list of subscriptions either via the `Settings > Publications > Export Data` or by exporting a CSV in a segment.</Info> Retrieve a single subscription belonging to a specific publication.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.subscriptions.getById(
    "pub_00000000-0000-0000-0000-000000000000",
    "sub_00000000-0000-0000-0000-000000000000"
);
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**publicationId:** `Beehiiv.PublicationId` — The prefixed ID of the publication object

</dd>
</dl>

<dl>
<dd>

**subscriptionId:** `Beehiiv.SubscriptionId` — The prefixed ID of the subscription object

</dd>
</dl>

<dl>
<dd>

**request:** `Beehiiv.SubscriptionsGetByIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Subscriptions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.subscriptions.<a href="/src/api/resources/subscriptions/client/Client.ts">getBySubscriberId</a>(publicationId, subscriberId, { ...params }) -> Beehiiv.SubscriptionResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve a single subscription belonging to a specific publication via the subscriber ID.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.subscriptions.getBySubscriberId(
    "pub_00000000-0000-0000-0000-000000000000",
    "00000000-0000-0000-0000-000000000000"
);
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**publicationId:** `Beehiiv.PublicationId` — The prefixed ID of the publication object

</dd>
</dl>

<dl>
<dd>

**subscriberId:** `string` — The ID of the subscriber object

</dd>
</dl>

<dl>
<dd>

**request:** `Beehiiv.SubscriptionsGetBySubscriberIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Subscriptions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.subscriptions.<a href="/src/api/resources/subscriptions/client/Client.ts">getJwtToken</a>(publicationId, subscriptionId) -> Beehiiv.SubscriptionJwtTokenResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Generate a JWT token that can be used to automatically log in subscribers via URL. This token is short lived and should be used immediately.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.subscriptions.getJwtToken(
    "pub_00000000-0000-0000-0000-000000000000",
    "sub_00000000-0000-0000-0000-000000000000"
);
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**publicationId:** `Beehiiv.PublicationId` — The prefixed ID of the publication object

</dd>
</dl>

<dl>
<dd>

**subscriptionId:** `Beehiiv.SubscriptionId` — The prefixed ID of the subscription object

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Subscriptions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.subscriptions.<a href="/src/api/resources/subscriptions/client/Client.ts">put</a>(publicationId, subscriptionId, { ...params }) -> Beehiiv.SubscriptionResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update a single subscription.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.subscriptions.put("pub_00000000-0000-0000-0000-000000000000", "sub_00000000-0000-0000-0000-000000000000", {
    tier: "premium",
    stripeCustomerId: "cus_12345abcde",
    customFields: [
        {
            name: "First Name",
            value: "Bruce",
        },
        {
            name: "Last Name",
            value: "Wayne",
        },
    ],
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**publicationId:** `Beehiiv.PublicationId` — The prefixed ID of the publication object

</dd>
</dl>

<dl>
<dd>

**subscriptionId:** `Beehiiv.SubscriptionId` — The prefixed ID of the subscription object

</dd>
</dl>

<dl>
<dd>

**request:** `Beehiiv.SubscriptionsUpdateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Subscriptions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.subscriptions.<a href="/src/api/resources/subscriptions/client/Client.ts">patch</a>(publicationId, subscriptionId, { ...params }) -> Beehiiv.SubscriptionResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update a single subscription.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.subscriptions.patch(
    "pub_00000000-0000-0000-0000-000000000000",
    "sub_00000000-0000-0000-0000-000000000000",
    {
        tier: "premium",
        stripeCustomerId: "cus_12345abcde",
        customFields: [
            {
                name: "First Name",
                value: "Bruce",
            },
            {
                name: "Last Name",
                value: "Wayne",
            },
        ],
    }
);
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**publicationId:** `Beehiiv.PublicationId` — The prefixed ID of the publication object

</dd>
</dl>

<dl>
<dd>

**subscriptionId:** `Beehiiv.SubscriptionId` — The prefixed ID of the subscription object

</dd>
</dl>

<dl>
<dd>

**request:** `Beehiiv.SubscriptionsPatchSingleRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Subscriptions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.subscriptions.<a href="/src/api/resources/subscriptions/client/Client.ts">delete</a>(subscriptionId, publicationId) -> Beehiiv.SubscriptionDeleteResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<Warning>This cannot be undone. All data associated with the subscription will also be deleted. We recommend unsubscribing when possible instead of deleting.<br><br>If a premium subscription is deleted they will no longer be billed.</Warning> Deletes a subscription.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.subscriptions.delete(
    "sub_00000000-0000-0000-0000-000000000000",
    "pub_00000000-0000-0000-0000-000000000000"
);
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**subscriptionId:** `Beehiiv.SubscriptionId` — The prefixed ID of the subscription object

</dd>
</dl>

<dl>
<dd>

**publicationId:** `Beehiiv.PublicationId` — The prefixed ID of the publication object

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Subscriptions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Subscription Tags

<details><summary><code>client.subscriptionTags.<a href="/src/api/resources/subscriptionTags/client/Client.ts">create</a>(publicationId, subscriptionId, { ...params }) -> Beehiiv.SubscriptionTagsCreateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Adds tags to a subscription. If the tag does not exist on the publication, it will be created automatically.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.subscriptionTags.create("publicationId", "subscriptionId");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**publicationId:** `Beehiiv.PublicationId`

</dd>
</dl>

<dl>
<dd>

**subscriptionId:** `Beehiiv.SubscriptionId`

</dd>
</dl>

<dl>
<dd>

**request:** `Beehiiv.SubscriptionTagsCreateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SubscriptionTags.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Tiers

<details><summary><code>client.tiers.<a href="/src/api/resources/tiers/client/Client.ts">create</a>(publicationId, { ...params }) -> Beehiiv.TierResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a new tier for a publication.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tiers.create("pub_00000000-0000-0000-0000-000000000000", {
    name: "Gold Tier",
    description: "Our premium tier with exclusive benefits",
    pricesAttributes: [
        {
            currency: "usd",
            amountCents: 500,
            enabled: true,
            interval: "month",
            intervalDisplay: "Monthly",
            cta: "Subscribe Now",
            features: ["Exclusive content", "Ad-free experience", "Priority support"],
        },
    ],
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**publicationId:** `Beehiiv.PublicationId` — The prefixed ID of the publication object

</dd>
</dl>

<dl>
<dd>

**request:** `Beehiiv.PostPublicationsPublicationIdTiersRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Tiers.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.tiers.<a href="/src/api/resources/tiers/client/Client.ts">index</a>(publicationId, { ...params }) -> Beehiiv.IndexTiersResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve all tiers belonging to a specific publication

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tiers.index("pub_00000000-0000-0000-0000-000000000000");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**publicationId:** `Beehiiv.PublicationId` — The prefixed ID of the publication object

</dd>
</dl>

<dl>
<dd>

**request:** `Beehiiv.GetPublicationsPublicationIdTiersRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Tiers.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.tiers.<a href="/src/api/resources/tiers/client/Client.ts">show</a>(publicationId, tierId, { ...params }) -> Beehiiv.TierResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve a single tier belonging to a specific publication

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tiers.show("pub_00000000-0000-0000-0000-000000000000", "tier_00000000-0000-0000-0000-000000000000");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**publicationId:** `Beehiiv.PublicationId` — The prefixed ID of the publication object

</dd>
</dl>

<dl>
<dd>

**tierId:** `Beehiiv.TierId` — The prefixed ID of the tier object

</dd>
</dl>

<dl>
<dd>

**request:** `Beehiiv.GetPublicationsPublicationIdTiersTierIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Tiers.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.tiers.<a href="/src/api/resources/tiers/client/Client.ts">put</a>(publicationId, tierId, { ...params }) -> Beehiiv.TierResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update an existing tier belonging to a specific publication

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tiers.put("pub_00000000-0000-0000-0000-000000000000", "tier_00000000-0000-0000-0000-000000000000", {
    name: "Gold",
    description: "Our premium tier with exclusive benefits",
    pricesAttributes: [
        {
            id: "price_00000000-0000-0000-0000-000000000000",
            currency: "usd",
            amountCents: 500,
            interval: "month",
            intervalDisplay: "Monthly",
            cta: "Subscribe Now",
            features: ["Exclusive content"],
            delete: true,
        },
    ],
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**publicationId:** `Beehiiv.PublicationId` — The prefixed ID of the publication object

</dd>
</dl>

<dl>
<dd>

**tierId:** `Beehiiv.TierId` — The prefixed ID of the tier object

</dd>
</dl>

<dl>
<dd>

**request:** `Beehiiv.UpdatePutTierRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Tiers.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.tiers.<a href="/src/api/resources/tiers/client/Client.ts">patch</a>(publicationId, tierId, { ...params }) -> Beehiiv.TierResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update an existing tier belonging to a specific publication

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tiers.patch("pub_00000000-0000-0000-0000-000000000000", "tier_00000000-0000-0000-0000-000000000000", {
    name: "Gold",
    description: "Our premium tier with exclusive benefits",
    pricesAttributes: [
        {
            id: "price_00000000-0000-0000-0000-000000000000",
            currency: "usd",
            amountCents: 500,
            interval: "month",
            intervalDisplay: "Monthly",
            cta: "Subscribe Now",
            features: ["Exclusive content"],
            delete: true,
        },
    ],
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**publicationId:** `Beehiiv.PublicationId` — The prefixed ID of the publication object

</dd>
</dl>

<dl>
<dd>

**tierId:** `Beehiiv.TierId` — The prefixed ID of the tier object

</dd>
</dl>

<dl>
<dd>

**request:** `Beehiiv.UpdatePatchTierRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Tiers.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Webhooks

<details><summary><code>client.webhooks.<a href="/src/api/resources/webhooks/client/Client.ts">create</a>(publicationId, { ...params }) -> Beehiiv.WebhookResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a new webhook for a given publication.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.webhooks.create("pub_00000000-0000-0000-0000-000000000000", {
    url: "https://example.com/webhook",
    eventTypes: ["post.sent"],
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**publicationId:** `Beehiiv.PublicationId` — The prefixed ID of the publication object

</dd>
</dl>

<dl>
<dd>

**request:** `Beehiiv.PostWebhooksRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Webhooks.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.webhooks.<a href="/src/api/resources/webhooks/client/Client.ts">index</a>(publicationId, { ...params }) -> Beehiiv.IndexWebhooksResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve all webhooks belonging to a specific publication.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.webhooks.index("pub_00000000-0000-0000-0000-000000000000");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**publicationId:** `Beehiiv.PublicationId` — The prefixed ID of the publication object

</dd>
</dl>

<dl>
<dd>

**request:** `Beehiiv.GetWebhooksRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Webhooks.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.webhooks.<a href="/src/api/resources/webhooks/client/Client.ts">show</a>(publicationId, endpointId) -> Beehiiv.WebhookResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve a specific webhook belonging to a publication.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.webhooks.show("pub_00000000-0000-0000-0000-000000000000", "ep_0000000000000000000000000000");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**publicationId:** `Beehiiv.PublicationId` — The prefixed ID of the publication object

</dd>
</dl>

<dl>
<dd>

**endpointId:** `Beehiiv.EndpointId` — The prefixed ID of the webhook object

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Webhooks.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.webhooks.<a href="/src/api/resources/webhooks/client/Client.ts">delete</a>(publicationId, endpointId) -> Beehiiv.WebhooksDeleteResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a webhook subscription from a publication.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.webhooks.delete("pub_00000000-0000-0000-0000-000000000000", "ep_0000000000000000000000000000");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**publicationId:** `Beehiiv.PublicationId` — The prefixed ID of the publication object

</dd>
</dl>

<dl>
<dd>

**endpointId:** `Beehiiv.EndpointId` — The prefixed ID of the webhook object

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Webhooks.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.webhooks.<a href="/src/api/resources/webhooks/client/Client.ts">test</a>(publicationId, endpointId) -> Beehiiv.GetPublicationsPublicationIdWebhooksWebhookIdTestsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Send test info to an already set up webhook endpoint.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.webhooks.test("pub_00000000-0000-0000-0000-000000000000", "ep_0000000000000000000000000000");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**publicationId:** `string` — The prefixed ID of the publication object

</dd>
</dl>

<dl>
<dd>

**endpointId:** `Beehiiv.EndpointId` — The prefixed ID of the webhook object

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Webhooks.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>
