import Image from '@/components/Image'
import Link from '@/components/Link'
import NewsletterForm from '@/components/NewsletterForm'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import formatDate from '@/lib/utils/formatDate'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import siteMetadata from '@/data/siteMetadata'
const MAX_DISPLAY = 5

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Home({ posts }) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className="flex flex-col items-center xl:flex-row gap-x-12 mb-12">
        <div className="pt-6">
          <h1 className="pb-6 text-3xl font-extrabold leading-9 tracking-tight sm:text-4xl sm:leading-10 md:text-3xl md:leading-14">
            Hi, I’m <span className='text-blue-500 text-font-family'>Tuantq</span>
          </h1>
          <h2 className="text-lg prose text-gray-600 dark:text-gray-400">
            {`Welcome to my ${siteMetadata.description}. Feel at home, ask, comment, give your opinion...`}
          </h2>
        </div>
        {/* <div className="flex items-center justify-center">
          <div className="flex flex-col items-center pt-8 my-2 space-x-2">
            <Image
              src={siteMetadata.image}
              alt="avatar"
              width="192px"
              height="192px"
              className="w-48 h-48 rounded-full"
            />
          </div>
        </div> */}

      </div>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-md font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-4xl md:leading-14">
            Latest posts
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            {siteMetadata.description}
          </p>
        </div>
        <ul className="divide-y1 divide-gray-200 dark:divide-gray-700">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((frontMatter) => {
            const { slug, date, title, summary, tags } = frontMatter
            return (
              <li key={slug} className="py-12 group-link-underline p-8 bg-transparent bg-opacity-20 px-2 transition duration-100 hover:scale-105 dark:hover:shadow-xl hover:shadow-md dark:hover-shadow-xl dark:shadow-white hover:rounded-xl hover:bg-blue-50 hover:bg-opacity-50 dark:hover:bg-gray-800">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                        <time dateTime={date}>{formatDate(date)}</time>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-2xl font-bold leading-8 tracking-tight mb-4">
                            <Link
                              href={`/blog/${slug}`}
                              className="link-underline text-gray-900 dark:text-gray-100 hover:text-blue-600"
                            >
                              {title}
                            </Link>
                          </h2>
                          <div className="flex flex-wrap">
                            {tags.map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}
                          </div>
                        </div>
                        <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                          {summary}
                        </div>
                      </div>
                      <div className="text-base font-medium leading-6">
                        <Link
                          href={`/blog/${slug}`}
                          className="text-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition duration-150"
                          aria-label={`Read "${title}"`}
                        >
                          Read more &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6 mt-6">
          <Link
            href="/blog"
            className="text-blue-500 hover:text-blue-600 dark:hover:text-blue-400"
            aria-label="all posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
      {siteMetadata.newsletter.provider !== '' && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )}
    </>
  )
}
