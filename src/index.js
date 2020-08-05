/**
 * @file
 * @kind overview
 * @summary React specific utility functions.
 * @author Paul Walton
 */
// eslint-disable-next-line no-unused-vars
import React, { Fragment, useState, useEffect } from "react";

/**
 * Merge React refs. If only one potential ref is passed in, returns that ref.
 * @summary Merge React refs.
 * @arg {...React.Ref} refs
 * @returns {React.Ref}
 */
export function mergeRefs(...refs) {
	const filteredRefs = refs.filter(Boolean);
	if (!filteredRefs.length) return null;
	if (filteredRefs.length === 1) return filteredRefs[0];
	return (inst) => {
		for (const ref of filteredRefs) {
			if (typeof ref === "function") {
				ref(inst);
			} else if (ref) {
				ref.current = inst;
			}
		}
	};
}

/**
 * Display name helper for HOCs.
 * @arg {React.Component} WrappedComponent - A React component.
 * @returns {string}
 */
export function getDisplayName(WrappedComponent) {
	return WrappedComponent.displayName || WrappedComponent.name || "Component";
}

/**
 * Test if component is functional.
 * eg. for when checking if you should forward refs when creating HOCs.
 * @summary Test if component is functional.
 * @arg {React.Component} Component - A React component.
 * @returns {boolean}
 */
export function isFunctionalComponent(Component) {
	return typeof Component === "function" && !(Component.prototype && Component.prototype.isReactComponent);
}

/**
 * Test if component is a class component.
 * eg. for when checking if you should forward refs when creating HOCs.
 * @summary Test if component is a class component.
 * @arg {React.Component} Component - A React component.
 * @returns {boolean}
 */
export function isClassComponent(Component) {
	return !!(typeof Component === "function" && Component.prototype && Component.prototype.isReactComponent);
}

/**
 * Get a piece of state that updates with prop changes.
 * @function
 * @arg {*} prop - Property to update with, acts as initial/most recent state.
 * @returns {Array.<React.ComponentState, React.SetStateAction>} React state hook tuple.
 */
export const useStatefulProp = (prop) => {
	let [state, setState] = useState(prop);
	useEffect(() => setState(prop), [prop]);
	return [state, setState];
};

// /**
//  * Convert newlines to HTML `<br>` elements.
//  * @function
//  * @arg {string} text
//  * @returns {React.ReactFragment[]}
//  */
// export const nl2br = (text) => {
// 	return text.split("\n").map((item, key) => {
// 		return (
// 			<Fragment key={key}>
// 				{item}
// 				<br />
// 			</Fragment>
// 		);
// 	});
// };
