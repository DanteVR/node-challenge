import CustomerDA from '../Infrastructure/CustomerDA';
import { calculateAge } from '../utils/functions'

class CustomerBusiness {
  public async calcAverageAges(): Promise<object> {
    try {
      const customerDA = new CustomerDA()
      const customers = await customerDA.getAll()
      const n = customers.length
      const res = {
        "average": 0
      }
      if (n > 0) {
        let sum = 0
        customers.map(({ birthday }) => {
          sum += calculateAge(birthday)
        })
        // Calculate average and rounded
        res.average = Math.round((sum / n) * 10) / 10
        return res
      }
      return res
    } catch (error) {
      console.log("Error: ", error)
    }
  }
}

export default CustomerBusiness;