import styled from 'styled-components'

export const Aside = styled.aside`
  width: 250px;
  height: 100vh;
  background-color: #343838;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;

  span {
    width: 100%;
    color: #8D8D8D;
    text-transform: uppercase;
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 19px;
    letter-spacing: 0.195em;
    margin: 40px 0 29px 32px;
  }
`

export const Diviser = styled.div`
  width: 100%;
  height: 1px;
  background-color: #454545;
  margin-top: 23px;
`
export const Button = styled.button`
  width: 240px;
  height: 35px;
  border-radius: 5px;
  background-color: #585858;
  border: none;
  margin-bottom: 11px;
  padding-left: 31px;
  
  text-align: left;
  color: #fff;
  text-transform: uppercase;
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 19px;
  letter-spacing: 0.195em;

  &:hover {
    background-color: #515151;
  }
`
