import Link from 'next/link'
import kebabCase from '@/lib/utils/kebabCase'

const Tag = ({ text }) => {
  return (
    <Link href={`/tags/${kebabCase(text)}`}>
      <a className="mt-2 rounded-lg border border-blue-500 py-1 px-3 transition duration-300 ease-in-out hover:bg-blue-500 mr-3 text-sm font-medium capitalize text-blue-500 hover:text-white dark:hover:text-white">
        {text.split(' ').join('-')}
      </a>
    </Link>
  )
}

export default Tag
