import React, { Component } from 'react';
import Meta from "./Meta";
import Header from "./Header";
import styled from "styled-components";

const StyledPage = styled.div`
  background: white;
  color: black;
`;

const Inner = styled.div`
  margin: 0 auto;
  max-width: 1000px;
  padding: 2rem;
`;

class Page extends Component {
  render() {
    return (
      <StyledPage>
        <Meta />
        <Header />
          <Inner>
            {this.props.children}
          </Inner>
      </StyledPage>
    )
  }
}

export default Page;
