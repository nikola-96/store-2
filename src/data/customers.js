const customers = [
  {
    id: 1,
    firstName: 'Nikola',
    lastName: 'Markovic',
    email: 'nikola@hotmail.com'
  },
  {
    id: 2,
    firstName: 'Viktor',
    lastName: 'Markovic',
    email: 'viktor@hotmail.com'
  }
]

export default class CustomerService {
  getAllCustomers () {
    return customers
  }

  deleteCustomer (customer) {
    customers.splice(customers.indexOf(customer), 1)
  }

  addCustomer (customer) {
    customers.push(customer)
  }

  generateId () {
    return Math.random().toString(36).substr(2, 9)
  }
}
export const customerService = new CustomerService()
