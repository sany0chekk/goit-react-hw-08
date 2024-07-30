const Container = ({ children, css }) => {
  return (
    <div
      className={`p-4 bg-zinc-200 shadow-md dark:bg-neutral-800 rounded-md ${
        css ?? ""
      }"`}
    >
      {children}
    </div>
  );
};

export default Container;
