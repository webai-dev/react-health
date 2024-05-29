import { commitMutation } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import environment from '../relay-environment';

const mutation = graphql`
  mutation CreateFoodMutation($input: NewFoodInput!) {
    createFood(newFoodInput: $input) {
      _id: id
    }
  }
`;

export default function CreateFoodMutation(input: Object) {
  // flow-disable
  return new Promise((resolve, reject) => {
    $: input = {
      label: input.label,
      unit: input.unit,
      active: input.active === true ? true : false,
      kcal: parseFloat(input.kcal) || undefined,
      carbs: parseFloat(input.carbs) || undefined,
      fat: parseFloat(input.fat) || undefined,
      protein: parseFloat(input.protein) || undefined,
      fibre: parseFloat(input.fibre) || undefined,
      water: parseFloat(input.water) || undefined,
      ash: parseFloat(input.ash) || undefined,
      sugars: parseFloat(input.sugars) || undefined,
      sumSaturated: parseFloat(input.sumSaturated) || undefined,
      sumMonounsaturated: parseFloat(input.sumMonounsaturated) || undefined,
      sumPolyunsaturated: parseFloat(input.sumPolyunsaturated) || undefined,
      cholesterol: parseFloat(input.cholesterol) || undefined,
      retinol: parseFloat(input.retinol) || undefined,
      vitaminA: parseFloat(input.vitaminA) || undefined,
      bKaroten: parseFloat(input.bKaroten) || undefined,
      vitaminD: parseFloat(input.vitaminD) || undefined,
      vitaminE: parseFloat(input.vitaminE) || undefined,
      vitaminK: parseFloat(input.vitaminK) || undefined,
      tiamin: parseFloat(input.tiamin) || undefined,
      riboflavin: parseFloat(input.riboflavin) || undefined,
      vitaminC: parseFloat(input.vitaminC) || undefined,
      niacin: parseFloat(input.niacin) || undefined,
      vitaminB6: parseFloat(input.vitaminB6) || undefined,
      vitaminB12: parseFloat(input.vitaminB12) || undefined,
      folicAcid: parseFloat(input.folicAcid) || undefined,
      phosphorus: parseFloat(input.phosphorus) || undefined,
      iron: parseFloat(input.iron) || undefined,
      calcium: parseFloat(input.calcium) || undefined,
      potassium: parseFloat(input.potassium) || undefined,
      copper: parseFloat(input.copper) || undefined,
      magnesium: parseFloat(input.magnesium) || undefined,
      sodium: parseFloat(input.sodium) || undefined,
      selenium: parseFloat(input.selenium) || undefined,
      zink: parseFloat(input.zink) || undefined,
      source: input.source,
      comment: input.comment,
    }
    const variables = {
      input,
    };
    commitMutation(environment, {
      mutation,
      variables,
      onCompleted: () => resolve(),
      onError: (err) => reject(err),
    });
  });
}