import React from 'react'


const Healthdy = ({todoname,tododate,deletebutton}) => {
  return (
    <div>
    <div className="row kg-row">
<div className="col-6">
{todoname}
</div>
<div className="col-4">
{tododate}
</div>
<div className="col-2">
<button type="button" className='btn btn-danger' onClick={()=>deletebutton(todoname)} >Delete</button>
</div>
</div>
</div>
  );
};

export default Healthdy;
