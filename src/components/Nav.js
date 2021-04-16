import React from 'react'
import {
    Container,
    Dropdown,
    Image,
    Menu,
} from 'semantic-ui-react'
import logo from '../assets/logo.png'

const Nav = () => (
    <div>
        <Menu fixed='top' inverted>
        <Container>
            <Menu.Item as='a' header>
            <Image size='mini' src={logo} style={{ marginRight: '1.5em' }} />
            Leo Vincent
            </Menu.Item>

            <Dropdown item simple text='More'>
            <Dropdown.Menu>
                <Dropdown.Item>About Me</Dropdown.Item>
                <Dropdown.Divider />
                
                <Dropdown.Item>
                <i className='dropdown icon' />
                <span className='text'>Projects</span>
                <Dropdown.Menu>
                    <Dropdown.Item>List Item</Dropdown.Item>
                    <Dropdown.Item>List Item</Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown.Item>
                <Dropdown.Item>
                <i className='dropdown icon' />
                <span className='text'>Links</span>
                <Dropdown.Menu>
                    <Dropdown.Item>List Item</Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown>
        </Container>
        </Menu>
    </div>
)

export default Nav