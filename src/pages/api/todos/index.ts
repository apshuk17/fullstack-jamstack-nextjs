import { NextApiRequest, NextApiResponse } from "next";
import { todoTable, getMinifyRecords } from "../../../../utils/Airtable";

const getTodos = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const todos = await todoTable.select({}).firstPage();
    const minifiedTodos = getMinifyRecords(todos);
    res.statusCode = 200;
    return res.json({ todos: minifiedTodos });
  } catch (error) {
    res.statusCode = 500;
    res.json({ errorMsg: "Something went wrong", error });
  }
};

export default getTodos;
