import CompStyles from '../../styles/Components.module.css'

export default function CoverImage({ title, src, slug, height, width }) {

  return (
    <div className="sm:mx-0">
          <img 
            src={src}
            alt={`Cover Image for ${title}`}
            className={CompStyles.postImage}
        />

    </div>
  )
}
