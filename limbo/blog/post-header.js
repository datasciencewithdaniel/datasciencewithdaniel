import DateFormatter from './date-formatter'
import CoverImage from './cover-image'

import PageHeader from '../pageheader';

export default function PostHeader({ title, coverImage, date, author }) {
  	return (
    	<>
        <PageHeader pageTitle={title}>
        </PageHeader>

      	<div className="hidden md:block md:mb-12">
      		<DateFormatter dateString={date} />
        	<p>{author.name}</p>
      	</div>
      	<div className="mb-8 md:mb-16 sm:mx-0">
        	<CoverImage title={title} src={coverImage} height={396} width={1584} />
      	</div>
      	<div className="max-w-2xl mx-auto">
        	<br/>
      	</div>
    	</>
  	)
}
