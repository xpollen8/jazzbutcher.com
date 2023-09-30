const InfoTag = ({ text }: { text: string }) => {
	return <span style={{ zIndex: '1', position: 'relative', top: 12, left: -7, border: '1px solid white', padding: '7px', borderTopRightRadius: '20px', borderBottomRightRadius: '20px', color: 'white' }} className="bg-slate-700 drop-shadow-lg">{text}</span>
}

export default InfoTag;
