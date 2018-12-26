
import { Path, PathError } from "./main"

const absolutePath = new Path("/hello/world")
const relativePath = new Path("hello/world")

// Tests that should succeed
test("absolute -> relative", () => {
    expect(absolutePath.getRelative("/hello")).toBe("world")
})
test("relative -> absolute", () => {
    expect(relativePath.getAbsolute("/foo")).toBe("/foo/hello/world")
})
test("relative -> relative", () => {
    expect(relativePath.getRelative()).toBe("hello/world")
})
test("absolute -> absolute", () => {
    expect(absolutePath.getAbsolute()).toBe("/hello/world")
})
test("push relative path", () => {
    const p = new Path("/hello/world").push("foo").push("ya")
    expect([p.getAbsolute(), p.getRelative("/hello")]).toEqual(["/hello/world/foo/ya", "world/foo/ya"])
})
test("mutable push relative path", () => {
    const p = new Path("/hello/world")
    p.$push("foo")
    p.$push("ya")
    expect([p.getAbsolute(), p.getRelative("/hello")]).toEqual(["/hello/world/foo/ya", "world/foo/ya"])
})
test("pop", () => {
    const p = new Path("/foo/bar")
    p.pop()
    expect(p.getAbsolute()).toBe("/foo")
})
test("absolute relative to self", () => {
    expect(absolutePath.getRelative("/hello/world")).toBe("")
})

// Tests that should error
test("push absolute path (error)", () => {
    expect(() => new Path("/hello/world").push("/bar/")).toThrowError(PathError)
})
test("mutable push absolute path (error)", () => {
    const p = new Path("/hello/world")
    expect(() => p.$push("/bar/")).toThrowError(PathError)
})
test("relative relative to relative (error)", () => {
    expect(() => relativePath.getRelative("hello/world")).toThrowError(PathError)
})
test("absolute relative to unrelated absolute (error)", () => {
    expect(() => absolutePath.getRelative("/foo/bar")).toThrowError(PathError)
})
