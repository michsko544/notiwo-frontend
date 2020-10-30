import { createConnectedStore } from 'undux'

export default createConnectedStore({
    authToken: 'aaa',
    mode: "light",
    isFreelancer: false,
    userId: 0,
    user: '',
    selectedSort: 0,
    selectedCategory: 0,
    selectedOptionGroup: 0,
    selectedOffer: 0,
    sortOptions: [],
    categoryOptions: []
})