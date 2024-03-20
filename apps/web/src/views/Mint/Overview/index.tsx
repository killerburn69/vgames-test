import Image from 'next/image'
import React, { useState } from 'react'
import { styled } from 'styled-components'
import ModalMint from '../components/Modal'
import img1 from '../images/next-seo.config.png'

const ButtonMint = styled.button`
  height: 100px;
  width: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #1fdf00;
  border-radius: 15px;
  margin-top: 20px;
  cursor: pointer;
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
  width: 700px;
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
        <Image src={img1} alt="" width={300} height={300} />
        <ButtonMint onClick={() => setIsOpenModal(true)}>
          <TextMint style={{ display: 'block' }}>Mint NFT</TextMint>
        </ButtonMint>
      </BoxMint2>
      <ModalMint isOpen={isOpenModal} setIsOpenModa={setIsOpenModal} />
    </BoxMint>
  )
}

export default Overview
