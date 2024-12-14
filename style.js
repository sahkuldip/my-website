// Open the login form popup
function openLoginForm() {
    const loginPopup = document.getElementById("loginPopup");
    if (loginPopup) {
        loginPopup.style.display = "flex";
        console.log("Login form opened.");
    } else {
        console.error("Error: loginPopup element not found!");
    }
}

// Close the login form popup
function closeLoginForm() {
    const loginPopup = document.getElementById("loginPopup");
    if (loginPopup) {
        loginPopup.style.display = "none";
        console.log("Login form closed.");
    } else {
        console.error("Error: loginPopup element not found!");
    }
}
// Redirect to Create Account page from the login popup
function createAccount() {
    window.location.href = "create-account.html";
    console.log("Redirecting to Create Account page...");
}

// Add form submission handling for Create Account (check if the form exists)
document.addEventListener("DOMContentLoaded", function () {
    const createAccountForm = document.getElementById("createAccountForm");
    if (createAccountForm) {
        createAccountForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const firstName = document.getElementById("firstName").value.trim();
            const lastName = document.getElementById("lastName").value.trim();
            const country = document.getElementById("country").value;
            const phone = document.getElementById("phone").value.trim();
            const email = document.getElementById("email").value.trim();

            let isValid = true;

            if (!firstName) {
                alert("First Name is required.");
                console.error("Validation error: First Name is missing.");
                isValid = false;
            }

            if (!lastName) {
                alert("Last Name is required.");
                console.error("Validation error: Last Name is missing.");
                isValid = false;
            }

            if (!country) {
                alert("Country is required.");
                console.error("Validation error: Country is missing.");
                isValid = false;
            }

            if (!phone || !/^\d+$/.test(phone)) {
                alert("Please enter a valid phone number (digits only).");
                console.error("Validation error: Invalid phone number entered:", phone);
                isValid = false;
            }

            if (!email || !email.includes("@") || !email.includes(".")) {
                alert("Please provide a valid email address (e.g., name@example.com).");
                console.error("Validation error: Invalid email entered:", email);
                isValid = false;
            }

            if (isValid) {
                alert("Account created successfully!");
                console.log("Account created successfully.", {
                    firstName,
                    lastName,
                    country,
                    phone,
                    email,
                });
                createAccountForm.reset(); // Clear the form after submission
            }
        });
    }
});



// Open the job submission popup
function openJobPopup() {
    const jobPopup = document.getElementById("jobPopup");
    if (jobPopup) {
        jobPopup.style.display = "flex";
        console.log("Job submission popup opened.");
    } else {
        console.error("Error: jobPopup element not found!");
    }
}

// Close the job submission popup
function closeJobPopup() {
    const jobPopup = document.getElementById("jobPopup");
    if (jobPopup) {
        jobPopup.style.display = "none";
        console.log("Job submission popup closed.");
    } else {
        console.error("Error: jobPopup element not found!");
    }
}

// Handle job form submission
const jobForm = document.getElementById("jobForm");
if (jobForm) {
    jobForm.addEventListener("submit", function (event) {
        event.preventDefault();
        console.log("Job form submitted.");
        alert("Job submitted successfully!");
        closeJobPopup();
    });
} else {
    console.error("Error: jobForm element not found!");
}

// Open the full-page contact form popup
function openContactPopup() {
    const contactPopup = document.getElementById("contactPopup");
    if (contactPopup) {
        contactPopup.style.display = "flex";
        console.log("Contact form opened.");
    } else {
        console.error("Error: contactPopup element not found!");
    }
}

// Close the full-page contact form popup
function closeContactPopup() {
    const contactPopup = document.getElementById("contactPopup");
    if (contactPopup) {
        contactPopup.style.display = "none";
        console.log("Contact form closed.");
    } else {
        console.error("Error: contactPopup element not found!");
    }
}

// Validate and handle contact form submission
const contactForm = document.getElementById("contactForm");
if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const email = document.getElementById("email").value.trim();
        const contactNo = document.getElementById("contactNo").value.trim();

        if (!email.includes("@")) {
            alert("Please enter a valid email address containing '@'.");
            console.error("Invalid email entered:", email);
            return;
        }

        if (!/^\d+$/.test(contactNo)) {
            alert("Please enter a valid contact number containing only digits.");
            console.error("Invalid contact number entered:", contactNo);
            return;
        }

        alert("Your message has been sent!");
        console.log("Contact form submitted successfully.");
        closeContactPopup();
    });
} else {
    console.error("Error: contactForm element not found!");
}

// Form validation for job application
const jobApplicationForm = document.getElementById("jobApplicationForm");
if (jobApplicationForm) {
    jobApplicationForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const applicantName = document.getElementById("applicantName")?.value.trim();
        const email = document.getElementById("email")?.value.trim();
        const contactNo = document.getElementById("contactNo")?.value.trim();
        const coverLetter = document.getElementById("coverLetter")?.value.trim();

        let isValid = true;

        if (!applicantName) {
            alert("Applicant name is required.");
            console.error("Validation error: Applicant name is missing.");
            isValid = false;
        }

        if (!email || !email.includes("@") || !email.includes(".")) {
            alert("Please provide a valid email address (e.g., name@example.com).");
            console.error("Validation error: Invalid email entered:", email);
            isValid = false;
        }

        if (!contactNo || !/^\d+$/.test(contactNo)) {
            alert("Please enter a valid contact number (digits only).");
            console.error("Validation error: Invalid contact number entered:", contactNo);
            isValid = false;
        }

        if (!coverLetter) {
            alert("Cover letter is required.");
            console.error("Validation error: Cover letter is missing.");
            isValid = false;
        }

        if (isValid) {
            alert("Your application has been submitted successfully!");
            console.log("Job application submitted successfully.", {
                applicantName,
                email,
                contactNo,
                coverLetter,
            });
            jobApplicationForm.reset();
        }
    });
} else {
    console.error("Error: jobApplicationForm element not found!");
}

// Perform a job search
function performSearch() {
    const inputs = document.querySelectorAll(".search-textbox");
    const searchCriteria = {};
    inputs.forEach((input) => {
        if (input.value.trim() !== "") {
            searchCriteria[input.placeholder] = input.value.trim();
        }
    });

    if (Object.keys(searchCriteria).length > 0) {
        alert(`Searching with criteria: ${JSON.stringify(searchCriteria)}`);
        console.log("Search criteria:", searchCriteria);
    } else {
        alert("Please enter search criteria.");
        console.warn("No search criteria provided.");
    }
}

// Show services section
function showServices(event) {
    event.preventDefault();
    const servicesSection = document.getElementById("servicesSection");
    if (servicesSection) {
        document.querySelectorAll(".content-section").forEach((section) => {
            section.style.display = "none";
        });
        servicesSection.style.display = "block";
        console.log("Services section displayed.");
    } else {
        console.error("Error: servicesSection element not found!");
    }
}

// Reset content to main view
function showMainContent() {
    document.querySelectorAll(".content-section").forEach((section) => {
        section.style.display = "block";
    });

    const servicesSection = document.getElementById("servicesSection");
    if (servicesSection) {
        servicesSection.style.display = "none";
    }
    console.log("Main content displayed.");
}

// Page refresh effect
function refreshPageEffect() {
    const content = document.querySelector("body");
    if (content) {
        content.style.opacity = "0";
        setTimeout(() => {
            content.style.opacity = "1";
        }, 300);
        console.log("Page refresh effect triggered.");
    } else {
        console.error("Error: Content element not found!");
    }
}

// Scroll to contact section (optional button setup)
const contactButton = document.getElementById("contactButton");
if (contactButton) {
    contactButton.addEventListener("click", function () {
        const contactSection = document.getElementById("contactSection");
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: "smooth" });
            console.log("Scrolled to contact section.");
        } else {
            console.error("Error: contactSection element not found!");
        }
    });
} else {
    console.warn("No contactButton element found. Skipping setup.");
}
// companies
function showCompanies(event) {
    event.preventDefault(); // Prevent the default anchor behavior
    
    // Hide all other content sections
    document.querySelectorAll('.content-section').forEach(section => {
        section.style.display = 'none';
    });

    // Display the companies section
    const companiesSection = document.getElementById("companiesSection");
    if (companiesSection) {
        companiesSection.style.display = 'block';

        // Populate companies list dynamically
        const companiesList = [
            { name: "Tech Solutions", jobs: "Web Developer, IT Support", location: "Kathmandu, Nepal" },
            { name: "BuildSmart", jobs: "Carpenter, Electrician", location: "Biratnagar, Nepal" },
            { name: "HospitalityPro", jobs: "Chef, Housekeeper", location: "Pokhara, Nepal" }
        ];

        const listContainer = document.getElementById("companiesList");
        listContainer.innerHTML = companiesList.map(company => `
            <div class="company-card">
                <h3>${company.name}</h3>
                <p><strong>Jobs:</strong> ${company.jobs}</p>
                <p><strong>Location:</strong> ${company.location}</p>
            </div>
        `).join('');
    } else {
        console.error("Error: Companies section not found!");
    }

    console.log("Companies section displayed.");
}
// Navigate between sections
function navigateToSection(sectionId) {
    // Hide all content sections
    document.querySelectorAll('.content-section').forEach(section => {
        section.style.display = 'none';
    });

    // Show the selected section
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.style.display = 'block';
    } else {
        console.error(`Section with ID "${sectionId}" not found.`);
    }
}

// Populate the companies section
function populateCompaniesSection() {
    const companies = [
        { name: "Tech Solutions", jobs: "Web Developer, IT Support", location: "Kathmandu, Nepal" },
        { name: "BuildSmart", jobs: "Carpenter, Electrician", location: "Biratnagar, Nepal" },
        { name: "HospitalityPro", jobs: "Chef, Housekeeper", location: "Pokhara, Nepal" }
    ];

    const companiesList = document.getElementById("companiesList");
    companiesList.innerHTML = companies.map(company => `
        <div class="company-card">
            <h3>${company.name}</h3>
            <p><strong>Jobs:</strong> ${company.jobs}</p>
            <p><strong>Location:</strong> ${company.location}</p>
        </div>
    `).join('');
}

