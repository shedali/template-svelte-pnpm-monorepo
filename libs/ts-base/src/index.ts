import {types as t} from "mobx-state-tree";
import {test, it, expect} from "vitest";
const Test = t.model({
	test: t.string
})

export const tes = Test.create({
	test: "what"
})

if (import.meta.vitest) {
  it('should do something', ()=>{
  	expect(1).toBe(1);
  })
}