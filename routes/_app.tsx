import { type PageProps } from "$fresh/server.ts";
export default function App({ Component }: PageProps) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>tinynocturnestudios.com</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="/styles.css" />
      </head>
      {/*
        The menu island records which section the reader is in on `data-section`,
        which lets the whole page shift palette when they reach the about part.
      */}
      <body className="bg-zinc-800 text-zinc-50 font-manrop transition-colors duration-1000 ease-[cubic-bezier(0.45,0,0.55,1)] data-[section=about]:bg-slate-300 data-[section=about]:text-slate-900">
        <Component />
      </body>
    </html>
  );
}
