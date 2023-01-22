/// <reference types="vitest" />

import { types as t } from "mobx-state-tree";
const Test = t.model({
	test: t.string
})

export const tes = Test.create({
	test: "what"
})

if (import.meta.vitest) {
	it('should do something', () => {
		expect(1).toBe(1);
	})
}