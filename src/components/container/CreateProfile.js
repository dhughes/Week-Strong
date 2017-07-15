import React from 'react';
import { connect } from 'react-redux';
import { Vbox } from '../presentational/Box';
import Body from '../presentational/styled/Body';
import { ChevronLeft, Facebook, Google } from '../presentational/Icon';
import LinkButton from '../presentational/LinkButton';
import Button from '../presentational/styled/Button';
import NavigationBar from '../presentational/NavigationBar';
import Input from '../presentational/Input';
import SectionBreak from '../presentational/styled/SectionBreak';
import { editCreateProfileFiled, validateNewEmail, validatedProfileField, createNewUser } from '../actions/actions';

const mapStateToProps = (state, ownProps) => {
  // This doesn't belong here, but it works. It's good for at least development-time
  //if (Object.keys(state.ui.createProgram.exercises).length === 0) history.push('/CreateProgram');

  return {
    profile: state.ui.createProfile,
    program: state.ui.createProgram,
    canContinue: Object.keys(state.ui.createProfile.validation).reduce(
      (acc, field) => acc && state.ui.createProfile.validation[field].valid,
      true
    )
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleChange: target => {
      dispatch(editCreateProfileFiled(target.getAttribute('name'), target.value));

      if (target.validity.valid && target.getAttribute('name') === 'email') {
        dispatch(validateNewEmail(target.value));
      } else {
        dispatch(validatedProfileField(target.getAttribute('name'), target.validity.valid));
      }
    },
    handleCreateProfileSubmit: (e, profile, program) => {
      e.preventDefault();
      dispatch(
        createNewUser({
          id: undefined,
          name: profile.name,
          email: profile.email,
          password: profile.password,
          program: program
        })
      );
    }
  };
};

const CreateProfile = props =>
  <Vbox>
    <NavigationBar leftTo="/Summary" leftIcon={ChevronLeft} title="Create Your Profile" />
    <Body justifyContent="center">
      <LinkButton to="/facebook" icon={<Facebook />} label="Sign In With Facebook" className="facebook" />
      <LinkButton to="/google" icon={<Google />} label="Sign In With Google" className="google" />
      <SectionBreak />
      <form onSubmit={e => props.handleCreateProfileSubmit(e, props.profile, props.program)}>
        <Vbox>
          <Input
            type="text"
            name="name"
            maxLength="100"
            required
            value={props.profile.name}
            onChange={e => props.handleChange(e.target)}
            validating={props.profile.validation['name'] && props.profile.validation['name'].validating}
            isValid={props.profile.validation['name'] && props.profile.validation['name'].valid}
            placeholder="Name"
          />
          <Input
            type="email"
            name="email"
            required
            value={props.profile.email}
            onChange={e => props.handleChange(e.target)}
            validating={props.profile.validation['email'] && props.profile.validation['email'].validating}
            isValid={props.profile.validation['email'] && props.profile.validation['email'].valid}
            placeholder="Email"
          />
          <Input
            type="password"
            name="password"
            maxLength="100"
            minLength="4"
            required
            value={props.profile.password}
            onChange={e => props.handleChange(e.target)}
            validating={props.profile.validation['password'] && props.profile.validation['password'].validating}
            isValid={props.profile.validation['password'] && props.profile.validation['password'].valid}
            placeholder="Password"
          />
          <Button disabled={!props.canContinue} className="default">
            Create Profile
          </Button>
        </Vbox>
      </form>
    </Body>
  </Vbox>;

export default connect(mapStateToProps, mapDispatchToProps)(CreateProfile);
