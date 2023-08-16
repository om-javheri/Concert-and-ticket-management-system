import React,{useState} from 'react'
// import { Link } from 'react-router-dom'
import { Link, useNavigate } from 'react-router-dom'
export default function Delete() {
  // const [RegisterStatus, setRegisterStatus] = useState("");
  const navigate = useNavigate();
  // const [values, setValues] = useState({
  //   cname: '',
  //   cimage: '',
  //   tname: '',
  //   timage: '',
  //   date: '',
  //   time: '',
  //   ticket: '',
  // });
  // const [errors, setErrors] = useState({});
  // const [concertData, setConcertData] = useState([]); // New state to store the retrieved data

  
  // const handleInput = (event) => {
  //   setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  // };
  

  const handleSubmit = (e) => {
    e.preventDefault();

   navigate('/ShowAndDelete');
  };


  return (
    <>
    <div className=' text-center'>
        <div class="btn-group" role="group" aria-label="Basic example">
  <button type="button" class="btn btn-success" > <Link className="nav-link " aria-current="page" to="/Create">Create New Concert</Link></button>
  <button type="button" class="btn btn-warning"><Link className="nav-link " aria-current="page" to="/Edit">Edit Concert</Link></button>
  <button type="button" class="btn btn-danger"><Link className="nav-link " aria-current="page" to="/Delete">Delete Concert</Link></button>
</div>

<div><button type="submit" onClick={handleSubmit} className="btn btn-success my-3">Show Concerts</button>
</div>

<h1>Show Concert</h1>
<div className='text-center'>



</div>



    </div>
    </>
  )
}
