import * as React from 'react';
import styled from 'styled-components';
import {observer} from 'mobx-react-lite';
import ItemStore from '../../../stores/item-store';

import AddZero from '../../../../../utilities/add-zero';
import {removeHashes} from '../../../../../utilities/contentful-formatter';
import {ContentfulMenuItemContentfulOptionItemUnion, ContentfulOption} from '../../../../../../graphql-types';

const SectionHeader = styled.div`
  font-size: 22px;
  color: black;
  background-color: #e0e0e0;
  padding: 20px;
`;

const OptionsContainer = styled.div`
  padding: 20px;
  font-size: 20px;
`;

const SingleOption = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 20px;
`;

const SelectWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const SelectionBox = styled.div`
  width: 22px;
  height: 22px;
  border-radius: 50%;
  padding: 2px;
  border: 1px solid gray;
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
`;

const InnerSelect = styled.div<{ selected: boolean }>`
  background: ${(props) => (props.selected ? '#902e2d' : 'white')};
  width: 20px;
  height: 20px;
  border-radius: 50%;
`;

const AdditionsCheckbox = styled.div`
  width: 23px;
  height: 23px;
  border-radius: 3px;
  margin-right: 10px;
  margin-left: 2px;
  border: 1px solid gray;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
`;

const InnerCheck = styled.div<{ selected: boolean }>`
  background: ${(props) => (props.selected ? '#902e2d' : 'white')};
  width: 17px;
  height: 17px;
`;

const MaxNotify = styled.div`
  font-size: 16px;
  color: #4c4c4c;
`;

const Divider = styled.div`
  margin-bottom: 20px;
  color: #4c4c4c;
  width: 100%;
`;

const ExtraCost = styled.span`
  color: #4c4c4c;
  font-size: 16px;
  font-style: italic;
`;

type CombinedOptionItem = ContentfulMenuItemContentfulOptionItemUnion & { isFree: boolean };

const combineOptionItems = (
  freeOptionItems: ContentfulOption['freeOptionItem'],
  pricedOptionItems: ContentfulOption['pricedOptionItems'],
): CombinedOptionItem[] => {
  const returnArr: CombinedOptionItem[] = [];
  freeOptionItems?.forEach((optionItem) => returnArr.push({ ...optionItem, isFree: true }));
  pricedOptionItems?.forEach((optionItem) => returnArr.push({ ...optionItem, isFree: false }));
  return returnArr;
};

interface MenuItemOptionsProps {
  store: ItemStore;
  options?: ContentfulOption[];
}

const MenuItemOptions = observer(({ store, options }: MenuItemOptionsProps) => {
  const handleChoice = (
    option: ContentfulOption,
    optionItem: ContentfulMenuItemContentfulOptionItemUnion,
    isFree: boolean,
  ): void => {
    const optionObj = store.options.find((storeOptionObj) => storeOptionObj.title === option.title);
    if (!optionObj) return;
    // if (optionObj.maximum && optionObj.choices.length === optionObj.maximum) return;
    optionObj.choices.push({ title: optionItem.title as string, price: isFree ? 0 : optionItem.price ?? 0 });
  };

  const verifySelected = (option: string, choiceName: string) => {
    return store.isSelected(option, choiceName);
  };

  if (!options) return <></>;

  return (
    <>
      {options.map((option, i) => (
        <div key={i}>
          <SectionHeader>
            {removeHashes(option.title)}
            {option.maximum && <MaxNotify>Choose {option.maximum} maximum</MaxNotify>}
          </SectionHeader>
          <OptionsContainer>
            {combineOptionItems(option.freeOptionItem, option.pricedOptionItems).map((optionItem, i) => (
              <SingleOption key={i} onClick={() => handleChoice(option, optionItem, optionItem.isFree)}>
                <SelectWrapper>
                  {option.maximum === 1 ? (
                    <SelectionBox>
                      <InnerSelect selected={verifySelected(option.title ?? '', optionItem.title ?? '')} />
                    </SelectionBox>
                  ) : (
                    <AdditionsCheckbox>
                      <InnerCheck selected={false} />
                    </AdditionsCheckbox>
                  )}
                  {optionItem?.title}
                </SelectWrapper>
                {!optionItem.isFree && (
                  <ExtraCost>
                    <span>add: ${AddZero(optionItem?.price)}</span>
                  </ExtraCost>
                )}
              </SingleOption>
            ))}
          </OptionsContainer>
        </div>
      ))}
    </>
  );
});

export default MenuItemOptions;
