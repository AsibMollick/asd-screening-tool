/* ===========================
   JavaScript - ASD Screening Tool
   =========================== */

// Questions database for different age groups
const questionsDatabase = {
    // 1: Toddler (0-3)
    1: [
        { id: "A1", text: "সে কি নাম ধরে ডাকলে সাড়া দেয় না বা তাকায় না?" },
        { id: "A2", text: "সে কি চোখের ইশারা বা চোখে চোখ রেখে তাকানো এড়িয়ে চলে?" },
        { id: "A3", text: "সে কি সমবয়সী বাচ্চাদের সাথে খেলতে বা মিশতে অনিহা দেখায়?" },
        { id: "A4", text: "সে কি কোনো কিছু প্রয়োজন হলে বা দেখাতে চাইলে আঙুল দিয়ে ইশারা করে না?" },
        { id: "A5", text: "সে কি অন্যের মন খারাপ বা হাসিতে সাড়া বা সহমর্মিতা প্রকাশ করে না?" },
        { id: "A6", text: "সে কি কোনো নির্দিষ্ট আচরণ বা কাজ বারবার করে (যেমন হাত ঝাপটানো বা দোল খাওয়া)?" },
        { id: "A7", text: "সে কি স্বাভাবিক বয়সেও ইশারা ছাড়া কথা বলতে পারে না বা দেরিতে কথা শুরু করেছে?" },
        { id: "A8", text: "সে কি রুটিন বা অভ্যাসের সামান্য পরিবর্তনে খুব বিরক্ত হয়?" },
        { id: "A9", text: "সে কি খুব বেশি বা খুব কম অনুভূতি দেখায় নির্দিষ্ট আলো, শব্দ বা স্পর্শে?" },
        { id: "A10", text: "সে কি পুতুল বা খেলনা নিয়ে স্বাভাবিক রূপক বা কল্পনামূলক খেলা (Pretend Play) খেলে না?" }
    ],
    // 2: Child (4-11)
    2: [
        { id: "A1", text: "সে প্রায়ই এমন মৃদু শব্দ লক্ষ্য করে যা অন্যরা সাধারণত খেয়াল করে না।" },
        { id: "A2", text: "সে পুরো বিষয়টির চেয়ে কোনো জিনিসের খুঁটিনাটি বা ছোটখাটো বিষয়ের প্রতি বেশি মনোযোগী হয়।" },
        { id: "A3", text: "সামাজিক গ্রুপ বা বন্ধুদের মধ্যে, সে খুব সহজেই কয়েকজনের আলাপচারিতা একসাথে বুঝতে পারে।" },
        { id: "A4", text: "সে খুব সহজে এক কাজ থেকে অন্য কাজে মনোযোগ পরিবর্তন করতে বা নতুন কাজ শুরু করতে পারে।" },
        { id: "A5", text: "সে তার সমবয়সীদের সাথে আড্ডা বা কথোপকথন কীভাবে চালিয়ে যেতে হবে তা বুঝতে পারে না।" },
        { id: "A6", text: "সে সাধারণ সামাজিক আড্ডা বা কথাবার্তায় বেশ পারদর্শী।" },
        { id: "A7", text: "কোনো গল্প পড়ার বা শোনার সময় তার পক্ষে চরিত্রের অনুভূতি বা উদ্দেশ্য বোঝা কঠিন হয়ে পড়ে।" },
        { id: "A8", text: "প্রিস্কুলে থাকার সময় সে অন্যান্য বাচ্চাদের সাথে রূপক বা কাল্পনিক খেলা খেলতে পছন্দ করত।" },
        { id: "A9", text: "সে অন্যের মুখের দিকে তাকিয়েই সহজে বুঝতে পারে সে কী ভাবছে বা অনুভব করছে।" },
        { id: "A10", text: "নতুন বন্ধু তৈরি করা তার কাছে বেশ কঠিন বলে মনে হয়।" }
    ],
    // 3: Adolescent (12-17)
    3: [
        { id: "A1", text: "সে সবসময় চারপাশের বিভিন্ন জিনিসের মধ্যে কোনো বিশেষ প্যাটার্ন বা ধারা লক্ষ্য করে।" },
        { id: "A2", text: "সে পুরো বিষয়টির চেয়ে কোনো জিনিসের খুঁটিনাটি বা ছোটখাটো বিষয়ের প্রতি বেশি মনোযোগী হয়।" },
        { id: "A3", text: "সামাজিক গ্রুপ বা বন্ধুদের মধ্যে, সে খুব সহজেই কয়েকজনের আলাপচারিতা একসাথে বুঝতে পারে।" },
        { id: "A4", text: "যেকোনো কাজ করার সময় ব্যাঘাত ঘটলে সে খুব দ্রুত আবার সেই কাজে ফিরে যেতে পারে।" },
        { id: "A5", text: "সে প্রায়ই বুঝতে পারে না কীভাবে অন্যের সাথে কথাবার্তা চালিয়ে যেতে হবে।" },
        { id: "A6", text: "সে সাধারণ আড্ডা বা সামাজিক মেলামেশায় বেশ ভালো কথা বলতে পারে।" },
        { id: "A7", text: "যখন সে আরও ছোট ছিল, তখন সে অন্য বাচ্চাদের সাথে রূপক বা কাল্পনিক খেলা খেলতে পছন্দ করত।" },
        { id: "A8", text: "অন্য কারো জায়গায় নিজেকে কল্পনা করা বা অন্যের দৃষ্টিভঙ্গি বোঝা তার জন্য কঠিন মনে হয়।" },
        { id: "A9", text: "যেকোনো সামাজিক পরিবেশ বা অনুষ্ঠান তার কাছে সহজ মনে হয়।" },
        { id: "A10", text: "তার জন্য নতুন বন্ধু তৈরি করা বেশ কঠিন মনে হয়।" }
    ],
    // 4: Adult (18+)
    4: [
        { id: "A1", text: "অন্যরা যখন পায় না, আমি প্রায়ই তখনো খুব মৃদু কোনো শব্দ টের পেয়ে যাই।" },
        { id: "A2", text: "আমি সাধারণত খুঁটিনাটি বিষয়ের চেয়ে সামগ্রিক বা পুরো বিষয়টির ওপর বেশি মনোযোগ দিই।" },
        { id: "A3", text: "সামাজিক গ্রুপ বা বন্ধুদের আড্ডায়, আমি খুব সহজেই কয়েকজনের আলাপচারিতা একসাথে বুঝতে পারি।" },
        { id: "A4", text: "কাজ করার সময় কোনো ব্যাঘাত ঘটলে, আমার পক্ষে আবার আগের কাজে ফিরে যাওয়া বেশ কঠিন মনে হয়।" },
        { id: "A5", text: "কারো সাথে কথা বলার সময় তার কথার আড়ালের মূল ভাব বা ইঙ্গিত আমি সহজেই বুঝতে পারি।" },
        { id: "A6", text: "আমার কথা শুনতে শুনতে কেউ বিরক্ত হচ্ছে কিনা তা আমি সহজেই বুঝতে পারি।" },
        { id: "A7", text: "কোনো গল্প পড়ার সময় চরিত্রের উদ্দেশ্য বা অনুভূতি বুঝতে আমার বেশ অসুবিধা হয়।" },
        { id: "A8", text: "আমি বিভিন্ন বিষয় শ্রেণীবিভাগ করে তথ্য সংগ্রহ করতে পছন্দ করি (যেমন গাড়ি, পাখি, ট্রেন বা উদ্ভিদের ধরন)।" },
        { id: "A9", text: "কারো মুখের দিকে তাকিয়েই সে কী ভাবছে বা কেমন অনুভব করছে তা আমি সহজেই বুঝতে পারি।" },
        { id: "A10", text: "মানুষের আসল উদ্দেশ্য বা মনের ভাব বোঝা আমার জন্য কঠিন হয়ে পড়ে।" }
    ]
};

// Form state - initially null to detect if user has interacted/selected
const formData = {
    A1: null, A2: null, A3: null, A4: null, A5: null,
    A6: null, A7: null, A8: null, A9: null, A10: null,
    Age: null,
    Group: null,
    Sex: null,
    Jaundice: null,
    Family_ASD: null
};

let currentStep = 1;
const totalSteps = 3;

// ---- Initialize Particles ----
function initParticles() {
    const container = document.getElementById('bg-particles');
    if (!container) return;
    const colors = ['#6C63FF', '#00D4AA', '#FF6B6B', '#FFD93D'];
    
    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        const size = Math.random() * 6 + 2;
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.background = color;
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.animationDuration = `${Math.random() * 20 + 15}s`;
        particle.style.animationDelay = `${Math.random() * 10}s`;
        
        container.appendChild(particle);
    }
}

// ---- Navigation ----
function hideAllSections() {
    const sections = ['hero-section', 'about-section', 'how-section', 'signs-section', 'cta-section', 'form-section', 'result-section'];
    sections.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.style.display = 'none';
    });
}

function showFormPage() {
    hideAllSections();
    
    // Show form segment
    const formSection = document.getElementById('form-section');
    formSection.style.display = 'block';
    
    // Reset to step 1
    showStep(1);
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showHomePage() {
    hideAllSections();
    
    // Show all home segments
    document.getElementById('hero-section').style.display = 'flex';
    document.getElementById('about-section').style.display = 'block';
    document.getElementById('how-section').style.display = 'block';
    document.getElementById('signs-section').style.display = 'block';
    document.getElementById('cta-section').style.display = 'block';
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function scrollToForm() {
    showFormPage();
}

// ---- Step Navigation ----
function showStep(step) {
    document.querySelectorAll('.form-step').forEach(el => el.classList.remove('active'));
    document.getElementById(`step-${step}`).classList.add('active');
    
    // Update progress
    const progressBar = document.getElementById('progress-bar');
    progressBar.setAttribute('data-step', step);
    
    const stepNames = ['', 'ধাপ ১ / ৩', 'ধাপ ২ / ৩', 'ধাপ ৩ / ৩'];
    document.getElementById('progress-text').textContent = stepNames[step];
    
    currentStep = step;

    // Dynamically render questions when entering Step 3
    if (step === 3) {
        renderQuestions();
    }
}

// ---- Render Questions dynamically based on group ----
function renderQuestions() {
    const group = formData.Group || 4; // default to adult if not set
    const questions = questionsDatabase[group];
    const questionsContainer = document.getElementById('questions-container');
    
    if (!questionsContainer) return;
    
    let html = '';
    questions.forEach((q, idx) => {
        const val = formData[q.id];
        const yesActive = val === 1 ? 'active' : '';
        const noActive = val === 0 ? 'active' : '';
        
        html += `
            <div class="question-card" id="q-${q.id}">
                <div class="question-label">
                    <span class="q-num">Q${idx + 1}</span>
                    ${q.text}
                </div>
                <div class="toggle-group">
                    <button type="button" class="toggle-btn ${yesActive}" data-field="${q.id}" data-value="1" onclick="setAnswer(this)">হ্যাঁ</button>
                    <button type="button" class="toggle-btn ${noActive}" data-field="${q.id}" data-value="0" onclick="setAnswer(this)">না</button>
                </div>
            </div>
        `;
    });
    
    // Render to container
    questionsContainer.innerHTML = html;
}

// ---- Validation and Next Navigation ----
function validateStep(step) {
    if (step === 1) {
        // Validate Age, Group, Sex
        const ageInput = document.getElementById('age-input');
        const age = parseInt(ageInput.value);
        if (isNaN(age) || age < 1 || age > 100) {
            alert('দয়া করে সঠিক বয়স লিখুন (১ - ১০০ বছর)');
            ageInput.focus();
            return false;
        }
        formData.Age = age;

        if (formData.Group === null) {
            alert('দয়া করে বয়সের গ্রুপ সিলেক্ট করুন');
            return false;
        }
        if (formData.Sex === null) {
            alert('দয়া করে লিঙ্গ সিলেক্ট করুন');
            return false;
        }
    } 
    else if (step === 2) {
        // Validate Jaundice and Family ASD
        if (formData.Jaundice === null) {
            alert('দয়া করে জন্মের সময় জন্ডিস হয়েছিল কিনা সিলেক্ট করুন');
            return false;
        }
        if (formData.Family_ASD === null) {
            alert('দয়া করে পরিবারে কেউ অটিজমে আক্রান্ত কিনা সিলেক্ট করুন');
            return false;
        }
    }
    return true;
}

function nextStep(step) {
    // Validate current step before going to the next
    if (validateStep(step - 1)) {
        showStep(step);
        document.getElementById('form-section').scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// ---- Toggle Button Handlers ----
function setAnswer(btn) {
    const field = btn.getAttribute('data-field');
    const value = parseInt(btn.getAttribute('data-value'));
    
    // Update form data
    formData[field] = value;
    
    // Update UI
    const group = btn.closest('.toggle-group');
    group.querySelectorAll('.toggle-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
}

function setSelect(btn) {
    const field = btn.getAttribute('data-field');
    const value = parseInt(btn.getAttribute('data-value'));
    
    formData[field] = value;
    
    const grid = btn.closest('.select-grid');
    grid.querySelectorAll('.select-card').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
}

// ---- Auto-detect group from age input ----
document.addEventListener('DOMContentLoaded', () => {
    initParticles();
    
    const ageInput = document.getElementById('age-input');
    if (ageInput) {
        ageInput.addEventListener('input', () => {
            const val = ageInput.value.trim();
            if (val === '') {
                formData.Age = null;
                formData.Group = null;
                // Clear active styling
                document.querySelectorAll('[data-field="Group"]').forEach(btn => {
                    btn.classList.remove('active');
                });
                return;
            }

            const age = parseInt(val) || 0;
            if (age <= 0 || age > 100) {
                formData.Age = null;
                formData.Group = null;
                // Clear active styling
                document.querySelectorAll('[data-field="Group"]').forEach(btn => {
                    btn.classList.remove('active');
                });
                return;
            }
            
            formData.Age = age;
            
            // Auto-select group
            let group = 1;
            if (age <= 3) group = 1;
            else if (age <= 11) group = 2;
            else if (age <= 17) group = 3;
            else group = 4;
            
            formData.Group = group;
            
            // Update group UI
            document.querySelectorAll('[data-field="Group"]').forEach(btn => {
                btn.classList.remove('active');
                if (parseInt(btn.getAttribute('data-value')) === group) {
                    btn.classList.add('active');
                }
            });
        });
    }
});

// ---- Form Submission ----
async function handleSubmit(event) {
    event.preventDefault();
    
    // Validate final step questions (A1-A10)
    for (let i = 1; i <= 10; i++) {
        if (formData[`A${i}`] === null) {
            alert(`দয়া করে আচরণগত প্রশ্ন Q${i} এর উত্তর দিন`);
            const targetEl = document.getElementById(`q-A${i}`);
            if (targetEl) {
                targetEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
            return;
        }
    }
    
    // Show loading
    const submitBtn = document.getElementById('submit-btn');
    const btnText = submitBtn.querySelector('.btn-text');
    const btnLoader = submitBtn.querySelector('.btn-loader');
    submitBtn.disabled = true;
    btnText.style.display = 'none';
    btnLoader.style.display = 'inline-flex';
    
    try {
        const response = await fetch('/predict', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        });
        
        const result = await response.json();
        
        if (result.success) {
            showResult(result);
        } else {
            alert('ত্রুটি: ' + (result.error || 'সার্ভারে সমস্যা হয়েছে'));
        }
    } catch (error) {
        console.error('Error:', error);
        alert('সার্ভারের সাথে সংযোগ করতে পারছে না।\n\nনিশ্চিত করুন যে Flask সার্ভার চালু আছে:\npython app.py');
    } finally {
        submitBtn.disabled = false;
        btnText.style.display = 'inline';
        btnLoader.style.display = 'none';
    }
}

// ---- Show Result ----
function showResult(result) {
    const isASD = result.prediction === 1;
    const prob = result.probability_asd;
    
    // Hide all, show result
    hideAllSections();
    const resultSection = document.getElementById('result-section');
    resultSection.style.display = 'flex';
    
    // Result card styling
    const resultCard = document.getElementById('result-card');
    resultCard.className = 'result-card ' + (isASD ? 'positive' : 'negative');
    
    // Icon
    document.getElementById('result-icon').textContent = isASD ? '⚠️' : '✅';
    
    // Title
    document.getElementById('result-title').textContent = isASD
        ? 'ASD-এর সম্ভাবনা সনাক্ত হয়েছে'
        : 'ASD-এর সম্ভাবনা কম';
    
    document.getElementById('result-title').style.color = isASD ? 'var(--danger)' : 'var(--success)';
    
    // Description
    document.getElementById('result-desc').textContent = isASD
        ? 'আমাদের AI মডেল বিশ্লেষণ করে দেখেছে যে আপনার ইনপুট অনুযায়ী ASD-এর কিছু লক্ষণ পাওয়া গেছে। অনুগ্রহ করে একজন বিশেষজ্ঞ চিকিৎসকের সাথে পরামর্শ করুন।'
        : 'আমাদের AI মডেল বিশ্লেষণ করে দেখেছে যে ASD-এর উল্লেখযোগ্য লক্ষণ পাওয়া যায়নি। তবে কোনো উদ্বেগ থাকলে চিকিৎসকের সাথে কথা বলুন।';
    
    // Gauge
    const gaugeFill = document.getElementById('gauge-fill');
    gaugeFill.className = 'gauge-fill';
    
    if (prob < 30) gaugeFill.classList.add('low');
    else if (prob < 60) gaugeFill.classList.add('medium');
    else gaugeFill.classList.add('high');
    
    setTimeout(() => {
        gaugeFill.style.width = `${prob}%`;
    }, 100);
    
    // Animate counter
    const gaugeValue = document.getElementById('gauge-value');
    gaugeValue.style.color = isASD ? 'var(--danger)' : 'var(--success)';
    animateCounter(gaugeValue, 0, prob, 1500);
    
    // Details - Tips & Doctor Suggestions for ASD positive
    const detailsContainer = document.getElementById('result-details');
    
    if (isASD) {
        detailsContainer.innerHTML = `
            <!-- করণীয় টিপস -->
            <div class="tips-section">
                <h3 class="tips-title">📋 করণীয় পদক্ষেপসমূহ</h3>
                <div class="tips-grid">
                    <div class="tip-card">
                        <span class="tip-icon">🩺</span>
                        <div>
                            <strong>বিশেষজ্ঞ চিকিৎসকের পরামর্শ নিন</strong>
                            <p>একজন শিশু বিকাশ বিশেষজ্ঞ (Developmental Pediatrician) বা মনোরোগ বিশেষজ্ঞের (Psychiatrist) কাছে যত তাড়াতাড়ি সম্ভব যান।</p>
                        </div>
                    </div>
                    <div class="tip-card">
                        <span class="tip-icon">🗣️</span>
                        <div>
                            <strong>স্পিচ ও ল্যাঙ্গুয়েজ থেরাপি</strong>
                            <p>কথা বলা ও যোগাযোগ দক্ষতা বাড়াতে প্রশিক্ষিত স্পিচ থেরাপিস্টের সাহায্য নিন। তাড়াতাড়ি শুরু করলে ফলাফল ভালো হয়।</p>
                        </div>
                    </div>
                    <div class="tip-card">
                        <span class="tip-icon">🧩</span>
                        <div>
                            <strong>অকুপেশনাল থেরাপি (OT)</strong>
                            <p>দৈনন্দিন কাজকর্ম, সংবেদনশীলতা ও মোটর দক্ষতা উন্নয়নের জন্য অকুপেশনাল থেরাপি অত্যন্ত কার্যকর।</p>
                        </div>
                    </div>
                    <div class="tip-card">
                        <span class="tip-icon">🎨</span>
                        <div>
                            <strong>আচরণগত থেরাপি (ABA)</strong>
                            <p>Applied Behavior Analysis (ABA) থেরাপি অটিজমের জন্য বিশ্বব্যাপী স্বীকৃত। এটি ইতিবাচক আচরণ শেখাতে সাহায্য করে।</p>
                        </div>
                    </div>
                    <div class="tip-card">
                        <span class="tip-icon">👨‍👩‍👧</span>
                        <div>
                            <strong>পরিবারের সহায়তা ও ধৈর্য</strong>
                            <p>পরিবারের সকলের সচেতনতা ও ধৈর্য সবচেয়ে গুরুত্বপূর্ণ। অটিজম সাপোর্ট গ্রুপে যোগ দিন, অন্যান্য পরিবারের অভিজ্ঞতা জানুন।</p>
                        </div>
                    </div>
                    <div class="tip-card">
                        <span class="tip-icon">📚</span>
                        <div>
                            <strong>বিশেষ শিক্ষা ব্যবস্থা</strong>
                            <p>শিশুর প্রয়োজন অনুযায়ী বিশেষ শিক্ষা প্রতিষ্ঠান বা ইনক্লুসিভ স্কুলে ভর্তি করুন। IEP (Individual Education Plan) তৈরি করুন।</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- ডাক্তার ও হাসপাতাল সাজেশন -->
            <div class="doctors-section">
                <h3 class="tips-title">🏥 বিশেষজ্ঞ চিকিৎসক ও প্রতিষ্ঠান</h3>
                <div class="doctor-cards">
                    <div class="doctor-card">
                        <div class="doctor-badge hospital">হাসপাতাল</div>
                        <h4>ঢাকা শিশু হাসপাতাল</h4>
                        <p>শিশু নিউরোলজি ও ডেভেলপমেন্ট বিভাগ</p>
                        <span class="doctor-location">📍 শ্যামলী, ঢাকা</span>
                    </div>
                    <div class="doctor-card">
                        <div class="doctor-badge hospital">হাসপাতাল</div>
                        <h4>বঙ্গবন্ধু শেখ মুজিব মেডিকেল বিশ্ববিদ্যালয় (BSMMU)</h4>
                        <p>মনোরোগবিদ্যা বিভাগ — অটিজম ক্লিনিক</p>
                        <span class="doctor-location">📍 শাহবাগ, ঢাকা</span>
                    </div>
                    <div class="doctor-card">
                        <div class="doctor-badge center">সেন্টার</div>
                        <h4>ইনস্টিটিউট অব নিউরোসায়েন্সেস (NINS)</h4>
                        <p>শিশু নিউরোলজি বিভাগ</p>
                        <span class="doctor-location">📍 আগারগাঁও, ঢাকা</span>
                    </div>
                    <div class="doctor-card">
                        <div class="doctor-badge center">সেন্টার</div>
                        <h4>অটিজম ওয়েলফেয়ার ফাউন্ডেশন (AWF)</h4>
                        <p>অটিজম সচেতনতা, থেরাপি ও প্রশিক্ষণ</p>
                        <span class="doctor-location">📍 মিরপুর, ঢাকা</span>
                    </div>
                    <div class="doctor-card">
                        <div class="doctor-badge center">সেন্টার</div>
                        <h4>প্রয়াস — বিশেষ চাহিদাসম্পন্ন শিশুদের স্কুল</h4>
                        <p>বাংলাদেশ সেনাবাহিনী পরিচালিত, থেরাপি ও শিক্ষা</p>
                        <span class="doctor-location">📍 মিরপুর ক্যান্টনমেন্ট, ঢাকা</span>
                    </div>
                    <div class="doctor-card">
                        <div class="doctor-badge hospital">হাসপাতাল</div>
                        <h4>জাতীয় মানসিক স্বাস্থ্য ইনস্টিটিউট (NIMH)</h4>
                        <p>শিশু ও কিশোর মানসিক স্বাস্থ্য বিভাগ</p>
                        <span class="doctor-location">📍 শেরেবাংলা নগর, ঢাকা</span>
                    </div>
                </div>

                <div class="helpline-card">
                    <span class="helpline-icon">📞</span>
                    <div>
                        <strong>জরুরি হেল্পলাইন</strong>
                        <p>সরকারি স্বাস্থ্য বাতায়ন: <strong>১৬২৬৩</strong> | মানসিক স্বাস্থ্য হেল্পলাইন: <strong>০১৭৭৯-৫৫৪৫৫</strong></p>
                    </div>
                </div>
            </div>
        `;
    } else {
        detailsContainer.innerHTML = `
            <div class="tips-section">
                <h3 class="tips-title">💡 সচেতনতা ও পরামর্শ</h3>
                <div class="tips-grid">
                    <div class="tip-card">
                        <span class="tip-icon">✅</span>
                        <div>
                            <strong>নিয়মিত পর্যবেক্ষণ করুন</strong>
                            <p>যদিও এই মুহূর্তে উল্লেখযোগ্য লক্ষণ পাওয়া যায়নি, তবু শিশুর বিকাশ নিয়মিত পর্যবেক্ষণ করুন।</p>
                        </div>
                    </div>
                    <div class="tip-card">
                        <span class="tip-icon">🗓️</span>
                        <div>
                            <strong>ডাক্তারের নিয়মিত চেকআপ</strong>
                            <p>প্রতি ৬ মাস অন্তর শিশু বিশেষজ্ঞের কাছে গিয়ে বিকাশমূলক মাইলস্টোন চেক করান।</p>
                        </div>
                    </div>
                    <div class="tip-card">
                        <span class="tip-icon">🎯</span>
                        <div>
                            <strong>সামাজিক দক্ষতা বাড়ান</strong>
                            <p>শিশুকে সমবয়সীদের সাথে খেলতে ও মিশতে উৎসাহিত করুন। গ্রুপ অ্যাক্টিভিটিতে অংশগ্রহণ করান।</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
    
    // Scroll to result
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ---- Animate Counter ----
function animateCounter(element, start, end, duration) {
    const startTime = performance.now();
    
    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
        
        const current = start + (end - start) * eased;
        element.textContent = `${current.toFixed(1)}%`;
        
        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }
    
    requestAnimationFrame(update);
}

// ---- Reset Form ----
function resetForm() {
    // Reset data state back to null
    Object.keys(formData).forEach(key => {
        formData[key] = null;
    });
    
    // De-activate all toggle buttons
    document.querySelectorAll('.toggle-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // De-activate all select cards
    document.querySelectorAll('.select-card').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Clear age input field
    document.getElementById('age-input').value = '';
    
    // Hide all and show form page directly for retry
    hideAllSections();
    document.getElementById('form-section').style.display = 'block';
    
    // Go to step 1
    showStep(1);
    
    // Scroll to form
    document.getElementById('form-section').scrollIntoView({ behavior: 'smooth', block: 'start' });
}
