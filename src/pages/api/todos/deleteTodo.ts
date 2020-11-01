import { NextApiRequest, NextApiResponse } from "next";
import { todoTable, getMinifyRecord } from "../../../../utils/Airtable";

const deleteTodo = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req?.body;
  try {
    const deletedTodos = await todoTable.destroy([id]);
    res.statusCode = 200;
    return res.json({ todo: getMinifyRecord(deletedTodos[0]) });
  } catch (error) {
    res.statusCode = 500;
    res.json({ errorMsg: "Something went wrong", error });
  }
};

export default deleteTodo;
