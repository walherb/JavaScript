// du -sch * .[!.]* | sort -rh
// du -sh * | sort -rh | head -n 15
//! DaveGray --> { latest Next.js Videos }

//! href = 'https://bootswatch.com/5/cerulean/bootstrap.min.css';
/* npx @next/codemod new-link .
Minimalistic framework for redering React applications on the server

SEO.
Next.js: The React Framework
Enter Next.js, the React Framework. Next.js provides a solution to all of the above problems. But more importantly, it puts you and your team in the pit of success when building React applications.

Next.js aims to have best-in-class developer experience and many built-in features, such as:

An intuitive page-based routing system (with support for dynamic routes)
Pre-rendering, both static site generation (SSG) and server-side rendering (SSR) are supported on a per-page basis
Automatic code splitting for faster page loads
Client-side routing with optimized prefetching
Built-in CSS and Sass support, and support for any CSS-in-JS library
Development environment with Fast Refresh support
API routes to build API endpoints with Serverless Functions
Fully extendable

npx create-next-app@latest nextjs-blog --use-npm --example "https://github.com/vercel/next-learn/tree/master/basics/learn-starter"
https://nextjs.org/learn/basics/navigate-between-pages */

/* npx create-next-app@latest
npx create-next-app@latest --typescript
npm run dev
pages/index.js
Manual Setup
npm install next react react-dom
"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "next lint"
}
 */
// ------------ Core Features of Next ------------------------
/*
- Server-rendered React apps 
- Automatic code splitting 
- Simple page based routing
- Built in CSS support  
- Hot Reloading
- Deployment

npm init 
npm install next react react-dom 
{
    "scripts": {
        "dev": "next",
        "build": "next build",
        "start": "next start"
    }
}
pages/index.js 
export default () => <div>Hello World</div>

Link Module 
Import Link from 'next/link'

<Link href="/"><a>Home</a></Link>

<Link href="/about"><button>About</button></Link>

*/

//! Next.js Crash Course - Server Side React - YouTube {Traversy Media}
/* 
!------------ Benefits ----------------
- Easy Page Loading 
- API Routes 
- Out of the box TypeScript & Sass
- Static Site Generation 
- Easy deployment 

npx create-next-app next-crash-course 
!import styles from '../styles/Home.module.css';
!<main className={styles.main}></main>
!index.js
import Head from 'next/head';
export default function Home() {
    return (
        <div>
        <Head>
        <title>WebDev Newz</title>
        <meta name='keywords' content='web development, programming' />
        </Head>
        <h1>Welcome to Next</h1>
        </div>
    )
}

!pages/about.js
!components/Layout.js 
import Nav from './Nav'
import styles from '../styles/Layout.module.css';
const Layout = ({children}) => {
    return (
        <>
            <Nav />
            <div className={styles.container}>
            <main className={styles.main}>
            {children}
            </main>
            </div>
        </>
    )
}

export default Layout;
!pages/api/_app.js 
import Layout from '../components/Layout';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
    return (
        <Layout>
         <Component {...pageProps} />
        </Layout>
    )
}

export default MyApp;
!components/Nav.js 
import Link from 'next/link';
import navStyles from '../styles/Nav.module.css';

const Nav = () => {
    return (
        <nav className={navStyles.nav}>
            <ul>
                <li>
                    <Link href='/'>Home</Link>
                </li>
                <li>
                    <Link href='/about'>About</Link>
                </li>
            </ul>
        </nav>
    )
}
export default Nav;

*/

//! Next.js 13 Crash Course - App Directory, React Server Components & More {: Brad}
