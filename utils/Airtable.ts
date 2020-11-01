const Airtable = require("airtable");

const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
  process.env.AIRTABLE_BASE_ID
);

const todoTable = base(process.env.AIRTABLE_TABLE_NAME);

const getMinifyRecord = (record) => {
  const completed = !!record.fields.completed;
  return { id: record.id, fields: { ...record.fields, completed } };
};

const getMinifyRecords = (records) => {
  return records.map((record) => getMinifyRecord(record));
};

export { todoTable, getMinifyRecord, getMinifyRecords };
