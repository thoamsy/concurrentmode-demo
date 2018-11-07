import React, { useState, useCallback } from 'react';
import { unstable_createResource as createResource } from 'react-cache';

const fakeAPI = createResource(
  value =>
    new Promise(r => {
      setTimeout(() => r(value), 1500);
    })
);

const Form = () => {
  const [value, setValue] = useState('');
  const [search, setSearch] = useState('You know Nothing');

  const onChange = useCallback(({ target }) => {
    setValue(target.value);
  }, []);

  const onSubmit = useCallback(event => {
    event.preventDefault();
    setSearch(value);
  });

  const context = fakeAPI.read(search);

  return (
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
      <p>{context}</p>
    </form>
  );
};
export default Form;
