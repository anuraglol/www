export const useGallery = () =>
  useQuery({
    queryKey: ["gallery"],
    queryFn: async () => {
      const response = await $fetch("/api/gallery");
      return response;
    },
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 10, // 10 minutes
    gcTime: 1000 * 60 * 30, // 30 minutes,
    refetchOnMount: false,
  });
