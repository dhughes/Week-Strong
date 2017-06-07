import React, { Component } from 'react';
import styled from 'styled-components';
import { Vbox } from './Box';
import Body from './Body';
import { ChevronLeft, Facebook, Google } from './Icon';
import { Link } from 'react-router-dom';
import LinkButton from './LinkButton';
import Button from './Button';
import NavigationBar from './NavigationBar';
import Input from './Input';

const TextLink = styled(Link)`
  color: ${props => props.theme.font};
  text-align: center;
`;

const SectionBreak = styled.hr`
  height: 2px;
  background-color: ${props => props.theme.font};
  border: 0;
  margin: 2rem auto;
`;

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
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
      <Vbox>
        <NavigationBar leftTo="/" leftIcon={<ChevronLeft />} title="Sign In To Week-Strong" />
        <Body justifyContent="center">
          <LinkButton to="/facebook" icon={<Facebook />} label="Sign In With Facebook" className="facebook" />
          <LinkButton to="/google" icon={<Google />} label="Sign In With Google" className="google" />
          <SectionBreak />
          <form onSubmit={this.handleLoginSubmit}>
            <Vbox>
              <Input
                type="text"
                name="username"
                value={this.state.username}
                onChange={this.handleChange}
                placeholder="Email"
              />
              <Input
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
                placeholder="Password"
              />
              <Button className="default">Login</Button>
              <TextLink to="/forgotPassword">Forgot your password?</TextLink>
            </Vbox>
          </form>
        </Body>

      </Vbox>
    );
  }
}

LoginPage.defaultProps = {
  onLoginSubmit: () => {}
};

export default LoginPage;
