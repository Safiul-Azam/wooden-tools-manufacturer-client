import { useEffect, useState } from "react"

const useToken = (user) => {
    const [token, setToken] = useState('')
    useEffect(() => {
        const email = user?.user?.email
        const displayName = user?.user?.displayName
        const currentUser = { email: email, displayName:displayName }
        if (email) {
            const url = `http://localhost:5000/users/${email}`
            fetch(url,{
                method:'PUT',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(currentUser)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                const token = data.jwtAccessToken 
                localStorage.setItem('accessToken', token)
                setToken(data)
            })
        }
    }, [user])
    return [token]
}
export default useToken