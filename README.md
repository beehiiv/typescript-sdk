# Beehiiv TypeScript Library

[![fern shield](https://img.shields.io/badge/%F0%9F%8C%BF-SDK%20generated%20by%20Fern-brightgreen)](https://buildwithfern.com/)

The Beehiiv TypeScript library provides convenient access to the Intercom API from JavaScript/TypeScript.

## Documentation

API reference documentation is available [here](https://developers.beehiiv.com/docs/v2/o3elujhmkik1d-beehiiv-api).

## Reference

A full reference of the SDK is available [here](./reference.md).

## Installation

```bash
npm install --save beehiiv
# or
yarn add beehiiv
```

In Deno (1.25+) you can import by doing: 

```ts
import { Intercom } from "npm:intercom";
```

## Usage

```typescript
import { BeehiivClient, Beehiiv } from 'beehiiv';

const beehiv = new BeehiivClient({
  token: "...", // Defaults to process.env.BEEHIIV_API_KEY
});

const postSubscriptionsResponse = await beehiv.subscriptions.create(
    "pub_...", 
    {
        email: "...@email.com"
    }
);
```

## Request and Response Types

The SDK exports all request and response types as TypeScript interfaces. Simply 
import them under the `Beehiiv` namespace: 

```ts
import { Beehiiv } from "beehiiv"; 

const publication: Beehiiv.Publication = {
    id: "pub_...",
    name: "Some publication",
    referralProgramEnabled: true,
    created: 1713226240
};
```

## Exception Handling

When the API returns a non-success status code (4xx or 5xx response), 
a subclass of [BeehiivError](./src/errors/BeehiivError.ts) will be thrown:

```ts
import { BeehiivError } from 'beehiiv';

try {
   await beehiv.subscriptions.create(
      "pub_11c6387f-1d31-40c7-85ee-4a2da0c63001", 
      {
          email: "bsinghvi2@gmail.com",
      },
  );
} catch (err) {
  if (err instanceof BeehiivError) {
    console.log(err.statusCode); 
    console.log(err.message);
    console.log(err.body); 
  }
}
```

## Beta status

This SDK is in beta, and there may be breaking changes between versions without a major version update. 
Therefore, we recommend pinning the package version to a specific version in your package.json file. 
This way, you can install the same version each time without breaking changes unless you are 
intentionally looking for the latest version.

## Contributing

While we value open-source contributions to this SDK, this library is generated programmatically. 
Additions made directly to this library would have to be moved over to our generation code, 
otherwise they would be overwritten upon the next generated release. Feel free to open a 
PR as a proof of concept, but know that we will not be able to merge it as-is. 
