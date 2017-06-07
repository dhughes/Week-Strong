import React, { Component } from 'react';
import styled from 'styled-components';
import Page from './Page';
import Body from './Body';
import { Hbox } from './Box';
import { ChevronLeft, Facebook, Google } from './Icon';
import { Link } from 'react-router-dom';
import LinkButton from './LinkButton';
import Button from './Button';

const TextLink = styled(Link)`
  color: ${props => props.theme.font};
  text-align: center;
`;

const NavigationBar = styled(Hbox)`
  background-color: ${props => props.theme.header};
  min-height: 4rem;
  line-height: 4rem;
  color: ${props => props.theme.background};

  & > * {
    height: 4rem;
    width: 4rem;
    flex-grow: 0;
  }

  & > h1{
    font-size: 1.4rem;
    text-align: center;
    flex-grow: 1000;
  }

  & > a {
    color: ${props => props.theme.background};
  }

  & svg {
    fill: currentColor;
  }
`;

const SectionBreak = styled.hr`
  height: 2px;
  background-color: ${props => props.theme.font};
  border: 0;
  margin: 2rem auto;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;

  & > input, button {
    flex: 1;
    font-size: 1.75rem;
    text-decoration: none;
    margin: 0.5rem 0;
  }
`;

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    console.log('LoginPage', props);
  }
  handleLoginSubmit = e => {
    e.preventDefault();
    let { username, password } = this.state;
    this.props.onLoginSubmit(username, password);
    this.setState({ password: '' });
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <Page>
        <NavigationBar>
          <Link to="/"><ChevronLeft /></Link>
          <h1>Sign In To Week-Strong</h1>
          <div />
        </NavigationBar>
        <Body>
          <LinkButton to="/facebook" className="facebook">
            <Facebook />
            <div>Sign In With Facebook</div>
          </LinkButton>
          <LinkButton to="/google" className="google">
            <Google />
            <div>Sign In With Google</div>
          </LinkButton>
          <SectionBreak />
          <Form onSubmit={this.handleLoginSubmit}>
            <input
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
              placeholder="Email"
            />
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              placeholder="Password"
            />
            <Button className="default">Login</Button>
          </Form>
          <TextLink to="/forgotPassword">Forgot your password?</TextLink>
        </Body>

      </Page>
    );
  }
}

LoginPage.defaultProps = {
  onLoginSubmit: () => {}
};

export default LoginPage;
