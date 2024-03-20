import { useActiveChainId } from 'hooks/useActiveChainId'
import { useMemo } from 'react'
import { useContractWrite, useWaitForTransaction } from 'wagmi'
import Vgames from '../../../config/abi/Vgames.json'

export function useMint(params: any) {
  const { chainId } = useActiveChainId()
  const addressMintContract: any = '0xF2e5482c230cb62b1363039E4128a8f2A7Ce8f5D'
  const {
    write: writeMint,
    isLoading,
    data,
    error: errorMint,
  } = useContractWrite({
    // @ts-ignore
    address: addressMintContract,
    // @ts-ignore
    args: [params.owner, params.quantity, []],
    // @ts-ignore
    abi: Vgames,
    // @ts-ignore
    chainId: Number(chainId),
    // @ts-ignore
    functionName: 'mint',
  })
  const { data: dataMint, isLoading: isPending } = useWaitForTransaction({
    hash: data?.hash,
  })
  return useMemo(() => {
    return {
      writeMint,
      hashTx: data?.hash,
      isLoading,
      isPending,
      dataMint,
      errorMint,
    }
  }, [params, data, isLoading, dataMint, isPending])
}
export default useMint
