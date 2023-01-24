import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const filePathURL = join(process.cwd(), 'src/_markdown/cultivar')

export function getSpecimenBySlug(slug: string) {
    const cultivar = getCultivar()
    const specimen = cultivar.find((specimen) => specimen.filePath === slug)
    return specimen
}

export function getCultivar() {
    const files = fs.readdirSync(filePathURL)
    return files.map((filePath) => {
        const fullPath = join(filePathURL, filePath)
        const fileContents = fs.readFileSync(fullPath, 'utf8')
        const { data, content } = matter(fileContents)
        return {
            filePath: filePath.split('.')[0],
            content,
            ...data
        }
    })

}