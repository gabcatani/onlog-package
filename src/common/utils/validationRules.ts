import { validateProps } from "../../common/types";

export default function validate(values: validateProps) {
  let errors = {} as validateProps;
  if (!values.message) {
    errors.message = "Envio realizado com sucesso!";
  }
  return errors;
}
