import styled from 'styled-components'
import db from '../../db.json'

const Logo = styled.div`
	background-image: url(${db.js_logo});
	background-repeat: no-repeat;
	background-position: center;
	height: 180px;
	margin: auto;
`

export { Logo }
