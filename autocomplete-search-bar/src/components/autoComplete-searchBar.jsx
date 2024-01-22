 import React from 'react';
 import { useState, useEffect } from 'react';

 const AutoCompleteSearchBar = () => {
    const [value, setValue] = useState('');
    const [data, setData] = useState([]);
  
    const fetchData = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const jsonData = await response.json();
      setData(jsonData);
    };
  
    const onChange = (e) => {
      setValue(e.target.value);
    };
  
    const onClick = () => {
      fetchData();
    };
  
 
  
    return (
      <div className="App d-flex justify-center">
        <div className="search relative d-inline-block">
          <div>
            <input type="text" onChange={onChange} value={value} />
            <button onClick={onClick}>Search</button>
          </div>
          <div className="dropdown-content d-block absolute min-w:[160px] absolute px-[12px] py-[16px]">
            {
                value &&
                 data.filter(item => item.title.startsWith(value) && item.title !== value).map((item) => (
                    <div key={item.id} onClick={(e) => setValue(item.title)}>
                        {item.title} <hr/>
                        </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default AutoCompleteSearchBar;
  