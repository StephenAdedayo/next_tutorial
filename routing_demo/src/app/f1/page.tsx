import Link from "next/link";

export default function F1 () {
    return <>
     <p>f1 page</p>
     <div>
     <Link href={'/f1/f2'}>F2</Link>

     </div>
    </>
}