import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
import Unocss from 'unocss/vite'

import { extractorSvelte } from '@unocss/core'

import { presetUno, presetTypography, transformerDirectives } from 'unocss'

import windy from "@unocss/preset-wind"

import { animatedUno } from 'animated-unocss'

import { presetForms } from '@julr/unocss-preset-forms'
import { theme, shortcuts } from './src/style';

const config: UserConfig = {
	plugins: [
		Unocss({

			// mode: "global",//default

			mode: "svelte-scoped",

			extractors: [extractorSvelte],

			theme,

			shortcuts,

			presets: [

				presetUno(),



				windy(),

				animatedUno(),

				presetForms(),

				presetTypography()

			],

			transformers: [transformerDirectives()]

		}),

		sveltekit()

	]
};

export default config;
