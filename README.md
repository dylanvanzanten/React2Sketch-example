# React 2 Sketch :hammer_and_wrench:

> React 2 Sketch renders React components to Sketch; tailor-made for design systems

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
    </li>
    <li>
      <a href="#motivation">Motivation</a>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <ul>
      <li><a href="#component-based">Component-based</a></li>
      <li><a href="#styling">Styling</a></li>
      <li><a href="#rendering">Rendering</a></li>
    </ul>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#documentation">Documentation</a></li>
    <li><a href="#resources">Resources</a></li>
  </ol>
</details>

![examples-styleguide](https://cloud.githubusercontent.com/assets/591643/24778196/2a4ef41a-1ade-11e7-9805-8d974bbfd708.png)

<!-- MOTIVATION -->

## Motivation

One of the main motivations to do this, is to see how designers and developers can work together on a different approach in stead of working in silo's. I found [Airbnb's React-sketchapp](https://github.com/airbnb/react-sketchapp). Through code it can render dynamic components into Sketch. This is an example showing how to quickly render rich styleguides from JavaScript (React) design system definition. It uses `chroma-js` to dynamically generate color contrast labels.

<!-- GETTING STARTED -->

## Getting started

<!-- PREREQUISITIES -->

### Prerequisites

You'll need to install React first: [React website](https://reactjs.org/) and you need to have Sketch: [Sketch website](https://www.sketch.com/)

<!-- INSTALLATION-->

### Installation

Download the example code or [clone the repo](https://github.com/dylanvanzanten/React-sketch-example)

```bash
# clone the repo
$ git clone git@github.com:dylanvanzanten/React-sketch-example.git

# install dependencies
$ npm install

# render to sketch with live reloading
$ npm run render
```

### Sketch plugin

Then, open Sketch and navigate to `Plugins → react-sketchapp: Styling-demo` to install the plugin on Sketch. With this you can also render the file.

<!-- USAGE -->

## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [React Sketch.app official documentation](https://airbnb.io/react-sketchapp/)_

### Component-based

This demo is being made component-based. If you want to add a new component simply go to the [components](https://github.com/dylanvanzanten/React-sketch-example/tree/master/src/components) folder to add a new file for the component.

Example for a button component (#button-component):

```js
const Button = ({ label }) => (
  <View>
    <Text>{label}</Text>
  </View>
);

export default Button;
```

For rendering the component on a page you should import the component first like this:

```js
import { Button } from './components/Button';
```

From there you can render the button component in the page. The label is for the content you want to have inside the button.

```js
<Button label="Primary button" />
```

### Styling

There are multiple ways to style your components:

1. **Inline styling** If you want to style components inline you can do this within an array. Here is an example for the [Button](#Component-based) component that I've used earlier. Here is an example below:

```js
const styles = {
  borderRadius: 3,
  boxSizing: 'border-box',
  cursor: 'pointer',
  paddingTop: 12,
  paddingRight: 20,
  paddingBottom: 10,
  paddingLeft: 20,
  marginRight: spacing * 2,
};
```

Every styling attribute have to be camelcased written or it wont work. The default value for numbers is pixels, but you can change this to percentage or other values as well. For that you need to wrap parentheses around it `('')`. You will notice on the value `marginRight` the value of `spacing`, this is an example of using a general value for a style. Here is how I did that:

```js
const spacing = 16;
```

Basically I created a value of 16px that has the name of spacing, so know it knows whenever I use spacing in my styling it will add 16px to it. the `* 2` is basically for mulitplying the 16px.

2. **Main style file** You can also have one main style file where all the styling is being held. One thing that you don't need to forget is to import the file in every component or page file where you will be using the style.

### Rendering

For rendering pages you will need to add the following code at the bottom of your page file:

```js
export default () => {
  TextStyles.create(designSystem.ClassicFonts, {
    clearExistingStyles: true,
  });

  render(<Document system={designSystem} />);
};
```

In this example I've also exported a default font that I'm using in this demo, but the main thing you will need to render a page to Sketch is `render(<Document system={designSystem} />);`.

<!-- ROADMAP -->

## Roadmap

See the [open issues](https://github.com/dylanvanzanten/React-sketch-example/issues) for a list of proposed features (and known issues).

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->

## Contact

Repo Link: [https://github.com/dylanvanzanten/React-sketch-example](https://github.com/dylanvanzanten/React-sketch-example)

<!-- DOCUMENTATION -->

## Documentation

- [React Sketch.app official documentation](https://airbnb.io/react-sketchapp/)
- [React official documentation](https://reactjs.org/docs/getting-started.html)
- [Skecth official documentation](https://www.sketch.com/for-designers/)

<!-- RESOURCES -->

## Resources

- [Airbnb React Sketch.app repository](https://github.com/airbnb/react-sketchapp)
