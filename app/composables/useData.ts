export const useData = async () => {
  interface User {
    id: number;
    name: string;
    email: string;
  }

  const { data, isPending, isError, error, suspense } = useQuery({
    queryKey: ["user", 1],
    queryFn: async () => {
      const response = await $fetch<User>(
        "https://jsonplaceholder.typicode.com/users/1"
      );
      return response;
    },
  });

  await suspense();

  return {
    data,
    isPending,
    isError,
    error,
  };
};
