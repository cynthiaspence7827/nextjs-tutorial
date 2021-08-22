import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>
        Read{" "}
        <Link href="/posts/first-post">
          <a>this page</a>
        </Link>
      </h1>
    </div>
  );
}
