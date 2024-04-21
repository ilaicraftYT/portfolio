import { h, s } from 'hastscript';

const iconBase = {
	xmlns: 'http://www.w3.org/2000/svg',
	width: '20',
	height: '20',
	viewBox: '0 0 24 24',
	fill: 'none',
	stroke: 'currentColor',
	'stroke-width': '2',
	'stroke-linecap': 'round',
	'stroke-linejoin': 'round'
};

// icons from @tabler/icons-svelte
const icons = {
	note: s('svg.mr-2', iconBase, [
		s('path', { d: 'M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0' }),
		s('path', { d: 'M12 9h.01' }),
		s('path', { d: 'M11 12h1v4h1' })
	]),
	tip: s('svg.mr-2', iconBase, [
		s('path', { d: 'M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7' }),
		s('path', { d: 'M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3' }),
		s('path', { d: 'M9.7 17l4.6 0' })
	]),
	important: s('svg.mr-2', iconBase, [
		s('path', {
			d: 'M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z'
		}),
		s('path', { d: 'M12 8v3' }),
		s('path', { d: 'M12 14v.01' })
	]),
	warning: s('svg.mr-2', iconBase, [
		s('path', { d: 'M12 9v4' }),
		s('path', {
			d: 'M10.363 3.591l-8.106 13.534a1.914 1.914 0 0 0 1.636 2.871h16.214a1.914 1.914 0 0 0 1.636 -2.87l-8.106 -13.536a1.914 1.914 0 0 0 -3.274 0z'
		}),
		s('path', { d: 'M12 16h.01' })
	]),
	caution: s('svg.mr-2', iconBase, [
		s('path', {
			d: 'M12.802 2.165l5.575 2.389c.48 .206 .863 .589 1.07 1.07l2.388 5.574c.22 .512 .22 1.092 0 1.604l-2.389 5.575c-.206 .48 -.589 .863 -1.07 1.07l-5.574 2.388c-.512 .22 -1.092 .22 -1.604 0l-5.575 -2.389a2.036 2.036 0 0 1 -1.07 -1.07l-2.388 -5.574a2.036 2.036 0 0 1 0 -1.604l2.389 -5.575c.206 -.48 .589 -.863 1.07 -1.07l5.574 -2.388a2.036 2.036 0 0 1 1.604 0z'
		}),
		s('path', { d: 'M12 8v4' }),
		s('path', { d: 'M12 16h.01' })
	])
};

const Note = (props, children) =>
	h('.note', [
		h('p.my-2', [
			h('div.inline-flex.items-center.text-sapphire', icons['note'], h('span', 'Note'))
		]),
		...children
	]);

const Tip = (props, children) =>
	h('.tip', [
		h('p.my-2', [h('div.inline-flex.items-center.text-green', icons['tip'], h('span', 'Tip'))]),
		...children
	]);

const Important = (props, children) =>
	h('.important', [
		h('p.my-2', [
			h('div.inline-flex.items-center.text-mauve', icons['important'], h('span', 'Important'))
		]),
		...children
	]);

const Warning = (props, children) =>
	h('.warning', [
		h('p.my-2', [
			h('div.inline-flex.items-center.text-yellow', icons['warning'], h('span', 'Warning'))
		]),
		...children
	]);

const Caution = (props, children) =>
	h('.caution', [
		h('p.my-2', [
			h('div.inline-flex.items-center.text-red', icons['caution'], h('span', 'Caution'))
		]),
		...children
	]);
export { Note, Tip, Important, Warning, Caution };
