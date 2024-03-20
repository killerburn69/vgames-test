import Image from 'next/image'
import { useState } from 'react'
import { styled } from 'styled-components'
import ModalMint from '../components/Modal'
import img1 from '../images/next-seo.config.png'
import { device } from '../util'

const ButtonMint = styled.button`
  min-height: 100px;
  min-width: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #1fdf00;
  border-radius: 15px;
  margin-top: 20px;
  cursor: pointer;
  @media ${device.sm} {
    min-height: 100px;
    min-width: 200px;
  }
`
const TextMint = styled.span`
  font-size: 25px;
  font-weight: 700;
  color: #000000;
`
const BoxMint = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 700px;
  background: #313131;
  max-width: 700px;
  margin: 0 auto;
`
const BoxMint2 = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
const Overview = () => {
  const [isOpenModal, setIsOpenModal] = useState(false)
  return (
    <BoxMint>
      <BoxMint2 style={{}}>
        <Image src={img1} alt="" style={{ maxWidth: '350px', maxHeight: '350px' }} />
        <ButtonMint onClick={() => setIsOpenModal(true)}>
          <TextMint style={{ display: 'block' }}>Mint NFT</TextMint>
        </ButtonMint>
      </BoxMint2>
      <ModalMint isOpen={isOpenModal} setIsOpenModa={setIsOpenModal} />
    </BoxMint>
  )
}

export default Overview
