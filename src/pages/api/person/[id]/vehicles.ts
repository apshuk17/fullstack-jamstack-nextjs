import { NextApiRequest, NextApiResponse } from "next";

const getVehiclesByPersonId = (req: NextApiRequest, res: NextApiResponse) => {
  return res.json({ byId: req.query.id, message: "getVehiclesByPersonId" });
};

export default getVehiclesByPersonId;
