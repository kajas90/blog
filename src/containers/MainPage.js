import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'
import { connect } from 'react-redux';

import Posts from './Posts';
import Post from './Post'

const PageWrapper = styled.section`
  display: flex;
  flex-direction: row;
`

export class MainPage extends React.Component {

  render() {
    const { postSelected } = this.props;
    return (
      <PageWrapper>
        <Posts />
        {postSelected > 0 && <Post id={postSelected} />}
      </PageWrapper>
    );
  }
}

MainPage.propTypes = {
  postSelected: PropTypes.number
};

const mapStateToProps = (state) => ({
  postSelected: state.getIn(['post','data','id']),
});

export default connect(mapStateToProps)(MainPage);
