// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Grandpa from './Components/Grandpa/Grandpa'
// import ReusableForm from './Components/ReusableForm/ReusableForm'
// import HookForm from './Components/HookForm/HookForm'
// import RefForm from './Components/RefForm/RefForm'
// import StatefulForm from './Components/StateFulForm/StatefulForm'
// import SimpleFrom from './Components/SimpleFrom/SimpleFrom'

function App() {
  // const handleSignUpSubmit = data => {
  //   console.log('sign up data', data);
  // }

  // const handleUpdateProfile = data => {
  //   console.log('update on your Profile', data);
  // }
  // const [count, setCount] = useState(0)

  return (
    <>
      <h1>Form Muster</h1>
      <Grandpa></Grandpa>
      {/* <SimpleFrom></SimpleFrom> */}
      {/* <StatefulForm></StatefulForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      {/* <ReusableForm
        formTitle={'Sign UP'} handleSubmit={handleSignUpSubmit}>
        <div>
          <h2>Sign Up</h2>
          <p>Please submit your details</p>
        </div>
      </ReusableForm>
      <ReusableForm
        formTitle={'Profile Update'}
        submitBtnText='Update'
        handleSubmit={handleUpdateProfile}>
        <div>
          <h2>Update Profile</h2>
          <p>Please Update your Profile</p>
        </div>
      </ReusableForm> */}
    </>
  )
}

export default App
