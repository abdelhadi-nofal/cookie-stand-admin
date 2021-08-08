import Link from 'next/link'

export default function CookieStandHeader(props) {
    return (
        <header>
            <Link className='text-center' href={props.path}><a className="float-right m-3 pl-2 pr-2 text-center text-base bg-gray-100 ">{props.page}</a></Link>
            <h1 className= 'text-3xl h-17 py-2  px-8 bg-green-500 text-black'>{props.header}</h1>
        </header>
    )
    
}

// Cookie Stand Admin
// Overview