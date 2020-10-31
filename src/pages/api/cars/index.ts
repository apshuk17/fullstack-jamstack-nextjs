import { NextApiRequest, NextApiResponse } from "next";
import { openDB } from "../../../../utils/openDB";

const getCars = async (req: NextApiRequest, res: NextApiResponse) => {
  const db = await openDB();

  const cars = await db.all("SELECT * FROM Car");

  return res.json({ cars });
};

export default getCars;