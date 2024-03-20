import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
// eslint-disable-next-line import/no-named-as-default
import useOwnerOf from '../hooks/useOwnerOf'
import video from '../images/1bd78315b23189f7dad5437aeaccdb14.gif'
import player from '../images/play-button-svgrepo-com.svg'

const BgDiv = styled.div`
  background: white;
  width: 100%;
  padding: 20px;
  border-radius: 16px;
`
const BgImageDiv = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
  background: rgba(255, 255, 255, 0.6);
  padding: 10px;
  border-radius: 50%;
`
const Item = ({ item, address }) => {
  const { data: tokenData } = useOwnerOf({
    tokenID: item,
  })
  return (
    <>
      {tokenData === address && (
        <BgDiv>
          <div style={{ position: 'relative' }}>
            <Image src={video} alt="" width={700} height={300} />
            <BgImageDiv>
              <Image src={player} alt="" width={40} height={40} />
            </BgImageDiv>
          </div>
          <div>
            <h1 style={{ color: 'black', fontSize: '20px', margin: '8px 0px' }}>Michelin 3xplorer #{item}</h1>
            <p style={{ color: 'black', marginBottom: '10px' }}>0.1025 BNB</p>
            <p style={{ color: 'black' }}>Last sale: 0.09 BSC</p>
          </div>
        </BgDiv>
      )}
    </>
  )
}

export default Item
