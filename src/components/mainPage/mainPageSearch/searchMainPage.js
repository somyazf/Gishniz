import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import {connect} from "react-redux";


const useStyles = makeStyles(theme => ({
  root: {
    padding: "2px 20px",
    display: "flex",
    alignItems: "center",
    width: 550,
    borderRadius: 50,
    justifyCntent: "space-between",
    borderBottom: "none"
  },
  formControl: {
    margin: theme.spacing(1),
    width: "100%"
  },
  label: {
    fontSize: "30px"
  },
  searchIcon: {
    fontSize: "20px",
    marginTop: "40px"
  }
}));

function MainPageSearch(props) {
  const classes = useStyles();
  const {dispatch, error, loading, items} = props;
  const [query, setQuery] = useState('salad');

  const submitHandler = async (event)=>{
    const { history } = props;
    event.preventDefault();
    dispatch.then(() => history.push("/recipes"))
  }
  const handleChange = (event) => {
    setQuery(event.target.value);
  };



  return (
    <Paper className={classes.root}>
      <FormControl className={classes.formControl}>
        <InputLabel
          className={classes.label}
          htmlFor="input-with-icon-adornment"
        >
          Search
        </InputLabel>
        <Input
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment>
              <SearchIcon />
            </InputAdornment>
          }
          className={classes.searchIcon}
        />
      </FormControl>
    </Paper>
  );
}
const mapStateToProps = state => {
  const {loading} = state.getDataReducer;
  const {items} = state.getDataReducer;
  const {error} = state.getDataReducer;
  
  return { loading, items, error };
};

const ConnectedSearch = withRouter(connect(mapStateToProps)(MainPageSearch));
export {ConnectedSearch as MainPageSearch};


// import React,{Component} from 'react';
// import Axios from 'axios';
// import { withRouter } from "react-router-dom";

// class MainPageSearch extends Component{

//     state = {
//         name:'',
//         suggest:[]
//     }
//     changeHandler = (event) =>{
//         const {value,name} = event.target;
//         this.setState({[name]: value,suggest: []});
//         if(value.length > 2){
//             Axios.get('https://api.spoonacular.com/recipes/search?apiKey=94be430aadf644f6a8c8c95abbcce4c1&query=salad&number=20' + value).then(response=>{
//                 this.setState({suggest: response.data})
//             })
//         }
//     }

//     goToRecipe = recipe =>()=>{
//         this.props.history.push('/recipes/' + recipe);
//     }

//     render(){
//         return (
//             <div className="search-area">
//                 <input type="text" name="name" className="input" autoComplete="off" value={this.state.name} onChange={this.changeHandler} />
//                 <button>GO</button>
//                 {(this.state.suggest.length > 0) && <ul className="suggest">
//                 {this.state.suggest.map(recipe=><li onClick={this.goToRecipe(recipe.title)}>{recipe.readyInMinutes}<img src={recipe.imagUrls} alt="flag" className="flags"/></li>
//                 )}
//                 </ul>
//                 }
//             </div>
//           );
//     }
// }

// const inputWithRouter = withRouter(MainPageSearch)
// export {inputWithRouter as MainPageSearch};