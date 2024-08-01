import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { editContact } from "../redux/contacts/operations";
import { GiConfirmed } from "react-icons/gi";

import * as Yup from "yup";

const EditContactForm = ({ handleEditClose, id, name, number }) => {
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    if (values.name !== name || values.number !== number) {
      dispatch(editContact({ id, ...values }));
    }
    handleEditClose();
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required("Required!")
      .min(3, "Too short!")
      .max(50, "Name must be at most 50 characters!")
      .test(
        "trim",
        "Name cannot be only spaces!",
        (value) => value.trim() !== ""
      ),
    number: Yup.string().required("Required!"),
  });

  return (
    <Formik
      initialValues={{
        name: name,
        number: number,
      }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form className="flex items-center gap-6 justify-between">
        <div className="flex flex-col gap-4 w-full">
          <Field
            name="name"
            id="name"
            type="text"
            placeholder="Type contact name"
            className="bg-zinc-400 p-2 rounded-md dark:bg-neutral-700 outline-none font-light text-lg"
          />
          <Field
            name="number"
            id="number"
            type="text"
            placeholder="Type contact number"
            className="bg-zinc-400 p-2 rounded-md dark:bg-neutral-700 outline-none font-light text-lg"
          />
        </div>
        <button
          type="submit"
          className="bg-teal-700 p-2 transition-colors text-zinc-300 dark:text-white hover:bg-teal-600 rounded-md w-full md:w-auto flex justify-center"
        >
          <GiConfirmed size="25" />
        </button>
      </Form>
    </Formik>
  );
};

export default EditContactForm;
