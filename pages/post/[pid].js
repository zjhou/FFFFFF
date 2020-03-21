import { useRouter } from 'next/router'
import fetch from 'node-fetch'

import { getPostView } from './views';

const END_POINT = 'https://api.zjh.im/z/posts';

export async function getStaticProps() {
  const res = await fetch(END_POINT);
  const posts  = await res.json();
  const postsMapping = {};
  posts.forEach((p) => {
    postsMapping[p.id] = p;
  })
  return {
    props: {
      postsMapping,
    },
  }
}

export async function getStaticPaths() {
  const res = await fetch(END_POINT);
  const posts  = await res.json();

  const paths = posts.map(post => ({
    params: { pid: post.id },
  }));

  return { paths, fallback: false};
}

export default function Post({ postsMapping }) {
  const router = useRouter()
  const { pid } = router.query
  return getPostView(pid)(postsMapping[pid]);
}
