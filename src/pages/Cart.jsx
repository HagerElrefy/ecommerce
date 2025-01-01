import { useTranslation } from 'react-i18next';
import CartOrFavItemTableRow from '../components/CartOrFavItemTableRow';
import { useSelector } from 'react-redux';
import TatalCartPrice from '../components/TatalCartPrice';
import CartCard from '../components/CartCard';
import { Fragment, memo } from 'react';

const CartTableHeader = () => {
  const { t } = useTranslation();
  return (
    <div className="md:table-header-group hidden">
      <div className="table-row h-16 align-middle">
        <div className="table-cell align-middle text-start">
          <p className="font-bold text-gray-700">{t('cart.product')}</p>
        </div>
        <div className="table-cell align-middle"></div>
        <div className="table-cell align-middle"></div>
        <div className="table-cell align-middle">
          <p className="font-bold text-gray-700">{t('cart.unitPrice')}</p>
        </div>
        <div className="table-cell align-middle">
          <p className="font-bold text-gray-700">{t('cart.qty')}</p>
        </div>
        <div className="table-cell align-middle">
          <p className="font-bold text-gray-700">{t('cart.price')}</p>
        </div>
      </div>
    </div>
  );
};

function Cart() {
  const { t } = useTranslation();
  const cartProducts = useSelector((state) => state.cart.cart);

  return (
    <div className="mb-20 px-2 md:px-20 lg:px-32 w-full">
      {cartProducts.length > 0 ? (
        <>
          <div className="md:table text-center w-full border-collapse border-spacing-4">
            <CartTableHeader />
            {cartProducts.map((product) => (
              <Fragment key={product.id}>
                <CartOrFavItemTableRow {...product} />
                <CartCard {...product} />
              </Fragment>
            ))}
          </div>
          <TatalCartPrice />
        </>
      ) : (
        <div className="text-center text-gray-500 mt-10">
          {t('cart.emptyMessage')}
        </div>
      )}
    </div>
  );
}
export default memo(Cart);
