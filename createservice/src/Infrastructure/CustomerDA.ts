import pool from '../config/dbconnector';
import { Customer } from '../types/customerType'

class CustomerDA {
  public async create(firstname: string, lastname: string, birthday: string): Promise<Customer> {
    try {
      const client = await pool.connect();
      const sql = 'INSERT INTO customers(firstname, lastname, birthday) VALUES($1, $2, $3) RETURNING id;'
      const values = [firstname, lastname, birthday]
      const { rows } = await client.query(sql, values);
      const customer = rows;
      client.release();
      return customer;
    } catch (error) {
      console.log("Error: ", error)
    }
  }
}

export default CustomerDA;