import { Triangle } from "react-loader-spinner";

const PageLoader = () => {
  return (
    <div className="fixed w-full h-full top-0 left-0 backdrop-blur-sm bg-white dark:bg-neutral-700 bg-opacity-50 flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <Triangle
          visible={true}
          height="100"
          width="100"
          color="#4fa94d"
          ariaLabel="triangle-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
        <p className="font-bold text-lg animate-bounce">Loading</p>
      </div>
    </div>
  );
};

export default PageLoader;
