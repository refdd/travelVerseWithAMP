// "use client";
import Image from "next/image";
import MainHeader from "../components/MainHeader";
import FormSearch from "../components/FormSearch";
import ChooseUs from "../components/ChooseUs";
import PackageContainer from "../components/PackageContainer";
import GroupPackage from "../components/GroupPackage";
import DellorYourTrips from "../components/DellorYourTrips";
import Galliry from "../components/Galliry";
import Reviews from "../components/Reviews";
import FeaturedArticles from "../components/FeaturedArticles";
import FAQ from "../components/FAQ";
import FooterSection from "../components/FooterSection";
import { useAmp } from "next/amp";
import NavBar from "@/components/NavBar";
import Head from "next/head";
import Layout from "@/components/Layout";
export const config = { amp: true };
export default function Home() {
  const isAmp = useAmp();
  return (
    <Layout>
      <div>
        <Head>
          <title>The amp</title>
        </Head>
        <NavBar />
        <MainHeader />
        <FormSearch />
        <ChooseUs />
        <div className=" container mx-auto px-4 md:px-9 pt-11">
          <PackageContainer />
          <GroupPackage />
        </div>
        <DellorYourTrips />
        <Galliry />
        <Reviews />
        <FeaturedArticles />
        <FAQ />
        <FooterSection />
      </div>
    </Layout>
  );
}
