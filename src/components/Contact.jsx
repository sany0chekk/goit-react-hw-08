import { FaPhoneAlt } from "react-icons/fa";
import { MdDeleteForever, MdEditSquare } from "react-icons/md";
import { useDispatch } from "react-redux";
import { deleteContact } from "../redux/contacts/operations";
import { useState } from "react";
import EditContactForm from "./EditContactForm";

const Contact = ({ contact: { id, name, number } }) => {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleEditClose = () => {
    setIsEditing(false);
  };

  return (
    <li className="p-4 bg-zinc-300 shadow-lg dark:bg-neutral-600 rounded-md">
      {isEditing ? (
        <EditContactForm
          handleEditClose={handleEditClose}
          id={id}
          name={name}
          number={number}
        />
      ) : (
        <div className="flex flex-col gap-6 md:flex-row justify-between md:items-center">
          <div className="flex flex-col gap-3">
            <p className="text-base md:text-xl">{name}</p>
            <p className="flex items-center gap-2 text-sm">
              <FaPhoneAlt size="15" /> {number}
            </p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <button
              onClick={() => handleDelete(id)}
              className="bg-teal-700 p-2 transition-colors text-zinc-300 dark:text-white hover:bg-teal-600 rounded-md w-full md:w-auto flex justify-center"
            >
              <MdDeleteForever size="25" />
            </button>
            <button
              onClick={handleEdit}
              className="bg-teal-700 p-2 transition-colors text-zinc-300 dark:text-white hover:bg-teal-600 rounded-md w-full md:w-auto flex justify-center"
            >
              <MdEditSquare size="25" />
            </button>
          </div>
        </div>
      )}
    </li>
  );
};

export default Contact;
