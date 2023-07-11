import Head from "next/head";
import Link from "next/link";

interface HeaderProps {
    blogTitle?: string;
}

interface NavItem {
    linkTo: string;
    name: string;
}

const Header = ({ blogTitle = 'my notion blog' }: HeaderProps) => {
    const navItems: NavItem[] = [
        {
            linkTo: '/',
            name: 'Home'
        },
        {
            linkTo: '/posts',
            name: 'Posts'
        },
    ]
    return (
        <header>
            <ul className="flex">
                {
                    navItems.map(({
                        linkTo,
                        name
                    }) => (
                        <li key={name}>
                            {
                                linkTo && <Link href={linkTo} className='active'>
                                    {name}
                                </Link>
                            }
                        </li>
                    ))
                }
            </ul>
        </header>
    );
}


export default Header