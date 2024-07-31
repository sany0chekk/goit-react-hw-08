import { useDispatch } from "react-redux";
import ContactForm from "../components/ContactForm";
import ContactList from "../components/ContactList";
import SearchBox from "../components/SearchBox";
import { fetchContacts } from "../redux/contacts/operations";
import { useEffect } from "react";

const ContactsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <div className="flex flex-col items-start md:flex-row gap-4">
        <div className="md:max-w-[300px] w-full p-4 bg-zinc-300 dark:bg-neutral-700 rounded-md">
          <ContactForm />
          <SearchBox />
        </div>
        <div className="relative p-4 bg-zinc-300 dark:bg-neutral-700 rounded-md flex-grow w-full h-full">
          <ContactList />
        </div>
      </div>
    </>
  );
};

export default ContactsPage;
