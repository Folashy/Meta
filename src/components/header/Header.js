import React from 'react'
import Meta from '../../images/Group.svg'
import { HeaderContainer } from './HeaderStyle'



function Header() {
  return (
      <div>
        <HeaderContainer>
          <img src={Meta} alt='Metabnb' />
          <div className='innerHeader'>
          <div>Home</div>
          <div>Place to stay</div>
          <div>NFT's</div>
          <div>Community</div>
          </div>
          <div>
            <button className= 'connect'>Connect wallet</button>
          </div>
        </HeaderContainer>
        
    </div>
  )
}

export default Header

