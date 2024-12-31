import { memo } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

function TatalCartPrice() {
  const { t } = useTranslation();
  const ShippingFee = 20;
  const totalPriceAfterDiscount = useSelector((state) => state.cart.totalPriceAfterDiscount);

  return (
    <div className="flex flex-col items-center m-auto w-full md:w-1/2 lg:w-1/4 justify-center mt-10 gap-5">
      <div className="flex flex-col gap-4 w-full">
        <div className="flex justify-between">
          <p>{t('cart.subtotal')} :</p>
          <p>${totalPriceAfterDiscount}</p>
        </div>
        <div className="flex justify-between">
          <p>{t('cart.shippingFee')} :</p>
          <p>${ShippingFee}</p>
        </div>
        <div className="flex justify-between">
          <p>{t('cart.coupon')} :</p>
          <p>{t('cart.noCoupon')}</p>
        </div>
        <div className="flex justify-between font-bold border-t pt-2">
          <p>{t('cart.total')} :</p>
          <p>${totalPriceAfterDiscount + ShippingFee}</p>
        </div>
      </div>

      <button className="bg-PrimaryBlue text-white font-bold py-3 w-full rounded-sm border hover:border-PrimaryBlue hover:text-PrimaryBlue hover:bg-white">
        {t('cart.checkout')}
      </button>
    </div>
  );
}

export default memo(TatalCartPrice);
