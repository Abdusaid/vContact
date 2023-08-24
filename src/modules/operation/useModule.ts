import {useContactsStore} from "../../stores/contacts"
import {onMounted, ref, computed} from "vue"
import { useRouter, useRoute } from "vue-router";

export default function useModule() {
    const contactsStore = useContactsStore()
    const router = useRouter()
    const route = useRoute()
    const routeParamsId = ref<string>()

    routeParamsId.value = route.params.id as string

    const firstName = ref<string>()
    const lastName = ref<string>()
    const phone = ref<string>()
    const mail = ref<string>()
    const tag = ref<string>("Family")
    
    onMounted(() => {
        if(routeParamsId.value){
            firstName.value = contactsStore.mockContacts[route.params.id as string].firstName
            lastName.value = contactsStore.mockContacts[route.params.id as string].lastName
            phone.value = contactsStore.mockContacts[route.params.id as string].phone
            mail.value = contactsStore.mockContacts[route.params.id as string].mail
            tag.value = contactsStore.mockContacts[route.params.id as string].tag
        }
    })

    const buttonName = computed(() => {
        return routeParamsId.value ? "Edit & Save" : "Save"
    })
    const saveContact = (firstName, lastName, phone, mail, tag) => {
        if(routeParamsId.value){
            contactsStore.editContact(routeParamsId.value, {
                firstName,
                lastName,
                phone,
                mail,
                tag
            })
            console.log('edit')
        }else {
            contactsStore.addNewContact(
                {
                    firstName,
                    lastName,
                    phone,
                    mail,
                    tag
                }
            )
        }
        
        router.push('/')
    }
    return {
        firstName,
        lastName,
        phone,
        mail,
        tag,

        buttonName,
        saveContact,
        contactsStore
    }
}