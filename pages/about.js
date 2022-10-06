import CustomHead from '../components/common/head'
import {Container, PageTitle, PageSubTitle, ContentBox, Extra} from '../components/common'
import styled from 'styled-components'
import {Divider, Grid} from '@geist-ui/core'

const AboutBox = styled.div`
  margin-top: 80px;
  
  .title {
    font-family: nunito-sans,sans-serif;
    font-size: 25px;
    line-height: 1.6;
    margin-bottom: 40px;
    letter-spacing: 0.35em;

    @media (min-width: 769px) {
      letter-spacing: 0.4em;
    }
  }
  
`

export default function About() {

    return (
        <>
            <CustomHead title="about - 关于"/>
            <Container>
                <PageTitle>About</PageTitle>
                <PageSubTitle>关于我。</PageSubTitle>
                <ContentBox>
                    <div>
                        按期交付，保障质量是我们最看重的行动基准。充分理解，展现客户需求，有问题及时沟通交换意见，不妥协、不应付、不糊弄。
                    </div>
                    <div>
                        不接黑、灰产，不接一切违反中国大陆相关法律的业务。暂不接小程序、app、游戏相关业务。
                    </div>
                    <AboutBox>
                        <div className="title">ABOUT</div>
                        <Divider />
                        <Grid.Container>
                            <Grid xs={6} sm={4}>称呼</Grid>
                            <Grid xs={18} sm={20}>syozzz</Grid>
                        </Grid.Container>
                        <Divider />
                        <Grid.Container>
                            <Grid xs={6} sm={4}>工作经验</Grid>
                            <Grid xs={18} sm={20}>四年半</Grid>
                        </Grid.Container>
                        <Divider />
                        <Grid.Container>
                            <Grid xs={6} sm={4}>工作状态</Grid>
                            <Grid xs={18} sm={20}>全职远程中</Grid>
                        </Grid.Container>
                        <Divider />
                        <Grid.Container>
                            <Grid xs={6} sm={4}>擅长领域</Grid>
                            <Grid xs={18} sm={20}>后端、web、app</Grid>
                        </Grid.Container>
                        <Divider />
                        <Grid.Container>
                            <Grid xs={6} sm={4}>技术栈</Grid>
                            <Grid xs={18} sm={20}>Java、JavaScript、React、Vue、Kotlin、Swift、C#</Grid>
                        </Grid.Container>
                        <Divider />
                        <Grid.Container>
                            <Grid xs={6} sm={4}>业务范围</Grid>
                            <Grid xs={18} sm={20}>
                                <div style={{position: "relative"}}>
                                    包括但不限于:
                                    <ul style={{marginLeft: '1em'}}>
                                        <li>后端服务开发</li>
                                        <li>web 开发</li>
                                        <li>原生 app 开发（Kotlin & Swift）</li>
                                        <li>跨端 app 开发（Flutter）</li>
                                        <li>Unity 游戏开发</li>
                                    </ul>
                                </div>
                            </Grid>
                        </Grid.Container>
                        <Divider/>
                        <Grid.Container>
                            <Grid xs={6} sm={4}>可支付方式</Grid>
                            <Grid xs={18} sm={20}>支付宝、微信、银行卡、USDT</Grid>
                        </Grid.Container>
                    </AboutBox>
                </ContentBox>
                <Extra/>
            </Container>
        </>
    )

}
