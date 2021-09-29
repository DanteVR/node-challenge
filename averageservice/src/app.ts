import server from './server';
import dotenv from 'dotenv'
dotenv.config()

const port = parseInt(process.env.SERV_PORT || '5002');

const starter = new server().start(port)
  .then(port => console.log(`Running on port ${port}`))
  .catch(error => {
    console.log(error)
  });

export default starter;