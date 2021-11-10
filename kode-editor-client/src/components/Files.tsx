import './Files.css';
import FileIcon from './FileIcon'


interface Props {
    name: string,
    type: string,
    selected: string,
    onUpdateFile: (fileName: string) => void | undefined

}

export default function Files(props: Props): JSX.Element {
    return (
        <div className={props.selected ? 'fileContainer bg-none border-node' : 'fileContainer text-fg border-green'} onClick={() => { props.onUpdateFile(props.name) }}>
            <FileIcon type={props.type} />
            <p>{props.name}</p>
        </div>
    )
}