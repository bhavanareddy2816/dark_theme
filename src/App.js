import './App.css';
import Article from './Article';
import articles from './data';
import {useState , useEffect} from "react";
const getStorageTheme = () => {
  let theme = 'light-theme';
  if (localStorage.getItem('theme')) {
    theme = localStorage.getItem('theme');
  }
  return theme;
};
function App() {
  const[theme , setTheme] = useState(getStorageTheme);

 
   const themeHandler = () => {
     if(theme === "light-theme"){
       setTheme("dark-theme")
       console.log(theme);
     }else{
       setTheme("light-theme");
       console.log(theme);
     }
   }

   useEffect(() => {
     document.documentElement.className = theme;
     localStorage.setItem('theme', theme);
   },[theme])
  
  return (
    <div className="App ">
    <div className='nav-center'>
    <h1>Overrated</h1>
    
    <button className="btn" onClick={themeHandler}>Toggle</button>
    
    </div>
    <section className='articles'>
      {articles.map((article) =>{
        return <Article key={article.id} {...article}/>
      })}
    </section>
    </div>
  );
}

export default App;
