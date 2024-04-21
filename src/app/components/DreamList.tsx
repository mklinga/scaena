import type { DreamDto } from '../../types';

interface Props {
    dreams: DreamDto[];
}

export default function DreamList(props: Props) {
    const { dreams } = props;
    return <div>
        {dreams?.map(dream => <div>{dream.title}</div>)}
    </div>
}