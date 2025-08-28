const InfoTag = ({ children }: { children?: string | React.ReactElement }) => {
	return <span style={{ zIndex: '1', position: 'relative', top: 12, left: -5, border: '1px solid white', padding: '5px', borderTopRightRadius: '20px', borderBottomRightRadius: '20px', color: 'white' }} className="bg-slate-700 drop-shadow-lg">{children}</span>
}

export default InfoTag;
