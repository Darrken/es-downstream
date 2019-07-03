import React, { Component } from 'react';
import './App.css';
import { ThemeProvider } from 'styled-components';
import viaTheme from 'es-components-via-theme';
import {
  DateInput,
  Fieldset,
  Checkbox,
  Control,
  AdditionalHelp,
  RadioGroup,
  RadioButton,
  Label,
  Dropdown
} from 'es-components';

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={viaTheme}>
        <div className="App">
          <DateInput defaultValue={new Date()} onChange={() => {}}>
            <DateInput.Month name="month" />
            <DateInput.Day name="day" />
            <DateInput.Year name="year" />
          </DateInput>

          <br />
          <br />
          <Control validationState="danger" hasValidationBorder>
            <AdditionalHelp>
              When validation state is set to danger.
            </AdditionalHelp>

            <Fieldset legendContent="Fruits">
              <Checkbox value="Apple" onChange={() => {}}>
                Apple
              </Checkbox>
              <Checkbox value="Strawberry" onChange={() => {}}>
                Strawberry
              </Checkbox>
              <Checkbox value="Banana" onChange={() => {}}>
                Banana
              </Checkbox>
            </Fieldset>
          </Control>

          <br />
          <br />
          <Control validationState="danger" hasValidationBorder>
            <Fieldset legendContent="Please select your preference">
              <RadioGroup name="plates">
                <RadioButton value="meat">Meat</RadioButton>
                <RadioButton value="seafood">Seafood</RadioButton>
                <RadioButton value="vegetarian">Vegetarian</RadioButton>
              </RadioGroup>
            </Fieldset>

            <AdditionalHelp>
              When validation state is set to danger.
            </AdditionalHelp>
          </Control>

          <br />
          <br />
          <Control orientation="inline" validationState="danger">
            <Label htmlFor="dropdown-2">Choose your favorite vehicle</Label>
            <Dropdown id="dropdown-2" aria-describedby="dropdown-2-help">
              <option value="">--</option>
              <option value="car">Car</option>
              <option value="truck">Truck</option>
              <option value="suv">SUV</option>
              <option disabled value="atv">
                ATV
              </option>
              <option value="boat">Boat</option>
            </Dropdown>
            <AdditionalHelp id="dropdown-2-help">
              Here's some extra help!
            </AdditionalHelp>
          </Control>
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
