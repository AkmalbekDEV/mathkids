import { Button, FormControl, FormHelperText, FormLabel, Input, Link } from '@chakra-ui/react'
import React from 'react'
import { BiHome } from 'react-icons/bi'
import Banner from '../assets/logo.png'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const Hero = () => {
    const navigate = useNavigate()
    const [t, i18n] = useTranslation("global")

    return (
        <section id='hero' className='bg-[#6176F7]'>
            <div className='max-w-[1250px] mx-auto'>
            <div className='pb-32 py-10 max-sm:py-0 flex max-sm:flex-col items-center justify-center '>
                <div className='grid gap-5 w-[50%] max-sm:w-full max-sm:px-8 max-sm:text-center'>
                    <h1 className='text-xl text-orange-400'>MATHS KIDS</h1>
                    <h1 className='text-5xl max-sm:text-4xl font-medium text-white leading-[55px] pr-20 max-sm:pr-0'>{t("hero.title")}</h1>
                    <div className='max-sm:mt-5'>
                        <Button px={'10'} py={'3'} colorScheme={'orange'} rounded={'full'} w={'fit-content'}><a href='#courses'>{t("hero.btn")}</a></Button>
                    </div>
                </div>
                <img src={Banner} className='w-[30%] max-sm:w-full' alt="" />
            </div>
            </div>
        </section>
    )
}

export default Hero