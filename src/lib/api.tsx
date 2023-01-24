import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const filePathURL = join(process.cwd(), 'src/_markdown/cultivar')

type getCultivarProps = {
    cultivar: String
}

export function getCultivars() {
    const files = fs.readdirSync(filePathURL)
    return files.map((file) => {
        const fullPath = join(filePathURL, file)
        const fileContents = fs.readFileSync(fullPath, 'utf8')
        const { data, content } = matter(fileContents)
        return { ...data, content }
    })

}