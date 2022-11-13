import React from 'react'
import group from '../images/header.svg'
import { HomeContainer } from './HomeStyle'

function Home() {
    return (
    <div>
      <HomeContainer>
          <div className='text'>
              <h2>Rent a <span>Place</span> away from <span>Home</span> in the <span>MetaVerse</span></h2> 
              <p>We provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone</p>
              <button>Search</button>
            </div>        
            <div className='pics'>
                <img src={group} alt='Pics' />
                </div>
        </HomeContainer>
    </div>
  )
}

export default Home