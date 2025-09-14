import React from "react";

function MyButton({
	fcn,
	buttonLabel,
	type = "button",
	disabled = false,
	className = "",
	children,
	...rest
}) {
	const combinedClassName = ["cta-button", className].filter(Boolean).join(" ");
	return (
		<div>
			<button
				onClick={fcn}
				type={type}
				disabled={disabled}
				className={combinedClassName}
				{...rest}
			>
				{children ? children : buttonLabel}
			</button>
		</div>
	);
}

export default MyButton;