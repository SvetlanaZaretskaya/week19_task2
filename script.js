const output = document.getElementById('output');

function one() {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'GET',
        headers: {
            
        }
    })
  .then(response => response.json())
  .then((data) => {
    

    
    data.forEach(element => {
        const p1 = document.createElement('p');
    p1.style.fontWeight = 'bold';
    p1.style.color = 'red';
    p1.textContent = element.title;
    p1.style.margin ="0";
    output.appendChild(p1);

    const p2 = document.createElement('p');
    p2.textContent = element.body;
    p2.style.margin ="0";
    p2.style.paddingBottom = "20px"
    output.appendChild(p2);
    })    
    
    
    
})
  .catch(error => {
    console.log(error)
  })
  
  
}
one();
