import Link from 'next/link';
import { User } from '../generated/graphql';
import { DateFormatter } from './date-formatter';

type Author = Pick<User, 'name'>;

type Props = {
  title: string;
  date: string;
  author: Author;
  slug: string;
  commentCount: number;
};

export const MinimalPostPreview = ({ title, date, slug, commentCount }: Props) => {
  const postURL = `/${slug}`;

  return (
	<Link href={postURL}>
		<section className="flex flex-col items-start gap-1 bg-gray-50 border border-gray-200 p-4 ">
		<h2 className="text-lg leading-tight tracking-tight text-black dark:text-white hover:text-xl transition-all duration-200 ease-in-out relative group">
			<Link href={postURL}>{title}</Link>
		</h2>
		<p className="flex flex-row items-center gap-2">
			<Link href={postURL} className="text-sm text-neutral-600 dark:text-neutral-400">
			<DateFormatter dateString={date} />
			</Link>
			{commentCount > 1 && (
			<>
				<span>&middot;</span>
				<Link href={postURL} className="text-sm text-neutral-600 dark:text-neutral-400">
				{commentCount} comments
				</Link>
			</>
			)}
		</p>
		</section>
	</Link>
  );
};