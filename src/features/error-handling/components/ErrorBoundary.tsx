import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary';
// import { useTheme } from 'styled-components';
import { Button } from '../../../components/atomic/Button';
import { ErrorMsg } from './ErrorMsg';

/**
 * Error Fallback UI component
 */
function ErrorFallback({ error, ...optionals }) {
  const { enableReset = true, resetErrorBoundary = () => window.location.reload(), ...rest } = optionals;

  // const theme = useTheme();
  return (
    <div role="alert" className='flex flex-col items-center p-2'>
      <ErrorMsg title='Something went wrong:' text={error?.message} />
      {enableReset ? <Button onClick={resetErrorBoundary}>Try again</Button> : null}
    </div>
  )
}

export function ErrorBoundary({ children }) {
  return (
    <ReactErrorBoundary FallbackComponent={ErrorFallback}>{children}</ReactErrorBoundary>
  )
}
