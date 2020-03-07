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
    // customers = customers.filter(customer => customer.id !== id)
    customers.splice(customers.indexOf(customer), 1)
  }
}
export const customerService = new CustomerService()
