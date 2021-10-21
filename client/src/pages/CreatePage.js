import React, {useState} from 'react';

export const CreatePage = () => {
  const [link, setLink] = useState('');

  const pressHandler = event => {
    if (event.key === 'Enter') {
      try {

      } catch (e) {}
    }
  };

  return (
    <div className="row">
      <div
        className="col s8 offset-s2"
        style={{paddingTop: '2rem'}}
      >
        <input placeholder="Вставьте ссылку"
               id="link"
               type="text"
               value={link}
               onChange={e => setLink(e.target.value)}
               onKeyPress={pressHandler}
        />
        <label htmlFor="link">Введите ссылку</label>
      </div>
    </div>
  );
}