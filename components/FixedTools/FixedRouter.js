import {memo} from 'react'
import {FixedLeftRoute} from './style'
import Router, { withRouter } from 'next/router'

const routes = [
    {content: 'HOME', path: '/', key: '/'},
    {content: 'WORKS', path: '/works', key: '/works'},
    {content: 'ABOUT', path: '/about', key: '/about'},
    {content: 'CONTACT', path: '/contact', key: '/contact'},
    {content: 'BLOG', path: 'https://blog.syozzz.com', key: '/blog'},
]

const FixedRouter = ({switchShape, router}) => {

    const switchRoute = (route) => {
        if (route.path.startsWith('http')) {
            window.open(route.path, '_blank')
        } else {
            switchShape(route.path)
            Router.push(route.path)
        }
    }

    return (
        <>
            <FixedLeftRoute>
                <ul>
                    {routes.map(route => (
                        <li key={route.key}>
                            <a
                                className={router.pathname === route.path ? 'active' : 'default'}
                                onClick={() => {
                                    if (router.pathname !== route.path) {
                                        switchRoute(route)
                                    }
                                }}
                            >
                                {router.pathname === route.path ? <span/> : null}
                                {route.content}
                            </a>
                        </li>
                    ))}
                </ul>
            </FixedLeftRoute>
        </>
    )

}

export default withRouter(memo(FixedRouter))
