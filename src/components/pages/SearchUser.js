import React, { useEffect } from 'react'
import { TextField, Typography, CircularProgress,Grid,Card } from "@mui/material";



export const SearchUser = () => {
  const [news, setNews] = React.useState([]);
  let [searchText, setSearchText] = React.useState("");
  let [loading, setLoading] = React.useState(false);
  const [filteredNews,setfilteredNews] = React.useState([]);

  useEffect(() => {
      
    const fetchNews = async()=>{
      const NEW_API = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=15b70fa011a94eef990296ebf4609a11";
      const res = await fetch(NEW_API);
      const data = await res.json();
      setNews(data.articles);
      setfilteredNews(data.articles);
  }
  fetchNews()
  }, []);

  const handleChange = (event) => {
    const term = event.target.value;
    setSearchText(term);

    if(term.trim() === ''){
      setfilteredNews(news)
    }else{
      const filtered = news.filter((item)=> item.title.toLowerCase().includes(term.toLowerCase()));
      console.log(filtered);     
      setfilteredNews(filtered);
    }

  }

  return (
    <div>  
    <h3>SearchUser</h3>
    <TextField
      fullWidth
      label="Search News by Title"
      value={searchText}
      onChange={handleChange}
      margin='normal'
    />

    
    {
      loading ?(
        <div>
          <CircularProgress/>

        </div>
      ) : (
        <div>
          <Grid container>
          {
            filteredNews.map((value, index)=>{
              return(
                  <Grid item key={index}>
                    <Card>
                      <Typography variant ='h4'>{value.title}</Typography>
                      <Typography variant='body2'>{value.title}</Typography>
                    </Card>
                    </Grid>
              )
            })
          }
          </Grid>
        </div>
      )
    }
    </div>
  )
}

export default SearchUser