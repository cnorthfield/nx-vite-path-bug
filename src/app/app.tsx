import { FooEnum } from '@enums/foo.enum';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import NxWelcome from './nx-welcome';

export function App() {
  return (
    <div>
      <NxWelcome title="Bug" />
      {FooEnum.Foo}
    </div>
  );
}

export default App;
