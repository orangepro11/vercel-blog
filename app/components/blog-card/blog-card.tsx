export interface BlogCardProps {
	title: string;
	description: string;
	slug: string;
	date: string;
	image: string;
	tags: string[];
}

const BlogCard: React.FunctionComponent<BlogCardProps> = (props) => {
	return (
		<>
			<div className="rounded-lg shadow-lg overflow-hidden h-full">
				<div>
					<img className="h-48 w-full object-cover" src={props.image} alt="" />
				</div>

				<div className="p-6">
					<div>
						{
							(props?.tags || []).map((tag: string) => (
								<span className="text-sm leading-5 font-medium text-indigo-600 mr-2">{tag}</span>
							))
						}
					</div>
					<h3 className="mt-2 text-3xl lg:text-xl leading-9 font-semibold text-gray-900">
						{props.title}
					</h3>
					<p className="mt-3 text-base leading-6 text-gray-600">{props.description}</p>
					{/* <div className="mt-6 flex items-center">
						<div className="flex-shrink-0">
							<img className="h-10 w-10 rounded-full" src="https://avatars.githubusercontent.com/u/45259786?v=4" alt="" />
						</div>
						<div className="ml-3">
							<p className="text-sm leading-5 font-medium text-gray-900">不爱喝橙子汁</p>
							<div className="text-sm leading-5 text-gray">
								<div>{new Date(props.date).toLocaleDateString()}</div>
							</div>
						</div>
					</div> */}
				</div>
			</div>
		</>

	);
}

export default BlogCard;
