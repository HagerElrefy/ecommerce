import { memo } from 'react';
import useCartControls from '../hooks/useCartControls';
import { RiDeleteBin7Line } from 'react-icons/ri';
import { useTranslation } from 'react-i18next';
import IncrementAndDecrementProductCount from './IncrementAndDecrementProductCount';

function CartCard({ id, thumbnail, title, price, QTY, stock, priceAfter, totalProductPrice }) {
  const { t } = useTranslation();
  const [handleDelete,...others] = useCartControls({ id, QTY, stock });

  return (
    <div className="md:hidden flex w-full justify-between items-center p-3 gap-2 border rounded-lg my-10">
      <div className="w-1/3">
        <img
          src={thumbnail || '/fallback-image.jpg'}
          className="h-20 w-full object-contain bg-slate-100 mx-auto rounded-lg"
          alt={`${title || t('cart.product')} thumbnail`}
        />
      </div>
      <div className="flex flex-col gap-3 w-2/3">
        <div className="flex justify-between items-center gap-2">
          <p className="font-bold">{title}</p>
          <div className="flex justify-between items-start text-2xl text-gray-400 font-semibold">
            <button aria-label={t('cart.favorite')}></button>
            <button aria-label={t('cart.delete')} onClick={handleDelete}>
              <RiDeleteBin7Line />
            </button>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <p className="font-bold text-PrimaryBlue">${priceAfter}</p>
          <IncrementAndDecrementProductCount productInfo = {{id,QTY,stock,showInTable:false}}/>
          {/* <div className="flex items-stretch justify-evenly w-1/2 bg-slate-100 rounded-lg">
            <button
              className="text-PrimaryBlue rounded"
              aria-label={t('cart.decreaseQty')}
              onClick={handleDecrease}
            >
              <CgMathMinus />
            </button>
            <p className="font-bold text-gray-700 py-2">{QTY}</p>
            <button
              className="text-PrimaryBlue rounded"
              aria-label={t('cart.increaseQty')}
              onClick={handleIncrease}
            >
              <GrFormAdd />
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default memo(CartCard);
