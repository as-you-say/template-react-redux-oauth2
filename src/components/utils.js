
// 인증 여부 체크
export function authenticate (props) {
  const { authenticated, location } = props;
  if(authenticated) {
    return (
      <Redirect to={{
        pathname: "/",
        state: {
          from: location
        }
      }}/>
    );
  }
}