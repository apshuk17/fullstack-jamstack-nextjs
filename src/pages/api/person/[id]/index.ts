import { NextApiRequest, NextApiResponse } from "next";

const getPersonById = (req: NextApiRequest, res: NextApiResponse) => {
  return res.json({ byId: req.query.id, message: "getPersonById" });
};

export default getPersonById;
