import fetch from 'node-fetch'; 

export const login = (username, password) => {
    return fetch('/api/users', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({ username: username, password: password })
    }).then(res => res.json())
};

export const signup = (username, password) => {
    return fetch('/api/users?action=register', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({ username: username, password: password })
    }).then(res => res.json())
};

export const getMovies = () => {
    return fetch('/api/movies/tmdb/discover',{headers: {
      'Authorization': window.localStorage.getItem('token')
   }
  }
  ).then(res => res.json());
  };


export const getUpcomingMovies = () => {
  return fetch('/api/movies/tmdb/upcoming',{headers: {
    'Authorization': window.localStorage.getItem('token')
 }
}
).then(res => res.json());
};

export const getTopRated = () => {
    return fetch('/api/movies/tmdb/toprated',{headers: {
      'Authorization': window.localStorage.getItem('token')
   }
  }
  ).then(res => res.json());
  };

export const getMovie = () => {
    return fetch('/api/movies/tmdb/movies/:id',{headers: {
      'Authorization': window.localStorage.getItem('token')
   }
  }
  ).then(res => res.json());
  };