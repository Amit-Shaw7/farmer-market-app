import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

const Redirect = ({ url }: { url: string }) => {
    const router = useRouter();
    router.push(url);

    return (
        <div>UnAuthenticated</div>
    )
}

export default Redirect