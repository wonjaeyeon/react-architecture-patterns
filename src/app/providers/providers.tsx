import { RouterProvider } from 'react-router-dom';
import { Theme } from '@radix-ui/themes';
import { router } from '../router';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from '../../shared/theme';


const queryClient = new QueryClient();

export const Providers = () => {
    return (
        <>
            <QueryClientProvider client={queryClient}>
                <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
                    <Theme>
                        <RouterProvider router={router} />
                    </Theme>
                </ThemeProvider>
                <ReactQueryDevtools />
            </QueryClientProvider>
        </>
    );
};
