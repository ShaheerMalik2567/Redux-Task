import { inputActions } from "../Slices/InputSlice";
import { useDispatch } from "react-redux";

// Handler to call in our views
export default function useInputActionHandlers() {
  const dispatch = useDispatch();

  const fullnameDispatcher = (name) => {
    dispatch(inputActions.nameSetter(name));
  };
  const ageDispatcher = (age) => {
    dispatch(inputActions.ageSetter(age));
  };

  const emailDispatcher = (email) => {
    dispatch(inputActions.emailSetter(email));
  };

  const phoneDispatcher = (phone) => {
    dispatch(inputActions.phoneSetter(phone));
  };

  return {
    fullnameDispatcher,
    ageDispatcher,
    emailDispatcher,
    phoneDispatcher,
  };
}
