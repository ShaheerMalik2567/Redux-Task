import { useState } from "react";

import useInputActionHandlers from "../store/Hooks/useDispatch";
import useInputSelector from "../store/Hooks/useSelector";

const Form = () => {
  //Dispatching actions

  //Creating States
  const [fullName, setFullName] = useState("");
  const [Age, setAge] = useState("");
  const [Email, setEmail] = useState("");
  const [Phone, setPhone] = useState("");

  //Input Value Handler
  const handleFullName = (e) => {
    setFullName(e.target.value);
  };
  const handleAge = (e) => {
    setAge(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePhone = (e) => {
    setPhone(e.target.value);
  };

  //Selecting store data
  const input = useInputSelector();
  const name = input.useNameSelector();

  const age = input.useAgeSelector();

  const email = input.useEmailSelector();

  const phone = input.usePhoneSelector();

  //

  const dispatcher = useInputActionHandlers();
  //Handling Submission
  const handleSubmit = (event) => {
    event.preventDefault();

    dispatcher.fullnameDispatcher(fullName);
    dispatcher.ageDispatcher(Age);
    dispatcher.emailDispatcher(Email);
    dispatcher.phoneDispatcher(Phone);

    //clearing form values

    // dispatcher.nameDispatcher(fullName);
    // dispatcher.ageDispatcher(Age);
    // dispatcher.emailDispatcher(Email);
    // dispatcher.phoneDispatcher(Phone);
  };

  return (
    <form onSubmit={handleSubmit}>
      <title>
        <h1>Please Fill this Form</h1>
      </title>
      <div>
        <div>
          <label>Name</label>
          <input type="text" onChange={handleFullName} />
        </div>

        <div>
          <label>Age</label>
          <input type="text" onChange={handleAge} />
        </div>

        <div>
          <label>Email</label>
          <input type="text" onChange={handleEmail} />
        </div>

        <div>
          <label>Phone Number</label>
          <input type="text" onChange={handlePhone} />
        </div>
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>

      <div>
        {name}
        <br />
        {age}
        <br />
        {email}
        <br />
        {phone}
        <br />
      </div>
    </form>
  );
};

export default Form;
