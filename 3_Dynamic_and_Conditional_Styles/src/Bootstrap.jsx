// https://react-bootstrap.netlify.app/
// 1.       Installation        ===   npm install react-bootstrap bootstrap
// 2. Add in App.jsx/ main.jsx  ===   import 'bootstrap/dist/css/bootstrap.min.css';


import { Button } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';

export default function Bootstrap() {
  return (
    <>
      <div>
        <button>Click me!</button>
        <Button>Click me!</Button>
        <Button variant='danger'>Click me!</Button>
      </div>

      <Alert>My name is yash</Alert> {/* By default */}
      
      {[
        'primary',
        'secondary',
        'success',
        'danger',
        'warning',
        'info',
        'light',
        'dark',
      ].map((variant) => (
        <Alert key={variant} variant={variant}>
          This is a {variant} alert—check it out!
        </Alert>
      ))}
    </>
  );
}
