const Tag = ({ style, className, children }: { style?: any, className?: any, children: React.ReactNode }) => <div style={style} className={(className) ? className : 'tag'}>{children}</div>

export default Tag;
