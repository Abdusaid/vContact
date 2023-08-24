import {useContactsStore} from "../../stores/contacts"
import { useRouter } from "vue-router"

export default function useModule() {
    const router = useRouter()
    const contactsStore = useContactsStore()
    
    const redirectTo = (id:number|any) => {
        router.push(`/edit/${id}`)
    }
    const deleteContact = (index:number|any) => {
        contactsStore.deleteContact(index)
    }
    const addFav = (index:number|any) => {
        contactsStore.addFav(index)
    }
    return {
        contactsStore,
        redirectTo,
        deleteContact,
        addFav
    }
}