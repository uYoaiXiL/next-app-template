import { NextApiRequest, NextApiResponse } from 'next';
import { result } from '@utils/index';
import { AxiosResult } from 'axios';

export default function handler(req: NextApiRequest, res: NextApiResponse<AxiosResult<API.PageResult<string[]>>>) {
  const list = Array(5)
    .fill(0)
    .map((item) => '1');
  res.status(200).json(
    result<API.PageResult<string[]>>({
      total: 5,
      list,
    })
  );
}
