import Image from 'next/image'
import TopCall from './components/home/TopCall'

export default function Home() {
  return (
    <main className="">
      <TopCall />
      <iframe src="https://orbisx.ca/app/embed-greviews/VSV93" name="gReviewsEmbedCode" scrolling="yes" frameBorder="0" height="800px" width="80%" className='mx-auto'></iframe>
    </main>
  )
}
