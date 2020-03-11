import React from 'react';
import Card from '../card';
import '../../scss/cardStyling.scss';
import '../../scss/buttonStyle.scss';
import Button from '../button';
import Android from '../../images/android.png';
import Ios from '../../images/ios.png'

const Mobile = () => {
    return (
        <React.Fragment>
        <Card styles = "mobile1" image = {Android}/>
        <Card styles = "mobile2" image = {Ios}/>
        <Button text = "Back" styles = "back"/>
      </React.Fragment>
      );
}
 
export default Mobile;