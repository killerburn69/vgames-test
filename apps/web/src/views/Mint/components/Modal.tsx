/* eslint-disable react/button-has-type */
import { useDebounce } from '@pancakeswap/hooks'
import { ModalBody, ModalContainer, ModalHeader, ModalV2 } from '@pancakeswap/uikit'
import React, { useState } from 'react'
import styled from 'styled-components'
import { useNetwork } from 'wagmi'
import Button from './Button'

const Input = styled.input`
  padding: 12px 8px;
  width: 100%;
  margin-bottom: 20px;
`

const ModalMint = ({ isOpen, setIsOpenModa }) => {
  const { chain, chains } = useNetwork()
  const [value, setValue] = useState('')
  const debouncedQuery = useDebounce(value, 200)
  const onChangeInput = (e: any) => {
    setValue(e.target.value)
  }
  return (
    <ModalV2 title="Mint NFT" isOpen={isOpen} closeOnOverlayClick>
      <ModalContainer style={{ width: '500px' }}>
        <ModalHeader style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <h1 style={{ fontSize: '25px', fontWeight: '600' }}>Mint NFT</h1>
          <button onClick={() => setIsOpenModa(false)}>X</button>
        </ModalHeader>
        <ModalBody style={{ padding: '20px' }}>
          <h1 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '20px' }}>Number of BSC Testnet you mint</h1>
          <div>
            <Input type="text" placeholder="0,2" value={value} onChange={onChangeInput} />
            <Button value={debouncedQuery} chain={chain} setIsOpenModa={setIsOpenModa} />
          </div>
        </ModalBody>
      </ModalContainer>
    </ModalV2>
  )
}
export default ModalMint
