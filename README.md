## Getting Started

First, install dependencies:
```bash
yarn install
```

Then, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Run tests
```bash
yarn test
```

## Folder structure
I roughly organized each exercise into it's own domain folder.

- Relevant files for exercise 1 can be found in the './src/search' folder.
- Relevant files for exercise 2 can be found in the './src/store' folder.
- The Search screen page container is in './src/pages/index.tsx'.
- All CSS stylesheets are located in './src/styles'.

## Implementation/Design decisions
Typescript was used to enforce type safety and reduce the need for type guard related logic. This assumes that any user of the store will also be using Typescript.

I made sure to not include any 3rd party dependencies except for dev tooling. This is to follow the criteria of minimal abstractions.

I did choose to create some custom hooks and a thin api client wrapper to help with encapsulation and ease of reuse.

Some efforts were made in regards to styling to make the UI functional, minimal, and intuitive. It includes visual feedback for loading and error states, and a layout that tries to minimise layout shifts.

The store is implemented and minimally tested to ensure the basic functionality for exercise 2 are all functional. I am sure there are edge cases that haven't been addressed, but it is robust enough as a toy example completed under time constraints.

