import CustomerDA from '../Infrastructure/CustomerDA';
import { Customer } from '../types/customerType'

class CustomerBusiness {

  public async create(firstname: string, lastname: string, birthday: string): Promise<Customer> {
    try {
      const customerDA = new CustomerDA()
      const customer = await customerDA.create(firstname, lastname, birthday)
      return customer
    } catch (error) {
      console.log(error)
    }
  }
}

export default CustomerBusiness;