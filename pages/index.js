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
                <li><NewsLink slug={`srilanka-${nanoid(15)}`} title="Sri Lanka"/></li>
            </ul>
            <style jsx>{`
                div {
                    font-family: Arial;
                    margin: 50px 100px;
                }

                li {
                   margin: 10px 0; 
                }

                li :global(a) {
                    text-decoration: none;
                }
            `}</style>
        </div>
    )
}