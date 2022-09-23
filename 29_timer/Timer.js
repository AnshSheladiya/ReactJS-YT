import React from 'react'
import OtpTimer from "otp-timer";

const Timer = () => {
    const submit = () => {
        console.log("button clicked");
      };
  return (
    <div className="App">
    <h1>Hello CodeSandbox</h1>
    <h2>Start editing to see some magic happen!</h2>
    <OtpTimer
      minutes={0}
      seconds={10}
      text="Time:"
      ButtonText="Resend"
      resend={submit}
    />
  </div>  )
}

export default Timer


