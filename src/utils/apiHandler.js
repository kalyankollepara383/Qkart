export default async function getApiresponse(url,method,headers,body){
    let response= await (
        await fetch(url, {
          method:method,
          headers:headers,
          body:body
        })
      ).json();
      return response
}
