import React, { useState } from 'react'
import Banner from '../assets/logo.png'
import { Button, FormControl, FormHelperText, FormLabel, Input, useToast } from '@chakra-ui/react'
import axios from 'axios'
import { useTranslation } from 'react-i18next'

const Contact = () => {
    const [number, setNumber] = useState("")
    const toast = useToast()
    const [t, i18n] = useTranslation("global")

    const handleSubmit = (e) => {
        e.preventDefault()

        if (number.length < 9) {
            toast({
                duration: 5000,
                isClosable: true,
                status: "error",
                title: "Xatolik!",
                description: "Raqam noto'g'ri terilgan, qayta urining!"
            })
            return;
        } else if (number.length > 17) {
            toast({
                duration: 5000,
                isClosable: true,
                status: "error",
                title: "Xatolik!",
                description: "Raqam noto'g'ri terilgan, qayta urining!"
            })
            return;
        } else {
            toast({
                duration: 5000,
                isClosable: true,
                status: "success",
                title: "Topshirildi!",
                description: "Tez orada administratorlarimiz siz bilan bog'lanishadi"
            })
        }

        const token = "7243972402:AAFbUb_bJAHGzhxScvXhCgzH38q0EJifs-4"
        const chat_id = "-4535865681"
        const my_text = `
            NEW CUSTOMER ‼️
            📲 Raqam: ${number},
            🎛 Ish: Kurslar haqida malumot olish.
        `

        const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${encodeURIComponent(my_text)}`

        axios.get(url)
            .then((response) => {
                console.log('Message sent', response.data);
            })
            .catch((error) => {
                console.error('Error sending message', error);
            });

        setNumber('');
    }

    return (
        <div className='bg-gray-100'>
            <section id='contact' className='max-w-[1250px] mx-auto'>
                <div className='grid gap-5'>
                    <div className='flex max-sm:flex-col-reverse items-center max-sm:pt-10 justify-center gap-10 max-sm:gap-0'>
                        <img src={Banner} className='w-[40%] max-sm:w-full' alt="" />
                        <div className='grid gap-5 max-sm:text-center max-sm:px-8'>
                            <h1 className='text-4xl font-medium'>{t("contact.title")}</h1>
                            <FormControl>
                                <FormLabel>{t("contact.label")}</FormLabel>
                                <Input value={number} onChange={(e) => setNumber(e.target.value)} borderColor={'gray'} type='tel' />
                                <FormHelperText>{t("contact.helperText")}</FormHelperText>
                                <Button onClick={handleSubmit} mt={5} colorScheme='blue'>{t("contact.btn")}</Button>
                            </FormControl>
                            <h1 className='text-xl font-medium'>{t("contact.desc")}</h1>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact