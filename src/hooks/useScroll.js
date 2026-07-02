import { useState, useEffect} from 'react';

const useActiveSection = (ids, threshold = 0.4) => {
    const [active, setActive] = useState(ids[0])

    useEffect(() => {
        const observers = ids.map((id) => {
            const el = document.getElementById(id)
            if (!el) return null

            const observer = new IntersectionObserver(
                ([entry]) => { if (entry.isIntersecting) setActive(id) },
                { threshold }
            )
            observer.observe(el)
            console.log('here:', observer)
            return observer
        })

        return () => observers.forEach(obs => obs?.disconnect())
    }, [ids, threshold])

    console.log('active:', active);
    return active
}

export default useActiveSection