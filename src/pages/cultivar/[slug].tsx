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
        <Layout isLandingPage={false}>
            <div className="-mt-14 mx-4 mb-40 md:mx-0">
                <Image priority className="bg-dark rounded-lg m-auto" alt={scientificName} src={imgURL} height={600} width={600} />
                <ContentWrapper>
                    <div className="flex flex-col">
                        <div className="mt-2">
                            <h3 className={`font-bold text-2xl md:text-4xl md:text-center mb-2 ${roboto.className}`}>{commonName}</h3>
                            <h4 className={`italic text-secondary text-xl md:text-3xl md:text-center mb-4 ${roboto.className}`}>{scientificName}</h4>
                            <MarkdownContent content={content} />
                        </div>
                    </div>
                    <div className="h-10 w-10 mt-4 ml-auto text-primary cursor-pointer">
                        <FontAwesomeIcon icon={faChevronCircleLeft} className="text-sm" onClick={router.back} />
                    </div>
                </ContentWrapper>

            </div>
        </Layout>
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