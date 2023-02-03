import Layout from "@/layouts/Layout";
import { Specimen } from "@/lib/types";
import { useEffect } from "react";
import { getCultivar, getSpecimenBySlug } from '../../lib/api';
import { useRouter } from "next/router";
import ContentWrapper from "@/layouts/ContentWrapper";
import Image from "next/image";
import { roboto } from "@/lib/fonts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleLeft } from "@fortawesome/free-solid-svg-icons";
import MarkdownContent from "@/components/MarkdownContent";
import NavBar from "@/components/NavBar";

type Props = {
    specimen: Specimen
}

type Params = {
    params: {
        slug: string
    }
}
export default function SpecimenPage({ specimen }: Props) {
    const router = useRouter()
    const { content, scientificName, imgURL, commonName } = specimen
    return (
        <div className='sm:bg-hero-pattern h-screen flex'>
            <NavBar />
            <div className="m-auto">
                <ContentWrapper>
                    <Image priority className="bg-dark rounded-lg m-auto sm:float-left sm:mt-4 sm:mr-6" alt={scientificName} src={imgURL} height={600} width={400} />
                    <div className="mt-2">
                        <h3 className={`font-bold text-dark text-2xl md:text-4xl md:text-center mt-2 mb-2 ${roboto.className}`}>{commonName}</h3>
                        <h4 className={`italic text-secondary text-xl md:text-3xl md:text-center mb-4 ${roboto.className}`}>{scientificName}</h4>
                        <MarkdownContent content={content} />
                    </div>
                    <div className="h-10 w-10 mt-4 ml-auto text-primary cursor-pointer">
                        <FontAwesomeIcon icon={faChevronCircleLeft} className="text-sm" onClick={router.back} />
                    </div>
                </ContentWrapper>
            </div>
        </div>
    )
}

export async function getStaticProps({ params }: Params) {
    const specimen = getSpecimenBySlug(params.slug)
    return {
        props: {
            specimen
        }
    }
}

export async function getStaticPaths() {
    const cultivar = getCultivar()
    return {
        paths: cultivar.map((specimen) => {
            return {
                params: {
                    slug: specimen.filePath
                }
            }
        }),
        fallback: false
    }
}