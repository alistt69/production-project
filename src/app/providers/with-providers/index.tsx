import React from 'react';
import { Suspense } from 'react';
import { Loader } from 'shared/ui/loader';
import { StoreProvider } from 'app/providers/store';
import { ErrorBoundary } from 'app/providers/error-boundary';
import { ThemeProvider } from 'app/providers/theme';

interface WithProvidersProps {
  children: React.ReactNode;
}

export const WithProviders: React.FC<WithProvidersProps> = ({ children }) => {
  return (
    <Suspense fallback={<Loader />}>
      <StoreProvider>
        <ErrorBoundary>
          <ThemeProvider>
            {children}
          </ThemeProvider>
        </ErrorBoundary>
      </StoreProvider>
    </Suspense>
  );
};