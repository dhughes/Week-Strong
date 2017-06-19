import React, { Component } from 'react';
import styled from 'styled-components';
import { Vbox } from './Box';
import Body from './Body';
import { ChevronLeft, Facebook, Google } from './Icon';
import LinkButton from './LinkButton';
import Button from './Button';
import NavigationBar from './NavigationBar';
import Input from './Input';
import theme from './theme';

const SectionBreak = styled.hr`
  height: 1px;
  background-color: ${theme.separator};
  border: 0;
  margin: 2rem auto;
`;

class CreateProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: ''
    };
  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleCreateProfileSubmit = e => {
    e.preventDefault();
    let { name, email, password } = this.state;
    this.props.onCreateProfileSubmit(name, email, password);
    this.setState({ password: '' });
  };
  render() {
    return (
      <Vbox>
        <NavigationBar leftBack leftIcon={<ChevronLeft />} title="Create Your Profile" />
        <Body justifyContent="center">
          <LinkButton to="/facebook" icon={<Facebook />} label="Sign In With Facebook" className="facebook" />
          <LinkButton to="/google" icon={<Google />} label="Sign In With Google" className="google" />
          <SectionBreak />
          <form onSubmit={this.handleCreateProfileSubmit}>
            <Vbox>
              <Input type="text" name="name" value={this.state.name} onChange={this.handleChange} placeholder="Name" />
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
              <Button className="default">Create Profile</Button>
            </Vbox>
          </form>
        </Body>

      </Vbox>
    );
  }
}

CreateProfile.defaultProps = {
  onLoginSubmit: () => {}
};

export default CreateProfile;
