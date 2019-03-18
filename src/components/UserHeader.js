import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../actions/index";

class UserHeader extends Component {
  
  componentDidMount() {
    this.props.fetchUser(this.props.userId);
  }
  render() {
    const { user } = this.props
    if (!user) {
      return <div>Loading...</div>;
    }
    return <div className="header">{user.name}</div>;
  }
}

const mapStateToProps = (state, ownPops) => {
  return { user: state.users.find(user => user.id === ownPops.userId) };
};

export default connect(
  mapStateToProps,
  { fetchUser: fetchUser }
)(UserHeader);
