import { clear } from "@testing-library/user-event/dist/clear"

export const storage = {
  user: {
    get() {
      const data = localStorage.getItem('user')
      if (data) return JSON.parse(data)

      return undefined
    },
  
    set(data) {
      if (data) localStorage.setItem('user', JSON.stringify(data))
    },

    destroy() {
      localStorage.removeItem('user')
    }
  }
}

export const currentUser = storage.user.get
