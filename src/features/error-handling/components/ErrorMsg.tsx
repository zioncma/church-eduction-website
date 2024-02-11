import styled from 'styled-components';

const Container = styled.div`
  color: ${(props) => props?.theme?.palette?.danger};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ErrorSpan = styled.span`
  color: ${(props) => props?.theme?.palette?.danger};
`;

/**
 * UI for displaying Error Messages
 */
export function ErrorMsg({ ...optionals }) {
  const { text = 'An error has occurred', title = 'Error', children, ...rest } = optionals;
  const errorText = text?.includes('Network Error') ? text + '. Please check your network connection' : text;

  return (
    <Container {...rest}>
      <strong>{title}</strong>
      <p>{errorText}</p>
      {children}
    </Container>
  );
}

export function RequiredErrorMsg(props) {
  return <ErrorSpan {...props}>This field is required</ErrorSpan>;
}
