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
import theme from './theme';

const TextLink = styled(Link)`
  color: currentColor;
  text-align: center;
`;

const SectionBreak = styled.hr`
  height: 1px;
  background-color: ${theme.separator};
  border: 0;
  margin: 2rem auto;
`;

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }
  handleLoginSubmit = e => {
    e.preventDefault();
    let { email, password } = this.state;
    this.props.onLoginSubmit(email, password);
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
                name="email"
                value={this.state.email}
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
