exports.handler = async () => {
  const data = { name: "Mario" };
  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};
