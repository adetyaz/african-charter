import Image from 'next/image'
import Header from './components/section/Header'
import Hero from './components/section/Hero'
import Testimonial from './components/section/Testimonial'
import Spotlight from './components/section/Spotlight'
import Tools from './components/section/Tools'
import Resources from './components/section/Resources'
import Subscribe from './components/section/Subscribe'
import Faq from './components/section/Faq'
import Partners from './components/section/Partners'
import Footer from './components/section/Footer'

export default function Home() {
	return (
		<>
			<Header />
			<main>
				<Hero />
				<Testimonial />
				<Spotlight />
				<Tools />
				<Resources />
				<Subscribe />
				<Faq />
				<Partners />
			</main>
			<Footer />
		</>
	)
}
