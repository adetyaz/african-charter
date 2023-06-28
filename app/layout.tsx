import '@/styles/globals.scss'
import { inter, montserrat, assistant } from '@/styles/fonts/fonts'

export const metadata = {
	title: 'African Charter',
	description: "Empowering Africa's Progress: Uniting for a Stronger Future",
	icons: {
		icon: '/assets/images/favicon.png',
	},
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body
				className={`${inter.variable} ${montserrat.variable} ${assistant.variable}`}
			>
				{children}
			</body>
		</html>
	)
}
