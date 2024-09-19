import React, { useEffect, useRef } from 'react'
import Logo from '../assets/logo.png'
import { useTranslation } from 'react-i18next'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
  useDisclosure,
  MenuIcon,
  Box,
} from '@chakra-ui/react'
import { BsArrowDown, BsInfo, BsInfoCircle } from 'react-icons/bs'
import ReactCountryFlag from 'react-country-flag'
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Input,
} from '@chakra-ui/react'
import { MdGolfCourse, MdMenu } from 'react-icons/md'
import { BiHome } from 'react-icons/bi'
import { FcAbout } from 'react-icons/fc'
import { SiAboutdotme } from 'react-icons/si'
import { PiCards } from 'react-icons/pi'
import { GiTeacher } from 'react-icons/gi'
import { GrContact } from 'react-icons/gr'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const [t, i18n] = useTranslation("global")
  const { isOpen, onOpen, onClose } = useDisclosure()
  const navigate = useNavigate()

  const handleChangeLanguage = (lang) => {
    i18n.changeLanguage(lang)
  }

  useEffect(() => {
    onClose();
  }, [navigate])

  return (
    <div className='bg-[#6176F7]'>
      <div className='max-w-[1250px] mx-auto overflow-x-scroll'>
        <div className='flex items-center justify-between py-2 max-md:px-5'>
          <img src={Logo} alt="" className='w-40' />
          <nav className='flex items-center gap-7 text-white text-lg max-md:hidden'>
            <a href="#hero" className='hover:text-orange-300 transition-all'>{t("header.navlink1")}</a>
            <a href="#fullAbout" className='hover:text-orange-300 transition-all'>{t("header.navlink2")}</a>
            <a href="#courses" className='hover:text-orange-300 transition-all'>{t("header.navlink3")}</a>
            <a href="#teachers" className='hover:text-orange-300 transition-all'>{t("header.navlink4")}</a>
            <a href="#contact" className='hover:text-orange-300 transition-all'>{t("header.navlink5")}</a>
            <a href="https://mathskids-platform.vercel.app" className='hover:text-orange-300 transition-all'>{t("header.navlink5")}</a>
          </nav>
          <div className='flex items-center gap-3 text-white'>
            <ReactCountryFlag title='UZ' countryCode='UZ' svg className='cursor-pointer' onClick={() => handleChangeLanguage("uz")} />
            |
            <ReactCountryFlag title='RU' countryCode='RU' svg className='cursor-pointer' onClick={() => handleChangeLanguage("ru")} />
          </div>
          <MdMenu onClick={onOpen} size={35} color='white' className='cursor-pointer hidden max-md:block' />
          <Drawer
            isOpen={isOpen}
            placement='right'
            onClose={onClose}
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>Menyu</DrawerHeader>

              <DrawerBody px={0}>
                <a href="#hero" className='py-3 px-8 cursor-pointer transition-all hover:bg-gray-100 text-xl font-medium flex gap-3 items-center'><BiHome size={30} /> Asosiy</a>
                <a href="#fullAbout" className='py-3 px-8 cursor-pointer transition-all hover:bg-gray-100 text-xl font-medium flex gap-3 items-center'><BsInfoCircle size={30} /> Biz haqimizda</a>
                <a href="#courses" className='py-3 px-8 cursor-pointer transition-all hover:bg-gray-100 text-xl font-medium flex gap-3 items-center'><PiCards size={30} /> Kurslar</a>
                <a href="#teachers" className='py-3 px-8 cursor-pointer transition-all hover:bg-gray-100 text-xl font-medium flex gap-3 items-center'><GiTeacher size={30} /> Ustozlar</a>
                <a href="#contact" className='py-3 px-8 cursor-pointer transition-all hover:bg-gray-100 text-xl font-medium flex gap-3 items-center'><GrContact size={30} /> Bog'lanish</a>
              </DrawerBody>

              <DrawerFooter>
                <h1 className='text-2xl font-mono font-bold text-pink-400'>KIDS MATH <span className='font-sans text-2xl font-medium'>@ Reserved</span></h1>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </div>
  )
}

export default Navbar