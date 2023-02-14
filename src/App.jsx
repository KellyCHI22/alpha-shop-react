import Header from "components/Header";
import Main from "components/Main";
import Footer from "components/Footer";
import { createContext, useState } from "react";

export const ThemeContext = createContext(null);

export default function App() {
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    setTheme((current) => (current === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={theme}>
        <div className="font-NotoSans dark:bg-neutral-900 dark:text-white">
          <Header />
          <Main />
          <Footer />
        </div>
      </div>
    </ThemeContext.Provider>
  );
}
