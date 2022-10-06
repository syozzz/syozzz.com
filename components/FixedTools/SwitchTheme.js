import {useCallback, useEffect, useRef, useState} from 'react'
import {useTheme} from '@geist-ui/core'
import {motion, useAnimationControls} from 'framer-motion'
import Sun from '@geist-ui/icons/sun'
import Moon from '@geist-ui/icons/moon';
import {SwitchThemeBox, BackgroundBox} from './style'
import styles from '../../styles/AnimationBox.module.css'
import FixedRouter from './FixedRouter'

const iframeSrc = "/static/back.html"

const getMinNum = () => {
    return Math.min(
        document.documentElement.clientHeight || document.body.clientHeight,
        document.documentElement.clientWidth || document.body.clientWidth
    ) / 2;
}

let timeout;

export default function SwitchTheme({ themeType, switchThemes }) {

    const [showMaskAnimation, setShowMaskAnimation] = useState(false)
    const [src, setSrc] = useState(undefined)
    const [iconType, setIconType] = useState(undefined)
    const { palette } = useTheme()
    const controls = useAnimationControls()
    const iframeRef = useRef()
    const switchShape = useCallback((key) => {
        iframeRef?.current?.contentWindow.SWITCH_OPT.switchShape(key)
    }, [])

    useEffect(() => {
        setSrc(iframeSrc)
        window.addEventListener('resize',  function (e) {
            clearTimeout(timeout)
            timeout = setTimeout(() => {
                iframeRef?.current?.contentWindow.location.reload()
            }, 300)
        })
    }, [])

    return (
        <>
            <SwitchThemeBox onClick={async () => {
                const r = getMinNum();
                setIconType(themeType === 'light')
                await setShowMaskAnimation(true)
                iframeRef?.current.contentWindow.SWITCH_OPT.switchThemes()
                await controls.start({y: [-r, 50], transition: {duration: 0.5}})
                setIconType(themeType !== 'light')
                await controls.start({y: [50, -r], transition: {duration: 0.5}})
                controls.stop();
            }}>
                {themeType === 'light' ?
                    <Sun size={18} color="#333333"/> :
                    <Moon size={18} color="rgb(214, 214, 214)" fill="rgb(214, 214, 214)"/>
                }
            </SwitchThemeBox>
            <FixedRouter switchShape={switchShape}/>
            <BackgroundBox>
                {src ?
                    <iframe id="back_container"
                            οnlοad="this.height=back_container.document.body.scrollHeight"
                            src={src}
                            ref={iframeRef}
                            height="100%" width="100%"
                            frameBorder="no" border="0" marginWidth="0"
                            marginHeight="0" scrolling="no"/> : null
                }
            </BackgroundBox>
            {showMaskAnimation && (
                <motion.div className={styles.animationBox}
                            initial={{ background: palette.background, opacity: 1 }}
                            animate={{ background: palette.foreground, opacity: 1 }}
                            exit={{opacity: 0}}
                            transition={{ duration: 1.5 }}
                            onAnimationComplete={() => {
                                setShowMaskAnimation(false)
                                switchThemes()
                            }}
                >
                    <motion.a className={styles.animationIcon}
                              animate={controls}>
                        {iconType ?
                            <Sun size={30} color="#333333"/> :
                            <Moon size={30} color="rgb(214, 214, 214)" fill="rgb(214, 214, 214)"/>
                        }
                    </motion.a>
                </motion.div>
            )}
        </>
    )
}
