import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const cultivarPathURL = join(process.cwd(), 'src/_markdown/cultivar')
const companyAboutPathURL = join(process.cwd(), 'src/_markdown/meta')

export function getSpecimenBySlug(slug: string) {
    const cultivar = getCultivar()
    const specimen = cultivar.find((specimen) => specimen.filePath === slug)
    return specimen
}

export function getCultivar() {
    const files = fs.readdirSync(cultivarPathURL)
    return files.map((filePath) => {
        const fullPath = join(cultivarPathURL, filePath)
        const fileContents = fs.readFileSync(fullPath, 'utf8')
        const { data, content } = matter(fileContents)
        return {
            filePath: filePath.split('.')[0],
            content,
            ...data
        }
    })
}

export function getCompanyAbout() {
    // return "SEE"
    const fullPath = join(companyAboutPathURL, "company_about.md")
    const fileContents = fs.readFileSync(fullPath, 'utf-8')
    const { data, content } = matter(fileContents)
    return {

        content: content.trim(),
        ...data
    }
}