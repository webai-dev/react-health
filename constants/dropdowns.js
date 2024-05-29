import i18n from '../i18n';
import {Dimensions, Fonts} from '../styles';

export const DropdownItems = {
  DiabetesDropdown: [
    // { label: i18n.t('No'), value: 1 },
    // { label: `${i18n.t('Yes')}, ${i18n.t('type')}2`, value: 2 },
    // { label: `${i18n.t('Yes')}, ${i18n.t('type')}1`, value: 3 },
    // { label: `${i18n.t('Yes')}, ${i18n.t('gestational')}`, value: 4 },
    // { label: `${i18n.t('Yes')}, ${i18n.t('another')}`, value: 5 },

    { label: `${i18n.t('type')} 2`, value: 2 },
    { label: `${i18n.t('type')} 1`, value: 3 },
    { label: `${i18n.t('gestational')}`, value: 4 },
    { label: `${i18n.t('another')}`, value: 5 },
  ],
  SexDropdown: [
    { label: i18n.t('Man'), value: 'man' },
    { label: i18n.t('Woman'), value: 'woman' },
  ],
  DietDropdown: [
    { label: i18n.t('No'), value: 1 },
    { label: i18n.t('Low carbohydrate diet'), value: 2 },
    { label: i18n.t('Intermittent fasting'), value: 3 },
    { label: 'LCHF', value: 4 },
    { label: 'Paleo', value: 5 },
    { label: i18n.t('Vegetarian'), value: 6 },
    { label: 'Vegan', value: 7 },
  ],
  ActivityLevelDropdown: [
    { label: i18n.t('I do not exercise, or very little'), value: 1 },
    { label: i18n.t('Exercises easily 1 to 3 days / week'), value: 2 },
    { label: i18n.t('Exercises moderately 4 to 5 days / week'), value: 3 },
    { label: i18n.t('Exercise daily, or intensely 3 to 4 days / week'), value: 4 },
    { label: i18n.t('Exercises intensively 6 to 7 days / week'), value: 5 },
    { label: i18n.t('Exercise very intensively daily or have a physically demanding job'), value: 6 },
  ],
  CalculatorDropdown: [
    { label:  i18n.t('Carbohydrate counting'), value: 1 },
    { label:  i18n.t('Weight planning'), value: 2 },
    { label:  i18n.t('Weight & metabolism'), value: 3 },
    { label:  i18n.t('Convert blood sugar'), value: 4 },
  ],
  FoodTypeDropdown: [
    { label:  i18n.t('Drink'), value: 'Drink' },
    { label:  i18n.t('Breakfast'), value: 'Breakfast' },
    { label:  i18n.t('Lunch'), value: 'Lunch' },
    { label:  i18n.t('Dinner'), value: 'Dinner' },
    { label:  i18n.t('Snack'), value: 'Snack' },
    { label:  i18n.t('Coffee'), value: 'Coffee' },
  ]
};