import { NextApiRequest, NextApiResponse } from "next";
import { todoTable, getMinifyRecord } from "../../../../utils/Airtable";

const updateTodo = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id, fields } = req?.body;
  try {
    const updatedTodos = await todoTable.update([{ id, fields }]);
    res.statusCode = 200;
    return res.json({ todo: getMinifyRecord(updatedTodos[0]) });
  } catch (error) {
    res.statusCode = 500;
    res.json({ errorMsg: "Something went wrong", error });
  }
};

export default updateTodo;
