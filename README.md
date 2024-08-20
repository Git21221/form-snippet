# FORM SNIPPET

`form-snippet` is a React package that provides a simple and flexible way to handle forms with custom components.

## Badges

| [![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/) | [![form-snippet](https://img.shields.io/npm/v/form-snippet.svg)](https://www.npmjs.com/package/form-snippet) | ![NPM Downloads](https://img.shields.io/npm/dm/form-snippet) | ![npm bundle size](https://img.shields.io/bundlephobia/min/form-snippet) |
| -------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------------------ |

## Installation

Install form-snippet with npm

```bash
  npm install form-snippet
```

Install form-snippet with github packages

```bash
  npm install @git21221/form-snippet@1.0.21
```

## Usage/Examples

```javascript
import { Button, Input, FormWrapper } from "form-snippet";

function App() {
  const handleSubmit = (data) => {
    console.log(data);
  };
  return (
    <FormWrapper onSubmit={handleSubmit}>
      <h1 className="text-xl font-bold">I am using form snippet</h1>
      <div className="flex gap-2">
        <Input name="fName" label="First Name" required type={"text"} />
        <Input name="age" label="age" type={"number"} />
        <Input name="pass" label="password" type={"password"} />
      </div>
      <Button content={"Submit"} />
    </FormWrapper>
  );
}

export default App;
```

## Contributing

Contributions are always welcome!

See [contributing.md](./contributing.md) for ways to get started.

Please adhere to this project's [code of conduct](./CODE_OF_CONDUCT.md).

## Authors

Original author of `form-snippet`

- Saikat Das [(@git21221)](https://www.github.com/git21221)

## License

[MIT](https://choosealicense.com/licenses/mit/)
