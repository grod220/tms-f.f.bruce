import * as React from 'react';
import styled from 'styled-components';
import ReactModal from 'react-modal';
import {observer} from 'mobx-react-lite';

import OrderStore from '../../../stores/order-store';
import ItemStore from '../../../stores/item-store';
import AddToCart from './add-to-cart';
import MenuItemOptions from './menu-item-options';

import './modal.css';
import {ContentfulMenuItem, ContentfulOption} from '../../../../../../graphql-types';

const Content = styled.div`
  width: 100%;
  position: relative;
  margin-top: -40px;
`;

const ImageContainer = styled.div`
  height: 250px;
`;

const Dismiss = styled.div`
  position: sticky;
  z-index: 1;
  margin-left: auto;
  top: 10px;
  right: 10px;
  cursor: pointer;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  height: 40px;
  width: 40px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 8px, rgba(0, 0, 0, 0.04) 0px 4px 4px;
`;

const ImageHero = styled.div<{ image: string }>`
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50%;
  background-image: url(${({ image }) => image});
`;

const Description = styled.div`
  padding: 20px;
  color: #4c4c4c;
  font-size: 16px;
`;

const Name = styled.div`
  font-size: 30px;
  color: #902e2d;
`;

interface ModalProps {
  itemData: ContentfulMenuItem;
  closeFunc: () => any;
}

const Modal = observer(({ itemData, closeFunc }: ModalProps) => {
  ReactModal.setAppElement('#___gatsby');
  const itemStoreInstance = new ItemStore(
    itemData.title as string,
    itemData.price as number,
    itemData.options as ContentfulOption[] | undefined,
  );

  return (
    <ReactModal
      isOpen={true}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      onRequestClose={closeFunc}
      className="modal-box"
      overlayClassName="modal-overlay"
    >
      <Dismiss onClick={closeFunc}>
        <svg width="24px" height="24px" fill="none" viewBox="0 0 24 24">
          <path
            d="m19.5831 6.24931-1.8333-1.83329-5.75 5.83328-5.75-5.83328-1.8333 1.83329 5.8333 5.74999-5.8333 5.75 1.8333 1.8333 5.75-5.8333 5.75 5.8333 1.8333-1.8333-5.8333-5.75z"
            fill="#4c4c4c"
          />
        </svg>
      </Dismiss>
      <Content>
        {itemData.image && (
          <>
            <ImageContainer>
              <ImageHero image={itemData.image.fluid?.src as string} />
            </ImageContainer>
          </>
        )}
        <Description>
          <Name>
            <div>{itemData.title}</div>
          </Name>
          <div>{itemData.description?.description}</div>
        </Description>
        <MenuItemOptions store={itemStoreInstance} options={itemData.options as ContentfulOption[] | undefined} />
        {/* @ts-ignore */}
        <AddToCart shoppingCart={OrderStore.shoppingCart} itemStore={itemStoreInstance} closeFunc={closeFunc} />
      </Content>
    </ReactModal>
  );
});

export default Modal;
