document.getElementById("downloadBtn").addEventListener("click", function() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const experience = document.getElementById("experience").value;
    const skills = document.getElementById("skills").value;


    const resumeContent = `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Experience: ${experience}
        Skills: ${skills}
    `;

    const blob = new Blob([resumeContent], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "resume.txt";
    link.click();

    document.getElementById("submitBtn").addEventListener("click", function() {
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const experience = document.getElementById("experience").value;
        const skills = document.getElementById("skills").value;

    
        const resumeData = {
            name,
            email,
            phone,
            experience,
            skills,
            
        };
    
        localStorage.setItem("resumeData", JSON.stringify(resumeData));
        alert("Data saved locally!");
    });
});





window.onload = function() {
    const savedData = localStorage.getItem("resumeData");
    if (savedData) {
        const resumeData = JSON.parse(savedData);

        document.getElementById("name").value = resumeData.name;
        document.getElementById("email").value = resumeData.email;
        document.getElementById("phone").value = resumeData.phone;
        document.getElementById("experience").value = resumeData.experience;
        document.getElementById("skills").value = resumeData.skills;


        // Show Edit button if data exists
        document.getElementById("editBtn").style.display = "inline";
    }

    // Make fields read-only initially
    document.getElementById("name").disabled = true;
    document.getElementById("email").disabled = true;
    document.getElementById("phone").disabled = true;
    document.getElementById("experience").disabled = true;
    document.getElementById("skills").disabled = true;

};

// Function to enable editing
document.getElementById("editBtn").addEventListener("click", function() {
    // Make form fields editable
    document.getElementById("name").disabled = false;
    document.getElementById("email").disabled = false;
    document.getElementById("phone").disabled = false;
    document.getElementById("experience").disabled = false;
    document.getElementById("skills").disabled = false;


    // Show Save button and hide Edit button
    document.getElementById("submitBtn").style.display = "inline";
    document.getElementById("editBtn").style.display = "none";
});

// Save updated data and disable editing
document.getElementById("submitBtn").addEventListener("click", function() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const experience = document.getElementById("experience").value;
    const skills = document.getElementById("skills").value;

    const resumeData = {
        name,
        email,
        phone,
        experience,
        skills,
        
    };

    localStorage.setItem("resumeData", JSON.stringify(resumeData));
    alert("Data updated successfully!");

    // Disable form fields again
    document.getElementById("name").disabled = true;
    document.getElementById("email").disabled = true;
    document.getElementById("phone").disabled = true;
    document.getElementById("experience").disabled = true;
    document.getElementById("skills").disabled = true;


    // Show Edit button and hide Save button
    document.getElementById("editBtn").style.display = "inline";
    document.getElementById("submitBtn").style.display = "none";
});