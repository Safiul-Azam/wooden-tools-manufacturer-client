import { useEffect, useState } from "react"

const useProfile = (user)=>{
    const [profile, setProfile] = useState({})
    const email = user?.email
    useEffect(() => {
        fetch(`https://guarded-cliffs-74230.herokuapp.com/users/${email}`, {
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