import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { SiteSocial } from "./types"

export interface SiteConfig {
    email: string;
    socials: Array<SiteSocial>
}


export const config: SiteConfig = {
    email: 'farmerjimsmushrooms@gmail.com',
    socials: [
        {
            name: "Email",
            url: `mailto:farmerjimsmushrooms@gmail.com`,
            icon: faEnvelope
        }
    ]
}

