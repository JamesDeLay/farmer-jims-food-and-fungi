import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

export type Specimen = {
    lastEdited: string
    commonName: string
    scientificName: string
    imgURL: string
    nativeTo: Array<string>
    filePath: string;
    content?: string;
}

export type SiteSocial = {
    name: string;
    url: string;
    icon: IconDefinition
}