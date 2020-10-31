const Airtable = require("airtable");
import { NextApiRequest, NextApiResponse } from "next";

const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
  process.env.AIRTABLE_BASE_ID
);

const todoTable = base(process.env.AIRTABLE_TABLE_NAME);

const getTodos = async (req: NextApiRequest, res: NextApiResponse) => {
  const todos = await todoTable.select({}).firstPage();
  res.statusCode = 200;
  return res.json({ todos });
};

export default getTodos;
