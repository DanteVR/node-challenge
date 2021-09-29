import { validator } from '../helpers/validate'

export const createCustomerValidation = (req, res, next) => {
  const validationRule = {
    "firstname": "required|string|min:2|max:32",
    "lastname": "required|string|min:2|max:32",
    "birthday": "required|string|date|max:10",
  }
  validator(req.body, validationRule, {}, (err, status) => {
    if (!status) {
      res.status(412)
        .send({
          success: false,
          message: 'Validation failed',
          data: err
        });
    } else {
      next();
    }
  });
}
