# Co-Working Space Website

Welcome to the Co-Working Space website This project is a modern, responsive website built using Astro, designed to showcase the features and services of a co-working space. The website includes pages for Home, About, and Contact, and features a clean, user-friendly interface.

## Features

- **Modern Design**: Clean and responsive layout tailored for a co-working space.
- **Home Page**: Overview of the co-working space with featured sections.
- **About Page**: Information about the team and mission.
- **Contact Page**: Contact form with toast notifications for successful submissions.

## Live Demo

Check out the live demo of the Co-Working Space website [here](https://coworking-space.dhiashalabi.info).

## Technologies Used

- **Astro**: For building the website with a modern, optimized framework.
- **Tailwind CSS**: For styling and responsive design.
- **Font Awesome**: For social media icons.

## Getting Started

To get started with this project locally, follow these steps:

1. **Clone the repository**:

   ```bash title="Terminal"
   git clone https://github.com/yourusername/co-working-space.git
   ```

2. **Navigate to the project directory**:

   ```sh
   cd co-working-space
   ```

3. **Install dependencies**:

   ```sh
   npm install
   ```

4. **Run the development server**:

   ```sh
   npm run dev
   ```

   Open your browser and go to `http://localhost:4321` to view the website.

5. **Build for production**:

   ```sh
   npm run build
   ```

   The production build will be available in the `./dist/` directory.

## Code Overview

### Project Structure

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   │   └── *.png
│   │   └── *.jpg
│   ├── components/
│   │   └── Chatbox.astro
│   │   └── Header.astro
│   │   └── MainContent.astro
│   ├── data/
│   │   └── navigation.json
│   │   └── spaces.json
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── about.astro
│   │   └── contact.astro
└── package.json

- `public/`: Contains static assets like images and favicon.
- `src/assets/`: Images used in the website.
- `src/`: Contains the source code for the website.
- `src/components/`: Reusable components like `TeamMember`.
- `src/data/`: JSON data files for navigation and spaces.
- `src/layouts/`: Layout components like `Layout` for wrapping pages.
- `src/pages/`: Individual pages like `index`, `about`, and `contact`.
```
### Pages

- Home (index.astro): Displays an overview of the co-working space.
- About (about.astro): Provides information about the team and the mission.
- Contact (contact.astro): Contains a contact form with toast notifications.

### Styles

- Tailwind CSS: Utilized for responsive design and modern UI.

### Future Enhancements

- Add more interactive elements to the Home page.
- Enhance the Contact page with real-time form validation.
- Integrate a blog or news section for updates.

## License

This project is open-source and available under the [MIT License](LICENSE).
