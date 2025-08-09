const Loading = ({ isLoading, silent=false, children }: { isLoading: boolean, silent: boolean, children : any }) => (isLoading) ? <div className="search loading">{(!silent) && `Loading...`}</div> : children;

export default Loading;
