import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useAccount } from 'wagmi'
// eslint-disable-next-line import/no-named-as-default
import { useToast } from '@pancakeswap/uikit'
// eslint-disable-next-line import/no-named-as-default
import useMint from '../hooks/useMint'

const ButtonMint = styled.button`
  width: 100%;
  padding: 10px 0px;
  background: #1fdf00;
  border: none;
  cursor: pointer;
`
const Buttons = ({ value, chain, setIsOpenModa }: any) => {
  const { address, isConnecting, isDisconnected } = useAccount()
  const [isDone, setIsDone]: any = useState(false)
  const [stepPending, setStepPending] = useState(false)
  const { toastSuccess, toastError } = useToast()
  console.log('🚀 ~ Button ~ chain:', chain)
  const { dataMint, errorMint, hashTx, isLoading, isPending, writeMint }: any = useMint({
    quantity: BigInt(value),
    owner: address,
  })
  const handlerOpenWallet = () => {
    writeMint?.({})
  }
  console.log('🚀 ~ Button ~ dataMint:', dataMint)
  useEffect(() => {
    if (errorMint) {
      toastError(errorMint.name)
      setIsOpenModa(false)
    }
  }, [errorMint])
  useEffect(() => {
    if (dataMint && hashTx) {
      setIsDone(hashTx)
    }
  }, [dataMint, hashTx])
  useEffect(() => {
    if (hashTx) {
      setStepPending(true)
    } else {
      setStepPending(isPending)
    }
  }, [isPending, hashTx])
  useEffect(() => {
    if (isDone) {
      setStepPending(false)
      setIsOpenModa(false)
      toastSuccess(`Minting ${dataMint.status}`)
    }
  }, [isDone])
  return (
    <ButtonMint type="button" onClick={() => handlerOpenWallet()} disabled={isPending || isLoading}>
      {isPending || isLoading ? (
        <div className="flex">
          <span>Waiting for Minting...</span>
          {/* <ClipLoader color="#ffffff" size={20} className="ml-[16px]" /> */}
        </div>
      ) : (
        'Mint'
      )}
    </ButtonMint>
  )
}

export default Buttons
