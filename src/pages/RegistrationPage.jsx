import { Field, Formik, Form } from "formik";
import { FaRegUser } from "react-icons/fa";
import { GrSecure } from "react-icons/gr";
import { MdOutlineMail } from "react-icons/md";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { register } from "../redux/auth/operations";

const RegistrationPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
  };

  return (
    <div className="max-w-[400px] mx-auto bg-zinc-300 dark:bg-neutral-700 rounded-md shadow-md p-4">
      <h2 className="text-center font-bold text-xl mb-10">Registration</h2>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
        }}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className="flex flex-col mb-6">
            <label htmlFor="name" className="font-semibold text-sm">
              Username
            </label>
            <div className="transition-opacity border-b border-zinc-500 border-opacity-50 flex items-center gap-2 p-2 group focus-within:border-opacity-100">
              <FaRegUser className="size-4 transition-opacity opacity-50 group-focus-within:opacity-100" />
              <Field
                name="name"
                id="name"
                type="text"
                placeholder="Type your username"
                className="bg-transparent outline-none font-light text-sm"
              />
            </div>
          </div>
          <div className="flex flex-col mb-6">
            <label htmlFor="email" className="font-semibold text-sm">
              Email
            </label>
            <div className="transition-opacity border-b border-zinc-500 border-opacity-50 flex items-center gap-2 p-2 group focus-within:border-opacity-100">
              <MdOutlineMail className="size-5 transition-opacity opacity-50 group-focus-within:opacity-100" />
              <Field
                name="email"
                id="email"
                type="email"
                placeholder="Type your email"
                className="bg-transparent outline-none font-light text-sm"
              />
            </div>
          </div>
          <div className="flex flex-col mb-10">
            <label htmlFor="password" className="font-semibold text-sm">
              Password
            </label>
            <div className="transition-opacity border-b border-zinc-500 border-opacity-50 flex items-center gap-2 p-2 group focus-within:border-opacity-100">
              <GrSecure className="size-5 transition-opacity opacity-50 group-focus-within:opacity-100" />
              <Field
                name="password"
                id="password"
                type="password"
                placeholder="Type your password"
                className="bg-transparent outline-none font-light text-sm"
              />
            </div>
          </div>
          <button
            type="submit"
            className="p-2 w-full rounded-md text-zinc-300 dark:text-white transition-colors bg-teal-700 hover:bg-teal-600"
          >
            Register
          </button>
        </Form>
      </Formik>
      <p className="mt-10 font-medium text-sm text-center">
        Already have an account?{" "}
        <Link to="/login" className="text-blue-400 underline">
          Login here
        </Link>
      </p>
    </div>
  );
};

export default RegistrationPage;
