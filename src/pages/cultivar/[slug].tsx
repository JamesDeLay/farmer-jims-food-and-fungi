import Layout from "@/layouts/Layout";
import { Specimen } from "@/lib/types";
import { useEffect } from "react";
import { getCultivar, getSpecimenBySlug } from '../../lib/api';
import { useRouter } from "next/router";
import ContentWrapper from "@/layouts/ContentWrapper";
import Image from "next/image";
import { roboto } from "@/lib/fonts";

type Props = {
    specimen: Specimen
}

type Params = {
    params: {
        slug: string
    }
}
export default function SpecimenPage({ specimen }: Props) {
    return (
        <Layout isLandingPage={false}>
            <div className="-mt-14 mx-4 md:mx-0">
                <ContentWrapper>
                    <div className="grid md:grid-cols-2">
                        <Image className="bg-black rounded-lg" alt={specimen.scientificName} src={specimen.imgURL} height={300} width={600} />
                        <div className="mt-2">
                            <h3 className={`font-bold text-2xl ${roboto.className}`}>{specimen.commonName}</h3>
                            <h4 className={`italic text-xl ${roboto.className}`}>{specimen.scientificName}</h4>
                            <p className="prose mt-2">{specimen.content}</p>
                        </div>
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