import { action, computed, observable } from 'mobx';
import { ContentfulMenuItemContentfulOptionItemUnion, ContentfulOption } from '../../../../graphql-types';
import { removeHashes } from '../../../utilities/contentful-formatter';

type OptionChoice = { title: string; price: number };
type ContentfulOptionWithChoices = ContentfulOption & { choices: OptionChoice[] };

export class ItemStore {
  @observable dishName: string;
  @observable basePrice: number;
  @observable options: ContentfulOptionWithChoices[];

  constructor(dishName: string, basePrice: number, options: ContentfulOption[] | undefined) {
    this.basePrice = basePrice;
    this.dishName = dishName;
    this.options = (options || [])
      .map(this.hashScrubber)
      .map(this.makeOptionTitlesUnique)
      .map((option) => {
        return { ...option, choices: [] };
      });
  }

  @action handleChoice(
    option: ContentfulOption,
    optionItem: ContentfulMenuItemContentfulOptionItemUnion,
    isFree: boolean,
  ): void {
    const optionObj = this.options.find((storeOptionObj) => storeOptionObj.title === option.title);
    if (!optionObj) return;
    if (this.isSelected(option.title, optionItem.title) && !optionObj.minimum) {
      optionObj.choices = optionObj.choices.filter((choice) => choice.title !== optionItem.title);
    } else {
      if (optionObj.minimum === 1 && optionObj.maximum === 1) {
        optionObj.choices = [{ title: optionItem.title as string, price: isFree ? 0 : optionItem.price ?? 0 }];
      }
      if (
        this.hasChosenMaximumItems(optionObj) ||
        (optionObj.maximum && optionObj.choices.length === optionObj.maximum)
      ) {
        return;
      }
      optionObj.choices.push({ title: optionItem.title as string, price: isFree ? 0 : optionItem.price ?? 0 });
    }
  }

  hasChosenMaximumItems(optionObj: ContentfulOptionWithChoices): boolean {
    const totalOptionItems = (optionObj.pricedOptionItems?.length ?? 0) + (optionObj.freeOptionItem?.length ?? 0);
    return totalOptionItems === optionObj.choices.length;
  }

  isSelected(optionScope?: string | null, optionItemTitle?: string | null): boolean {
    const scope = this.options.find((option) => option.title === optionScope);
    if (!scope) return false;
    const result = scope.choices.find((choice) => choice.title === optionItemTitle);
    return Boolean(result);
  }

  makeOptionTitlesUnique(option: ContentfulOption, index: number, array: ContentfulOption[]): ContentfulOption {
    const allOcurrencesCount = array.filter((o) => o.title === option.title).length;
    const firstOccurrenceIndex = array.findIndex((o) => o.title === option.title);
    if (allOcurrencesCount === 1) return option;

    const copy = { ...option };
    copy.title = `${copy.title} #${index - firstOccurrenceIndex + 1}`;
    return copy;
  }

  hashScrubber(option: ContentfulOption): ContentfulOption {
    const copy = { ...option };
    copy.title = removeHashes(copy.title);
    return copy;
  }

  @computed
  get total() {
    const extraCosts = this.options
      .flatMap((option) => option.choices)
      .reduce((total, choice) => total + choice.price, 0);
    return this.basePrice + extraCosts;
  }

  @computed
  get readyForCart(): boolean {
    return this.options
      .filter((option) => option.minimum)
      .every((option) => option.choices.length >= (option.minimum ?? 0));
  }
}

export default ItemStore;
