import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Vbox } from '../presentational/Box';
import Body from '../presentational/styled/Body';
import { ChevronLeft, Facebook, Google } from '../presentational/Icon';
import LinkButton from '../presentational/LinkButton';
import Button from '../presentational/styled/Button';
import NavigationBar from '../presentational/NavigationBar';
import SectionBreak from '../presentational/styled/SectionBreak';
import Input from '../presentational/Input';
import HighlightedMessage from '../presentational/styled/HighlightedMessage';
import { editLoginPageFiled, login } from '../actions/actions';

const TextLink = styled(Link)`
  color: currentColor;
  text-align: center;
`;

const mapStateToProps = (state, ownProps) => {
  // This doesn't belong here, but it works. It's good for at least development-time
  //if (Object.keys(state.ui.createProgram.exercises).length === 0) history.push('/CreateProgram');

  console.log('state!!!', state);

  return {
    login: state.ui.loginPage,
    canContinue: state.ui.loginPage.email.trim().length > 0 && state.ui.loginPage.password.trim().length > 0
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleChange: target => {
      dispatch(editLoginPageFiled(target.getAttribute('name'), target.value));
    },
    handleLoginSubmit: (e, email, password) => {
      e.preventDefault();
      dispatch(login(email, password));
    }
  };
};

const LoginPage = props =>
  <Vbox>
    <NavigationBar leftIcon={ChevronLeft} leftTo="/" title="Sign In To Week-Strong" />
    <Body justifyContent="center">
      <LinkButton to="/facebook" icon={<Facebook />} label="Sign In With Facebook" className="facebook" />
      <LinkButton to="/google" icon={<Google />} label="Sign In With Google" className="google" />
      <SectionBreak />
      <form onSubmit={e => props.handleLoginSubmit(e, props.login.email, props.login.password)}>
        <Vbox>
          <HighlightedMessage display={props.login.loginFailed} className="error">
            Login failed. Please try again.
          </HighlightedMessage>
          <Input
            type="text"
            name="email"
            required
            value={props.login.email}
            onChange={e => props.handleChange(e.target)}
            placeholder="Email"
          />
          <Input
            type="password"
            name="password"
            maxLength="100"
            minLength="4"
            required
            value={props.login.password}
            onChange={e => props.handleChange(e.target)}
            placeholder="Password"
          />

          <Button disabled={!props.canContinue} className="default">
            Login
          </Button>
          <TextLink to="/ForgotPassword">Forgot your password?</TextLink>
        </Vbox>
      </form>
    </Body>
  </Vbox>;

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
