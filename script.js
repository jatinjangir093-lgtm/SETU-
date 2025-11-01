// This script file is used for all shared functionality across the website.

console.log('Website scripts loaded.');

// Page is loaded
window.addEventListener('load', () => {
    console.log('Page loaded');
});

/* --- Smooth animated background (global) --- */
(function(){
    // Create canvas if not present
    function setupBackgroundCanvas() {
        if (document.getElementById('bgCanvas')) return document.getElementById('bgCanvas');
        const canvas = document.createElement('canvas');
        canvas.id = 'bgCanvas';
        canvas.style.position = 'fixed';
        canvas.style.top = '0';
        canvas.style.left = '0';
        canvas.style.width = '100%';
        canvas.style.height = '100%';
        canvas.style.pointerEvents = 'none';
        canvas.style.zIndex = '-1';
        document.body.insertBefore(canvas, document.body.firstChild);
        return canvas;
    }

    function startGradientBackground() {
        const canvas = setupBackgroundCanvas();
        const ctx = canvas.getContext('2d');

        function resize() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
        window.addEventListener('resize', resize);
        resize();

        let gradientShift = 0;
        function drawGradient() {
            gradientShift = (gradientShift + 0.5) % 360;
            const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
            gradient.addColorStop(0, `hsl(${(gradientShift + 0) % 360}, 70%, 60%)`);
            gradient.addColorStop(0.5, `hsl(${(gradientShift + 60) % 360}, 70%, 60%)`);
            gradient.addColorStop(1, `hsl(${(gradientShift + 120) % 360}, 70%, 60%)`);
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
        }

        function animate() {
            drawGradient();
            requestAnimationFrame(animate);
        }

        animate();
    }

    // Start when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', startGradientBackground);
    } else {
        startGradientBackground();
    }
})();

// --- LANGUAGE TRANSLATION DATA ---
const translations = {
    'en': {
    'logo_title': 'THE CITIZENS',
        'nav_home': 'Home',
        'nav_report': 'Report Issue',
        'nav_track': 'Track Status',
        'nav_admin': 'Admin Login',
        'footer_text': '© 2025 Jharkhand Govt. Civic Dashboard',

        // Report Page
        'report_h1': 'File Your Complaint',
        'report_desc': 'Please provide accurate details to ensure prompt action.',
        'cat_title': '1. Select Issue Category *',
        'cat_water': 'Water Mgmt',
        'cat_waste': 'Waste Mgmt',
        'cat_road': 'Road & Infra',
        'cat_light': 'Street Light',
        'cat_safety': 'Public Safety',
        'cat_other': 'Others',
        'other_issue_name': 'Specify Issue Name *',
        'issue_details_h2': 'Issue Details',
        'issue_title': 'Title of Issue *',
        'issue_title_ph': 'e.g., Large potholes on NH-33',
        'issue_desc': 'Description of Issue *',
        'issue_desc_ph': 'Provide detailed context, landmarks, and severity.',
        'location_label': 'Location (Automatic GPS / Manual Entry) *',
        'location_ph': 'Fetching current location...',
        'gps_btn': 'Get GPS',
        'gps_small': 'Click "Get GPS" to auto-fill location.',
        'media_label': 'Capture Photo or Video (Camera Only)',
        'voice_note': 'Add a Voice Note (Optional)',
        'start_rec': 'Start Recording',
        'stop_rec': 'Stop Recording',
        'priority_h2': '3. Priority Level (Select One)',
        'priority_high_label': 'High (Urgent/Hazard)',
        'priority_medium_label': 'Medium (Needs Attention)',
        'priority_low_label': 'Low (Routine Maintenance)',
        'contact_h2': '4. Your Contact Information',
        'reporter_name': 'Your Name *',
        'reporter_contact': 'Contact Number/Email *',
        'submit_btn': 'SUBMIT COMPLAINT',
        'other_issue_alert': 'Please specify the issue name for the "Other" category.',
        'category_alert': 'Please select an Issue Category.',
        'comp_submitted_alert': 'Complaint Submitted successfully! Your Complaint ID is MOCK-2025-1004. You will now be redirected to the tracking page.',
        
        // Index Page (partial, for common elements)
        'hero_h1': 'Making Jharkhand Vibrant, Together.',
        'hero_p': 'Your Voice, Our Action. Report civic issues across Jharkhand directly to the responsible departments.',
        
        // GPS Status
        'gps_fetching': 'Attempting to fetch your current location...',
        'gps_success': 'Location fetched successfully!',
        'gps_error': 'Error fetching location: ',
        'gps_unsupported': 'Geolocation is not supported by your browser/device.',
        'rec_status': 'Recording... (Mock)',
        'rec_saved': 'Recording saved! (Mock)'

    },
    'hi': {
    'logo_title': 'नागरिक',
        'nav_home': 'होम',
        'nav_report': 'समस्या दर्ज करें',
        'nav_track': 'स्थिति ट्रैक करें',
        'nav_admin': 'एडमिन लॉगिन',
    'pi-title' : 'ऑपरेशनल एनालिटिक्स',
    'footer_text': '© 2025 झारखण्ड सरकार नागरिक डैशबोर्ड',

        // Report Page
        'report_h1': 'अपनी शिकायत दर्ज करें',
        'report_desc': 'त्वरित कार्रवाई सुनिश्चित करने के लिए सटीक विवरण प्रदान करें।',
        'cat_title': '1. समस्या श्रेणी चुनें *',
        'cat_water': 'जल प्रबंधन',
        'cat_waste': 'कचरा प्रबंधन',
        'cat_road': 'सड़क और इंफ्रा',
        'cat_light': 'स्ट्रीट लाइट',
        'cat_safety': 'जन सुरक्षा',
        'cat_other': 'अन्य',
        'other_issue_name': 'समस्या का नाम बताएं *',
        'issue_details_h2': 'समस्या का विवरण',
        'issue_title': 'समस्या का शीर्षक *',
        'issue_title_ph': 'उदाहरण: NH-33 पर बड़े गड्ढे',
        'issue_desc': 'समस्या का विवरण *',
        'issue_desc_ph': 'संदर्भ, स्थल और गंभीरता का विस्तृत विवरण दें।',
        'location_label': 'स्थान (स्वचालित GPS / मैन्युअल प्रविष्टि) *',
        'location_ph': 'वर्तमान स्थान प्राप्त किया जा रहा है...',
        'gps_btn': 'GPS प्राप्त करें',
        'gps_small': 'स्वचालित रूप से स्थान भरने के लिए "GPS प्राप्त करें" पर क्लिक करें।',
        'media_label': 'फ़ोटो या वीडियो कैप्चर करें (केवल कैमरा)',
        'voice_note': 'वॉयस नोट जोड़ें (वैकल्पिक)',
        'start_rec': 'रिकॉर्डिंग शुरू करें',
        'stop_rec': 'रिकॉर्डिंग बंद करें',
        'priority_h2': '3. प्राथमिकता स्तर (एक चुनें)',
        'priority_high_label': 'उच्च (आपातकालीन/खतरा)',
        'priority_medium_label': 'मध्यम (ध्यान देने की आवश्यकता)',
        'priority_low_label': 'कम (नियमित रखरखाव)',
        'contact_h2': '4. संपर्क जानकारी',
        'reporter_name': 'आपका नाम *',
        'reporter_contact': 'संपर्क नंबर/ईमेल *',
        'submit_btn': 'शिकायत जमा करें',
        'other_issue_alert': 'कृपया "अन्य" श्रेणी के लिए समस्या का नाम बताएं।',
        'category_alert': 'कृपया एक समस्या श्रेणी चुनें।',
        'comp_submitted_alert': 'शिकायत सफलतापूर्वक जमा कर दी गई है! आपका शिकायत ID है MOCK-2025-1004। आपको ट्रैकिंग पृष्ठ पर रीडायरेक्ट किया जाएगा।',

        // Index Page (partial, for common elements)
        'hero_h1': 'झारखंड को जीवंत बनाते हुए।',
        'hero_p': 'आपकी आवाज़, हमारी कार्रवाई। झारखंड भर में नागरिक समस्याओं की रिपोर्ट सीधे संबंधित विभागों को करें।',

        // GPS Status
        'gps_fetching': 'आपका वर्तमान स्थान प्राप्त करने का प्रयास किया जा रहा है...',
        'gps_success': 'स्थान सफलतापूर्वक प्राप्त हुआ!',
        'gps_error': 'स्थान प्राप्त करने में त्रुटि: ',
        'gps_unsupported': 'आपके ब्राउज़र/डिवाइस द्वारा जियोलोकेशन समर्थित नहीं है।',
        'rec_status': 'रिकॉर्डिंग हो रही है... (मॉक)',
        'rec_saved': 'रिकॉर्डिंग सहेजी गई! (मॉक)'
    }
};

// Function to update all text based on the selected language
function updateContent(lang) {
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        const translation = translations[lang][key];

        if (translation) {
            // Handle placeholder attributes
            if (element.placeholder !== undefined) {
                element.placeholder = translation;
            } 
            // Handle specific cases like submit buttons and buttons with icons
            else if (element.getAttribute('data-translate-type') === 'text') {
                 // Preserve inner HTML (like the icon) while updating text content
                 const icon = element.querySelector('i');
                 element.textContent = ' ' + translation; 
                 if (icon) {
                     element.prepend(icon);
                 }
            }
            // Default text content update
            else {
                element.textContent = translation;
            }
        }
    });
}

// Function to handle language switching
window.setLanguage = function(lang) {
    if (translations[lang]) {
        localStorage.setItem('language', lang);
        updateContent(lang);
    }
};

// --- Core Script Execution ---
document.addEventListener('DOMContentLoaded', (event) => {
    // 1. Load language preference and initialize content
    const storedLang = localStorage.getItem('language') || 'en';
    
    // --- LANGUAGE SELECTOR AND INITIALIZATION ---
    const navBar = document.querySelector('nav');
    const navLinksContainer = document.querySelector('.nav-links');
    
    if (navBar && !document.getElementById('lang-select')) {
        const langSelect = document.createElement('select');
        langSelect.id = 'lang-select';
        langSelect.innerHTML = `
            <option value="en" ${storedLang === 'en' ? 'selected' : ''}>English</option>
            <option value="hi" ${storedLang === 'hi' ? 'selected' : ''}>हिन्दी (Hindi)</option>
        `;
        // Apply inline styles to match the navigation look
        langSelect.style.padding = '8px 10px';
        langSelect.style.borderRadius = '5px';
        langSelect.style.marginLeft = '15px';
        langSelect.style.cursor = 'pointer';
        langSelect.style.backgroundColor = 'white';
        langSelect.style.color = 'var(--text-dark)';
        langSelect.style.border = 'none';
        
        if (navLinksContainer) {
            navLinksContainer.appendChild(langSelect);
        } else {
            // Fallback: This path is usually not ideal but ensures selector is visible
            navBar.appendChild(langSelect);
        }

        langSelect.addEventListener('change', (e) => {
            setLanguage(e.target.value);
        });
    }
    
    // Initial content update
    setLanguage(storedLang);

    // --- Responsive Menu Toggle Logic (The fix for the hamburger menu) ---
    const menuToggle = document.getElementById('menu-toggle');
    if (menuToggle && navLinksContainer) {
        menuToggle.addEventListener('click', () => {
            navLinksContainer.classList.toggle('active');
        });
    }

    // --- Report Form Functionality ---
    
    // 1. DYNAMIC CATEGORY SELECTION & 'OTHER' INPUT
    const categoryOptions = document.querySelectorAll('.category-option');
    const otherGroup = document.getElementById('otherIssueNameGroup');
    const otherInput = document.getElementById('otherIssueName');
    const issueCategoryInput = document.getElementById('issueCategory');

    categoryOptions.forEach(option => {
        option.addEventListener('click', function() {
            categoryOptions.forEach(el => el.classList.remove('selected'));
            this.classList.add('selected');
            
            const category = this.dataset.category;
            if (issueCategoryInput) {
                issueCategoryInput.value = category;
            }

            if (otherGroup && otherInput) {
                if (category === 'other') {
                    otherGroup.style.display = 'block';
                    otherInput.required = true;
                } else {
                    otherGroup.style.display = 'none';
                    otherInput.required = false;
                }
            }
        });
    });
    
    // 2. AUTOMATIC GPS LOCATION
    const getGpsBtn = document.getElementById('getGpsBtn');
    const locationInput = document.getElementById('location');
    const statusText = document.getElementById('locationStatus');
    
    if (getGpsBtn) {
        getGpsBtn.addEventListener('click', function() {
            const currentLang = localStorage.getItem('language') || 'en';
            
            if (navigator.geolocation) {
                statusText.textContent = translations[currentLang].gps_fetching;
                statusText.style.color = 'var(--primary-color)';
                
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        const lat = position.coords.latitude;
                        const lon = position.coords.longitude;
                        if (locationInput) {
                             locationInput.value = `GPS Coords: Lat ${lat.toFixed(4)}, Lon ${lon.toFixed(4)}`;
                        }
                        statusText.textContent = translations[currentLang].gps_success;
                        statusText.style.color = 'var(--secondary-color)';
                    },
                    (error) => {
                        if (locationInput) { locationInput.value = ''; }
                        statusText.textContent = translations[currentLang].gps_error + error.message + ' ' + translations['en']['location_label'];
                        statusText.style.color = 'var(--high-priority)';
                    },
                    { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }
                );
            } else {
                if (locationInput) { locationInput.value = ''; }
                statusText.textContent = translations[currentLang].gps_unsupported;
                statusText.style.color = 'var(--high-priority)';
            }
        });
    }

    // 3. VOICE NOTE RECORDING (MOCK FEATURE)
    const startRecordingBtn = document.getElementById('startRecordingBtn');
    const stopRecordingBtn = document.getElementById('stopRecordingBtn');
    const recordingStatus = document.getElementById('recordingStatus');

    if (startRecordingBtn && stopRecordingBtn && recordingStatus) {
        startRecordingBtn.addEventListener('click', () => {
            const currentLang = localStorage.getItem('language') || 'en';
            recordingStatus.textContent = translations[currentLang].rec_status;
            startRecordingBtn.disabled = true;
            stopRecordingBtn.disabled = false;
        });

        stopRecordingBtn.addEventListener('click', () => {
            const currentLang = localStorage.getItem('language') || 'en';
            recordingStatus.textContent = translations[currentLang].rec_saved;
            startRecordingBtn.disabled = false;
            stopRecordingBtn.disabled = true;
        });
    }

    // 4. PRIORITY LEVEL SELECTION VISUALS
    const priorityOptions = document.querySelectorAll('.priority-option');
    priorityOptions.forEach(option => {
        option.addEventListener('click', function() {
            this.querySelector('input[type="radio"]').checked = true;
        });
    });

    // 5. FORM SUBMISSION MOCK
    const complaintForm = document.getElementById('complaintForm');
    if(complaintForm) {
      complaintForm.addEventListener('submit', function(e) {
          e.preventDefault();
          const currentLang = localStorage.getItem('language') || 'en';
          
          if (!issueCategoryInput || !issueCategoryInput.value) {
              alert(translations[currentLang].category_alert);
              return;
          }

          const otherInput = document.getElementById('otherIssueName');
          if (otherInput && otherInput.required && !otherInput.value.trim()) {
              alert(translations[currentLang].other_issue_alert);
              return;
          }
          
          alert(translations[currentLang].comp_submitted_alert);
          window.location.href = 'track_status.html?id=MOCK-2025-1004'; 
      });
    }

        // Loading animation functionality for all clicks
    function showLoadingSpinner(duration = 2500) {
        // Remove existing loader if any
        const existingLoader = document.getElementById('temp-loader');
        if (existingLoader) {
            existingLoader.remove();
        }

        // Create and append new loader
        const loaderHtml = `
            <div id="temp-loader" class="loader-container">
                <div class="loader"></div>
                <div class="loading-text">Loading, please wait...</div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', loaderHtml);
        
        // Get the new loader element
        const loader = document.getElementById('temp-loader');
        
        // Remove loader after duration
        setTimeout(() => {
            loader.classList.add('loader-hidden');
            setTimeout(() => loader.remove(), 200); // Remove after fade out
        }, duration);
    }

    // Show loader on ANY click in the document
    document.addEventListener('click', (e) => {
        // Don't show loader when clicking on the loader itself
        if (!e.target.closest('#temp-loader')) {
            showLoadingSpinner(2500);
        }
    });

    // Add keyboard support for interactive elements
    document.addEventListener('keydown', (e) => {
        const code = e.keyCode || e.which;
        // When Enter or Space is pressed on interactive elements
        if ((code === 13 || code === 32) && 
            (e.target.tagName === 'BUTTON' || 
             e.target.tagName === 'A' || 
             e.target.hasAttribute('role'))) {
            showLoadingSpinner(2500);
        }
    });
});

// --- Multi-step login (email -> phone -> OTP) ---
(function(){
    document.addEventListener('DOMContentLoaded', () => {
        const multiLogin = document.getElementById('multiLogin');
        if (!multiLogin) return; // No multi-login UI on this page

        const steps = Array.from(multiLogin.querySelectorAll('.login-step'));
        const loginMessage = document.getElementById('login-message');
        const otpTimerEl = document.getElementById('otpTimer');

        let currentStep = 1;
        let otpTimer = null;

        function showStep(n) {
            steps.forEach(s => {
                s.style.display = (parseInt(s.dataset.step, 10) === n) ? 'block' : 'none';
            });
            currentStep = n;
        }

        // Elements
        const emailNext = document.getElementById('emailNext');
        const loginEmail = document.getElementById('loginEmail');
        const phoneBack = document.getElementById('phoneBack');
        const phoneNext = document.getElementById('phoneNext');
        const loginPhone = document.getElementById('loginPhone');
        const otpBack = document.getElementById('otpBack');
        const verifyOtp = document.getElementById('verifyOtp');
        const loginOtp = document.getElementById('loginOtp');
        const resendOtp = document.getElementById('resendOtp');

        function validateEmail(email) {
            return /^\S+@\S+\.\S+$/.test(email);
        }
        function validatePhone(phone) {
            const digits = phone.replace(/\D/g, '');
            return /^\d{10}$/.test(digits);
        }

        function clearOtpTimer() {
            if (otpTimer) {
                clearInterval(otpTimer);
                otpTimer = null;
            }
            if (otpTimerEl) otpTimerEl.textContent = '';
        }

        function startOtpTimer(seconds) {
            clearOtpTimer();
            const expiry = Date.now() + seconds * 1000;
            if (otpTimerEl) otpTimerEl.textContent = `Expires in ${seconds}s`;
            otpTimer = setInterval(() => {
                const remaining = Math.max(0, Math.round((expiry - Date.now()) / 1000));
                if (otpTimerEl) otpTimerEl.textContent = remaining > 0 ? `Expires in ${remaining}s` : 'OTP expired';
                if (remaining <= 0) {
                    clearOtpTimer();
                }
            }, 500);
        }

        function generateAndStoreOtp() {
            const otp = Math.floor(100000 + Math.random() * 900000).toString();
            sessionStorage.setItem('mock_otp', otp);
            // For development/testing only: log to console
            console.info('Mock OTP generated:', otp);
            return otp;
        }

        // Wire buttons
        if (emailNext) {
            emailNext.addEventListener('click', (e) => {
                e.preventDefault();
                const email = (loginEmail && loginEmail.value || '').trim();
                if (!validateEmail(email)) {
                    if (loginMessage) loginMessage.textContent = 'Please enter a valid email address.';
                    return;
                }
                if (loginMessage) loginMessage.textContent = '';
                showStep(2);
            });
        }

        if (phoneBack) {
            phoneBack.addEventListener('click', (e) => {
                e.preventDefault();
                showStep(1);
                clearOtpTimer();
            });
        }

        if (phoneNext) {
            phoneNext.addEventListener('click', (e) => {
                e.preventDefault();
                const phoneVal = (loginPhone && loginPhone.value || '').trim();
                if (!validatePhone(phoneVal)) {
                    if (loginMessage) loginMessage.textContent = 'Please enter a valid 10-digit phone number.';
                    return;
                }
                if (loginMessage) loginMessage.textContent = '';

                // Simulate sending OTP
                generateAndStoreOtp();
                showLoadingSpinner(1200);
                setTimeout(() => {
                    startOtpTimer(120);
                    showStep(3);
                    if (loginMessage) loginMessage.textContent = 'OTP sent to the provided phone number (mock).';
                }, 1200);
            });
        }

        if (otpBack) {
            otpBack.addEventListener('click', (e) => {
                e.preventDefault();
                showStep(2);
            });
        }

        if (verifyOtp) {
            verifyOtp.addEventListener('click', (e) => {
                e.preventDefault();
                const entered = (loginOtp && loginOtp.value || '').trim();
                const stored = sessionStorage.getItem('mock_otp');
                if (!entered || entered.length < 4) {
                    if (loginMessage) loginMessage.textContent = 'Please enter the 6-digit OTP.';
                    return;
                }
                if (entered === stored) {
                    if (loginMessage) loginMessage.textContent = '';
                    // Success: show loader then redirect
                    showLoadingSpinner(2500);
                    setTimeout(() => {
                        // Clear OTP and redirect to admin dashboard
                        sessionStorage.removeItem('mock_otp');
                        window.location.href = 'admin_dashboard.html';
                    }, 2500);
                } else {
                    if (loginMessage) loginMessage.textContent = 'Invalid OTP. Please try again.';
                }
            });
        }

        if (resendOtp) {
            resendOtp.addEventListener('click', (e) => {
                e.preventDefault();
                generateAndStoreOtp();
                showLoadingSpinner(800);
                startOtpTimer(120);
                if (loginMessage) loginMessage.textContent = 'OTP resent (mock).';
            });
        }

        // Initialize first step
        showStep(1);
    });
})();
