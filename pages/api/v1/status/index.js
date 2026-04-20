function status(request, response) {
  response.status(200).json({chave: "Tenho muito trabalho pela frente é amores."});
}

export default status;
