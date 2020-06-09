import { getDayOfYear } from 'date-fns';

const getAllHeroImageURLs = () => {
  const requireAll = (requireContext) => requireContext.keys().map(requireContext);
  return requireAll(require.context('./images', false, /hero\d.+jpg/));
};

export const generateHeroImage = () => {
  const heroesArr = getAllHeroImageURLs();
  const dayOfYear = getDayOfYear(Date.now());
  return heroesArr[dayOfYear % heroesArr.length];
};
