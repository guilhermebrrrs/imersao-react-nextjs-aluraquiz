import {
	BackgroundImage,
	Footer,
	GitHubCorner,
	Logo,
	QuizContainer,
	Widget,
} from '../src/components'

export default function Home() {
	return (
		<BackgroundImage>
			<QuizContainer>
				<Logo />
				<Widget>
					<Widget.Header>
						<h1>JavaScript Quiz</h1>
					</Widget.Header>
					<Widget.Content>
						<p>Digite seu nome para começar a jogar</p>
						<Widget.Input />
						<Widget.Button>Jogar!</Widget.Button>
					</Widget.Content>
				</Widget>
				<Widget>
					<Widget.Content>
						<h1>JavaScript Quiz</h1>
						<p>
							Teste suas habilidades em JavaScript no Alura Quiz.
							<br />
							<br />O quanto você sabe de JavaScript?
						</p>
					</Widget.Content>
				</Widget>
				<Footer />
			</QuizContainer>
			<GitHubCorner />
		</BackgroundImage>
	)
}
