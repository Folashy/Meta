import React from 'react'
import Meta from '../../images/metaPics.svg'
import { MetaBnB, MetaBnbContainer } from './MetaBnbStyle'


function MetaBnb() {
    return (
      <>
      <MetaBnbContainer>
          <div>
              <div>
              <h2 id='title'>Metabnb NFTs</h2>
              <p id='text'>Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTs. These NFTs given our customer access to loads of our exclusive services</p>
              </div>
              <button id='button'>Learn more</button>
          </div>
        <MetaBnB><img src={Meta} alt='Metabnb' /></MetaBnB>
    </MetaBnbContainer>
    </>
  )
}

export default MetaBnb