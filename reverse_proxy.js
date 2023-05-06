addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
});

async function handleRequest(request)
{  
  let url = new URL(request.url);
  url.hostname = "example.com"; //Replace Your Hostname Here
  const nurl = url;
  let srequest = new Request(nurl, request);
  let response = await fetch(srequest);
  response = new Response(response.body, response);
  return response;
}
