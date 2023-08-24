const Tag = ({ className, children }: { className?: any, children: React.ReactNode }) => <div className={(className) ? className : 'headingItem'}>{children}</div>

export default Tag;
