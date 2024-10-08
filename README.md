# Simple Card Profile in React

<p align="center">
  <img src="./public/preview.png" alt="Profile Card Preview" />
</p>

A simple project that displays a profile card using React components and props. This project serves as practice to better understand componentization and props handling in React.

## Features

- 📦 **Modular Components:** Divided into reusable React components.
- 🎨 **Styled Profile Card:** A visually appealing card with customizable content.
- 🔄 **Props:** Easily pass data to customize the card's content.

## Installation

Clone the repository and install the dependencies:

```bash
git clone https://github.com/wendersonguedez/simple-card-profile-in-react.git
cd simple-card-profile-in-react
npm install
```

## Usage

To run the project in development mode:

```bash
npm start
```

This will launch the app at `http://localhost:3000`.

## Folder Structure

- **`src/`**: Contains all the React components and assets.
  - `index.js`: Main component that renders the card.
  - `index.css`: Main css file with styles.

## Customization

To modify the content of the card, simply pass different props to the `Avatar`, `Intro` and `SkillList` component in `App.js`. Example:

```js
<Avatar
  photoName="https://via.placeholder.com/150"
/>
```

```js
<Intro
  myName="John West"
  aboutMe="Describe me"
/>
```

## Learnings

This project helped solidify understanding of:

- How to create and organize React components.
- Passing and utilizing props in React.
