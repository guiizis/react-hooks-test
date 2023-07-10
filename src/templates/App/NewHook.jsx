import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';

const ItThrowError = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    if (counter > 3) {
      throw new Error('testee');
    }
  }, [counter]);

  return (
    <div onClick={() => setCounter((c) => c + 1)}>
      Click to Increase {counter}
    </div>
  );
};

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }

    // eslint-disable-next-line react/prop-types
    return this.props.children;
  }
}

export const Home = () => {
  return (
    <div>
      <ErrorBoundary>
        <ItThrowError />
      </ErrorBoundary>
    </div>
  );
};
