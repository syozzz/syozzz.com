import {MainTitle} from './style'
import Link from 'next/link'
import SwitchTheme from './SwitchTheme'

export default function FixedTools({ themeType, switchThemes }) {

    return (
        <div>
            <Link href="/">
                <MainTitle>
                    <p className="studio-name">STUDIO <br/>SYOZZZ</p>
                    <p className="studio-location">CHINA / HANGZHOU</p>
                </MainTitle>
            </Link>
            <SwitchTheme themeType={themeType} switchThemes={switchThemes}/>
        </div>
    )
}