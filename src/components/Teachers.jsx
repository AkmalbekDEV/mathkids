import { Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger, useDisclosure } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { fetchTeachers } from '../context/FetchData'
import { useTranslation } from 'react-i18next'

const Teachers = () => {
  const [data, setData] = useState([])
  const [selectedTeacher, setSelectedTeacher] = useState(null) // Tanlangan kurs uchun state
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [t, i18n] = useTranslation("global")

  const getData = async () => {
    try {
      const data = await fetchTeachers();
      setData(data)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData()
  }, [])

  const handleOpenModal = (teacher) => {
    setSelectedTeacher(teacher); // Tanlangan kursni o'rnatish
    onOpen(); // Modalni ochish
  }

  return (
    <section id='teachers' className='max-w-[1250px] mx-auto'>
      <div className='py-20 grid gap-5'>
        <h1 className='text-5xl max-sm:text-center max-sm:px-8 max-sm:text-4xl font-medium'>{t("teachers.title")}</h1>
        <h1 className='text-xl max-sm:text-center max-sm:px-8'>{t("teachers.desc")}</h1>
        <div className='flex items-center flex-wrap gap-10'>
          {data.map((item) => (
            <div key={item.id} className='grid gap-3 w-[280px] border-2 rounded-xl p-5 max-lg:mx-5'>
              <img src={item.imageURL} alt={item.name} className='w-[250px] h-[250px] rounded-xl' />
              <h1 className='text-center font-medium text-2xl'>{item.name}</h1>
              <h1 className='text-center text-xl'>{item.job}</h1>
              <Button onClick={() => handleOpenModal(item)} colorScheme='purple'>{t("teachers.btn")}</Button>
            </div>
          ))}
        </div>
      </div>
      {selectedTeacher && (
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent className='max-sm:mx-5'>
            <ModalHeader>{selectedTeacher.name}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              {selectedTeacher.desc}
            </ModalBody>
            <ModalFooter>
            </ModalFooter>
          </ModalContent>
        </Modal>)}
    </section>
  )
}

export default Teachers