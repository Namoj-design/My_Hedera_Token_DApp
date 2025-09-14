import React from "react";
import MyButton from "./MyButton.jsx";
import MyText from "./MyText.jsx";

function MyGroup({
	text,
	link,
	fcn,
	buttonLabel,
	groupClassName = "",
	buttonProps = {},
	textProps = {},
	children,
	...rest
}) {
	return (
		<div className={groupClassName} {...rest}>
			<MyText text={text} link={link} {...textProps} />
			<MyButton fcn={fcn} buttonLabel={buttonLabel} {...buttonProps}>
				{children}
			</MyButton>
		</div>
	);
}

export default MyGroup;