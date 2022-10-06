import {MainTitle} from './style'
import SwitchTheme from './SwitchTheme'

export default function FixedTools({ themeType, switchThemes }) {

    return (
        <div>
            <div>
                <MainTitle>
                    <p className="studio-name">STUDIO <br/>SYOZZZ</p>
                    <p className="studio-location">CHINA / HANGZHOU</p>
                </MainTitle>
            </div>
            <SwitchTheme themeType={themeType} switchThemes={switchThemes}/>
        </div>
    )
}
