// import axios from 'axios';
// import { useState } from 'react';
// // import { Link, useNavigate, useParams } from 'react-router-dom';
// import { useEffect } from 'react';

// // import employeeService from '../services/employee.service';


// function AddEmployee()
// {


// const Baseurl="https://localhost:8444";

// const [users,setUsers]=useState([]);
// const[user,setUser]=useState([{userName:"",email:"",password:"",phone:"",role:"",aadharNo:""}]);

//   // const FetchRecords = ()=>
//   // {
//   //     axios.get(url).then((result)=>{ setUsers(result.data) })
//   // }

//   // const RemoveRecord = (No)=>{
//   //     console.log(No);
//   //     var deleteurl = url + "/" + No;
//   //     axios.delete(deleteurl).then((result)=>{
//   //         if(result.data.affectedRows !== undefined && result.data.affectedRows > 0)
//   //         {
//   //             FetchRecords();
//   //         }
//   //     })
//   // }

//   const OnTextChange = (args)=>{
//       var copyOfUser = {...user};
//       copyOfUser[args.target.name] = args.target.value;
//       setUser(copyOfUser);
//   }
//   const AddRecord = ()=>{
// debugger
//     // var newurl=url+"/signup";
//     var url = Baseurl+"/users/signup"
//     console.log(url);
//           axios.post(url,user).then((result)=>
//           {

//             console.log(result);
          
//               if(result.data.affectedRows !== undefined && result.data.affectedRows > 0)
//           {
//             console.log("inside AddRecord function");
//               // FetchRecords();
//               // Reset();
//           }
//           });
          
//   }

//   // const EditRecord = (No)=>
//   // {
//   //         for(var i =0;i<users.length;i++)
//   //         {
//   //             if(users[i].No === No)
//   //             {
//   //                 var userToEdit = {...users[i]};
//   //                 setUser(userToEdit);
//   //                 break;
//   //             }
//   //         }

//   // }

//   // const UpdateRecord= ()=>
//   // {
//   //     var updateUrl = url + "/" + user.No;

//   //     axios.put(updateUrl, emp).then((result)=>{
//   //         if(result.data.affectedRows !== undefined && result.data.affectedRows > 0)
//   //     {
//   //         FetchRecords();
//   //         Reset();
//   //     }
//   //     })

//   // }


//   const Reset= ()=>{
//     setUser({userName:"",email:"",password:"",phone:"",role:"",aadharNo:""});
//   }

//   // useEffect(()=>{FetchRecords()},[])




// //   const [userName, setUsername] = useState('');
// //   const [email, setEmail] = useState('');
// //   const [password, setPassword] = useState('');
// //   const [phone, setPhone] = useState('');
// //   const [role, setRole] = useState('');
// //   const [aadharNo, setAadharNo] = useState('');

// //   const navigate = useNavigate();
// //   const { id } = useParams();

// //   const saveEmployee = (e) => {
// //     e.update();

// //     const employee = {
// //       userName,
// //       email,
// //       password,
// //       phone,
// //       role,
// //       aadharNo,
// //       id
// //     };
// //   }  
//   //   if (id) {
//   //     //update
//   //     employeeService
//   //       .update(employee)
//   //       .then((response) => {
//   //         console.log('Employee data updated successfully', response.data);
//   //         navigate('/');
//   //       })
//   //       .catch((error) => {
//   //         alert(error.response.status);
//   //         console.log('Error code ' + error);
//   //         console.log('Something went wrong', error.response.data);
//   //       });
//   //   } else {
//   //     //create
//   //     employeeService
//   //       .create(employee)
//   //       .then((response) => {
//   //         console.log('employee added successfully', response.data);
//   //         navigate('/');
//   //       })
//   //       .catch((error) => {
//   //         console.log('something went wroing' + error.response);
//   //       });
//   //   }
//   // };

//   // useEffect(() => {
//   //   if (id) {
//   //     employeeService
//   //       .get(id)
//   //       .then((employee) => {
//   //         setUsername(employee.data.userName);
//   //         setEmail(employee.data.email);
//   //         setPassword(employee.data.password);
//   //         setPhone(employee.data.phone);
//   //         setRole(employee.data.role);
//   //         setAadharNo(employee.data.aadharNo);
//   //       })
//   //       .catch((error) => {
//   //         console.log('Something went wrong', error);
//   //       });
//   //   }
//   // }, []);
//   return (
//     <div className='container'>
//       <h3>Add Employee</h3>
//       <hr />
//       <form id="myForm">
//         <div className='form-group'>
//           <input
//             type='text'
//             className='form-control col-4'
//             // id='userName'
//             name="userName"
//             value={user.userName}
//             onChange={OnTextChange}
//             placeholder='Enter user name'
//           />
//         </div>
//         <div className='form-group'>
//           <input
//             type='text'
//             className='form-control col-4'
//             // id='email'
//             name="email"
//             value={user.email}
//             onChange={OnTextChange}
//             placeholder='Enter email'
//           />
//         </div>
//         <div className='form-group'>
//           <input
//             type='password'
//             className='form-control col-4'
//             // id='password'
//             name="password"
//             value={user.password}
//             onChange={OnTextChange}
//             placeholder='Enter Password'
//           />
//         </div>
//         <div className='form-group'>
//           <input
//             type='text'
//             className='form-control col-4'
//             // id='phone'
//             name="phone"
//             value={user.phone}
//             onChange={OnTextChange}
//             placeholder='Enter Phone'
//           />
//         </div>
//         <div className='form-group'>
//           {
//             <select onSelect={user.role}>
//               <option defaultValue>Select Role</option>
//               <option value='ROLE_DELIVERYBOY'>DeliveryBoy</option>
//               <option value='ROLE_USER'>User</option>
//             </select>
//           //   <input
//           //   type='text'
//           //   className='form-control col-4'
//           //   id=''
//           //   value={location}
//           //   onChange={(e) => setLocation(e.target.value)}
//           //   placeholder='Enter Location'
//           // />
//           }
//         </div>
//         <div className='form-group'>
//           <input
//             type='text'
//             className='form-control col-4'
//             // id='aadharNo'
//             name="aadharNo"
//             value={user.aadharNo}
//             onChange={OnTextChange}
//             placeholder='Enter aadharNo'
//           />
//         </div>
//         <div>
//           <button onClick={AddRecord} className='btn btn-primary'>
//             Save Or Update
//           </button>
//         </div>
//       </form>
//       <hr />
//       {/* <Link to='/'>Back to List</Link> */}
//     </div>
//   );
// };

// export default AddEmployee;

