
function chainMiddleWare(functions, index = 0) {
  const current = functions[index];

  if (current) {
    const next = chainMiddleWare(functions, index + 1);
    return current(next);
  }

  return (request, event, response) => {
    return response;
  };
}

export default chainMiddleWare
