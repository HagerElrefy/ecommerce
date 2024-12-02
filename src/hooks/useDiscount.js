import { useMemo } from "react";

export default function useDiscount(discount, priceBefore) {
  const priceAfter = useMemo(() => 
    discount ? Math.round((priceBefore - (priceBefore * (discount / 100))) * 100) / 100 : priceBefore,
    [discount, priceBefore]
  );

  return [discount, priceBefore, priceAfter];
}
