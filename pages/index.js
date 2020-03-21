import Link from 'next/link'
import Frame from '../components/Frame'
import About from '../components/About'
import Cover from '../components/Cover'

const CoverBgSrc = "https://images-repo.sgp1.digitaloceanspaces.com/5e66d6b56958a21503d53ceb-WechatIMG24.jpeg";

const LinkToContent = ({label}) => (<Link href="/content"><a>{label}</a></Link>);

export default function Index() {
  return (
    <Frame
      leftRenderer={() => <About />}
      rightRenderer={() => (
        <Cover
          bgSrc={CoverBgSrc}
          title="蛋"
          subTitle={<LinkToContent label="2020" />}
        />
      )}
    />
  );
}
