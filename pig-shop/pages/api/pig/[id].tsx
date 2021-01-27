import { NextApiRequest, NextApiResponse } from 'next'
import getContent from '../../../utils/getContent';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { id },
  } = req;
  try {
    const result = await getContent('pigItem', id);
    res.status(200).json(result);
  } catch (e) {
    console.log('error', e);
    return res.send(500);
  }
};