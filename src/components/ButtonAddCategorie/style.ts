import styled from 'styled-components'

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
