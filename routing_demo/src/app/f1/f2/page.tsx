import Link from "next/link";

export default function F2 () {
    return <>
     <p>f2 page</p>
     <Link href={'/f1'}>F1</Link>
    </>
}