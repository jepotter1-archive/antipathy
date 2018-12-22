
const isAbs = (file: string) => file.startsWith("/")
const join = (x: string[], y: string[]) => x.concat(y).join("/")
const sequentialDiff = <T>(x: T[], y: T[]) => {
    let output: T[] = []
    for (let i = 0; i < x.length || i < y.length; i++) {
        if (x[i] !== y[i]) {
            if (i === 0) return []
            else return output
        }
        output.push(x[i])
    }
    return x
}
const getPathTokens = (x: string) => x.split("/").filter(i => i !== "")

export class PathError extends Error {
    constructor (msg: string) {
        super(msg)
        this.name = "antipathy.PathError"
    }
}

export class Path {
    private abs: boolean
    private path: string[]
    constructor (path: string) {
        if (isAbs(path)) {
            this.abs = true
        } else {
            this.abs = false
        }
        this.path = getPathTokens(path)
    }
    push (path: string): void {
        if (isAbs(path)) {
            throw new PathError("Cannot push absolute path to Path object")
        } else {
            this.path.push(...getPathTokens(path))
        }
    }
    pop (): void {
        this.path.pop()
    }
    getAbsolute (relativeTo: string = process.cwd()): string {
        return "/" + (this.abs ? this.path.join("/") : join(getPathTokens(relativeTo), this.path))
    }
    getRelative (relativeTo: string = process.cwd()): string {
        if (!isAbs(relativeTo)) throw new PathError(`base path must be an absolute path`)
        const relativeToTokenized = getPathTokens(relativeTo)
        if (this.abs && relativeToTokenized.length !== 0) {
            const diff = sequentialDiff(relativeToTokenized, this.path)
            if (diff.length === 0) throw new PathError(`relativeTo invalid: ${relativeTo} and ${"/" + this.path.join("/")} are not compatible`)
            return relativeToTokenized.concat(this.path).filter(x => !diff.includes(x)).join("/")
        } else {
            return this.path.join("/")
        }
    }
}
