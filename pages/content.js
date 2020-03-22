import fetch from 'node-fetch'
import Link from 'next/link'

import Frame from '../components/Frame'
import { POST_VIEW_MAPPING } from '../components/views/post_view_mapping';
import { API } from '../constants';

export async function getStaticProps() {
  const res = await fetch(API.endPoint);
  const posts  = await res.json();
  const supportPosts = posts.filter(({ id }) => POST_VIEW_MAPPING[id]);
  return {
    props: {
      posts: supportPosts
    },
  }
}

const renderTitleLink = (post) => {
  return (
    <div className="post-title-link">
      <Link href="/post/[pid]" as={`/post/${post.id}`}>
        <a>{post.title}</a>
      </Link>
      <style>{`
        .post-title-link {
          display: inline-block;
        }
      `}</style>
    </div>
  )
}

const renderPostsTitleList = (posts) => {
  const getPid = p => p.id.substr(5, 5);
  return (
    <ul>
      {posts.map(p => <li key={p.id}><span>{getPid(p)}</span>{renderTitleLink(p)}</li>)}
      <style jsx>{`
        li {
         font-size: 12px;
         margin-bottom: 8px;
         color: #c4c4c4;
        }

        li span {
          color: #F0F0F0; font-family: monospace;
          display: inline-block;
          margin-right: 8px;
        }
      `}</style>
    </ul>
  )
}

export default function Content({ posts }) {
  return (
    <Frame
      RVCenter
      RHCenter
      prevPageSrc="/"
      rightRenderer={() => (
        renderPostsTitleList(posts)
      )}
    />
  );
}
