import React from 'react'
import Icon1 from '../assets/icon_fourth.svg'
import Icon2 from '../assets/icon_first.svg'
import Icon3 from '../assets/icon_second.svg'
import Icon4 from '../assets/icon_third.svg'
import { useTranslation } from 'react-i18next'

const About = () => {
    const [t, i18n] = useTranslation("global")

    return (
        <section id='about' className='py-8 bg-gray-200 max-md:hidden'>
            <div className='max-w-[1250px] mx-auto'>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-5'>
                        <img src={Icon1} alt="" />
                        <div className='grid gap-1'>
                            <h1 className='text-3xl font-medium'>10+</h1>
                            <h1 className='text-xl'>{t("about.text1")}</h1>
                        </div>
                    </div>
                    <div className='flex items-center gap-5'>
                        <img src={Icon2} alt="" />
                        <div className='grid gap-1'>
                            <h1 className='text-3xl font-medium'>2,000+</h1>
                            <h1 className='text-xl'>{t("about.text2")}</h1>
                        </div>
                    </div>
                    <div className='flex items-center gap-5'>
                        <img src={Icon3} alt="" />
                        <div className='grid gap-1'>
                            <h1 className='text-3xl font-medium'>200+</h1>
                            <h1 className='text-xl'>{t("about.text3")}</h1>
                        </div>
                    </div>
                    <div className='flex items-center gap-5'>
                        <img src={Icon4} alt="" />
                        <div className='grid gap-1'>
                            <h1 className='text-3xl font-medium'>10,000+</h1>
                            <h1 className='text-xl'>{t("about.text4")}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About