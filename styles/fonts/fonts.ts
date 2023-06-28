import { Inter, Montserrat, Assistant } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const montserrat = Montserrat({
	subsets: ['latin'],
	variable: '--font-montserrat',
})
const assistant = Assistant({
	subsets: ['latin'],
	variable: '--font-assistant',
})

export { inter, montserrat, assistant }
