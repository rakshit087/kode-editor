import {DiCode, DiPython, DiJavascript1, DiHtml5, DiCss3Full, DiSass, DiLess} from 'react-icons/di'
import './FileIcon.css'

export default function FileIcon(props: {type: string}): JSX.Element {
    return(
        <>
        {props.type==='python'&&<DiPython className='fileIcon' />}
        {props.type==='javascript'&&<DiJavascript1 className='fileIcon' />}
        {props.type==='html'&&<DiHtml5 className='fileIcon' />}
        {props.type==='css'&&<DiCss3Full className='fileIcon' />}
        {props.type==='cpp'&&<DiCode className='fileIcon' />}
        {props.type==='sass'&&<DiSass className='fileIcon' />}
        {props.type==='less'&&<DiLess className='fileIcon' />}
        {props.type==='other'&&<DiCode className='fileIcon' />}
        </>
    );
}