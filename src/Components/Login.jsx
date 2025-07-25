import { motion } from "framer-motion";
import { useForm } from "react-hook-form"
import { useContext } from "react";
import { UserContext } from "../assets/API/ContextApi";
const Login = () => {
  const {setUser} = useContext(UserContext)
  const {
    register,
    handleSubmit,
   reset,
    formState: { errors },
  } = useForm()



const onSubmit = (data) => {
  setUser(data);
  reset(); // clear form
};

  return (
    <div className="w-full min-h-[80vh] bg-black py-10 px-4 md:px-10">
      <div className="flex flex-col md:flex-row justify-between uppercase mb-10">
        <motion.h1
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-white font-bold text-5xl md:text-8xl scale-y-150 scale-x-110"
        >
          rosier
        </motion.h1>
        <motion.h1
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="text-white font-bold text-5xl md:text-8xl scale-y-150 scale-x-110"
        >
          login
        </motion.h1>
      </div>

      <motion.form
      onSubmit={handleSubmit(onSubmit)}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-wrap gap-4"
      >
        <div className="flex-1 min-w-full md:min-w-[300px] bg-white rounded h-36 px-5 flex items-center justify-center">
          <input
          {... register("name")}
            type="text"
            className="border-b border-black outline-0 w-full h-10 bg-transparent"
            placeholder="Name"
          />
        </div>

        <div className="flex-1 min-w-full md:min-w-[300px] bg-white rounded h-36 px-5 flex items-center justify-center">
          <input
          {... register('email')}
            type="email"
            className="border-b border-black outline-0 w-full h-10 bg-transparent"
            placeholder="Email"
          />
        </div>

        <div className="flex-1 min-w-full md:min-w-[300px] bg-white rounded h-36 px-5 flex items-center justify-center">
          <input
            type="password" {... register('password')}
            className="border-b border-black outline-0 w-full h-10 bg-transparent"
            placeholder="Password"
          />
        </div>

        <div className="w-full bg-white rounded h-14 px-5 flex items-center justify-center font-bold mt-4">
          <button className="w-full h-full cursor-pointer" type="submit">Submit Form</button>
        </div>
      </motion.form>
    </div>
  );
};

export default Login;
