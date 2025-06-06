import { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary comic-dots-error">
          <div className="error-container">
            <h2>Oops! Something went wrong</h2>
            <p>We're sorry, but something unexpected happened. Please try refreshing the page.</p>
            <button 
              onClick={() => window.location.reload()}
              className="error-retry-button"
            >
              Refresh Page
            </button>
            {import.meta.env.DEV && (
              <details className="error-details">
                <summary>Error Details (Development)</summary>
                <pre>{this.state.error?.toString()}</pre>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary; 