import {Component} from 'react'

import {
  InputElement,
  LabbelElement,
  MemeContainer,
  ButtomElement,
  AppContainer,
  Heading,
  Option,
  Select,
  TextContent,
  Container2,
  Container,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here

class MemeGenerator extends Component {
  state = {
    backGroundImageUrlInput: '',
    topTextInput: '',
    bottomTextInput: '',
    activefontSizesOptionsList: fontSizesOptionsList[0].optionId,
    backGroundImageUrl: '',
    topText: '',
    bottomTexT: '',
    activeFontSizeId: '',
  }

  onChangeBackGround = event => {
    this.setState({backGroundImageUrlInput: event.target.value})
  }

  onChangeTopText = event => {
    this.setState({topTextInput: event.target.value})
  }

  onChangeButtomText = event => {
    this.setState({bottomTextInput: event.target.value})
  }

  onChangeFontSize = event => {
    this.setState({activefontSizesOptionsList: event.target.value})
  }

  onGenerateMeme = event => {
    event.preventDefault()
    const {
      backGroundImageUrlInput,
      topTextInput,
      bottomTextInput,
      activefontSizesOptionsList,
    } = this.state
    this.setState({
      backGroundImageUrl: backGroundImageUrlInput,
      topText: topTextInput,
      bottomTexT: bottomTextInput,
      activeFontSizeID: activefontSizesOptionsList,
    })
  }

  renderInputElement = () => {
    const {
      backGroundImageUrlInput,
      topTextInput,
      bottomTextInput,
      activefontSizesOptionsList,
    } = this.state
    return (
      <MemeContainer onSubmit={this.onGenerateMeme}>
        <LabbelElement htmlFor="image"> Image Url</LabbelElement>
        <InputElement
          id="image"
          type="text"
          value={backGroundImageUrlInput}
          onChange={this.onChangeBackGround}
          placeholder="Enter rhe Image URL"
        />
        <LabbelElement htmlFor="text"> TOP Text</LabbelElement>
        <InputElement
          id="text"
          type="text"
          value={topTextInput}
          onChange={this.onChangeTopText}
          placeholder="Enter the Top Text"
        />
        <LabbelElement htmlFor="text"> Bottom Text</LabbelElement>
        <InputElement
          id="text"
          type="text"
          value={bottomTextInput}
          onChange={this.onChangeButtomText}
          placeholder="Enter the Bottom Text"
        />
        <Select
          id="select"
          onChange={this.onChangeFontSize}
          value={activefontSizesOptionsList}
        >
          {fontSizesOptionsList.map(eachoption => (
            <Option key={eachoption.optionId} value={eachoption.optionId}>
              {eachoption.displayText}
            </Option>
          ))}
        </Select>
        <ButtomElement type="submit">Generate</ButtomElement>
      </MemeContainer>
    )
  }

  renderBack = () => {
    const {backGroundImageUrl, topText, bottomText, activeFontSizeID} =
      this.state

    return (
      <Container2 data-testid="meme" backGroundImage={backGroundImageUrl}>
        <TextContent activeFontSizeID={activeFontSizeID}>{topText}</TextContent>
        <TextContent activeFontSizeID={activeFontSizeID}>
          {bottomText}
        </TextContent>
      </Container2>
    )
  }

  render() {
    return (
      <AppContainer>
        <Heading>Meme Generate</Heading>
        <Container>
          {this.renderBack()}
          {this.renderInputElement()}
        </Container>
      </AppContainer>
    )
  }
}
export default MemeGenerator
