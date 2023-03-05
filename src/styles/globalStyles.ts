import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        background: #F9F9F9;
        font-family: Open-Sans, Helvetica, Sans-Serif;
    }

    #root {
        display: flex;
        flex-direction: row ;
    }
`

export default GlobalStyle
