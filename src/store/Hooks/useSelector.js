import { useSelector } from "react-redux";

export default function useInputSelector() {
  const useNameSelector = () => {
    return useSelector((state) => state.input.name);
  };

  const useAgeSelector = () => {
    return useSelector((state) => state.input.age);
  };

  const useEmailSelector = () => {
    return useSelector((state) => state.input.email);
  };

  const usePhoneSelector = () => {
    return useSelector((state) => state.input.phone);
  };

  return {
    useNameSelector,
    useAgeSelector,
    useEmailSelector,
    usePhoneSelector,
  };
}

// export const useNameSelector = () => {
//   const name = useSelector((state) => state.input.name);
//   return name;
// };

// export const useAgeSelector = () => {
//   const age = useSelector((state) => state.input.age);
//   return age;
// };

// export const useEmailSelector = () => {
//   const email = useSelector((state) => state.input.age);
//   return email;
// };

// export const usePhoneSelector = () => {
//   const phone = useSelector((state) => state.input.age);
//   return phone;
// };
