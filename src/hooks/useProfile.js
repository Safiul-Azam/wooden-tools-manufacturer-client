import { useEffect, useState } from "react"

const useProfile = (user)=>{
    const [profile, setProfile] = useState({})
    const email = user?.email
    useEffect(() => {
        fetch(`http://localhost:5000/users/${email}`, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
        })
            .then(res => res.json())
            .then(data => setProfile(data))
    }, [email])
    return [profile]
}
export default useProfile