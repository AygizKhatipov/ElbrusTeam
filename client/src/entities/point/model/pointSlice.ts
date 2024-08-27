import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import PointApi from "../api/pointApi";
import { Points, PointsWithoutId } from "../type/pointType";


const initialState: Points[] = []


const loadPoints=createAsyncThunk("race/load", ()=> PointApi.getAllPoints())
const deletePoints=createAsyncThunk("race/delete", (id:number)=> PointApi.deletePoint(id))
const updatePoints=createAsyncThunk("race/update", ({id, form}:{id:number, form: PointsWithoutId})=> PointApi.updatePoint({id, form}))


const pointSlice = createSlice({
    name: "pointSlice",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(loadPoints.fulfilled,(state, action)=>{
            state.push(...action.payload)
        })
        builder.addCase(deletePoints.fulfilled,(state, action)=>{
            return state.filter((el)=> el.id !== action.meta.arg )
        })
        builder.addCase(updatePoints.fulfilled,(state, action)=>{
            return state.map((el)=> (el.id===action.payload.id? action.payload:el))
        })
    }
})
export {loadPoints, deletePoints, updatePoints}
export default pointSlice.reducer