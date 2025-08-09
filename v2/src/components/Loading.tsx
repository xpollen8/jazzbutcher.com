const Loading = ({ isLoading, silent=false, message="Loading...", children }: { isLoading: boolean, silent?: boolean, message?: string, children : any }) => (isLoading) ? <div className="search loading">{(!silent) && message}</div> : children;

export default Loading;
