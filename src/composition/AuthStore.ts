import { reactive } from 'vue'

type AuthData = {
  email: string
  password: string
}


type User = {
  unique_name: string,
  email: string,
  Cpf: string,
  role: string
}

export type AuthTokens = {
  authToken: string
}

export type RefreshTokenResponse = {
  refreshToken: string
  token: string
}

type AuthStoreType = {
  user: User
  setUser: (user: User) => void 
  token?: string
  setToken: (token: string) => void
  checkAuth: () => boolean
  logout: () => void
  refreshToken?: string
  getRefreshToken: () => string
  setRefreshToken: (refreshToken: string) => void
}

export const AuthStore = reactive<AuthStoreType>({
  user: {} as User,
  setUser(user: User) {
    localStorage.setItem('user', JSON.stringify(user)) 
    this.user = user
  },

  token: undefined,
  setToken(token) {
    localStorage.setItem('authToken', token)
    // api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    this.token = token
  },
  refreshToken: undefined,
  setRefreshToken(refreshToken: string) {
    

    localStorage.setItem('refreshToken', refreshToken)
    this.refreshToken = refreshToken
  },

  getRefreshToken() {
    return String(this.refreshToken)
  },
  
  checkAuth() {
    return Boolean(this.token)
  },
  logout() {
    this.user = {} as User;
    this.token = undefined;
    this.refreshToken = undefined; 
  
    localStorage.removeItem('authToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('user');
  }
  
})
