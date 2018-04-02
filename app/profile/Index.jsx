import React from 'react';
import PropTypes from 'prop-types';
// import { connect } from 'react-redux';

const Index = props => (
  <div>
    <pre>
      <code>{JSON.stringify(props.loggedInUser, 4, 4)}</code>
    </pre>
  </div>
);

Index.propTypes = {
  loggedInUser: PropTypes.shape({
    userId: PropTypes.string,
    id: PropTypes.string
  })
};

Index.defaultProps = {
  loggedInUser: {}
};

// const mapStateToProps = ({ loginReducer }) => ({ loggedInUser: loginReducer.loggedInUser });
// export default connect(mapStateToProps)(Index);

export default Index;
