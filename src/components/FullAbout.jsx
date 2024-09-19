import React from 'react'
import Banner from '../assets/windowAbout.jpg'
import { useTranslation } from 'react-i18next'

const FullAbout = () => {
    const [t, i18n] = useTranslation("global")

    return (
        <section id='fullAbout' className='bg-gray-100'>
            <div className='max-w-[1250px] mx-auto'>
                <div className='py-20 grid gap-5'>
                    <h1 className='font-medium max-sm:text-center text-5xl max-sm:text-4xl max-sm:px-10'>{t("fullAbout.title")}</h1>
                    <h1 className='text-xl max-sm:text-center max-sm:px-10'>{t("fullAbout.desc")}</h1>
                    <div className='flex max-sm:flex-col items-center gap-16 mt-5 max-sm:px-8 max-sm:text-center'>
                        <img src={Banner} alt="" className='w-[50%] max-sm:w-full rounded-2xl' />
                        <div className='grid gap-5'>
                            <h1 className='font-bold font-mono text-4xl text-pink-400'>KIDS MATH</h1>
                            <h1 className='text-xl text-gray-500'><span className='text-pink-400'>KIDS MATH</span> – {t("fullAbout.about")}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FullAbout