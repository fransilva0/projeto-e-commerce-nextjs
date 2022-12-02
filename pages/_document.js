import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
      <Html lang="pt-BR">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300&display=swap" rel="stylesheet" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Play One</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
}

