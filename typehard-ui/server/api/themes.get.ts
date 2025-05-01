import themes from '../configs/themes.json';

export default defineEventHandler(async (event) => {
  return themes;
})
