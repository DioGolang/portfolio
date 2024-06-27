import {InfiniteMovingCards} from "@/components/ui/InfiniteMovingCards";
import {companies, testimonials} from "@/data";
import Image from "next/image";


export function Clients() {
    return(
        <section className='py-20' id='testimonials'>
            <h1 className="heading">
                palavras gentis de {" "}
                <span className='text-purple'>clientes satisfeitos</span>
            </h1>
            <div className='h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden'>
                    <InfiniteMovingCards items={testimonials} direction='right' speed='slow' />
            </div>
            <div className='flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10'>
                {companies.map(({id, img, name, nameImg}) => (
                    <div key={id} className="flex md:max-w-60 max-w-32 gap-2">
                        <Image
                            src={img}
                            alt={name}
                            width='10'
                            height='10'
                            className="md:w-10 w-5"
                        />
                        <Image
                            src={nameImg}
                            alt={name}
                            width='10'
                            height='10'
                            className="md:w-24 w-20"
                        />
                    </div>
                ))}
            </div>
        </section>
    )
}