import type { Metadata, ResolvingMetadata  } from "next";
import { Roboto } from "next/font/google";
const roboto = Roboto({ subsets: ["latin"], weight: "400" });
type Props = {
    params: { category: string, title:string }
}
import { sanityFetch } from "@/lib/fetch";
import {
   policyQuery, PolicyResponse,
} from "@/lib/queries";
export async function generateMetadata(
    { params }: Props,
    parent: ResolvingMetadata
): Promise<Metadata> {
    // read route params
    const [ policy] = await Promise.all([
        sanityFetch<PolicyResponse>({
            query: policyQuery,
            params:{title:params.title}
        }),
    ]);
    const title = policy.title;

    return {
        title: `LiiGi - ${title}`,
        description: "Our policies information",
        icons: {
            icon: "/LiiGi.jpg"
        },
        openGraph: {
            title: `LiiGi - ${title}`,
            description: "Our policies information",
            images:["/LiiGi.jpg"]
        },
    }
}
export default function Page({
                                 children,
                             }: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <html lang="en">
        <body className={roboto.className}>{children}</body>
        </html>
    );
}
