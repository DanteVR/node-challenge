import pool from '../config/dbconnector';
import { Customer } from '../types/customerType'

class CustomerDA {
  public async getAll(): Promise<Customer[]> {
    try {
      const client = await pool.connect();
      const sql = "SELECT * FROM customers";
      const { rows } = await client.query(sql);
      const customers = rows;
      client.release();
      return customers;
    } catch (error) {
      console.log(error)
    }
  }
}

export default CustomerDA;