import React, {
  useState,
  useCallback,
  useRef,
  useEffect,
  useContext,
} from 'react';
import { unstable_createResource as createResource } from 'react-cache';
import { WhichMode } from '../App';

const fakeAPI = createResource(
  value =>
    new Promise(r => {
      setTimeout(() => r(value), 1500);
    }),
  ([a, b]) => a + b
);

const Form = () => {
  const [value, setValue] = useState('');
  const [search, setSearch] = useState('You know Nothing');
  const inputRef = useRef();

  useEffect(() => inputRef.current.focus());
  const mode = useContext(WhichMode);

  const onChange = useCallback(({ target }) => {
    setValue(target.value);
  });

  const onSubmit = useCallback(event => {
    event.preventDefault();
    setSearch(value);
  });

  const context = fakeAPI.read([search, mode]);

  return (
    <form onSubmit={onSubmit}>
      <div className="field">
        <div className={`control`}>
          <input
            ref={inputRef}
            onChange={onChange}
            value={value}
            className="input"
            type="text"
            placeholder="Normal loading input"
          />
        </div>
      </div>
      <p>{context}</p>
    </form>
  );
};
export default Form;
