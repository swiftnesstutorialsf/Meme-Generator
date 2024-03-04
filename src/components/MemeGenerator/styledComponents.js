// Style your components here
import styled from 'styled-components'

export const MemeContainer = styled.form`
  display:flex;
  flex-direction:column;
  justify-content:space-between;
`

export const InputElement = styled.input`
  background-color:#ffffff;
  color:#5a7184;
  font-family:'Open Sans';
  height:40px;
  border-radius:5px;
  border:1px solid #d7dfe9;
`

export const LabbelElement = styled.label`
  color:'#7e858e';
  font-family;'open Sans';
  font-size:10px;
`

export const ButtomElement = styled.buttom`
  color:#fffff; 
  background-color:#069ff;
  font-family:"open Sans;
  border-radius:6px;
  min-width:25px;
  max-width:150px;`

export const AppContainer = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  align-item:center;
  `

export const Heading = styled.h1`
  color:#35469c;
  font-family:'Open Sans';
`

export const Option = styled.option`
  font-size:16px;
`

export const Select = styled.select`
  color:#1e293b;
  background-color:#ffffff;
  font-family:'Open Sans';
  border-radius:5px;

`

export const Container2 = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  `

export const TextContent = styled.p`
  color:#ffffff;
  font-size:${props => props.activefontSizesOptionsList}px;
  font-family:'Open Sans';
`

export const Container = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  `


export const Container3 = styled.div `
  display:flex;
  flex-direction:column;
  width:100%;
  max-width:550px;
`