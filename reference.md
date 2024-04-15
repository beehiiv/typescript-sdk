## Publications

<details><summary> <code>beehiiv.publications.<a href="./src/api/resources/publications/client/Client.ts">getPublications</a>({ ...params }) -> beehiiv.PublicationsGetPublicationsResponse</code> </summary>

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
await beehiiv.publications.getPublications();
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

**request: `beehiiv.PublicationsGetPublicationsRequest`**

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

<details><summary> <code>beehiiv.publications.<a href="./src/api/resources/publications/client/Client.ts">getPublicationsPublicationId</a>(publicationId, { ...params }) -> beehiiv.PublicationsGetPublicationsPublicationIdResponse</code> </summary>

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
await beehiiv.publications.getPublicationsPublicationId("pub_00000000-0000-0000-0000-000000000000");
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

**request: `beehiiv.PublicationsGetPublicationsPublicationIdRequest`**

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

<details><summary> <code>beehiiv.posts.<a href="./src/api/resources/posts/client/Client.ts">getPosts</a>(publicationId, { ...params }) -> beehiiv.PostsGetPostsResponse</code> </summary>

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
await beehiiv.posts.getPosts("pub_00000000-0000-0000-0000-000000000000");
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

**request: `beehiiv.PostsGetPostsRequest`**

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

<details><summary> <code>beehiiv.posts.<a href="./src/api/resources/posts/client/Client.ts">getPostsPostId</a>(postId, publicationId, { ...params }) -> beehiiv.PostsGetPostsPostIdResponse</code> </summary>

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
await beehiiv.posts.getPostsPostId(
    "post_00000000-0000-0000-0000-000000000000",
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

**request: `beehiiv.PostsGetPostsPostIdRequest`**

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

<details><summary> <code>beehiiv.posts.<a href="./src/api/resources/posts/client/Client.ts">deletePostsPostId</a>(postId, publicationId) -> beehiiv.PostsDeletePostsPostIdResponse</code> </summary>

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
await beehiiv.posts.deletePostsPostId(
    "post_00000000-0000-0000-0000-000000000000",
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

<details><summary> <code>beehiiv.subscriptions.<a href="./src/api/resources/subscriptions/client/Client.ts">getSubscriptions</a>(publicationId, { ...params }) -> beehiiv.SubscriptionsGetSubscriptionsResponse</code> </summary>

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
await beehiiv.subscriptions.getSubscriptions("pub_00000000-0000-0000-0000-000000000000", {
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

**request: `beehiiv.SubscriptionsGetSubscriptionsRequest`**

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

<details><summary> <code>beehiiv.subscriptions.<a href="./src/api/resources/subscriptions/client/Client.ts">postSubscriptions</a>(publicationId, { ...params }) -> beehiiv.SubscriptionsPostSubscriptionsResponse</code> </summary>

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
await beehiiv.subscriptions.postSubscriptions("pub_00000000-0000-0000-0000-000000000000", {
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

**request: `beehiiv.SubscriptionsPostSubscriptionsRequest`**

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

<details><summary> <code>beehiiv.subscriptions.<a href="./src/api/resources/subscriptions/client/Client.ts">putSubscriptionsBulkUpdateStatus</a>(publicationId, { ...params }) -> beehiiv.SubscriptionsPutSubscriptionsBulkUpdateStatusResponse</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

Bulk update subscriptions' Status value

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
await beehiiv.subscriptions.putSubscriptionsBulkUpdateStatus("pub_00000000-0000-0000-0000-000000000000", {
    subscriptionIds: ["subscription_ids"],
    newStatus: beehiiv.SubscriptionsPutSubscriptionsBulkUpdateStatusRequestNewStatus.Active,
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

**request: `beehiiv.SubscriptionsPutSubscriptionsBulkUpdateStatusRequest`**

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

<details><summary> <code>beehiiv.subscriptions.<a href="./src/api/resources/subscriptions/client/Client.ts">patchSubscriptionsBulkUpdateStatus</a>(publicationId, { ...params }) -> beehiiv.SubscriptionsPatchSubscriptionsBulkUpdateStatusResponse</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

Bulk update subscriptions' Status value

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
await beehiiv.subscriptions.patchSubscriptionsBulkUpdateStatus("pub_00000000-0000-0000-0000-000000000000", {
    subscriptionIds: ["subscription_ids"],
    newStatus: beehiiv.SubscriptionsPatchSubscriptionsBulkUpdateStatusRequestNewStatus.Active,
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

**request: `beehiiv.SubscriptionsPatchSubscriptionsBulkUpdateStatusRequest`**

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

<details><summary> <code>beehiiv.subscriptions.<a href="./src/api/resources/subscriptions/client/Client.ts">getSubscriptionsSubscriptionId</a>(subscriptionId, publicationId, { ...params }) -> beehiiv.SubscriptionsGetSubscriptionsSubscriptionIdResponse</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

Retrieve a single subscription belonging to a specific publication

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
await beehiiv.subscriptions.getSubscriptionsSubscriptionId(
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

**request: `beehiiv.SubscriptionsGetSubscriptionsSubscriptionIdRequest`**

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

<details><summary> <code>beehiiv.subscriptions.<a href="./src/api/resources/subscriptions/client/Client.ts">putSubscriptionsSubscriptionId</a>(subscriptionId, publicationId, { ...params }) -> beehiiv.SubscriptionsPutSubscriptionsSubscriptionIdResponse</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

Update a subscriber

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
await beehiiv.subscriptions.putSubscriptionsSubscriptionId(
    "sub_00000000-0000-0000-0000-000000000000",
    "pub_00000000-0000-0000-0000-000000000000",
    {
        tier: beehiiv.SubscriptionsPutSubscriptionsSubscriptionIdRequestTier.Premium,
        unsubscribe: false,
        customFields: [
            {
                name: "First Name",
                value: "JOHN",
            },
            {
                name: "Birthday",
                delete: true,
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

**request: `beehiiv.SubscriptionsPutSubscriptionsSubscriptionIdRequest`**

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

<details><summary> <code>beehiiv.subscriptions.<a href="./src/api/resources/subscriptions/client/Client.ts">deleteSubscriptionsSubscriptionId</a>(subscriptionId, publicationId) -> Record<string, unknown></code> </summary>

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
await beehiiv.subscriptions.deleteSubscriptionsSubscriptionId(
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

<details><summary> <code>beehiiv.subscriptions.<a href="./src/api/resources/subscriptions/client/Client.ts">getSubscriptionsSubscriberId</a>(publicationId, subscriberId, { ...params }) -> beehiiv.SubscriptionsGetSubscriptionsSubscriberIdResponse</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

Retrieve a single subscription belonging to a specific subscriber in a specific publication

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
await beehiiv.subscriptions.getSubscriptionsSubscriberId(
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

**publicationId: `string`** — The prefixed ID of the publication object

</dd>

</dl>

<dl>

<dd>

**subscriberId: `string`** — The ID of the subscriber object

</dd>

</dl>

<dl>

<dd>

**request: `beehiiv.SubscriptionsGetSubscriptionsSubscriberIdRequest`**

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

<details><summary> <code>beehiiv.subscriptions.<a href="./src/api/resources/subscriptions/client/Client.ts">getSubscriptionsEmail</a>(publicationId, email, { ...params }) -> beehiiv.SubscriptionsGetSubscriptionsEmailResponse</code> </summary>

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
await beehiiv.subscriptions.getSubscriptionsEmail("pub_00000000-0000-0000-0000-000000000000", "work@example.com");
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

**request: `beehiiv.SubscriptionsGetSubscriptionsEmailRequest`**

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

<details><summary> <code>beehiiv.subscriptions.<a href="./src/api/resources/subscriptions/client/Client.ts">putSubscriptionsBulkActionsBulkUpdate</a>(publicationId, { ...params }) -> beehiiv.SubscriptionsPutSubscriptionsBulkActionsBulkUpdateResponse</code> </summary>

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
await beehiiv.subscriptions.putSubscriptionsBulkActionsBulkUpdate("publicationId");
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

**request: `beehiiv.SubscriptionsPutSubscriptionsBulkActionsBulkUpdateRequest`**

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

<details><summary> <code>beehiiv.subscriptions.<a href="./src/api/resources/subscriptions/client/Client.ts">patchSubscriptionsBulkActionsBulkUpdate</a>(publicationId, { ...params }) -> beehiiv.SubscriptionsPatchSubscriptionsBulkActionsBulkUpdateResponse</code> </summary>

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
await beehiiv.subscriptions.patchSubscriptionsBulkActionsBulkUpdate("publicationId");
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

**request: `beehiiv.SubscriptionsPatchSubscriptionsBulkActionsBulkUpdateRequest`**

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

<details><summary> <code>beehiiv.segments.<a href="./src/api/resources/segments/client/Client.ts">getPublicationsPublicationIdSegments</a>(publicationId, { ...params }) -> beehiiv.SegmentsGetPublicationsPublicationIdSegmentsResponse</code> </summary>

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
await beehiiv.segments.getPublicationsPublicationIdSegments("pub_00000000-0000-0000-0000-000000000000");
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

**request: `beehiiv.SegmentsGetPublicationsPublicationIdSegmentsRequest`**

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

<details><summary> <code>beehiiv.segments.<a href="./src/api/resources/segments/client/Client.ts">getPublicationsPublicationIdSegmentsSegmentId</a>(publicationId, segmentId) -> beehiiv.SegmentsGetPublicationsPublicationIdSegmentsSegmentIdResponse</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

Retrieve a single segment belonging to a specific publication

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
await beehiiv.segments.getPublicationsPublicationIdSegmentsSegmentId(
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

<details><summary> <code>beehiiv.segments.<a href="./src/api/resources/segments/client/Client.ts">deletePublicationsPublicationIdSegmentsSegmentId</a>(publicationId, segmentId) -> Record<string, unknown></code> </summary>

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
await beehiiv.segments.deletePublicationsPublicationIdSegmentsSegmentId(
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

<details><summary> <code>beehiiv.segments.<a href="./src/api/resources/segments/client/Client.ts">getPublicationsPublicationIdSegmentsSegmentIdResults</a>(publicationId, segmentId, { ...params }) -> beehiiv.SegmentsGetPublicationsPublicationIdSegmentsSegmentIdResultsResponse</code> </summary>

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
await beehiiv.segments.getPublicationsPublicationIdSegmentsSegmentIdResults(
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

**request: `beehiiv.SegmentsGetPublicationsPublicationIdSegmentsSegmentIdResultsRequest`**

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

<details><summary> <code>beehiiv.emailBlasts.<a href="./src/api/resources/emailBlasts/client/Client.ts">getPublicationsPublicationIdEmailBlasts</a>(publicationId, { ...params }) -> beehiiv.EmailBlastsGetPublicationsPublicationIdEmailBlastsResponse</code> </summary>

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
await beehiiv.emailBlasts.getPublicationsPublicationIdEmailBlasts("pub_00000000-0000-0000-0000-000000000000");
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

**request: `beehiiv.EmailBlastsGetPublicationsPublicationIdEmailBlastsRequest`**

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

<details><summary> <code>beehiiv.emailBlasts.<a href="./src/api/resources/emailBlasts/client/Client.ts">getPublicationsPublicationIdEmailBlastsEmailBlastId</a>(publicationId, emailBlastId, { ...params }) -> beehiiv.EmailBlastsGetPublicationsPublicationIdEmailBlastsEmailBlastIdResponse</code> </summary>

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
await beehiiv.emailBlasts.getPublicationsPublicationIdEmailBlastsEmailBlastId(
    "pub_00000000-0000-0000-0000-000000000000",
    "blast_00000000-0000-0000-0000-000000000000"
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

**emailBlastId: `string`** — The prefixed ID of the email blast object

</dd>

</dl>

<dl>

<dd>

**request: `beehiiv.EmailBlastsGetPublicationsPublicationIdEmailBlastsEmailBlastIdRequest`**

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

<details><summary> <code>beehiiv.referralProgram.<a href="./src/api/resources/referralProgram/client/Client.ts">getPublicationsPublicReferralProgram</a>(publicationId, { ...params }) -> beehiiv.ReferralProgramGetPublicationsPublicReferralProgramResponse</code> </summary>

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
await beehiiv.referralProgram.getPublicationsPublicReferralProgram("pub_00000000-0000-0000-0000-000000000000");
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

**request: `beehiiv.ReferralProgramGetPublicationsPublicReferralProgramRequest`**

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

<details><summary> <code>beehiiv.customFields.<a href="./src/api/resources/customFields/client/Client.ts">getPublicationsPublicationIdCustomFields</a>(publicationId) -> beehiiv.CustomFieldsGetPublicationsPublicationIdCustomFieldsResponse</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

Retrieve all custom fields belonging to a specific publication

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
await beehiiv.customFields.getPublicationsPublicationIdCustomFields("publicationId");
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

**requestOptions: `CustomFields.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>beehiiv.customFields.<a href="./src/api/resources/customFields/client/Client.ts">postPublicationsPublicationIdCustomFields</a>(publicationId, { ...params }) -> beehiiv.CustomFieldsPostPublicationsPublicationIdCustomFieldsResponse</code> </summary>

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
await beehiiv.customFields.postPublicationsPublicationIdCustomFields("publicationId", {
    kind: beehiiv.CustomFieldsPostPublicationsPublicationIdCustomFieldsRequestKind.String,
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

**request: `beehiiv.CustomFieldsPostPublicationsPublicationIdCustomFieldsRequest`**

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

<details><summary> <code>beehiiv.customFields.<a href="./src/api/resources/customFields/client/Client.ts">getPublicationsPublicationIdCustomFieldsId</a>(publicationId, id) -> beehiiv.CustomFieldsGetPublicationsPublicationIdCustomFieldsIdResponse</code> </summary>

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
await beehiiv.customFields.getPublicationsPublicationIdCustomFieldsId("publicationId", "id");
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

<details><summary> <code>beehiiv.customFields.<a href="./src/api/resources/customFields/client/Client.ts">putPublicationsPublicationIdCustomFieldsId</a>(publicationId, id, { ...params }) -> beehiiv.CustomFieldsPutPublicationsPublicationIdCustomFieldsIdResponse</code> </summary>

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
await beehiiv.customFields.putPublicationsPublicationIdCustomFieldsId("publicationId", "id");
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

**request: `beehiiv.CustomFieldsPutPublicationsPublicationIdCustomFieldsIdRequest`**

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

<details><summary> <code>beehiiv.customFields.<a href="./src/api/resources/customFields/client/Client.ts">deletePublicationsPublicationIdCustomFields</a>(publicationId, id) -> beehiiv.CustomFieldsDeletePublicationsPublicationIdCustomFieldsResponse</code> </summary>

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
await beehiiv.customFields.deletePublicationsPublicationIdCustomFields("publicationId", "id");
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

<details><summary> <code>beehiiv.customFields.<a href="./src/api/resources/customFields/client/Client.ts">patchPublicationsPublicationIdCustomFieldsId</a>(publicationId, id, { ...params }) -> beehiiv.CustomFieldsPatchPublicationsPublicationIdCustomFieldsIdResponse</code> </summary>

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
await beehiiv.customFields.patchPublicationsPublicationIdCustomFieldsId("publicationId", "id");
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

**request: `beehiiv.CustomFieldsPatchPublicationsPublicationIdCustomFieldsIdRequest`**

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

<details><summary> <code>beehiiv.bulkSubscriptionUpdates.<a href="./src/api/resources/bulkSubscriptionUpdates/client/Client.ts">getPublicationsPublicationIdSubcriptionUpdates</a>(publicationId) -> beehiiv.BulkSubscriptionUpdatesGetPublicationsPublicationIdSubcriptionUpdatesResponse</code> </summary>

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
await beehiiv.bulkSubscriptionUpdates.getPublicationsPublicationIdSubcriptionUpdates("publicationId");
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

<details><summary> <code>beehiiv.bulkSubscriptionUpdates.<a href="./src/api/resources/bulkSubscriptionUpdates/client/Client.ts">getPublicationsPublicationIdSubcriptionUpdatesId</a>(publicationId, id) -> beehiiv.BulkSubscriptionUpdatesGetPublicationsPublicationIdSubcriptionUpdatesIdResponse</code> </summary>

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
await beehiiv.bulkSubscriptionUpdates.getPublicationsPublicationIdSubcriptionUpdatesId("publicationId", "id");
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

<details><summary> <code>beehiiv.automationJourneys.<a href="./src/api/resources/automationJourneys/client/Client.ts">getPublicationsPublicationIdAutomationsAutomationIdJourneys</a>(publicationId, automationId, { ...params }) -> beehiiv.AutomationJourneysGetPublicationsPublicationIdAutomationsAutomationIdJourneysResponse</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

Retrieve all automation journeys associated with an automation that belongs to a specific publication

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
await beehiiv.automationJourneys.getPublicationsPublicationIdAutomationsAutomationIdJourneys(
    "pub_00000000-0000-0000-0000-000000000000",
    "aut_00000000-0000-0000-0000-000000000000",
    {
        subscriptionId: "sub_00000000-0000-0000-0000-000000000000",
        email: "clark@dailyplanet.com",
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

**request: `beehiiv.AutomationJourneysGetPublicationsPublicationIdAutomationsAutomationIdJourneysRequest`**

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

<details><summary> <code>beehiiv.automationJourneys.<a href="./src/api/resources/automationJourneys/client/Client.ts">postPublicationsPublicationIdAutomationsAutomationIdJourneys</a>(publicationId, automationId, { ...params }) -> beehiiv.AutomationJourneysPostPublicationsPublicationIdAutomationsAutomationIdJourneysResponse</code> </summary>

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

Looking to enroll new subscribers? Use the **[Subscriptions Create](https://beehiiv.stoplight.io/docs/v2/1a77a563675ee-create)** endpoint instead and specify the `automation_ids` param.

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
await beehiiv.automationJourneys.postPublicationsPublicationIdAutomationsAutomationIdJourneys(
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

**request: `beehiiv.AutomationJourneysPostPublicationsPublicationIdAutomationsAutomationIdJourneysRequest`**

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

<details><summary> <code>beehiiv.automationJourneys.<a href="./src/api/resources/automationJourneys/client/Client.ts">getPublicationsPublicationIdAutomationsAutomationIdJourneysAutomationJourneyId</a>(publicationId, automationId, automationJourneyId) -> beehiiv.AutomationJourneysGetPublicationsPublicationIdAutomationsAutomationIdJourneysAutomationJourneyIdResponse</code> </summary>

<dl>

<dd>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await beehiiv.automationJourneys.getPublicationsPublicationIdAutomationsAutomationIdJourneysAutomationJourneyId(
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

## Automations

<details><summary> <code>beehiiv.automations.<a href="./src/api/resources/automations/client/Client.ts">getPublicationsPublicationIdAutomations</a>(publicationId, { ...params }) -> beehiiv.AutomationsGetPublicationsPublicationIdAutomationsResponse</code> </summary>

<dl>

<dd>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await beehiiv.automations.getPublicationsPublicationIdAutomations("pub_00000000-0000-0000-0000-000000000000");
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

**request: `beehiiv.AutomationsGetPublicationsPublicationIdAutomationsRequest`**

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

<details><summary> <code>beehiiv.automations.<a href="./src/api/resources/automations/client/Client.ts">getPublicationsPublicationIdAutomationsAutomationId</a>(publicationId, automationId) -> beehiiv.AutomationsGetPublicationsPublicationIdAutomationsAutomationIdResponse</code> </summary>

<dl>

<dd>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await beehiiv.automations.getPublicationsPublicationIdAutomationsAutomationId(
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

<details><summary> <code>beehiiv.subscriptionTags.<a href="./src/api/resources/subscriptionTags/client/Client.ts">postPublicationsPublicationIdSubscriptionsSubscriptionIdTags</a>(publicationId, subscriptionId, { ...params }) -> beehiiv.SubscriptionTagsPostPublicationsPublicationIdSubscriptionsSubscriptionIdTagsResponse</code> </summary>

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
await beehiiv.subscriptionTags.postPublicationsPublicationIdSubscriptionsSubscriptionIdTags(
    "publicationId",
    "subscriptionId",
    {
        tags: ["Premium"],
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

**request: `beehiiv.SubscriptionTagsPostPublicationsPublicationIdSubscriptionsSubscriptionIdTagsRequest`**

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
