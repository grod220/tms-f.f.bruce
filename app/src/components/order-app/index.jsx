import React, {useEffect} from 'react';
import {observer} from 'mobx-react-lite';
import 'mobx-react-lite/batchingForReactDom';

import OrderNav from './order-nav';
import OrderStore from './stores/order-store';
import Checkout from './checkout';
import {getNextAvailableFulfillmentDateStr, getNextAvailableFulfillmentTimeStr} from './stores/date-utils';
import OrderMenu from './order-menu';

const initializeModule = (catering) => {
  if ((catering && OrderStore.orderType !== 'catering') || (!catering && OrderStore.orderType !== 'normal')) {
    OrderStore.shoppingCart = []; // clear cart
  }
  if (catering) {
    OrderStore.orderType = 'catering';
    OrderStore.fulfillmentOption = 'delivery';
    OrderStore.activeTab = 'Catering Menu';
  } else {
    OrderStore.orderType = 'normal';
    OrderStore.fulfillmentOption = 'pickup';
    OrderStore.activeTab = 'Meat';
  }
  OrderStore.dateStore.fulfillmentDate = getNextAvailableFulfillmentDateStr();
  OrderStore.dateStore.fulfillmentTime = getNextAvailableFulfillmentTimeStr();
};

const OrderApp = observer(({ catering }) => {
  useEffect(() => initializeModule(catering), [catering]);

  return (
    <>
      <OrderNav catering={catering} />
      {OrderStore.activeTab === 'Checkout' ? <Checkout /> : <OrderMenu activeTab={OrderStore.activeTab} />}
    </>
  );
});

export default OrderApp;
