<template>
  <div>
    <div>
      <h3>Customers list</h3>
      <table class="table">
        <tr>
          <th>First name</th>
          <th>Last name</th>
          <th>Email</th>
          <th></th>
        </tr>
        <tr v-for="(customer, i) in customers" :key="i">
          <td>{{ customer.firstName }}</td>
          <td>{{ customer.lastName }}</td>
          <td>{{ customer.email }}</td>
          <td><b-button pill variant="outline-danger" @click="deleteCustomer(customer)">Delete</b-button></td>
        </tr>
      </table>
    </div>
    <div>
    <b-card bg-variant="light">
      <b-form-group
        label-cols-lg="3"
        label="Add New Customer"
        label-size="lg"
        label-class="font-weight-bold pt-0"
        class="mb-0"
      >
        <b-form-group
          label-cols-sm="3"
          label="Name:"
          label-align-sm="right"
        >
          <b-form-input v-model="newCustomer.firstName"></b-form-input>
        </b-form-group>

        <b-form-group
          label-cols-sm="3"
          label="Last Name:"
          label-align-sm="right"
        >
          <b-form-input v-model="newCustomer.lastName"></b-form-input>
        </b-form-group>

        <b-form-group
          label-cols-sm="3"
          label="Email:"
          label-align-sm="right"

        >
          <b-form-input type="email" v-model="newCustomer.email"></b-form-input>
        </b-form-group>
          <b-button @click="createCustomer" variant="outline-primary" >Add New Customer</b-button>

      </b-form-group>
    </b-card>
    </div>
  </div>
</template>
<script>
import { customerService } from '@/data/customers.js'
export default {
  data () {
    return {
      customers: customerService.getAllCustomers(),
      newCustomer: {}
    }
  },
  methods: {
    deleteCustomer (customer) {
      customerService.deleteCustomer(customer)
    },
    createCustomer () {
      this.newCustomer.id = customerService.generateId()
      customerService.addCustomer(this.newCustomer)
      this.newCustomer = {}
    }
  }
}
</script>
