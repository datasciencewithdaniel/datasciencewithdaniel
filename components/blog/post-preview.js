import DateFormatter from './date-formatter'
import CoverImage from './cover-image'
import Link from 'next/link'

export default function PostPreview({
  title,
  coverImage,
  date,
  author,
  slug,
}) {
  return (
    <div>
      <div className="mb-2">
        <CoverImage
          slug={slug}
          title={title}
          src={coverImage}
          height={396}
          width={1584}
        />
      </div>
      <h3 className="text-3xl mb-1 leading-snug">
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a className="hover:underline">{title}</a>
        </Link>
      </h3>
      <div className="text-lg mb-5">
        <DateFormatter dateString={date} />
        <p>{author.name}</p>
      </div>
    </div>
  )
}
