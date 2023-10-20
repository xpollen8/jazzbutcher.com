# jazzbutcher.com (node codebase)

This is a [Next.js](https://nextjs.org/) project, styled partly using Tailwind, and backed
by data from the endpoints found at (https://data.jazzbutcher.com/api).

Images and audio/video are delivered either from (https://jazzbutcher.com/), or AWS S3.

## Getting Started

We insist upon node 17+, so install that:

```bash
nvm use 17
```

Then, install dependencies:

```bash
npm i
```

Finally, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Changes to files will auto-update in your browser as you edit files.

## Contributing

Submit changes as new branches, which will be reviewed prior to accepting your changes.

## Vercel

This app will be deployed onto vercel upon changes/merges into the _main_ branch.

The current _main_ branch [is running here](https://jazzbutcher-com.vercel.app/).
