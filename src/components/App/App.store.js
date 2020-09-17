import { createConnectedStore } from 'undux'

export default createConnectedStore({
    authToken: '',
    mode: "light",
    userId: 0,
    user: '',
})