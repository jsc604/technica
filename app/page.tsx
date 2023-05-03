import TopCall from './components/home/TopCall'
import HomeInfo from './components/home/HomeInfo'
import Reviews from './components/home/Reviews'

const placeId = "ChIJFXVnBRzDhVQRZstR0x61Pjg";
const apiKey = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;

async function getReviews() {
  const res = await fetch(
    `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&key=${apiKey}`
  );

  if (!res.ok) {
    throw new Error('Failed to fetch reviews');
  }

  return res.json();
}

export default async function Home() {
  const reviews = await getReviews();

  return (
    <main className="">
      <TopCall />
      <HomeInfo />
      <Reviews reviewData={reviews} />
      {/* <iframe src="https://orbisx.ca/app/embed-greviews/VSV93" name="gReviewsEmbedCode" scrolling="yes" frameBorder="0" height="820px" width="80%" className='mx-auto bg-black'></iframe> */}
    </main>
  )
}
