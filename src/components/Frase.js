import React from 'react';
import styled from '@emotion/styled'

const Contenedor = styled.section`
  background-color: white;
  border-radius: 1.5rem;
  padding: 3rem;
  width: 800px;
  height: 250px;
  margin-top: 4rem;

  @media (max-width: 992px) {
    margin-top: 20px;
  }

  h1 {
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
    position: relative;
    padding-left:4rem;
  
    &::before {
      content: open-quote;
      font-size: 10rem;
      position: absolute;
      left: -1rem;
      top: -2rem
    }
  }

  p {
    text-align: right;
    font-size: 1.4rem;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }
`

const Frase = ({frase}) => {
    return (
      <Contenedor>
        <h1>{frase.quote}</h1>
        <p>- {frase.author}</p>
        </Contenedor>
      );
}
 
export default Frase;