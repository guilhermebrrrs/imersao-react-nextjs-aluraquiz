import styled from 'styled-components'

const Widget = styled.div`
	margin: 24px 0;
	border: 2px solid ${({ theme }) => theme.colors.primary};
	background-color: ${({ theme }) => theme.colors.mainBg};
	border-radius: 4px;
	overflow: hidden;

	p {
		font-size: 14px;
		font-weight: 400;
		line-height: 1;
	}
`

Widget.Header = styled.header`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	padding: 18px 32px;
	background-color: ${({ theme }) => theme.colors.primary};

	h1,
	h2,
	h3 {
		font-size: 16px;
		font-weight: 700;
		line-height: 1;
		margin: 0;
		color: black;
	}

	* {
		margin: 0;
	}
`

Widget.Content = styled.header`
	padding: 24px 32px 32px 32px;
	& > *:first-child {
		margin-top: 0;
	}
	& > *:last-child {
		margin-bottom: 0;
	}

	ul {
		list-style: none;
		padding: 0;
	}

	h1 {
		text-align: center;
	}

	p {
		text-align: center;
		line-height: 17px;
		font-weight: 700;
	}
`

Widget.Input = styled.input`
	width: 100%;
	margin: 17px 0;
	color: whitesmoke;
	padding: 13px;
	background-color: ${({ theme }) => theme.colors.mainBg};
	border: 2px solid ${({ theme }) => theme.colors.primary};
	border-radius: 4px;
	transition: 100ms ease-in-out;
	transition-property: focus;

	&:focus {
		border: 2px solid whitesmoke;
	}
`

Widget.Button = styled.button`
	width: 100%;
	background-color: ${({ theme }) => theme.colors.primary};
	color: black;
	font-size: 17px;
	font-weight: 700;
	padding: 13px;
	border: none;
	border-radius: 4px;
	transition: 100ms ease-in-out;

	&:focus,
	&:hover {
		background-color: #33a7eebb;
		color: whitesmoke;
	}
`

export { Widget }
