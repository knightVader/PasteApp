import { createSlice } from "@reduxjs/toolkit"; 
import toast from "react-hot-toast";

const initialState = {
    // id data is found in ls then fetch it and parse it else empty array will be returned
    pastes: localStorage.getItem("pastes")
    ? JSON.parse(localStorage.getItem("pastes"))
    : []
}

export const pasteSlice = createSlice({
    name: 'paste',
    initialState,
    reducers: {
        addToPaste: (state, action)=>{
            state.pastes.push(action.payload) // new paste is added to the pastes array
            localStorage.setItem("pastes", JSON.stringify(state.pastes)) // the array is stored with key as pastes
            toast.success("Paste Succesfully added", { position: 'top-right' })
        },

        updateToPaste: (state, action)=>{
            const paste = action.payload
            const index = state.pastes.findIndex((item) => 
                item.id === paste.id
            )

            if(index>=0){
                state.pastes[index]=paste

                localStorage.setItem("pastes", JSON.stringify(state.pastes))

                toast.success("Paste Succesfully Updated", { position: 'top-right' })
            }
        },

        removeFromPaste: (state, action)=>{
            const paste = action.payload
            const index = state.pastes.findIndex((item) => { // with the braces we need to write return statement but without it we don't see above
                return item.id === paste.id
            })

            if(index>=0){
                state.pastes.splice(index, 1)

                localStorage.setItem("pastes", JSON.stringify(state.pastes))

                toast.success("Paste Succesfully Removed", { position: 'top-right' })
            }
        },

        resetAllPaste: (state, action)=>{
            state.pastes=[]
            localStorage.removeItem("pastes")
        }
    }
})

export const {addToPaste, updateToPaste, removeFromPaste, resetAllPaste} = pasteSlice.actions

export default pasteSlice.reducer