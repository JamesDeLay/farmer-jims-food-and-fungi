import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const cultivarDirectory = join(process.cwd(), '_markdown/cultivar/')

type getCultivarProps = {
    cultivar: String
}

export function getCultivars() {
    console.log("getCultivars")
    const fullPath = join(cultivarDirectory, "pink_oyster.md")
    console.log({ fullPath })
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    // const { data, content } = matter(fileContents)
    // console.log({ data, content })
    return [{ "test": "test" }]
}