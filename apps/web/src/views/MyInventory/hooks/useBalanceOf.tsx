import { useActiveChainId } from 'hooks/useActiveChainId'
import { useMemo } from 'react'
import { useContractRead } from 'wagmi'
import Vgames from '../../../config/abi/Vgames.json'

export function useBalanceOf(params: any) {
  const { chainId } = useActiveChainId()
  const addressMintContract: any = '0xF2e5482c230cb62b1363039E4128a8f2A7Ce8f5D'
  const { data, isSuccess, isLoading } = useContractRead({
    address: addressMintContract,
    args: [params.owner],
    abi: Vgames,
    chainId: Number(chainId),
    functionName: 'balanceOf',
  })

  return useMemo(() => {
    return {
      isLoading,
      data,
      isSuccess,
    }
  }, [params, data, isLoading, isSuccess])
}
export default useBalanceOf
