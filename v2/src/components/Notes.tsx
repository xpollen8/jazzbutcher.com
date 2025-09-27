import Image from 'next/image';
import Tag from '@/components/Tag';

const Notes = ({ width=50, height=50 }: any) => <div className="flex flex-wrap mr-1">
	<Image src='/images/gents_note1.png' width={width} height={height} alt="note" />
	<Image src='/images/gents_note2.png' width={width} height={height} alt="note" />
</div>

export const NotesTag = ({ children }: { children: React.ReactNode }) => <Tag><div className="flex flex-wrap">
	<Notes width={20} height={20} />
	{children}
	</div>
</Tag>

export default Notes;
