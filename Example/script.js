const cors = 'https://cors-anywhere.herokuapp.com/'; // use cors-anywhere to fetch api data
const url = 'https://tw.rter.info/capi.php?=1568944322585'; // origin api url

/** fetch api by origin url */
axios.get(url)
  .then((response) => {
    const msg = response.data;
    },
    (error) => {
    }
  );

/** fetch api url by cors-anywhere */
axios.get(`${cors}${url}`)
  .then((response) => {
    const msg = response.data;
    document.body.innerHTML = JSON.stringify(msg)
  },
    (error) => {
    }
  );
