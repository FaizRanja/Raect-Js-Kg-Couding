import Healthdy from './Healthdy'
import React from 'react';
const Todoitems = ({ todoItems ,onClick}) => {
  return (
    <>
      <div className="container">
        {todoItems.map((item) => (
          <Healthdy deletebutton={onClick} key={todoItems} todoname={item.name} tododate={item.duedate} />
        ))}
      </div>
    </>
  );
}

export default Todoitems;
