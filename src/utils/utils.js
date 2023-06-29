import axios from "axios";
import { API_KEY, ALTERNATIVE_KEY, API_ALTERNATIVE } from "./config";


const getEndpoint = (id) => {
  if (id) {
    return `https://api.spoonacular.com/recipes/${id}/information?apiKey=${ALTERNATIVE_KEY}`;
  } else {
    return `https://api.spoonacular.com/recipes/complexSearch?apiKey=${ALTERNATIVE_KEY}`;
  }
};
function getOptions(id) {
  let parsedId = id ? parseInt(id) : '';
  const url = getEndpoint(parsedId);
  const options = {};
  const temp = {};
  const KeyOrder = [];
  const params= {
    limitLicense: 'true'
  };
  temp['method'] = 'GET';
  KeyOrder.push('method');
  temp['url'] = url;
  KeyOrder.push('url');
  if(!id){
    temp['params'] = params;
    KeyOrder.push('params');
  }

  for (const key of KeyOrder) {
    options[key] = temp[key];
  }
  
  return options;
};
// fetchData from api
const fetchData = (id, foodType, foodDiet, foodintolerance, maxTime) => {
  
  const options = getOptions(id);
  let ft = '';
  let fd = '';
  let fi = '';
  if (foodType) {
    ft = foodType.map(foods => foods + ',').join('');
    options.params['type'] = ft;
  }
  
  if (foodDiet) {
    fd = foodDiet.map(foods => foods).join('');
    options.params['diet'] = fd;
  }
  
  if (foodintolerance) {
    fi = foodintolerance.map(foods => foods + ',').join('');
    options.params['intolerances'] = fi;
  }
  
  if (maxTime){
    options.params['maxReadyTime'] = parseInt(maxTime);
  }
  return new Promise((resolve, reject) => {
    axios.request(options)
      .then(response => {
        resolve(response.data);
      })
      .catch(error => {
        const errorMessage = error.response ? error.response.data.message : 'Network error';
      reject(errorMessage);
      });
  });
};

export default fetchData;
