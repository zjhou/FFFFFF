import Frame from '../components/Frame'
import fetch from 'node-fetch'

export async function getStaticProps() {
  const END_POINT = 'https://api.zjh.im/z/posts';
  const res = await fetch(END_POINT);
  const posts  = await res.json();
  return {
    props: {
      posts: posts.slice(0, 5),
    },
  }
}

const renderPostsTitleList = (posts) => {
  const getPid = p => p.id.substr(5, 5);
  return (
    <ul>
      {posts.map(p => <li key={p.id}><span>{getPid(p)}</span>{p.title}</li>)}
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
