import styled, { css } from 'styled-components';

interface LinkProps {
  isSelected?: boolean;
}

export const Container = styled.div`
  background-color: #fff;
  max-width: 220px;
  width: 100%;
  border: 1px solid #edeff7;
  height: 100vmax;
  padding: 20px;

  h1 {
    color: rgb(46, 96, 246);
  }
`;

export const OptionBar = styled.div<LinkProps>`
  display: flex;
  align-items: center;
  margin: 40px 0px;

  a {
    font-weight: 500;
    color: rgb(176, 183, 205);
    transition: 0.2s;
  }

  svg {
    margin-right: 18px;
    color: rgb(176, 183, 205);
    transition: 0.2s;
  }

  ${(props) =>
    props.isSelected &&
    css`
      a {
        font-weight: 700;
        color: rgb(60, 64, 84);
      }

      svg {
        color: rgb(46, 96, 246);
      }
    `}

  :hover {
    a {
      color: rgb(60, 64, 84);
    }

    svg {
      color: rgb(46, 96, 246);
    }
  }
`;
