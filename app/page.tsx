"use client";


import {Hero} from "@/components/Hero";
import {FloatingNav} from "@/components/ui/FloatingNav";
import {Grid} from "@/components/Grid";
import {RecentProject} from "@/components/RecentProject";
import {navItems} from "@/data";
import {Clients} from "@/components/Clients";
import {Experience} from "@/components/Experience";
import {Approach} from "@/components/Approach";
import {Footer} from "@/components/Footer";
import {Stack} from "@/components/Stack";

export default function Home() {
    return (
        <main
            className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
            <div className="max-w-7xl w-full">
                <FloatingNav navItems={navItems}/>
                <Hero/>
                <Grid/>
                <RecentProject/>
                <Clients/>
                <Stack />
                <Experience/>
                <Approach/>
                <Footer/>
            </div>
        </main>
    );
}
