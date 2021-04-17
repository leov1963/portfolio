import React from 'react'
import { Link } from 'react-router-dom';
import {
    Container,
    Dropdown,
    Image,
    Menu,
    Icon,
    Button
} from 'semantic-ui-react'
import logo from '../assets/logo.png'

const Nav = () => (
    <div>
        <Menu fixed='top' inverted>
        <Container>
                <Menu.Item as={ Link } name='landingpage' to='' header>
                <Image size='mini' src={logo} style={{ marginRight: '1.5em' }} />
                Leo Vincent
                </Menu.Item>

            <Dropdown item simple text='More'>
            <Dropdown.Menu>
                <Dropdown.Item as={ Link } name='aboutme' to='aboutme'>About Me</Dropdown.Item>
                <Dropdown.Divider />
                
                <Dropdown.Item>
                <i className='dropdown icon' />
                <span className='text'>Projects</span>
                <Dropdown.Menu>
                    <Dropdown.Item>Pitchy to Perfect</Dropdown.Item>
                    <Dropdown.Item>Write to Relax</Dropdown.Item>
                    <Dropdown.Item>Mr. Namesy</Dropdown.Item>
                    <Dropdown.Item>Grow a Skeleton</Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown.Item>
                <Dropdown.Item>
                <i className='dropdown icon' />
                <span className='text'>Links</span>
                <Dropdown.Menu>
                    <Button color='linkedin'><Icon name='linkedin' />My LinkedIn</Button>
                    <Button color='github'><Icon name='github' />My Github</Button>
                </Dropdown.Menu>
                </Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown>
        </Container>
        </Menu>
    </div>
)

export default Nav