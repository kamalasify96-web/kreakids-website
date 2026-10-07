import { BASE_PATH } from "@/lib/assets";

// Static hosting can't run a server redirect, so the root page forwards to /en/ itself.
export default function Root() {
  const to = `${BASE_PATH}/en/`;
  return (
    <html lang="en">
      <head>
        <meta httpEquiv="refresh" content={`0; url=${to}`} />
        <title>KreaKid&apos;s</title>
      </head>
      <body>
        <p>Redirecting to <a href={to}>KreaKid&apos;s</a>…</p>
      </body>
    </html>
  );
}
