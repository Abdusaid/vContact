import { reactive } from 'vue'
import { defineStore } from 'pinia'
import type { IContacts } from '@/shared/types'

export const useContactsStore = defineStore('contacts', () => {
    const mockContacts = reactive<IContacts[]>([
        {
            index: 0,
            firstName: 'Abdusaid',
            lastName: 'Umarov',
            phone: '+998935618746',
            mail: 'abusaid.dev@mail.com',
            tag: 'Family'
        },
        {
            index: 1,
            firstName: 'Alex',
            lastName: 'Kulagin',
            phone: '+998990000001',
            mail: 'Alex.Kul@mail.com',
            tag: 'Colleague'
        },
        {
            index: 2,
            firstName: 'Bakhodir',
            lastName: 'Rakhimov',
            phone: '+998907007767',
            mail: 'Bakhodir.dev@mail.com',
            tag: 'Friend'
        },
  ])

  const addNewContact = (contact) => {
    mockContacts.push({
        index: mockContacts.length + 1 ,
        ...contact
    })
  }

  const deleteContact = (index) => {
    const indexOfItem = mockContacts.indexOf(mockContacts[index]);
    mockContacts.splice(indexOfItem, 1)
  }
  const editContact = (index, contactInfo) => {
    mockContacts[index].firstName = contactInfo.firstName
    mockContacts[index].lastName = contactInfo.lastName
    mockContacts[index].phone = contactInfo.phone
    mockContacts[index].mail = contactInfo.mail
    mockContacts[index].tag = contactInfo.tag
  }
  
  return { 
    mockContacts,
    addNewContact,
    deleteContact,
    editContact
    }
})
