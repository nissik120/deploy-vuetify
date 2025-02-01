import { defineStore } from "pinia"
import { ref } from "vue"

export const appDialogStore = defineStore("dialog", () => {

    const showDialog = ref(false)
    const dialogType = ref(0)

    let isDialogActive = () => { return showDialog.value }
    
    let getDialogType = () => { return dialogType.value }

    let setDialogType = (configType) => { dialogType.value=configType }

    let openDialog = (configType) => {
        dialogType.value = configType
        showDialog.value = true
    }
    
    let closeDialog = () => { showDialog.value = false }


    return { showDialog, isDialogActive, getDialogType, setDialogType, openDialog, closeDialog}
})