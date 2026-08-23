import { useState } from "react"
import Button from "../../component/common/Button"

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function Login() {
  const [personData, setPersonData] = useState({
    email: "",
    password: ""
  })
  const [errors, setErrors] = useState({})

  function handleChange(e) {
    const { name, value } = e.target
    setPersonData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  function validateForm() {
    const newErrors = {}
    let valid = true

    if (!personData.email.trim()) {
      newErrors.email = "Email is required"
      valid = false
    } else if (!EMAIL_REGEX.test(personData.email.trim())) {
      newErrors.email = "Invalid email"
      valid = false
    }

    if (!personData.password.trim()) {
      newErrors.password = "Password is required"
      valid = false
    } else if (personData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters"
      valid = false
    }

    setErrors(newErrors)
    return valid
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!validateForm()) return
    // TODO: connect to auth API
  }

  return (
    <section className="flex items-center justify-around flex-col-reverse mt-10 ml:0  text-black md:flex-row">
    <div className="w-[30%] h-[400px] bg-cover bg-right hidden  md:block"  style={{backgroundImage:`url(https://plus.unsplash.com/premium_photo-1664201889947-ca672c9d4134?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`}}>
     
    {/* <img src="https://plus.unsplash.com/premium_photo-1664201889947-ca672c9d4134?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="loginImage" className=" w-[65%] h-[25%] hidden md:block" /> */}
    </div>
      
     <div className="flex flex-col justify-start items-start md:items-center w-[85%] ">
    
        <h1 className="font-bold text-4xl mb-4">Log in to Exclusive</h1>
        <p className="text-[20px]">Enter your details below</p>
   

      <form name="login" onSubmit={handleSubmit} noValidate className="flex flex-col  my-20 w-[80%] md:w-[50%] gap-8 ">
      <div className="flex flex-col gap-1">
      <input
      autoComplete="email"
      id="login-email"
      type="email"
      name="email"
      value={personData.email}
      onChange={handleChange}
      placeholder="Email or Phone Number"
      aria-invalid={Boolean(errors.email)}
      aria-describedby={errors.email ? "email-error" : undefined}
       className="border-b border-gray-400 focus:outline-none p-2 placeholder:text-[14px] md:placeholder:text-[18px]" />
      {errors.email && <p id="email-error" className="text-[#DB4444] text-sm">{errors.email}</p>}
      </div>
      <div className="flex flex-col gap-1">
      <input
      id="password"
      type="password"
      value={personData.password}
      name="password"
      onChange={handleChange}
      placeholder="Password"
      aria-invalid={Boolean(errors.password)}
      aria-describedby={errors.password ? "password-error" : undefined}
      className="focus:outline-none border-b border-gray-400 p-2 placeholder:text-[14px] md:placeholder:text-[18px]"
      />
      {errors.password && <p id="password-error" className="text-[#DB4444] text-sm">{errors.password}</p>}
      </div>
      <div className="flex justify-between items-center gap-4 ">
      <Button tag={"Login"}  type="submit"/>
      <button className="text-[#DB4444] bg-transparent flex items-center cursor-pointer">Forget Password ?</button>
      </div>
      

    </form>
     </div>
    </section>
   
  )
}
