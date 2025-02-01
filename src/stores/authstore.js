import { auth } from "../firebase/init.js"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, sendPasswordResetEmail, onAuthStateChanged} from "firebase/auth"
import { defineStore } from "pinia"
import { ref } from "vue"


export const userAuthStore = defineStore("auth", ()=>{
    const user = ref(null)

    const userEmail = ref('')
    const userPassword = ref('')

    if(localStorage.getItem("app_user")){
        user.value = localStorage.getItem("app_user")
        //console.log(user.value)
    }

    const getUser = () => user.value

    const setUser = (currentUser)=>{
        user.value = currentUser
    }

    async function signUpUser(email, password){
        try {
            userEmail.value = email
            userPassword.value = password
            const user = await createUserWithEmailAndPassword(auth, email, password)
            if(user){
                //console.log(auth.currentUser)
                setUser(auth.currentUser)
                localStorage.setItem('app_user', auth.currentUser)
                //console.log("User signed in successfully")
            }
        } catch (error) {
            console.log(error)
        }
    }

    async function signInUser(email, password){
        try {
            userEmail.value = email
            userPassword.value = password
            const res = await signInWithEmailAndPassword(auth, email, password)
            if(res){
                //console.log("User signed in successfully")
                //console.log(auth.currentUser)
                setUser(auth.currentUser)
                localStorage.setItem('app_user', auth.currentUser)
                //console.log("User signed in successfully")
            }
        } catch (error) {
            console.log(error)
        }
    }

    async function logOutUser(){
        await signOut(auth)
        //console.log("User signed out successfully")
        userEmail.value= ''
        userPassword.value = ''
    }

    async function resetUserPassword(userEmail){
        try {
            const res = await sendPasswordResetEmail(auth, userEmail)
            if(res){
                //console.log("Reset email sent")
            }
        } catch (error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode," : ",errorMessage)
        }

    }

    return { user, setUser, getUser, signInUser, signUpUser, logOutUser, resetUserPassword}

})