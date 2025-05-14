// Change button text and color
document.getElementById("changeTextButton").addEventListener("click", function() {
    this.textContent = "You clicked me!";
    this.style.backgroundColor = "green";
  });
  
  // Tab navigation
  document.getElementById("tab1").addEventListener("click", function() {
    document.getElementById("content1").style.display = "block";
    document.getElementById("content2").style.display = "none";
  });
  
  document.getElementById("tab2").addEventListener("click", function() {
    document.getElementById("content2").style.display = "block";
    document.getElementById("content1").style.display = "none";
  });
  
  // Form validation
  document.getElementById("formSubmit").addEventListener("click", function(event) {
    const input = document.getElementById("inputField");
    if (input.value.trim() === "") {
      alert("This field is required.");
      event.preventDefault();
    }
  });
  