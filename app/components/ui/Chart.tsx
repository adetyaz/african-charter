'use client'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRef, useEffect } from 'react'

gsap.registerPlugin(ScrollTrigger)

const Chart = () => {
	const chartRef = useRef<SVGSVGElement>(null)

	useEffect(() => {
		gsap.from([chartRef.current?.children], {
			opacity: 0,
			stagger: 0.2,
			duration: 0.2,
			ease: 'Back.easeInOut',
			scrollTrigger: {
				trigger: '.tools',
				start: 'top 100px',
			},
		})
	}, [])

	return (
		<svg
			width='657'
			height='657'
			viewBox='0 0 657 657'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			ref={chartRef}
		>
			<path
				d='M628.315 413.867C637.113 416.37 642.257 425.548 639.312 434.209C626.389 472.222 606.579 507.586 580.826 538.511C555.073 569.436 523.879 595.319 488.832 614.909C480.847 619.372 470.89 615.975 466.836 607.775L408.843 490.485C404.788 482.286 408.204 472.421 415.953 467.561C430.595 458.377 443.722 446.917 454.827 433.583C465.931 420.249 474.826 405.264 481.207 389.202C484.585 380.701 493.668 375.557 502.466 378.06L628.315 413.867Z'
				fill='#875E73'
			/>
			<path
				d='M618.817 215.253C627.335 211.921 636.985 216.116 639.882 224.792C656.035 273.166 660.682 324.648 653.454 375.133C652.157 384.188 643.415 390.042 634.438 388.29L506.016 363.231C497.038 361.479 491.269 352.779 492.107 343.67C493.931 323.835 492.125 303.83 486.778 284.642C484.323 275.83 488.44 266.237 496.959 262.906L618.817 215.253Z'
				fill='#BBE4C1'
			/>
			<path
				d='M445.819 40.0951C449.255 31.6182 458.935 27.4941 467.228 31.3543C531.617 61.3265 584.55 111.413 618.032 174.048C622.344 182.115 618.761 192.008 610.487 195.908L492.13 251.69C483.855 255.59 474.057 251.989 469.342 244.15C453.951 218.555 431.85 197.643 405.444 183.688C397.357 179.414 393.22 169.829 396.657 161.352L445.819 40.0951Z'
				fill='#FCDF4C'
			/>
			<path
				d='M173.497 58.7913C168.934 50.8636 171.644 40.6975 179.792 36.5404C215.587 18.2779 254.478 6.728 294.536 2.51625C334.594 -1.6955 375.037 1.51307 413.848 11.9314C422.682 14.3029 427.447 23.683 424.633 32.3865L384.374 156.882C381.56 165.586 372.231 170.272 363.288 168.349C346.374 164.713 328.956 163.77 311.682 165.586C294.407 167.402 277.566 171.948 261.778 179.022C253.431 182.763 243.332 180.119 238.769 172.192L173.497 58.7913Z'
				fill='#FEB7A6'
			/>
			<path
				d='M126.255 92.1839C120.305 85.2371 121.087 74.7453 128.325 69.1527C129.697 68.0928 131.077 67.0439 132.466 66.0059C139.792 60.5287 150.11 62.5833 155.21 70.1766L232.059 184.588C235.009 188.981 233.821 194.911 229.608 198.113C225.395 201.315 219.363 200.873 215.92 196.854L126.255 92.1839Z'
				fill='#AC8D9B'
			/>
			<path
				d='M17.66 317.293C8.51889 316.96 1.33572 309.271 2.13031 300.159C8.29987 229.404 37.287 162.544 84.7139 109.677C90.8221 102.868 101.344 102.856 107.836 109.3L200.699 201.476C207.191 207.92 207.155 218.359 201.398 225.468C182.603 248.678 170.5 276.594 166.406 306.178C165.152 315.239 157.557 322.402 148.416 322.068L17.66 317.293Z'
				fill='#CAC8FD'
			/>
			<path
				d='M104.29 544.381C97.6942 550.718 87.174 550.534 81.1775 543.627C34.6186 489.993 6.72491 422.67 1.70927 351.824C1.0633 342.7 8.3708 335.13 17.5161 334.945L148.333 332.302C157.478 332.117 164.956 339.402 166.061 348.482C169.672 378.13 181.319 406.239 199.734 429.753C205.374 436.954 205.24 447.393 198.644 453.73L104.29 544.381Z'
				fill='#FFAAB0'
			/>
			<path
				d='M243.322 628.06C240.81 636.855 231.626 641.99 222.969 639.037C184.097 625.78 148.059 605.337 116.735 578.775C109.758 572.859 109.453 562.342 115.714 555.673L205.267 460.277C211.527 453.608 221.963 453.353 229.23 458.909C241.128 468.007 254.217 475.432 268.131 480.976C276.628 484.362 281.764 493.451 279.252 502.246L243.322 628.06Z'
				fill='#8F8686'
			/>
			<path
				d='M439.105 619.848C442.345 628.402 438.047 638.005 429.34 640.809C380.795 656.441 329.266 660.535 278.862 652.764C269.821 651.37 264.061 642.565 265.909 633.607L292.348 505.462C294.196 496.504 302.958 490.829 312.057 491.764C331.872 493.801 351.895 492.211 371.14 487.07C379.977 484.71 389.525 488.931 392.765 497.485L439.105 619.848Z'
				fill='#DFA4E8'
			/>
		</svg>
	)
}

export default Chart
