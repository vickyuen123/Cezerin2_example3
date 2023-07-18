const PaymentMethods {
  constructor(client) {
    client = client
    const resourceUrl =  "/payment_methods"
  }

  list(filter) {
    return client.get(resourceUrl, filter)
  }

  retrieve(id, filter) {
    return client.get(`${resourceUrl}/${id}`, filter)
  }

  create(data) {
    return client.post(`${resourceUrl}`, data)
  }

  update(id, data) {
    return client.put(`${resourceUrl}/${id}`, data)
  }

  delete(id) {
    return client.delete(`${resourceUrl}/${id}`)
  }
}

export default PaymentMethods