// import React, { useState } from 'react';
// import axios from 'axios';

// const UserForm = () => {
//     const [user, setUser] = useState({
//         name: '',
//         email: ''
//     });

//     const handleChange = (e) => {
//         setUser({
//             ...user,
//             [e.target.name]: e.target.value
//         });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios.post('http://localhost:8000/api/users', user);
//             console.log(response.data);
            
//             window.location.reload();
//         } catch (error) {
//             console.error('Error creating user:', error);
//             alert('Error creating user');
//         }
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//   <div>
//     <input
//       type="text"
//       name="name"
//       value={newUser.name}
//       onChange={handleChange}
//       placeholder="Enter name"
//     />
//     <label htmlFor="name">Name</label>
//   </div>
//   <div>
//     <input
//       type="email"
//       name="email"
//       value={newUser.email}
//       onChange={handleChange}
//       placeholder="Enter email"
//     />
//     <label htmlFor="email">Email</label>
//   </div>
//   <button type="submit">Submit</button>
// </form>

//     );
// };

// export default UserForm;