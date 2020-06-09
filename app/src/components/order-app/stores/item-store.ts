import {computed, observable} from 'mobx';
import {ContentfulOption} from '../../../../graphql-types';

type OptionChoice = { title: string; price: number };

export class ItemStore {
  @observable dishName: string;
  @observable basePrice: number;
  @observable options: Array<ContentfulOption & { choices: OptionChoice[] }>;

  constructor(dishName: string, basePrice: number, options: ContentfulOption[] | undefined) {
    this.basePrice = basePrice;
    this.dishName = dishName;
    this.options = (options || []).map((option) => {
      return { ...option, choices: [] };
    });
  }

  @computed get allChoices() {
    return this.options.flatMap((option) => option.choices);
  }

  isSelected(optionScope: string, optionItemTitle: string): boolean {
    const scope = this.options.find((option) => option.title === optionScope);
    if (!scope) return false;
    const result = scope.choices.find((choice) => choice.title === optionItemTitle);
    return Boolean(result);
  }

  // @computed
  // get total() {
  //   const extraCosts = Object.values(this.choices)
  //     .flat()
  //     .filter((choice) => choice.extra)
  //     .reduce((acc, curr) => acc + curr.extra, 0);
  //   return this.basePrice + extraCosts;
  // }

  // @computed
  // get readyForCart() {
  //   return (
  //     this.selectionsRequired === countChoices(this.choices, 'selection') &&
  //     additionsFulfilled(this.choices, this.additionsRequired)
  //   );
  // }
}

export default ItemStore;
