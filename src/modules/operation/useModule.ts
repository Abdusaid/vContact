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
            firstName.value = contactsStore.mockContacts[route.params.id as string|any].firstName
            lastName.value = contactsStore.mockContacts[route.params.id as string|any].lastName
            phone.value = contactsStore.mockContacts[route.params.id as string|any].phone
            mail.value = contactsStore.mockContacts[route.params.id as string|any].mail
            tag.value = contactsStore.mockContacts[route.params.id as string|any].tag
        }
    })

    const buttonName = computed(() => {
        return routeParamsId.value ? "Edit & Save" : "Save"
    })
    const saveContact = (firstName:any, lastName:any, phone:any, mail:any, tag:any) => {
        if(routeParamsId.value){
            contactsStore.editContact(routeParamsId.value, {
                firstName,
                lastName,
                phone,
                mail,
                tag
            })
        }else {
            contactsStore.addNewContact(
                {
                    firstName :firstName.value,
                    lastName: lastName.value,
                    phone: phone.value,
                    mail: mail.value,
                    tag: tag.value
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