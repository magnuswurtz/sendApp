import Link from "next/link"
import styles from '../styles/Home.module.css'

interface FrontPageCard {
    headline: string;
    desc: string;
    link: string;
    img:string;
}

const FrontPageCard = (props:FrontPageCard) => {
    return (
        <Link href={props.link}>
            <a className="flex flex-col items-center m-1 p-3 w-6/12 border-solid rounded-md border-2 hover:bg-violet-400 focus:bg-violet-400 active:bg-violet-400 ">
                <div className="flex flex-col basis-1/4">
                    <h2 className="text-center text-3xl m-1">{props.headline}</h2>
                    <p className="italic text-center">{props.desc}</p>
                </div>
                <div className="flex basis-3/4">
                    <img className="mb-5 border rounded-lg" src={props.img} width={300} height={200}/>
                </div>
            </a>
        </Link>
    )
}
export default FrontPageCard