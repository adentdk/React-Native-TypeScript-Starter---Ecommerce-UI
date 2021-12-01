import {useState} from 'react';

export const useToggleState = (
  initialState: boolean,
): [boolean, () => void] => {
  const [state, setState] = useState(initialState);
  const toggle = () => setState(prevState => !prevState);
  return [state, toggle];
};

export default useToggleState;
