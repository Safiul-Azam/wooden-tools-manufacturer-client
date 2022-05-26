import { useEffect, useState } from "react"

const useAdmin = user => {
    const [admin, setAdmin] = useState(false)
    const [adminLoading, setAdminLoading] = useState(true)
    useEffect(() => {
        const email = user?.email
        fetch(`https://guarded-cliffs-74230.herokuapp.com/admin/${email}`, {
            method: 'GET',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.admin) {
                    setAdmin(data.admin)
                    setAdminLoading(false)
                }
            })
    }, [user])
    return [admin, adminLoading]
}
export default useAdmin