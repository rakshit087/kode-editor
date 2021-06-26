import './Files.css';
import Theme from '../interfaces/theme'
import FileIcon from './FileIcon'


interface Props {
    name: string,
    type: string,
    selected: string,
    theme: Theme
    onUpdateFile: (fileName: string)=>void | undefined

}

export default function Files(props: Props): JSX.Element {
    const styleProp = {
        color: props.theme.cyan,
        background: 'none',
        border: 'none'
    }
    if (props.selected === 'true'){
        styleProp.color = props.theme.pink;
        styleProp.background = props.theme.bgl;
        styleProp.border = '1px solid '+props.theme.purple;
    }
        

    return (
        <div className="fileContainer" style={styleProp} onClick={() => {props.onUpdateFile(props.name)}}>
            <FileIcon type={props.type}/>
            <p>{props.name}</p>
        </div>
    )
}