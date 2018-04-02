import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as profileActions from '../actions/profileActions';
import NavBar from '../common/navBar/navBar';

const baseUrl = 'http://localhost:3000/';

class Index extends Component {
  componentDidMount() {
    this.props.getUserProfile({
      userId: this.props.loggedInUser.user_id
    });
  }

  render() {
    const { profile_image } = this.props.currentProfile;
    let profileImage = null;
    if (profile_image) {
      profileImage = (
        <img className="profile-image" src={baseUrl + this.props.currentProfile.profile_image} alt="Login" />
      );
    }
    return [
      <NavBar key="navBar" />,
      <div className="container padding-top-20px" key="content">
        <div className="row">
          <div className="col-sm-3 no-padding">{profileImage}</div>
          <div className="col-sm-9">Hello World</div>
        </div>
      </div>
    ];
  }
}

Index.propTypes = {
  loggedInUser: PropTypes.shape({
    user_id: PropTypes.string,
    id: PropTypes.string
  }),
  currentProfile: PropTypes.shape({
    id: PropTypes.string,
    user_id: PropTypes.string,
    email: PropTypes.string,
    title: PropTypes.string,
    sex: PropTypes.string,
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    middle_name: PropTypes.string,
    work_destination: PropTypes.string,
    address_1: PropTypes.string,
    address_2: PropTypes.string,
    address_3: PropTypes.string,
    profile_image: PropTypes.string
  }),
  getUserProfile: PropTypes.func.isRequired
};

Index.defaultProps = {
  loggedInUser: {},
  currentProfile: {}
};

const mapStateToProps = ({ loginReducer, profileReducer }) => ({
  loggedInUser: loginReducer.loggedInUser,
  currentProfile: profileReducer.currentProfile
});

const mapDispatchToProps = {
  getUserProfile: profileActions.getUserProfile
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
