import {useContactsStore} from "../../stores/contacts"
import { useRouter } from "vue-router"

export default function useModule() {
    const router = useRouter()
    const contactsStore = useContactsStore()
    


    const redirectTo = (id) => {
        router.push(`/edit/${id}`)
    }
    const deleteContact = (index) => {
        contactsStore.deleteContact(index)
    }
    return {
        contactsStore,
        redirectTo,
        deleteContact,
    }
}