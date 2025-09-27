import Image from 'next/image';
import Tag from '@/components/Tag';

const Notes = ({ width=50, height=50, children }: any) => <div className="flex flex-wrap">
	<Image src='/images/gents_note1.png' width={width} height={height} alt="note" className="mr-2"/>
	{children}
	<Image src='/images/gents_note2.png' width={width} height={height} alt="note" className="ml-2"/>
</div>

export const NotesTag = ({ children }: { children: React.ReactNode }) => <Tag>
	<Notes width={20} height={20} > {children} </Notes>
</Tag>

export default Notes;
