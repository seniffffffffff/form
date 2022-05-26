import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Name } from './components/Name/Name';
import { SecondName } from './components/SecondName/SecondName';
import { Date } from "./components/Date/Date"
import { PhoneNumber } from './components/PhoneNumber/PhoneNumber';
import { Site } from './components/Site/Site';
import { AboutMe } from './components/AboutMe/AboutMe';
import { Stack } from './components/Stack/Stack';
import { DescriptionAboutProject } from "./components/DescriptionAboutProject/DescriptionAboutProject"
import { SuccesButton, NegativeButton } from "./components/Buttons/Buttons"

class App extends React.Component {
  render() {
    return (
      <div className='anketa'> 
       <h1>Создание анкеты</h1>
      <div className='wrapper'>
          <div className='information-about-me'>
            <Name></Name>
            <SecondName></SecondName>
            <Date></Date>
            <PhoneNumber></PhoneNumber>
            <Site></Site>
          </div>
          <div className='technologies'>
          <AboutMe></AboutMe>
          <Stack></Stack>
          <DescriptionAboutProject></DescriptionAboutProject>
          </div>
      </div>
      <div className='buttons'>
            <SuccesButton></SuccesButton>
            <NegativeButton></NegativeButton>
          </div>
      </div>
    )
  }
}

export default App;
