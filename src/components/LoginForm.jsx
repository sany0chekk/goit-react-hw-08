import { Field, Formik, Form, ErrorMessage } from "formik";
import { FaRegUser } from "react-icons/fa";
import { GrSecure } from "react-icons/gr";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logIn } from "../redux/auth/operations";

import * as Yup from "yup";

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(logIn(values));
    actions.resetForm();
  };

  const loginValidationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email!").required("Required!"),
    password: Yup.string()
      .required("Required!")
      .min(8, "Password must be at least 8 characters!")
      .max(50, "Password must be at most 50 characters!"),
  });

  return (
    <div className="max-w-[400px] mx-auto bg-zinc-300 dark:bg-neutral-700 rounded-md shadow-md p-4">
      <h2 className="text-center font-bold text-xl mb-10">Login</h2>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={handleSubmit}
        validationSchema={loginValidationSchema}
      >
        <Form>
          <div className="flex flex-col mb-6">
            <label htmlFor="email" className="font-semibold text-sm">
              Email
            </label>
            <div className="transition-opacity border-b border-zinc-500 border-opacity-50 flex items-center gap-2 p-2 group focus-within:border-opacity-100">
              <FaRegUser className="size-4 transition-opacity opacity-50 group-focus-within:opacity-100" />
              <Field
                name="email"
                id="email"
                type="email"
                placeholder="Type your email"
                className="bg-transparent outline-none font-light text-sm"
              />
            </div>
            <ErrorMessage
              name="email"
              component="span"
              className="text-red-600 mt-1"
            />
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
            <ErrorMessage
              name="password"
              component="span"
              className="text-red-600 mt-1"
            />
          </div>
          <button
            type="submit"
            className="p-2 w-full rounded-md text-zinc-300 dark:text-white transition-colors bg-teal-700 hover:bg-teal-600"
          >
            Login
          </button>
        </Form>
      </Formik>
      <p className="mt-10 font-medium text-sm text-center">
        {`Don't have an account?`}{" "}
        <Link to="/register" className="text-blue-400 underline">
          Register here
        </Link>
      </p>
    </div>
  );
};

export default LoginForm;
