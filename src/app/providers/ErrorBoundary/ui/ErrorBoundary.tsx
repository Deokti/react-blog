import React, { ErrorInfo, ReactElement, Suspense } from 'react';
import { Loader } from 'shared/ui/Loader';
import { PageError } from 'widgets/PageError';

interface ErrorInfoProps {
  children: ReactElement;
}
interface ErrorInfoState {
  hasError: boolean;
}

export class ErrorBoundary
  extends React.Component<ErrorInfoProps, ErrorInfoState> {
  constructor(props: ErrorInfoProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // eslint-disable-next-line no-console
    console.error('[ErrorBoundary]', error, errorInfo);
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      return (
        <Suspense fallback={<Loader isCenter />}>
          <PageError />
        </Suspense>
      );
    }

    return children;
  }
}
