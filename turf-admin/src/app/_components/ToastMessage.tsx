import { toast } from "react-toastify";

// enum APISTATE {
//   PENDING = 0,
//   SUCCESS = 1,
//   ERROR = 2,
// }

export const useToastApi = () => {
  const toastPromise = async (apiCall: () => Promise<any>) => {
    // let state: number = APISTATE.PENDING;

    return toast.promise(
      apiCall()
        .then((response) => {
          return response;
        })
        .catch((error) => {
          throw error;
        }),
      {
        pending: "Processing...",
        success: {
          render({ data }: any) {
            return data?.data?.success
              ? `${data?.data?.message} 👌` || "Operation successful 👌"
              : data?.data?.message || "Operation failed 🤯";
          },
          type: "success",
        },
        error: {
          render({ data }: any) {
            return (
              data?.response?.data?.message || "An unexpected error occurred 🤯"
            );
          },
          type: "error",
        },
      }
    );
  };

  return { toastPromise };
};
