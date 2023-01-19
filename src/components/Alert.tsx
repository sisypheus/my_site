import { useEffect, useState } from "react";

interface Props {
  message: string;
  type: "success" | "error";
}

const Alert = ({ message, type }: Props) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 2000);
  }, []);

  useEffect(() => {
    if (!message) {
      setShow(true);
    }
  }, [message]);

  if (!show) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-0 left-0 z-10 mx-auto max-w-xl">
      <div className="flex items-center justify-center px-4">
        <div
          role="alert"
          id="alert"
          className={`mx-auto flex w-full items-center justify-between rounded-lg bg-white ${
            type === "success" ? "bg-green-500" : "bg-red-500"
          } shadow transition duration-150 ease-in-out`}
        >
          <div className="flex flex-col items-center p-4 md:flex-row">
            <p className="text-center text-white">{message}</p>
          </div>
          <div className="flex justify-center pr-4">
            <button
              className="cursor-pointer text-sm font-bold text-white"
              onClick={() => setShow(false)}
            >
              Dismiss
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alert;
