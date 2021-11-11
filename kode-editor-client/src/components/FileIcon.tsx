import {DiCode, DiPython, DiJavascript1, DiHtml5, DiCss3Full, DiSass, DiLess} from 'react-icons/di'

export default function FileIcon(props: {type: string}): JSX.Element {
    return(
        <>
        {props.type==='python'&&<DiPython className='mr-1 text-lg' />}
        {props.type==='javascript'&&<DiJavascript1 className='mr-1 text-lg' />}
        {props.type==='html'&&<DiHtml5 className='mr-1 text-lg' />}
        {props.type==='css'&&<DiCss3Full className='mr-1 text-lg' />}
        {props.type==='cpp'&&<DiCode className='mr-1 text-lg' />}
        {props.type==='sass'&&<DiSass className='mr-1 text-lg' />}
        {props.type==='less'&&<DiLess className='mr-1 text-lg' />}
        {props.type==='other'&&<DiCode className='mr-1 text-lg' />}
        </>
    );
}