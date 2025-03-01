// import React, { useState } from "react";

// const FormControl = () => {
//   // const [name, setName] = useState("");
//   // const [email, setEmail] = useState("");
//   // const [password, setPassword] = useState("");

//   // const handleNameChange = (event) => {
//   //   setName(event.target.value);
//   // };

//   // const handleEmailChange = (event) => {
//   //   setEmail(event.target.value);
//   // };

//   // const handlePasswordChange = (event) => {
//   //   setPassword(event.target.value);
//   // };

//   const [user, setUser] = useState({ name: "", email: "", password: "" });
//   const { name, email, password } = user;

//   const onHandleChange = (event) => {
//     setUser({ ...user, [event.terget.name]: event.terget.value });
//   };

//   const handleFormSubmit = (event) => {
//     event.preventDefault();

//     // const userInformation = {
//     //   name,
//     //   email,
//     //   password,
//     // };

//     // console.log("The Form is Successfully Submited");
//     // console.log(userInformation);
//   };

//   console.log("From is submitted successfully...");
//   console.log(user);

//   return (
//     <>
//       <form onSubmit={handleFormSubmit} action="">
//         <div>
//           <label htmlFor="name">Name: </label>
//           <input
//             value={name}
//             onChange={onHandleChange}
//             type="text"
//             name="name"
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="email">Email: </label>
//           <input
//             value={email}
//             onChange={onHandleChange}
//             type="email"
//             name="email"
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="password">Password: </label>
//           <input
//             value={password}
//             onChange={onHandleChange}
//             type="password"
//             name="password"
//             required
//           />
//         </div>

//         <button type="submit">Submit</button>
//       </form>
//     </>
//   );
// };

// export default FormControl;

import React, { useState } from "react";

const FormControl = () => {
  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const { name, email, password } = user;

  const onHandleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log("The Form is Successfully Submitted");
    console.log(user);
  };

  return (
    <>
      <form onSubmit={handleFormSubmit} action="">
        <div>
          <label htmlFor="name">Name: </label>
          <input
            value={name}
            onChange={onHandleChange}
            type="text"
            name="name"
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email: </label>
          <input
            value={email}
            onChange={onHandleChange}
            type="email"
            name="email"
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input
            value={password}
            onChange={onHandleChange}
            type="password"
            name="password"
            required
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default FormControl;
