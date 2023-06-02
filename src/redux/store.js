import { configureStore } from "@reduxjs/toolkit"
import { userSlice } from "./states/user.state"
import { profileSlice } from "./states/profile.state"
import { myListSlice } from "./states/myList.state"




export default configureStore({
    reducer: {
        user: userSlice.reducer,
        profile: profileSlice.reducer,
        list: myListSlice.reducer,
    }
})