import styled from 'styled-components'

export const Main = styled.main`
  width: 100%;
  margin-left: 250px;
`
export const Section = styled.section`
  width: 100%;
  height: 90px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 52px 0 52px;

  h1 {
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 0.195em;
  }
`

export const ButtonAdd = styled.button<{ bg: string, color: string }>`
  width: 247px;
  height: 44.72px;
  color: ${({ color }) => color};
  background-color: ${({ bg }) => bg};
  border-radius: 5px;
  border: solid 1px #343838;
  margin-left: 20px;

  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: 0.195em;

  img {
    margin-right: 8px;
  }
`
export const CardTotal = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 22.51px;
`
export const Cardbody = styled.div<{ bg: string }>`
  width: 400px;
  height: 119px;
  background-color: ${({ bg }) => bg};
  border-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`
export const ValueTotal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 18px;
  letter-spacing: 0.195em;
  color: #fff;

  span {
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 58px;
    letter-spacing: 0.195em;
    color: #fff;
  }
`
