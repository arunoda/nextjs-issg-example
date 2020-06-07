import Link from 'next/link'
import {nanoid} from 'nanoid'

const NewsLink = ({slug, title}) => (
    <Link href="/news/[slug]" as={`/news/${slug}`}>
        <a>{title}</a>
    </Link>
)

export default function Index() {
    return (
        <div>
            <h1>The News Portal</h1>
            <ul>
                <li><NewsLink slug="covid19" title="Covid 19"/></li>
                <li><NewsLink slug="globalwarming" title="Global Warming"/></li>
            </ul>
            <div className="learn-more">
                <a href="https://arunoda.me/blog/what-is-nextjs-issg">What is Next.js iSSG?</a>
            </div>
            <style jsx>{`
                div {
                    font-family: Arial;
                    margin: 50px 30px;
                }

                li {
                   margin: 10px 0; 
                }

                a,
                li :global(a) {
                    text-decoration: none;
                }

                .learn-more {
                    position: fixed;
                    bottom: 0px;
                    left: 30px;
                    padding: 30px 0;
                    font-size: 14px;
                }
            `}</style>
        </div>
    )
}