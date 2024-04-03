// This module should contain type definitions for modules which do not have
// their own type definitions and are not available on DefinitelyTyped.

// declare module 'some-untyped-pkg' {
// 	export function foo(): void;
// }

declare module 'react-use-keypress' {
	export default function useKeyPress(
		key: KeyboardEvent['key'] | KeyboardEvent['key'][],
		callback?: (e: KeyboardEvent) => void,
	)
}
