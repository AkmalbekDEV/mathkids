import React, { useEffect, useState } from 'react'
import { BsArrowRight } from 'react-icons/bs'
import { fetchCourses } from '../context/FetchData'
import { Button, Input, FormControl, FormLabel, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger, useDisclosure, useToast } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import axios from 'axios'

const Courses = () => {
    const [data, setData] = useState([])
    const [number, setNumber] = useState('')
    const [selectedCourse, setSelectedCourse] = useState(null) // Tanlangan kurs uchun state
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [t, i18n] = useTranslation("global")
    const toast = useToast()

    const getData = async () => {
        try {
            const data = await fetchCourses();
            setData(data)
        } catch (error) {
            console.log(error);
        }
    }

    const handleSubmit = (courseName) => {
        if (number.length < 9) {
            toast({
                duration: 5000,
                isClosable: true,
                status: "error",
                title: "Xatolik!",
                description: "Raqam noto'g'ri terilgan, qayta urining!",
                position: 'top'
            })
            return;
        } else if (number.length > 17) {
            toast({
                duration: 5000,
                isClosable: true,
                status: "error",
                title: "Xatolik!",
                description: "Raqam noto'g'ri terilgan, qayta urining!",
                position: 'top'
            })
            return;
        } else {
            toast({
                duration: 5000,
                isClosable: true,
                status: "success",
                title: "Topshirildi!",
                description: "Tez orada administratorlarimiz siz bilan bog'lanishadi",
                position: 'top'
            })
        }

        const token = "7243972402:AAFbUb_bJAHGzhxScvXhCgzH38q0EJifs-4"
        const chat_id = "-4535865681"
        const my_text = `
            NEW CUSTOMER ‼️
            📲 Raqam: ${number},
            🎛 Kurs nomi: ${courseName}
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

    useEffect(() => {
        getData()
    }, [])

    const handleOpenModal = (course) => {
        setSelectedCourse(course); // Tanlangan kursni o'rnatish
        onOpen(); // Modalni ochish
    }

    return (
        <section id='courses' className='max-w-[1250px] mx-auto'>
            <div className='grid gap-5 py-20'>
                <h1 className='font-medium text-5xl max-sm:text-center max-sm:text-4xl max-sm:px-10'>{t("courses.title")}</h1>
                <h1 className='text-xl max-sm:text-center max-sm:px-10'>{t("courses.desc")}</h1>
                <div className='courses flex items-center justify-center flex-wrap gap-[52px]'>
                    {data.map((item, index) => (
                        <div key={index} className='p-5 rounded-xl border-2 w-[380px] h-[420px] max-[400px]:w-full grid content-between gap-3 max-lg:mx-5'>
                            <img src={item.imageURL} alt="" className='w-[350px] h-[200px] rounded-xl object-cover' />
                            <h1 className='text-xl font-medium'>{item.name}</h1>
                            <h1 className='text-lg overflow-auto max-w-[340px]'>{item.brief}</h1>
                            <button onClick={() => handleOpenModal(item)} className='transition-all w-full h-[50px] rounded-xl bg-purple-500 text-center text-lg text-white font-medium cursor-pointer hover:bg-purple-600'>{t("courses.detail")}</button>
                        </div>
                    ))}
                </div>
            </div>
            {/* Tanlangan kurs uchun modal */}
            {selectedCourse && (
                <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent className='max-sm:mx-5' h={'80%'} overflowY={'scroll'}>
                        <ModalHeader>{selectedCourse.name}</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            {selectedCourse.detailed}
                        </ModalBody>
                        <ModalFooter>
                            <Popover>
                                <PopoverTrigger>
                                    <Button colorScheme='purple'>Kursga Yozilish</Button>
                                </PopoverTrigger>
                                <PopoverContent className='max-sm:mx-5'>
                                    <PopoverArrow />
                                    <PopoverCloseButton />
                                    <PopoverHeader>Kursga yozilish</PopoverHeader>
                                    <PopoverBody>
                                        <FormControl>
                                            <FormLabel>Telefon Raqamingiz</FormLabel>
                                            <Input value={number} onChange={(e) => setNumber(e.target.value)} type='tel' placeholder='Raqam...' />
                                            <Button onClick={() => handleSubmit(selectedCourse.name)} mt={5} colorScheme='purple' w={'full'}>Yozilish!</Button>
                                        </FormControl>
                                    </PopoverBody>
                                </PopoverContent>
                            </Popover>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            )}
        </section>
    )
}

export default Courses