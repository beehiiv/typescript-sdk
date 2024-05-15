## Publications

<details><summary> <code>beehiiv.publications.<a href="./src/api/resources/publications/client/Client.ts">list</a>({ ...params }) -> Beehiiv.PublicationsListResponse</code> </summary>

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

```ts
await beehiiv.publications.list({
    expand: Beehiiv.PublicationsListRequestExpandItem.Stats,
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

**request: `Beehiiv.PublicationsListRequest`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `Publications.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>beehiiv.publications.<a href="./src/api/resources/publications/client/Client.ts">get</a>(publicationId, { ...params }) -> Beehiiv.PublicationsGetResponse</code> </summary>

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

```ts
await beehiiv.publications.get("pub_ad76629e-4a39-43ad-8055-0ee89dc6db15", {
    expand: Beehiiv.PublicationsGetRequestExpandItem.Stats,
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

**publicationId: `string`** — The prefixed ID of the publication object

</dd>

</dl>

<dl>

<dd>

**request: `Beehiiv.PublicationsGetRequest`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `Publications.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

## Posts

<details><summary> <code>beehiiv.posts.<a href="./src/api/resources/posts/client/Client.ts">list</a>(publicationId, { ...params }) -> Beehiiv.PostsListResponse</code> </summary>

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

```ts
await beehiiv.posts.list("pub_00000000-0000-0000-0000-000000000000");
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

**publicationId: `string`** — The prefixed ID of the publication object

</dd>

</dl>

<dl>

<dd>

**request: `Beehiiv.PostsListRequest`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `Posts.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>beehiiv.posts.<a href="./src/api/resources/posts/client/Client.ts">get</a>(postId, publicationId, { ...params }) -> Beehiiv.PostsGetResponse</code> </summary>

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

```ts
await beehiiv.posts.get("post_00000000-0000-0000-0000-000000000000", "pub_00000000-0000-0000-0000-000000000000");
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

**postId: `string`** — The prefixed ID of the post object

</dd>

</dl>

<dl>

<dd>

**publicationId: `string`** — The prefixed ID of the publication object

</dd>

</dl>

<dl>

<dd>

**request: `Beehiiv.PostsGetRequest`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `Posts.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>beehiiv.posts.<a href="./src/api/resources/posts/client/Client.ts">delete</a>(postId, publicationId) -> Beehiiv.PostsDeleteResponse</code> </summary>

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

```ts
await beehiiv.posts.delete("post_00000000-0000-0000-0000-000000000000", "pub_00000000-0000-0000-0000-000000000000");
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

**postId: `string`** — The prefixed ID of the post object

</dd>

</dl>

<dl>

<dd>

**publicationId: `string`** — The prefixed ID of the publication object

</dd>

</dl>

<dl>

<dd>

**requestOptions: `Posts.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

## Subscriptions

<details><summary> <code>beehiiv.subscriptions.<a href="./src/api/resources/subscriptions/client/Client.ts">list</a>(publicationId, { ...params }) -> Beehiiv.SubscriptionsListResponse</code> </summary>

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

```ts
await beehiiv.subscriptions.list("pub_00000000-0000-0000-0000-000000000000", {
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

**publicationId: `string`** — The prefixed ID of the publication object

</dd>

</dl>

<dl>

<dd>

**request: `Beehiiv.SubscriptionsListRequest`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `Subscriptions.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>beehiiv.subscriptions.<a href="./src/api/resources/subscriptions/client/Client.ts">create</a>(publicationId, { ...params }) -> Beehiiv.SubscriptionsCreateResponse</code> </summary>

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

```ts
await beehiiv.subscriptions.create("pub_00000000-0000-0000-0000-000000000000", {
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
    automationIds: ["aut_00000000-0000-0000-0000-000000000000"],
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

**publicationId: `string`** — The prefixed ID of the publication object

</dd>

</dl>

<dl>

<dd>

**request: `Beehiiv.SubscriptionsCreateRequest`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `Subscriptions.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>beehiiv.subscriptions.<a href="./src/api/resources/subscriptions/client/Client.ts">put</a>(publicationId, { ...params }) -> Beehiiv.SubscriptionsPutResponse</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

Bulk update subscriptions' field values (standard fields and custom fields)

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await beehiiv.subscriptions.put("publicationId");
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

**publicationId: `string`** — The prefixed ID of the publication object

</dd>

</dl>

<dl>

<dd>

**request: `Beehiiv.SubscriptionsPutRequest`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `Subscriptions.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>beehiiv.subscriptions.<a href="./src/api/resources/subscriptions/client/Client.ts">patch</a>(publicationId, { ...params }) -> Beehiiv.SubscriptionsPatchResponse</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

Bulk update subscriptions' field values (standard fields and custom fields)

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await beehiiv.subscriptions.patch("publicationId");
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

**publicationId: `string`** — The prefixed ID of the publication object

</dd>

</dl>

<dl>

<dd>

**request: `Beehiiv.SubscriptionsPatchRequest`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `Subscriptions.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>beehiiv.subscriptions.<a href="./src/api/resources/subscriptions/client/Client.ts">get</a>(publicationId, email, { ...params }) -> Beehiiv.SubscriptionsGetResponse</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

Retrieve a single subscription belonging to a specific email address in a specific publication

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await beehiiv.subscriptions.get("pub_00000000-0000-0000-0000-000000000000", "work@example.com");
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

**publicationId: `string`** — The prefixed ID of the publication object

</dd>

</dl>

<dl>

<dd>

**email: `string`** — The ID of the subscriber object

</dd>

</dl>

<dl>

<dd>

**request: `Beehiiv.SubscriptionsGetRequest`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `Subscriptions.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>beehiiv.subscriptions.<a href="./src/api/resources/subscriptions/client/Client.ts">delete</a>(subscriptionId, publicationId) -> Record<string, unknown></code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

Delete a subscription.

**This cannot be undone** All data associated with the subscription will also be deleted. We recommend unsubscribing when possible instead of deleting.

If a premium subscription is deleted they will no longer be billed.

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await beehiiv.subscriptions.delete(
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

**subscriptionId: `string`** — The prefixed ID of the subscription object

</dd>

</dl>

<dl>

<dd>

**publicationId: `string`** — The prefixed ID of the publication object

</dd>

</dl>

<dl>

<dd>

**requestOptions: `Subscriptions.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

## Segments

<details><summary> <code>beehiiv.segments.<a href="./src/api/resources/segments/client/Client.ts">list</a>(publicationId, { ...params }) -> Beehiiv.SegmentsListResponse</code> </summary>

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

```ts
await beehiiv.segments.list("pub_00000000-0000-0000-0000-000000000000");
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

**publicationId: `string`** — The prefixed ID of the publication object

</dd>

</dl>

<dl>

<dd>

**request: `Beehiiv.SegmentsListRequest`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `Segments.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>beehiiv.segments.<a href="./src/api/resources/segments/client/Client.ts">get</a>(publicationId, segmentId, { ...params }) -> Beehiiv.SegmentsGetResponse</code> </summary>

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

```ts
await beehiiv.segments.get("pub_00000000-0000-0000-0000-000000000000", "seg_00000000-0000-0000-0000-000000000000");
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

**publicationId: `string`** — The prefixed ID of the publication object

</dd>

</dl>

<dl>

<dd>

**segmentId: `string`** — The prefixed ID of the segment object

</dd>

</dl>

<dl>

<dd>

**request: `Beehiiv.SegmentsGetRequest`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `Segments.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>beehiiv.segments.<a href="./src/api/resources/segments/client/Client.ts">delete</a>(publicationId, segmentId) -> Record<string, unknown></code> </summary>

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

```ts
await beehiiv.segments.delete("pub_00000000-0000-0000-0000-000000000000", "seg_00000000-0000-0000-0000-000000000000");
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

**publicationId: `string`** — The prefixed ID of the publication object

</dd>

</dl>

<dl>

<dd>

**segmentId: `string`** — The prefixed ID of the segment object

</dd>

</dl>

<dl>

<dd>

**requestOptions: `Segments.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

## Email Blasts

<details><summary> <code>beehiiv.emailBlasts.<a href="./src/api/resources/emailBlasts/client/Client.ts">list</a>(publicationId, { ...params }) -> Beehiiv.EmailBlastsListResponse</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

Retrieve all Email Blasts

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await beehiiv.emailBlasts.list("pub_00000000-0000-0000-0000-000000000000");
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

**publicationId: `string`** — The prefixed ID of the publication object

</dd>

</dl>

<dl>

<dd>

**request: `Beehiiv.EmailBlastsListRequest`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `EmailBlasts.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>beehiiv.emailBlasts.<a href="./src/api/resources/emailBlasts/client/Client.ts">get</a>(publicationId, emailBlastId, { ...params }) -> Beehiiv.EmailBlastsGetResponse</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

Retrieve an Email Blast

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await beehiiv.emailBlasts.get("pub_00000000-0000-0000-0000-000000000000", "blast_00000000-0000-0000-0000-000000000000");
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

**publicationId: `string`** — The prefixed ID of the publication object

</dd>

</dl>

<dl>

<dd>

**emailBlastId: `string`** — The prefixed ID of the email blast object

</dd>

</dl>

<dl>

<dd>

**request: `Beehiiv.EmailBlastsGetRequest`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `EmailBlasts.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

## Referral Program

<details><summary> <code>beehiiv.referralProgram.<a href="./src/api/resources/referralProgram/client/Client.ts">get</a>(publicationId, { ...params }) -> Beehiiv.ReferralProgramGetResponse</code> </summary>

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

```ts
await beehiiv.referralProgram.get("pub_00000000-0000-0000-0000-000000000000");
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

**publicationId: `string`** — The prefixed ID of the publication object

</dd>

</dl>

<dl>

<dd>

**request: `Beehiiv.ReferralProgramGetRequest`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `ReferralProgram.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

## Custom Fields

<details><summary> <code>beehiiv.customFields.<a href="./src/api/resources/customFields/client/Client.ts">get</a>(publicationId, id) -> Beehiiv.CustomFieldsGetResponse</code> </summary>

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

```ts
await beehiiv.customFields.get("publicationId", "id");
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

**publicationId: `string`** — The prefixed ID of the publication object

</dd>

</dl>

<dl>

<dd>

**id: `string`** — The ID of the Custom Fields object

</dd>

</dl>

<dl>

<dd>

**requestOptions: `CustomFields.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>beehiiv.customFields.<a href="./src/api/resources/customFields/client/Client.ts">create</a>(publicationId, { ...params }) -> Beehiiv.CustomFieldsCreateResponse</code> </summary>

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

```ts
await beehiiv.customFields.create("publicationId", {
    kind: Beehiiv.CustomFieldsCreateRequestKind.String,
    display: "display",
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

**publicationId: `string`** — The prefixed ID of the publication object

</dd>

</dl>

<dl>

<dd>

**request: `Beehiiv.CustomFieldsCreateRequest`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `CustomFields.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>beehiiv.customFields.<a href="./src/api/resources/customFields/client/Client.ts">put</a>(publicationId, id, { ...params }) -> Beehiiv.CustomFieldsPutResponse</code> </summary>

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

```ts
await beehiiv.customFields.put("publicationId", "id");
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

**publicationId: `string`** — The prefixed ID of the publication object

</dd>

</dl>

<dl>

<dd>

**id: `string`** — The ID of the Custom Fields object

</dd>

</dl>

<dl>

<dd>

**request: `Beehiiv.CustomFieldsPutRequest`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `CustomFields.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>beehiiv.customFields.<a href="./src/api/resources/customFields/client/Client.ts">delete</a>(publicationId, id) -> Beehiiv.CustomFieldsDeleteResponse</code> </summary>

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

```ts
await beehiiv.customFields.delete("publicationId", "id");
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

**publicationId: `string`** — The prefixed ID of the publication object

</dd>

</dl>

<dl>

<dd>

**id: `string`** — The ID of the Custom Fields object

</dd>

</dl>

<dl>

<dd>

**requestOptions: `CustomFields.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>beehiiv.customFields.<a href="./src/api/resources/customFields/client/Client.ts">patch</a>(publicationId, id, { ...params }) -> Beehiiv.CustomFieldsPatchResponse</code> </summary>

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

```ts
await beehiiv.customFields.patch("publicationId", "id");
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

**publicationId: `string`** — The prefixed ID of the publication object

</dd>

</dl>

<dl>

<dd>

**id: `string`** — The ID of the Custom Fields object

</dd>

</dl>

<dl>

<dd>

**request: `Beehiiv.CustomFieldsPatchRequest`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `CustomFields.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

## Bulk Subscription Updates

<details><summary> <code>beehiiv.bulkSubscriptionUpdates.<a href="./src/api/resources/bulkSubscriptionUpdates/client/Client.ts">list</a>(publicationId) -> Beehiiv.BulkSubscriptionUpdatesListResponse</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

Returns a list of Subscription Update objects for a publication

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await beehiiv.bulkSubscriptionUpdates.list("publicationId");
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

**publicationId: `string`** — The prefixed ID of the publication object

</dd>

</dl>

<dl>

<dd>

**requestOptions: `BulkSubscriptionUpdates.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>beehiiv.bulkSubscriptionUpdates.<a href="./src/api/resources/bulkSubscriptionUpdates/client/Client.ts">get</a>(publicationId, id) -> Beehiiv.BulkSubscriptionUpdatesGetResponse</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

Returns a single Subscription Update object for a publication

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await beehiiv.bulkSubscriptionUpdates.get("publicationId", "id");
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

**publicationId: `string`** — The prefixed ID of the publication object

</dd>

</dl>

<dl>

<dd>

**id: `string`** — The ID of the Subscription Update object

</dd>

</dl>

<dl>

<dd>

**requestOptions: `BulkSubscriptionUpdates.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

## Automation Journeys

<details><summary> <code>beehiiv.automationJourneys.<a href="./src/api/resources/automationJourneys/client/Client.ts">get</a>(publicationId, automationId, automationJourneyId) -> Beehiiv.AutomationJourneysGetResponse</code> </summary>

<dl>

<dd>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await beehiiv.automationJourneys.get(
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

**publicationId: `string`** — The prefixed ID of the publication object

</dd>

</dl>

<dl>

<dd>

**automationId: `string`** — The prefixed ID of the automation object

</dd>

</dl>

<dl>

<dd>

**automationJourneyId: `string`** — The prefixed automation journey id

</dd>

</dl>

<dl>

<dd>

**requestOptions: `AutomationJourneys.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>beehiiv.automationJourneys.<a href="./src/api/resources/automationJourneys/client/Client.ts">create</a>(publicationId, automationId, { ...params }) -> Beehiiv.AutomationJourneysCreateResponse</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

Add an existing subscription to an automation flow. Requires the automation to have an active _Add by API_ trigger.

The specified `email` or `subscription_id` will be matched against your existing subscribers.
If an existing subscriber is found, they will be enrolled immediately.

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

```ts
await beehiiv.automationJourneys.create(
    "pub_00000000-0000-0000-0000-000000000000",
    "aut_00000000-0000-0000-0000-000000000000",
    {
        email: "example@example.com",
        subscriptionId: "sub_00000000-0000-0000-0000-000000000000",
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

**publicationId: `string`** — The prefixed ID of the publication object

</dd>

</dl>

<dl>

<dd>

**automationId: `string`** — The prefixed ID of the automation object

</dd>

</dl>

<dl>

<dd>

**request: `Beehiiv.AutomationJourneysCreateRequest`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `AutomationJourneys.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

## Automations

<details><summary> <code>beehiiv.automations.<a href="./src/api/resources/automations/client/Client.ts">list</a>(publicationId, { ...params }) -> Beehiiv.AutomationsListResponse</code> </summary>

<dl>

<dd>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await beehiiv.automations.list("pub_00000000-0000-0000-0000-000000000000");
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

**publicationId: `string`** — The prefixed ID of the publication object

</dd>

</dl>

<dl>

<dd>

**request: `Beehiiv.AutomationsListRequest`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `Automations.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>beehiiv.automations.<a href="./src/api/resources/automations/client/Client.ts">get</a>(publicationId, automationId) -> Beehiiv.AutomationsGetResponse</code> </summary>

<dl>

<dd>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await beehiiv.automations.get("pub_00000000-0000-0000-0000-000000000000", "aut_00000000-0000-0000-0000-000000000000");
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

**publicationId: `string`** — The prefixed ID of the publication object

</dd>

</dl>

<dl>

<dd>

**automationId: `string`** — The prefixed ID of the automation object

</dd>

</dl>

<dl>

<dd>

**requestOptions: `Automations.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

## Subscription Tags

<details><summary> <code>beehiiv.subscriptionTags.<a href="./src/api/resources/subscriptionTags/client/Client.ts">create</a>(publicationId, subscriptionId, { ...params }) -> Beehiiv.SubscriptionTagsCreateResponse</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

Create new subscription tags for a subscription. If the tag does not exist on the publication, it will be created automatically.

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await beehiiv.subscriptionTags.create("publicationId", "subscriptionId", {
    tags: ["Premium"],
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

**publicationId: `string`**

</dd>

</dl>

<dl>

<dd>

**subscriptionId: `string`**

</dd>

</dl>

<dl>

<dd>

**request: `Beehiiv.SubscriptionTagsCreateRequest`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `SubscriptionTags.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>
