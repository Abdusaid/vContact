import { reactive } from "vue";
import { defineStore } from "pinia";
import type { IContacts } from "../shared/types";

export const useContactsStore = defineStore("contacts", () => {
  const mockContacts = reactive<IContacts[]>([
    {
      index: 0,
      firstName: "Abdusaid",
      lastName: "Umarov",
      phone: "+998935618746",
      mail: "abusaid.dev@mail.com",
      tag: "Family",
      fav: false,
    },
    {
      index: 1,
      firstName: "Alex",
      lastName: "Kulagin",
      phone: "+998990000001",
      mail: "Alex.Kul@mail.com",
      tag: "Colleague",
      fav: false,
    },
    {
      index: 2,
      firstName: "Bakhodir",
      lastName: "Rakhimov",
      phone: "+998907007767",
      mail: "Bakhodir.dev@mail.com",
      tag: "Friend",
      fav: false,
    },
    {
      index: 3,
      firstName: "Tom",
      lastName: "Fitton",
      phone: "+998901112234",
      mail: "Tom.dev@mail.com",
      tag: "Family",
      fav: false,
    },
    {
      index: 4,
      firstName: "Bobur",
      lastName: "Qodirov",
      phone: "+998992223343",
      mail: "Bob.dev@mail.com",
      tag: "Friend",
      fav: false,
    },
    {
      index: 5,
      firstName: "Jamshid",
      lastName: "Mamatkulov",
      phone: "+99899888998",
      mail: "Jama.dev@mail.com",
      tag: "Colleague",
      fav: false,
    },
    {
      index: 6,
      firstName: "Sulton",
      lastName: "Narimov",
      phone: "+99894332234",
      mail: "Sulton.Narimov1993@mail.com",
      tag: "Friend",
      fav: false,
    },
  ]);

  const addNewContact = (contact:any) => {
    mockContacts.push({
      index: mockContacts.length,
      fav: false,
      ...contact,
    });
  };
  const addFav = (index:number|any) => {
    const indexOfItem = mockContacts.indexOf(mockContacts[index]);
    if (mockContacts[indexOfItem].fav) {
      mockContacts[indexOfItem].fav = false;
    } else {
      mockContacts[indexOfItem].fav = true;
    }
  };

  const deleteContact = (index:number|any) => {
    const indexOfItem = mockContacts.indexOf(mockContacts[index]);
    mockContacts.splice(indexOfItem, 1);
  };
  const editContact = (index :number|any, contactInfo :any) => {
    mockContacts[index].firstName = contactInfo.firstName;
    mockContacts[index].lastName = contactInfo.lastName;
    mockContacts[index].phone = contactInfo.phone;
    mockContacts[index].mail = contactInfo.mail;
    mockContacts[index].tag = contactInfo.tag;
  };

  return {
    mockContacts,
    addNewContact,
    deleteContact,
    editContact,
    addFav,
  };
});
