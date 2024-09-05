const getNestedValue = (obj, key) => {
  return key.split(".").reduce((acc, part) => acc && acc[part], obj);
};

const DataTransformer = (data, key1, key2) => {
  return data?.length > 0
    ? data?.map((obj) => {
        return {
          text: getNestedValue(obj, key1),
          value: getNestedValue(obj, key2),
        };
      })
    : null;
};

export default DataTransformer;
