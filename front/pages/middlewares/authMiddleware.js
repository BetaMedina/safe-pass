import{Redirect} from "./redirect"
const withAuth = (Component) => {
  const Auth = ({ props }) => {
    const storageToken = props.token;

    const isLoggedIn = storageToken;
    if (!isLoggedIn) {
      return <Redirect url="/" title="Usuario não autenticado" description="Para ter acesso ao recurso execute o login" icon="error"/>
    }

    return <Component {...props} />;
  };

  if (Component.getInitialProps) {
    Auth.getInitialProps = Component.getInitialProps;
  }

  return Auth;
};

export default withAuth;
