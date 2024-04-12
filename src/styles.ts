import { createGlobalStyle } from 'styled-components'

export const cores = {
  cor1: '#000000', // branca
  cor2: '#f0f0f0', // preta
  cor3: '#fff', //cinza
  cor4: '#0d6efd' // verde
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }

  body {
    background-color: ${cores.cor2};
    color: ${cores.cor1};
    padding-top: 40px;
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
`
