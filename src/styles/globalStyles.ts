import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        background: teal;
        font-family: Open-Sans, Helvetica, Sans-Serif;
    }

    #root {
        display: flex;
        flex-direction: row ;
    }
`

export default GlobalStyle
