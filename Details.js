let q = document.getElementById('Details')
    q.addEventListener('submit',function(event){
        event.preventDefault()
        let fname = document.getElementById('fname').value
        console.log(fname)
        let lname = document.getElementById('lname').value
      
        document.getElementById('fname').value = ""
        document.getElementById('lname').value = ""
    })