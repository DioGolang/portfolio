import Image from 'next/image'
import { stack } from '@/data'

export function Stack() {
    return(
        <section className='py-20' id='stack'>
            <h1 className="heading">
                My <span className='text-purple'>Stack</span>
            </h1>
            <div className='flex flex-wrap items-center justify-center gap-4 md:gap-16 mt-12 max-lg:mt-10'>
                {stack.map(({id, img, name}) => (
                    <div key={id} className="flex flex-col items-center md:max-w-60 max-w-32 gap-2">
                        <Image
                            src={img}
                            alt={name}
                            width='30'
                            height='30'
                            className="md:w-20 w-10"
                        />
                        {/* <Image
                            src={nameImg}
                            alt={name}
                            width='10'
                            height='10'
                            className="md:w-24 w-20"
                        /> */}
                    </div>
                ))}
            </div>
        </section>
    )
}	