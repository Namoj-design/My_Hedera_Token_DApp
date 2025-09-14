import React from "react";

function MyText({
	text,
	link = "",
	className = "sub-text",
	wrapperClassName = "",
	as: Component = "p",
	children,
	...rest
}) {
	const content = (
		<Component className={className} {...rest}>
			{children ? children : text}
		</Component>
	);

	return (
		<div className={wrapperClassName}>
			{link ? (
				<a href={link} target="_blank" rel="noreferrer">
					{content}
				</a>
			) : (
				content
			)}
		</div>
	);
}

export default MyText;