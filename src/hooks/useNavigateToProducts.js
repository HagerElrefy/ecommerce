import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

function useNavigateToProducts(id) {
    const navigate = useNavigate();
    const handleGoToProduct = useCallback(()=>navigate(`/items/${id}`),
[navigate,id])
  return handleGoToProduct
}

export default useNavigateToProducts