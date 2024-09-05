// import { useContext, useRef } from 'react'

// import { useRouter } from 'next/navigation'

// import { constants, routes } from '@/configs'

// import useToast from './useToast'
// import { AuthContext } from '@/context'
// import { login, logout } from '@/actions'

// export default () => {
//   const router = useRouter()
//   const { setUser } = useContext(AuthContext)
//   const { showSuccessMessage, showErrorMessage } = useToast()

//   const performLogout = () => {
//     setUser(null)
//     logout()
//     router.push(routes.login)
//     showSuccessMessage(constants.SUCCESS.LOGOUT)
//   }

//   const performLogin = async values => {
//     const { success, data } = await login(values)

//     if (success) {
//       setUser(data)
//       showSuccessMessage(constants.SUCCESS.LOGIN)
//       router.push(routes.dashboard)
//     } else {
//       showErrorMessage(data)
//     }
//   }

//   return { performLogin, performLogout }
// }
