import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';

// const style = {
//   backgroundColor: 'red',
//   color: 'blue',
//   border: '1px solid blue',
//   padding: '10px'
// }

function App() {
  return (
    <div className="App">
      <LoadUsers></LoadUsers>
      {/* <Heading></Heading>
      <Article></Article>
      <Article></Article>
      <Article></Article> */}

      {/* <Blog heading="Heading - 01" author="Ahmed"></Blog>
      <Blog heading="Heading - 02" author="Zubair"></Blog>
      <Blog heading="Heading - 03" author="Imtiaz"></Blog> */}

      {/* <Mobile></Mobile> */}

    </div>
  );
}
// const Mobile = () =>{
//   let [charge, setCharge] = useState(0)

//   const chargeIncrease = () => {
//     const newCharge = charge - 1;
//     if(newCharge < 0){
//       return
//     }
//     setCharge(newCharge)
//   }
//   const chargeDecrease = () => {
//     const newCharge = charge + 1;
//     setCharge(newCharge)
//   }
//   return(
//     <div>
//       <h2>Charge: {charge}</h2>
//       <button onClick={chargeIncrease}>Battery Down</button>
//       <button onClick={chargeDecrease}>Battery Up</button>
//     </div>
//   )
// }
// const Article = () =>{
//   return(
//     <div className="blog">
//       <article>Hello Brother from React Recap Bhai!</article>
//     </div>
//   );
// }

// const Heading = () =>{
//   return(
//     <div>
//       <h2 style={style}>Hello welcome to my website</h2>
//       <p style={{color: 'red', border: "1px solid red"}}>Hello from paragraph</p>
//     </div>
//   );
// }

// const Blog = (props) =>{
//   return(
//     <div className="blog">
//       <h2>Heading: {props.heading}</h2>
//       <p>Author: {props.author}</p>
//     </div>

//   );
// }

const LoadUsers = () =>{
  const [users, setUsers] = useState([]);
  useEffect( ()=> {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, []);
  return(
    <div>
      {
        users.map(user => <DisplayContent user={user}></DisplayContent>)
      }
    </div>
  );
}

const DisplayContent = (props) =>{
  return(
    <div>
      <h3>User Name: {props.user.name}</h3>
    </div>
  );
}

export default App;
