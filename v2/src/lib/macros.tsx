import Link from 'next/link';

const linkExternal = (url: string, text: string) : React.ReactNode => <Link target="_new" href={url}>{text || url}</Link>

export { linkExternal }
