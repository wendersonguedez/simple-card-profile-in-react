# Simple Card Profile in React

![Profile Card Preview](https://via.placeholder.com/300)

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
  - `ProfileCard.js`: Main component that renders the card.
  - `App.js`: Root component that imports and uses `ProfileCard`.

## Customization

To modify the content of the card, simply pass different props to the `ProfileCard` component in `App.js`. Example:

```js
<ProfileCard
  name="John Doe"
  bio="Full Stack Developer"
  avatarUrl="https://via.placeholder.com/150"
/>
```

## Learnings

This project helped solidify understanding of:

- How to create and organize React components.
- Passing and utilizing props in React.