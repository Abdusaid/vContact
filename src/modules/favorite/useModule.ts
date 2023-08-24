import {useContactsStore} from "../../stores/contacts"

export default function useModule() {
    const contactsStore = useContactsStore()


    return {
        contactsStore
    }


}