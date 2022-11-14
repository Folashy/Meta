import React from 'react'
import num1 from '../../images/Group 4048.svg'
import num2 from '../../images/Group 4049.svg'
import num3 from '../../images/Group 4050.svg'
import num4 from '../../images/Group 4051.svg'
import num5 from '../../images/beta.svg'
import num6 from '../../images/meee.svg'
import num7 from '../../images/me.svg'
import num8 from '../../images/mee.svg'


import { InspireContainer, Inspired } from './inspireStyle'


function Inspire() {
    return (
    <>
      <InspireContainer>
          <h2>Inspiration for your next adventure</h2>
                <Inspired>
                    <div id='pics1'>
                    <img src={num1} alt='num1' />
                    <img src={num2} alt='num2' />
                    <img src={num3} alt='num3' />
                    <img src={num4} alt='num4' />
                    </div>
                    <div id='pics2'>
                    <img src={num5} alt='num5' />
                    <img src={num6} alt='num6' />
                    <img src={num7} alt='num7' />
                    <img src={num8} alt='num8' />
                    </div>
            </Inspired>
            </InspireContainer>
    </>
  )
}

export default Inspire