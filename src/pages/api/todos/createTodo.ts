import { NextApiRequest, NextApiResponse } from "next";
import { todoTable } from "../../../../utils/Airtable";

const createTodo = async (req: NextApiRequest, res: NextApiResponse) => {
  const { description } = req?.body;
  try {
    const createdTodos = await todoTable.create([{ fields: { description } }]);
    const createdTodo = {
      id: createdTodos[0].id,
      fields: createdTodos[0].fields,
    };
    res.statusCode = 200;
    return res.json({ todo: createdTodo });
  } catch (error) {
    res.statusCode = 500;
    res.json({ errorMsg: "Something went wrong", error });
  }
};

export default createTodo;
