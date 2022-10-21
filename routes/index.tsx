import { Head } from "$fresh/runtime.ts";
import LocalImageSelector from "../islands/LocalImageSelector.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Travel Blog</title>
      </Head>
      <div>
        <LocalImageSelector/>
      </div>
    </>
  );
}
