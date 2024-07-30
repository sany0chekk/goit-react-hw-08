import { AiFillInstagram } from "react-icons/ai";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const HomePage = () => {
  return (
    <div>
      <div className="mb-14 md:mb-20">
        <h2 className="text-center font-bold text-xl mb-4">
          Welcome to E-Contacts
        </h2>
        <p className="text-base font-light text-center mb-6">
          {`It's your ultimate solution for managing all your contact information
        effortlessly and efficiently. Whether you're keeping track of personal
        connections or professional networks, E-Contacts provides the tools you
        need to stay organized and connected.`}
        </p>
      </div>
      <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
        <li className="shadow-lg bg-zinc-300 dark:bg-neutral-600 rounded-md overflow-hidden">
          <h3 className="p-2 w-full text-center bg-zinc-400 font-semibold">
            User-Friendly Interface
          </h3>
          <p className="p-4 text-center font-light text-sm">
            Our intuitive design ensures that you can navigate and use the app
            with ease.
          </p>
        </li>
        <li className="shadow-lg bg-zinc-300 dark:bg-neutral-600 rounded-md overflow-hidden">
          <h3 className="p-2 w-full text-center bg-zinc-400 font-semibold">
            Comprehensive Contact Management
          </h3>
          <p className="p-4 text-center font-light text-sm">
            Add and edit contacts seamlessly.
          </p>
        </li>
        <li className="shadow-lg bg-zinc-300 dark:bg-neutral-600 rounded-md overflow-hidden">
          <h3 className="p-2 w-full text-center bg-zinc-400 font-semibold">
            Advanced Search
          </h3>
          <p className="p-4 text-center font-light text-sm">
            Quickly find any contact with our powerful search functionality.
          </p>
        </li>
      </ul>
      <div className="mb-6">
        <h2 className="font-bold text-xl text-center mb-4">Getting Started</h2>
        <ul className="flex flex-col gap-5">
          <li className="p-4 bg-zinc-400 dark:bg-neutral-600 shadow-md">
            <div className="">
              <div className="mb-2">
                <span className="opacity-50 text-xl mr-2">1.</span>{" "}
                <span className="font-semibold text-base">
                  Create an Account
                </span>{" "}
              </div>
              <p className="opacity-70 font-light text-sm">
                Sign up with your email to start using E-Contacts. Add Contacts:
                Begin by adding your first few contacts, including all necessary
                details. Organize: Use categories to keep your contacts sorted
                for easy access. Search and Edit: Utilize the search function to
                quickly find and update your contacts as needed.
              </p>
            </div>
          </li>
          <li className="p-4 bg-zinc-400 dark:bg-neutral-600 shadow-md">
            <div className="">
              <div className="mb-2">
                <span className="opacity-50 text-xl mr-2">2.</span>{" "}
                <span className="font-semibold text-base">Add Contacts</span>{" "}
              </div>
              <p className="opacity-70 font-light text-sm">
                Begin by adding your first few contacts, including all necessary
                details.
              </p>
            </div>
          </li>
          <li className="p-4 bg-zinc-400 dark:bg-neutral-600 shadow-md">
            <div className="">
              <div className="mb-2">
                <span className="opacity-50 text-xl mr-2">3.</span>{" "}
                <span className="font-semibold text-base">Search and Edit</span>{" "}
              </div>
              <p className="opacity-70 font-light text-sm">
                Utilize the search function to quickly find and update your
                contacts as needed.
              </p>
            </div>
          </li>
        </ul>
      </div>
      <div className="flex flex-col items-center text-center pt-4 border-t border-zinc-300 dark:border-neutral-500">
        <div className="mb-4">
          <h3 className="font-bold text-xl">Oleksandr Veselyi</h3>
          <p className="font-medium text-sm opacity-70">Front-end Developer</p>
        </div>
        <ul className="flex items-center gap-4">
          <li>
            <a
              href="https://www.linkedin.com/in/o-veselyi/"
              target="_blank"
              className="transition-opacity hover:opacity-50"
            >
              <FaLinkedin size="25" />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/sany0chekk"
              target="_blank"
              className="transition-opacity hover:opacity-50"
            >
              <FaGithub size="25" />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/hackingbegin/"
              target="_blank"
              className="transition-opacity hover:opacity-50"
            >
              <AiFillInstagram size="25" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
