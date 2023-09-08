import LetterHeader from '@/components/LetterHeader';

const Tag = ({ className, children }: { className?: any, children: React.ReactNode }) => <div className={(className) ? className : 'headingItem'}>{children}</div>

//const Tag = ({ className, children }: { className?: any, children: React.ReactNode }) => <div className={className}><LetterHeader title={children} /></div>

export default Tag;
