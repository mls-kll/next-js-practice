import getContent from '../../utils/getContent';

export default (req, res) => {
  return new Promise((resolve, reject) => {
    getContent('pigItem')
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
