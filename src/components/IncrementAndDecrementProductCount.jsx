import { memo } from 'react'
import { useTranslation } from 'react-i18next';
import { CgMathMinus } from 'react-icons/cg';
import { GrFormAdd } from 'react-icons/gr';
import useCartControls from '../hooks/useCartControls';

function IncrementAndDecrementProductCount({productInfo}) {
    const {id, QTY, stock , showInTable} = productInfo;
      const { t } = useTranslation();
      const [athers, handleDecrease, handleIncrease] = useCartControls({ id, QTY, stock });

  return (
          <div className={`flex ${showInTable ?"items-center gap-2 w-full" : "flex items-stretch justify-evenly w-1/2"  } bg-slate-100 rounded-lg`}>
            <button
              className="text-PrimaryBlue rounded w-1/3"
              aria-label={t('cart.decreaseQty')}
              onClick={handleDecrease}
            >
              <CgMathMinus  className='m-auto' />
            </button>
            <p className="font-bold text-gray-700 py-2 w-1/3 text-center">{QTY}</p>
            <button
              className="text-PrimaryBlue rounded w-1/3"
              aria-label={t('cart.increaseQty')}
              onClick={handleIncrease}
            >
              <GrFormAdd className='m-auto' />
            </button>
          </div>  )
}

export default memo(IncrementAndDecrementProductCount)