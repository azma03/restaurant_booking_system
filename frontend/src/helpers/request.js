class Request {

 get(url) {
   return fetch(url)
   .then((res) => res.json());
 }

 post(url, payload){
     return fetch(url, {
       method: 'POST',
       headers: {'Content-Type': 'application/json'},
       body: JSON.stringify(payload)
     })
   }

   patch(url, payload) {
    return fetch(url, {
      method: 'PATCH',
      body: JSON.stringify(payload),
      headers: { 'Content-Type': 'application/json'}
    })
  };
   
}

export default Request;
