import styled from "styled-components";

export const Image = styled.img`
  width: 100%;
  border-radius: 20px;
  max-width: 720px;
  transition: all 0.3s;
  object-fit: cover;
  animation: animateThumb 0.5s;

  :hover {
    opacity: 0.8;
  }

  @keyframes animateThumb {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
