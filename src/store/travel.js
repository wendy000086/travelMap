import travel from '../api/travel'

const Travel = {
    namespaced: true,

    state: () => ({
        SpotList: {},
        CityList: {}
    }),

    mutations: {
        setSpotList: (state, SpotList) => {
            state.SpotList = SpotList
        },
        setCityList: (state, CityList) => {
            state.CityList = CityList
        },

    },

    actions: {
        fetchGetSpotList({commit}) {
            return new Promise(resolve => {
                travel.getSpotList().then(res => {
                    // console.log(res.data)
                    commit('setSpotList', res.data)
                    resolve(res.data)
                 })
            })
        },

        fetchGetCityList({commit}) {
            return new Promise(resolve => {
                travel.getCityList().then(res => {
                    console.log(res.data)
                    commit('setCityList', res.data)
                    resolve(res.data)
                 })
            })
        },
    },

    getters: {
        getScenicSpot: state => state.SpotList
    }
}


export default Travel