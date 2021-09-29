import CustomerBusiness from '../business/CustomerBusiness';

class CustomerService {

  public async get(req, res) {
    try {
      const customerBusiness = new CustomerBusiness()
      const customers = await customerBusiness.getAll()
      if (!customers) {
        res.sendStatus(500);
      } else {
        res.send(customers);
      }
    } catch (error) {
      console.log("Error: ", error)
      res.sendStatus(500);
    }
  }
}

export default CustomerService;