import CustomerDA from '../Infrastructure/CustomerDA';
import { Customer } from '../types/customerType'

class CustomerBusiness {

  public async getAll(): Promise<Customer[]> {
    try {
      const customerDA = new CustomerDA()
      const customers = await customerDA.getAll()
      return customers
    } catch (error) {
      console.log(error)
    }
  }
}

export default CustomerBusiness;