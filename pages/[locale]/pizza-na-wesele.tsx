import Navbar from "../../src/components/Navbar/Navbar";
import Footer from "../../src/components/Footer/Footer";
import PizzaNaWeseleSection from "../../src/components/subpages/pizzaNaWesele";
import GridEffect from "../../src/components/ThirdSection/GridEffect";
import { getTranslationsProps } from "next-translations";
import { namespaces } from '../../src/constants/namespaces';
import PizzaSeoContent from "../../src/components/subpages/pizzaSEOContent";

export { getStaticPaths } from "next-translations";

export default function PizzaNaWeselePage() {
    return (
        <>
            <Navbar />
            <PizzaNaWeseleSection />
            <div className="w-full relative bg-darkRed">
                <GridEffect />
            </div>
            <PizzaSeoContent />
            <Footer />
        </>
    );
}

export const getStaticProps = async ctx => {
    const translationsProps = await getTranslationsProps(ctx, [namespaces.common])
    return {
        props: { ...translationsProps }
    }
};