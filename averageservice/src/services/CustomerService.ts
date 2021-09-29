import CustomerBusiness from '../business/CustomerBusiness';

class CustomerService {
  public async averageAges(req, res) {
    try {
      const customerBusiness = new CustomerBusiness()
      const average = await customerBusiness.calcAverageAges()
      if (!average) {
        res.sendStatus(500);
      } else {
        res.send(average);
      }
    } catch (error) {
      console.log("Error: ", error)
      res.status(500);
    }
  }
}

export default CustomerService;