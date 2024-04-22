import Link from 'next/link';
import type { DreamDto } from '../../types';

interface Props {
    dreams: DreamDto[];
}

export default function DreamList(props: Props) {
    const { dreams } = props;
    return <div>
        {dreams?.map(dream => <div><Link href={`/dreams/${dream.id}/`}>{dream.title}</Link></div>)}
    </div>
}