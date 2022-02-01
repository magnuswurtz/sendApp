import Link from "next/link"
import styles from '../styles/Home.module.css'

interface FrontPageCard {
    headline: string;
    desc: string;
    link: string;
}

const FrontPageCard = (props:FrontPageCard) => {
    return (
        <Link href={props.link}>
            <a className="m-1 p-1 w-6/12 border-solid rounded-md border-2 hover:bg-violet-400 focus:bg-violet-400 active:bg-violet-400 ">
                <h2 className="text-center text-3xl m-1">{props.headline}</h2>
                <p className="italic text-center">{props.desc}</p>
            </a>
        </Link>
    )
}
export default FrontPageCard