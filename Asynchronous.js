const arr = document.getElementsByTagName("li");




// Task  1 :

let array=[];
for (let i=0;i<arr.length;i++){
   array[i]=arr[i].innerHTML;  
}
//function to delay 1 second
async function randomWait() {
    await new Promise(sec => setTimeout(sec, Math.floor( 1000)));
    return;
}

async function hello(){ for (let i=0;i<array.length;i++){
    await randomWait();
    console.log("Hello \n" +array[i]); 
 }}
hello()


async function hawryou() { 
        await hello();
    for (let i=0;i<array.length;i++){
         await randomWait();
         
        console.log('Haw Are You ?'+ array[i]);
} }
  
hawryou()

// Task 02:
  
const urls = [
    'https://jsonplaceholder.typicode.com/todos/',
    'https://random-data-api.com/api/v2/blood_types/054',
];

setTimeout(async () => {
    async function awaitCall() {
        try {
        const promises = urls.map(url => fetch(url).then(response => response.json()));

        const data = await Promise.all(promises);
        console.log(data);}
     catch (error) { 
    console.log("ERRROR :",error);
    } }
   awaitCall();
}, 1000);  
//   Task 3 :

function stepOne() {
    
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('Step One Completed');
      }, 1000);
    });
  }
  
  function stepTwo(message) {
    console.log(message);
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('Step Two Completed');
      }, 2000);
    });
  }
  function stepThree(message) {
    console.log(message);
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('Step Three Completed');
      }, 3000);
    });
  }
  
  stepOne()
  .then (stepTwo)
    .then(stepThree)
    .then(result => {
      console.log(result);
    });
  
 //////// Task 4 :
    async function concurrentRequests() {
      try {
          // Make two API calls concurrently using Promise.allSettled()
          const responses = await Promise.allSettled([
              fetch('https://jsonplaceholder.typicode.com/posts/2'),
              fetch('https://jsonplaceholder.typicode.com/posts/2')
          ]);
  
          // Check if all responses are successful
          const allResponsesOk = responses.every(response => response.status === 'fulfilled' && response.value.ok);
  
          // If all responses are successful, parse the JSON data
          if (allResponsesOk) {
              const data = await Promise.all(responses.map(response => response.value.json()));
              console.log('Combined results:', data);
          } else {
              throw new Error('One or more requests failed');
          }
      } catch (error) {
          console.error('Error:', error.message);
      }
  }
  
  // Call concurrentRequests function
  concurrentRequests();

  // Task 05:

      const urlsToFetch = [
        'https://jsonplaceholder.typicode.com/todos/0',
        'https://random-data-api.com/api/v2/blood_types/054',
        ];
        
        // Function to fetch all of the URLs in parallel
        const fetchURLs = async (urls) => {
            try {
                const promises =
                    urls.map(url => fetch(url));
        
                // Wait for all of the promises to resolve
                const responses =
                    await Promise.all(promises);
        
                // Extract JSON data from responses
                const data = await
                    Promise.allSettled(responses.map(response => response.json()));
        
                return data}
            catch (error) {
                throw new Error(`Failed to fetch data: ${error}`)}}
        
        fetchURLs(urlsToFetch)
            .then(data => {
                console.log('Fetched data:', data)})
            .catch(error => {
                console.error('Error fetching data:', error)});  
