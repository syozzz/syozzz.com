import styles from '../styles/Home.module.css'
import {useTheme} from '@geist-ui/core'
import CustomHead from '../components/common/head'
import {useEffect} from "react";

export default function Home() {

    const { palette } = useTheme()

    useEffect(() => {
        localStorage.setItem('syozzz-bg-shape-idx', 0)
    }, [])

    return (
        <>
            <CustomHead title="studio syozzz"/>
            <div className={styles.container}>
                <div className={styles.main}>
                    <p className={styles.p1}>
                        JUST DESIGN.<br/>
                        JUST DEVELOP.
                    </p>
                    <div className={styles.p2} style={{color: palette.accents_7}}>
                        尽我所能
                    </div>
                </div>
            </div>
        </>
    )
}
