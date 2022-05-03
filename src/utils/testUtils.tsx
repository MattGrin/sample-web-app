import { QueryClient, QueryClientProvider } from "react-query";

export const reactQueryWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <QueryClientProvider
      client={
        new QueryClient({
          defaultOptions: {
            queries: {
              retry: false,
              cacheTime: Infinity,
            },
          },
        })
      }
    >
      {children}
    </QueryClientProvider>
  );
};
