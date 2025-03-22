import { useFormStatus } from "react-dom";

function SubmitBtn() {
  const { pending } = useFormStatus();

  return (
    <div>
      <button
        type="submit"
        disabled={pending}
        className={`
                    px-4 py-2 
                    rounded-lg 
                    transition-all 
                    duration-200 
                    ease-in-out 
                    ${
                      pending
                        ? "bg-blue-300 cursor-not-allowed" // 禁用状态
                        : "bg-blue-500 hover:bg-blue-600 active:bg-blue-700" // 正常状态
                    }
                    text-white 
                    font-semibold 
                    focus:outline-none 
                    focus:ring-2 
                    focus:ring-blue-500 
                    focus:ring-offset-2
                `}
      >
        {pending ? (
          <span className="flex items-center">
            <svg
              className="animate-spin h-5 w-5 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Creating...
          </span>
        ) : (
          "Create"
        )}
      </button>
    </div>
  );
}

export default SubmitBtn;
