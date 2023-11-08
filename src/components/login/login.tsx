import { LoginForm } from './components/login-form';
import { Container } from '../commons/container';

export const Login = () => {
  return (
    <Container>
      <main className="flex h-screen -translate-y-20 items-center justify-center">
        <LoginForm />
      </main>
    </Container>
  );
};
