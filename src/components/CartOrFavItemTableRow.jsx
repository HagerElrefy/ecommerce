import { memo } from 'react';
import { IoIosClose } from 'react-icons/io';
import useCartControls from '../hooks/useCartControls';
import { useTranslation } from 'react-i18next';
import IncrementAndDecrementProductCount from './IncrementAndDecrementProductCount';

function CartOrFavItemTableRow({ id, thumbnail, title, price, QTY, stock, priceAfter, totalProductPrice }) {
  const { t } = useTranslation();
  const [handleDelete] = useCartControls({ id, QTY, stock });

  return (
    <div className="hidden md:table-row h-28 hover:bg-slate-50 align-middle border-t">
      <div className="table-cell align-middle text-start">
        <button
          aria-label={t('cart.delete')}
          onClick={handleDelete}
          className="text-PrimaryOrange text-3xl bg-PrimaryOrange bg-opacity-0 rounded-full hover:text-white hover:bg-opacity-25 transition duration-300"
        >
          <IoIosClose />
        </button>
      </div>
      <div className="table-cell align-middle">
        <img
          src={thumbnail || '/fallback-image.jpg'}
          className="h-20 aspect-[1.8] object-contain bg-slate-100 mx-auto rounded-lg"
          alt={`${title || t('cart.product')} thumbnail`}
        />
      </div>
      <div className="table-cell align-middle text-start">
        <p className="font-bold text-gray-700">{title}</p>
      </div>
      <div className="table-cell align-middle w-fit">
        <p className="font-bold text-gray-800">${priceAfter}</p>
      </div>
      <div className="table-cell align-middle">
          <IncrementAndDecrementProductCount productInfo = {{id,QTY,stock,showInTable:true}}/>
        {/* <div className="flex items-center justify-center gap-3 bg-slate-100 rounded-lg w-fit">
          <button
            className="text-PrimaryBlue text-xl p-2 rounded hover:bg-blue-100 transition"
            aria-label={t('cart.decreaseQty')}
            onClick={handleDecrease}
          >
            <CgMathMinus />
          </button>
          <p className="font-bold text-gray-700 px-4">{QTY}</p>
          <button
            className="text-PrimaryBlue text-xl p-2 rounded hover:bg-blue-100 transition"
            aria-label={t('cart.increaseQty')}
            onClick={handleIncrease}
          >
            <GrFormAdd />
          </button>
        </div> */}
      </div>
      <div className="table-cell align-middle">
        <p className="font-bold text-gray-700">${totalProductPrice}</p>
      </div>
    </div>
  );
}

export default memo(CartOrFavItemTableRow);
