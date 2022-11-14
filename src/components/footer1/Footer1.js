import React from 'react'
import MB from '../../images/MBtoken.svg'
import MM from '../../images/MetaMask.svg'
import OS from '../../images/OpenSealogo.svg'
import { Footer1Container } from './Footer1Style'

function Footer1() {
  return (
    <div>
      <Footer1Container>
          <div className='footer1'>
        <img src={MB} alt='MB' />
          <h2>MBToken</h2>
        </div>
        <div className='footer2'>
        <img src={MM} alt='MM' />
          <h2 id='token2'>MetaMask</h2>
        </div>
        <div className='footer3'>
        <img src={OS} alt='OS' />
          <h2 id='token3'>OpenSea</h2>
        </div>
      </Footer1Container>
    </div>
  )
}

export default Footer1