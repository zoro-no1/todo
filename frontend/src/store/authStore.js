import {create} from "zustand"
import { axiosIn } from "../util/axios.js"

export const authStore=create((set,get)=>({
    authUser:null,
    isCheckAuth:true,

    authCheck : async()=>{
        try {
            const res=await axiosIn.get("/auth/check")
            set({authUser:res.data.user})
        } catch (error) {
            console.log("error");
            set({authUser:null})
            
        }
    },
    logout : async()=>{
        try {
            const res=await axiosIn.post("/auth/logout")
        } catch (error) {
            console.log("error");
            
        }
    },
}))