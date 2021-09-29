import CustomerBusiness from '../business/CustomerBusiness';

class CustomerService {

  public async create(req, res) {
    try {
      const { firstname, lastname, birthday } = req.body
      const customerBusiness = new CustomerBusiness()
      const customer = await customerBusiness.create(firstname, lastname, birthday)
      if (!customer) {
        res.sendStatus(500);
      } else {
        res.send(customer);
      }
    } catch (error) {
      console.log("Error:", error)
      res.status(400).send(error);
    }
  }
}

export default CustomerService;