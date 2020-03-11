import React from 'react';
import Card from '../card';
import '../../scss/cardStyling.scss';
import '../../scss/buttonStyle.scss';
import Statistics from '../../images/statistics.png';
import Ai from '../../images/ai.jpg';
import Button from '../button';

const DataScience = () => {
    return (
        <React.Fragment>
          <Card styles = "dataScience1" image = {Statistics}/>
          <Card styles = "dataScience2" image = {Ai}/>
          <Button text = "Back" styles = "back"/>
        </React.Fragment>
      );
}
 
export default DataScience;