This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app), Typescript and Ant Design.

## Getting Started

First, run the development server:

```
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Folder Structure
```
.
├── README.md
├── additional.d.ts
├── components
├── config.ts
├── next-env.d.ts
├── next.config.js
├── node_modules
├── package.json
├── pages
  ├── api  --------------- must stay at root of pages
├── public --------------- static assets go in here
├── styles
├── tree.txt
├── tsconfig.json
└── yarn.lock
```

## Dev Notes:

Be sure to not have a static file with the same name as a file in the `pages/` directory, as this will result in an error.

Read more: https://nextjs.org/docs/messages/conflicting-public-file-page