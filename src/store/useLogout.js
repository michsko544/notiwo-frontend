import { useHistory } from "react-router-dom"
import Store from "store"

export default function useLogout() {
    const store = Store.useStore()
    const history = useHistory();
    
    const forceLogout = () => {
    store.set("authToken")("")
    store.set("isFreelancer")(false)
    store.set("userId")(0)
    store.set("user")("")
    history.replace("/notices/it")
    }

    return forceLogout;
}