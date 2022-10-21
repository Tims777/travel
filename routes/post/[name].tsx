import { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";

interface BlogPost {
  title: string;
  published: Date;
}

export const handler: Handlers<BlogPost> = {
  async GET(_, ctx) {
    const { name } = ctx.params;
    const resp = await fetch(`http://localhost:8000/post.json?name=${name}`);
    const post: BlogPost = await resp.json();
    return ctx.render(post);
  },
};

export default function ShowPost(props: PageProps<BlogPost>) {
  return (
    <>
    <Head>
      <title>{props.data.title}</title>
    </Head>
    <div class="post">
      <h1>{props.data.title}</h1>
      <p>This post was published on {new Date(props.data.published).toLocaleDateString()}</p>
    </div>
    </>
  );
}
