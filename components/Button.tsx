import Link from 'next/link'

interface button {
    text:string;
    link:string;
}
const Button = (props:button) => {
    return(
        <div className='flex'>
            <Link href={props.link}><a className="btn-primary">{props.text}</a></Link>
        </div>
    )
}
export default Button