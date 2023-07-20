import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    items: localStorage.getItem("items") ? JSON.parse(localStorage.getItem("items")):[]
}
const produkSlice = createSlice({
    name:"produks",
    initialState,
    reducers:{
        addProduk: (state,action)=>{
            state.items.push(action.payload)
            localStorage.setItem('items', JSON.stringify(state.items))

        },
        updateProduk:(state,action)=>{
            const {id,nama,hargaJual,hargaBeli,stok,gambar} = action.payload
            const data = state.items.find(produk => produk.id == id)
            if(data){
                data.nama = nama,
                data.hargaJual = hargaJual,
                data.hargaBeli= hargaBeli,
                data.stok=stok,
                data.gambar=gambar
            }
            localStorage.setItem('items', JSON.stringify(state.items))
        },
        deleteProduk:(state,action)=>{
            const delItems = state.items.filter((produk)=>produk.id !== action.payload.id)
            state.items = delItems
            localStorage.setItem('items', JSON.stringify(state.items))
        },
        clear: (state,action)=>{
            state.items=[]
            localStorage.setItem('items', JSON.stringify(state.items))
        }
    }
})

export const {addProduk,clear,updateProduk,deleteProduk} = produkSlice.actions
export default produkSlice.reducer