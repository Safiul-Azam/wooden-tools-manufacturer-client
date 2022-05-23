import { useEffect, useState } from "react"

const useToken = (user) => {
    const [token, setToken] = useState('')
    console.log(user)
    useEffect(() => {
        const email = user?.user?.email
        const displayName = user?.user?.displayName
        console.log(email)
        console.log(displayName)
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
                setToken(data)})
        }
    }, [user])
    return [token]
}
export default useToken