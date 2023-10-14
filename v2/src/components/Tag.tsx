//import LetterHeader from '@/components/LetterHeader';

const Tag = ({ style, className, children }: { style?: any, className?: any, children: React.ReactNode }) => <div style={style} className={(className) ? className : 'tag'}>{children}</div>

//const Tag = ({ className, children }: { className?: any, children: React.ReactNode }) => <div className={className}><LetterHeader title={children} /></div>

export default Tag;
