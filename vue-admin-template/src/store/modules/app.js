import Cookies from 'js-cookie'

const app = {
  state: {
    sidebar: {
      opened: !+Cookies.get('sidebarStatus'),
      withoutAnimation: false
    },
    device: 'desktop',
		heigth:"0"
		// schoolId : Cookies.get('schoolId')
  },
  mutations: {
    TOGGLE_SIDEBAR: state => {
      if (state.sidebar.opened) {
        Cookies.set('sidebarStatus', 1)
      } else {
        Cookies.set('sidebarStatus', 0)
      }
      state.sidebar.opened = !state.sidebar.opened
      state.sidebar.withoutAnimation = false
    },
    CLOSE_SIDEBAR: (state, withoutAnimation) => {
      Cookies.set('sidebarStatus', 1)
      state.sidebar.opened = false
      state.sidebar.withoutAnimation = withoutAnimation
    },
    TOGGLE_DEVICE: (state, device) => {
      state.device = device
    },
		 SET_HEIGHT: (state, height) => {
			 console.log(typeof(height))
			 var inhe=window.innerHeight;
			 
		  var x = (height+inhe/10*12).toString()
			
			state.height=x+"px";
			console.log(state.height)
		}
// 		SCHOOL_ID: (state, schoolId) => {
// 			state.schoolId = schoolId
// 		}
		
  },
  actions: {
    ToggleSideBar: ({ commit }) => {
      commit('TOGGLE_SIDEBAR')
    },
    CloseSideBar({ commit }, { withoutAnimation }) {
      commit('CLOSE_SIDEBAR', withoutAnimation)
    },
    ToggleDevice({ commit }, device) {
      commit('TOGGLE_DEVICE', device)
    },
		setHeight({ commit }, height) {
		  commit('SET_HEIGHT', height)
		}
// 		SCHOOLID({ commit }, schoolId) {
// 			Cookies.set('schoolId', schoolId)
// 			commit('SCHOOL_ID', schoolId)
// 		}
  }
}

export default app
