import Link from 'next/link'
import pigData from '../../pigData/pigData.json'
import PigCard from '../../components/PigCard'

export async function getStaticProps() {
  const allPigData = pigData;
  return {
    props: {
      allPigData
    }
  }
}

export default function PigList ({ allPigData }){
  return (
    <>
      <h3>Our pig offers for 2021</h3>
      <div>
        {allPigData.pigs.map((pig, index) => <PigCard id={pig.id} key={index} breed={pig.breed} />)}
      </div>
      <Link href='/'>
        <a>Back to home page</a>
      </Link>
    </>
  )
}