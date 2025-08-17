import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, RefreshCw, Home, Bug } from 'lucide-react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null, errorInfo: null };
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        // Log the error to console or error reporting service
        console.error('Error caught by boundary:', error, errorInfo);
        this.setState({
            error: error,
            errorInfo: errorInfo
        });
    }

    handleReload = () => {
        window.location.reload();
    };

    handleGoHome = () => {
        window.location.href = '/';
    };

    render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen flex items-center justify-center px-4 py-8 bg-dark">
                    <motion.div
                        className="text-center max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        {/* Error icon */}
                        <motion.div
                            className="mb-8"
                            animate={{
                                rotate: [0, -5, 5, 0],
                                scale: [1, 1.05, 1]
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        >
                            <AlertTriangle size={80} className="mx-auto text-red-400" />
                        </motion.div>

                        {/* Error message */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="mb-8"
                        >
                            <h1 className="text-4xl md:text-5xl font-bold text-theme-primary mb-4">
                                Oops! Something went wrong
                            </h1>
                            <p className="text-lg text-theme-secondary leading-relaxed mb-6">
                                Don't worry, it's not you - it's us! Our code seems to have hit a snag. 
                                Try refreshing the page or go back to the homepage.
                            </p>
                        </motion.div>

                        {/* Error details (only in development) */}
                        {process.env.NODE_ENV === 'development' && this.state.error && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                transition={{ delay: 0.4 }}
                                className="mb-8 p-4 rounded-lg bg-red-900/20 border border-red-500/30 text-left"
                            >
                                <div className="flex items-center gap-2 mb-2">
                                    <Bug size={16} className="text-red-400" />
                                    <span className="text-sm font-semibold text-red-400">Error Details (Development Mode)</span>
                                </div>
                                <pre className="text-xs text-red-300 overflow-auto max-h-32">
                                    {this.state.error.toString()}
                                    {this.state.errorInfo.componentStack}
                                </pre>
                            </motion.div>
                        )}

                        {/* Action buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                        >
                            <motion.button
                                onClick={this.handleReload}
                                className="flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <RefreshCw size={18} />
                                Refresh Page
                            </motion.button>

                            <motion.button
                                onClick={this.handleGoHome}
                                className="flex items-center gap-2 px-6 py-3 rounded-lg bg-element hover:bg-green-600 text-theme-primary hover:text-white border border-zinc-200/10 hover:border-green-500/50 font-medium transition-all duration-300"
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Home size={18} />
                                Go Home
                            </motion.button>
                        </motion.div>

                        {/* Help text */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                            className="mt-8 p-4 rounded-lg bg-gradient-to-r from-orange-600/10 to-red-600/10 border border-orange-500/20"
                        >
                            <p className="text-sm text-theme-secondary">
                                If this problem persists, please try clearing your browser cache or contact support.
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
