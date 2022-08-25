import Api from '../../services/Api';

export const CardController = {
  getSportList: () =>
    new Promise((success, error) => {
      Api.get('/sports?parents_only=true&has_icon=true&limit=10')
        .then(res => {
          const sportsList = [...res.data].sort(() => 0.5 - Math.random());
          const newSportsList = sportsList.slice(0, 8);

          success(newSportsList);
        })
        .catch(error);
    }),

  getSportByName: id =>
    new Promise((success, error) => {
      Api.get(`/sports/${id}`)
        .then(res => {
          success(res.data);
        })
        .catch(error);
    })
};
