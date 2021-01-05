import Link from 'next/link'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout>
      <p>
        <Link href='/pigs/pig-list'>
          <a>Check our pig offers</a>
        </Link>
      </p>
    </Layout>
  )
}
