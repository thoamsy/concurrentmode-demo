import React, { useState, useCallback } from 'react';
import { unstable_createResource as createResource } from 'react-cache';

const fakeAPI = createResource(
  value =>
    new Promise(r => {
      setTimeout(() => r(value), 1500);
    })
);

const Context = ({ children }) => {
  const res = fakeAPI.read(children);
  return <p>{res}</p>;
};

const Form = () => {
  const [value, setValue] = useState('');
  const [search, setSearch] = useState('');

  const onChange = useCallback(({ target }) => {
    setValue(target.value);
  }, []);

  const onSubmit = useCallback(
    event => {
      event.preventDefault();
      setSearch(value);
    },
    [value]
  );

  return (
    <>
      <form onSubmit={onSubmit}>
        <div className="field">
          <div className={`control`}>
            <input
              onChange={onChange}
              value={value}
              className="input"
              type="text"
              placeholder="Normal loading input"
            />
          </div>
        </div>
        <Context>{search}</Context>
      </form>
    </>
  );
};
export default Form;
