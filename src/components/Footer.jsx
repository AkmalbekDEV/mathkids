import React from 'react'
import Logo from '../assets/logo.png'
import { BsFacebook, BsInstagram, BsTelegram, BsYoutube } from 'react-icons/bs'
import { useTranslation } from 'react-i18next'

const Footer = () => {
  const [t, i18n] = useTranslation("global")

  return (
    <section className='bg-[#21212F] py-16'>
      <div className='max-w-[1250px] mx-auto'>
        <div className='flex max-sm:flex-col max-sm:text-center max-sm:gap-10 items-center justify-between'>
          <div className='grid'>
            <img src={Logo} className='w-[200px]' alt="" />
            <div className='flex items-center justify-center'>
              <a href="https://www.instagram.com/kidsmath_"><BsInstagram color='yellow' size={35} /></a>
            </div>
          </div>
          <div className='grid gap-3'>
            <h1 className='text-2xl font-medium text-white tracking-wide'>{t("footer.links")}</h1>
            <a href="#hero" className='text-gray-400'>{t("footer.link1")}</a>
            <a href="#fullAbout" className='text-gray-400'>{t("footer.link2")}</a>
            <a href="#courses" className='text-gray-400'>{t("footer.link3")}</a>
            <a href="#teachers" className='text-gray-400'>{t("footer.link4")}</a>
            <a href="#contact" className='text-gray-400'>{t("footer.link5")}</a>
          </div>
          <div className='grid gap-3'>
            <h1 className='text-2xl font-medium text-white tracking-wide'>{t("footer.contacts")}</h1>
            <h1 className='text-sm text-gray-400 w-[199px]'>{t("footer.contactDesc")}</h1>
            <a className='text-gray-400 mt-5' href="tel:+998-94-316-92-35">{t("footer.contact1")}</a>
            <a className='text-gray-400' href="mailto:example@gmail.com">{t("footer.contact2")}</a>
            <a className='text-gray-400' href="mailto:example@gmail.com">{t("footer.contact3")}</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer