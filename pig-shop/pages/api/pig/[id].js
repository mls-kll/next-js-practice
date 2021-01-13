import getContent from '../../../utils/getContent';

export default (req, res) => {
  const {
    query: { id },
  } = req;
  return new Promise((resolve, reject) => {
    getContent('pigItem', id)
      .then((result) => {
        res.status(200).json(result);
        resolve();
      })
      .catch((err) => {
        console.log('error', err);
        return resolve();
      });
  });
};
