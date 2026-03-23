// Baby Vaccination Tracker Application - Enhanced Version
const app = {
    currentLanguage: 'en',
    currentView: 'timeline',
    currentFilter: 'all',
    
    // Vaccination schedule template
    vaccineSchedule: [
        // Birth
        { 
            age: 'Birth', 
            weeks: 0, 
            vaccines: ['BCG', 'OPV-1', 'Hepatitis B-1'], 
            category: '0-6 months', 
            mandatory: true,
            description: 'First vaccines given at birth',
            isCustom: false
        },
        
        // 1.5 Months (6 weeks)
        { 
            age: '1.5 months (6 weeks)', 
            weeks: 6, 
            vaccines: ['DTWP/DTap-1', 'OPV+/IPV-1', 'Hib-1', 'Pentaxim-1/Pentavalent-1', 'Hepatitis B-2', 'Rotavirus-1', 'PCV-1'], 
            category: '0-6 months', 
            mandatory: true,
            description: 'Pentaxim = DTaP + IPV + Hib (painless). Pentavalent = DTWP + Hep B + Hib (may be painful)',
            isCustom: false
        },
        
        // 2.5 Months (10 weeks)
        { 
            age: '2.5 months (10 weeks)', 
            weeks: 10, 
            vaccines: ['DTWP/DTap-2', 'Pentaxim-2/Pentavalent-2', 'OPV+/IPV-2', 'Hib-2', 'Rotavirus-2', 'PCV-2'], 
            category: '0-6 months', 
            mandatory: true,
            description: 'Second dose of primary vaccines',
            isCustom: false
        },
        
        // 3.5 Months (14 weeks)
        { 
            age: '3.5 months (14 weeks)', 
            weeks: 14, 
            vaccines: ['DTWP/DTap-3', 'OPV+/IPV-3', 'Hib-3', 'Rotavirus-3', 'PCV-3', 'Pentaxim-3/Pentavalent-3'], 
            category: '0-6 months', 
            mandatory: true,
            description: 'Third dose of primary vaccines',
            isCustom: false
        },
        
        // 6 Months
        { 
            age: '6 months', 
            weeks: 26, 
            vaccines: ['OPV', 'Hepatitis B-3'], 
            category: '6-9 months', 
            mandatory: true,
            description: 'OPV booster and Hepatitis B completion',
            isCustom: false
        },
        
        // 9 Months
        { 
            age: '9 months', 
            weeks: 39, 
            vaccines: ['MMR-1', 'OPV'], 
            category: '6-9 months', 
            mandatory: true,
            description: 'First MMR dose and OPV',
            isCustom: false
        },
        
        // 9-12 Months
        { 
            age: '9-12 months', 
            weeks: 43, 
            vaccines: ['Typhoid'], 
            category: '6-9 months', 
            mandatory: false,
            description: 'Typhoid protection (optional but recommended)',
            isCustom: false
        },
        
        // 12 Months
        { 
            age: '12 months', 
            weeks: 52, 
            vaccines: ['Hepatitis A-1'], 
            category: '12-18 months', 
            mandatory: false,
            description: 'First dose of Hepatitis A',
            isCustom: false
        },
        
        // 15 Months
        { 
            age: '15 months', 
            weeks: 65, 
            vaccines: ['Varicella-1', 'MMR-2', 'PCV Booster'], 
            category: '12-18 months', 
            mandatory: true,
            description: 'Chickenpox vaccine, MMR booster, and PCV booster',
            isCustom: false
        },
        
        // 16-18 Months
        { 
            age: '16-18 months', 
            weeks: 72, 
            vaccines: ['DTWP Booster/DTap Booster', 'OPV-4/IPV Booster', 'Hib Booster'], 
            category: '12-18 months', 
            mandatory: true,
            description: 'Booster doses for primary vaccines',
            isCustom: false
        },
        
        // 18 Months
        { 
            age: '18 months', 
            weeks: 78, 
            vaccines: ['Hepatitis A-2'], 
            category: '12-18 months', 
            mandatory: false,
            description: 'Second dose of Hepatitis A',
            isCustom: false
        },
        
        // 2 Years
        { 
            age: '2 years', 
            weeks: 104, 
            vaccines: ['Typhoid-1'], 
            category: '2-4 years', 
            mandatory: false,
            description: 'Typhoid vaccine (repeat every 3 years)',
            isCustom: false
        },
        
        // 4-6 Years
        { 
            age: '4-6 years', 
            weeks: 260, 
            vaccines: ['DTWP Booster-2/DTap Booster-2', 'OPV/Varicella-2', 'Typhoid Booster'], 
            category: '4-6 years', 
            mandatory: true,
            description: 'Pre-school boosters',
            isCustom: false
        },
        
        // 10 Years
        { 
            age: '10 years', 
            weeks: 520, 
            vaccines: ['Tdap', 'HPV', 'MR Booster'], 
            category: '10+ years', 
            mandatory: true,
            description: 'Tdap/TT (repeat every 15 years), HPV for cancer prevention',
            isCustom: false
        }
    ],

    // Initialize the app
    init() {
        this.loadLanguage();
        this.loadProfile();
        this.loadCustomVaccines();
        this.attachEventListeners();
    },

    // Attach event listeners
    attachEventListeners() {
        const dobInput = document.getElementById('babyDOB');
        if (dobInput) {
            dobInput.max = new Date().toISOString().split('T')[0];
        }
    },

    // Load language preference
    loadLanguage() {
        const savedLang = localStorage.getItem('appLanguage') || 'en';
        this.currentLanguage = savedLang;
        document.getElementById('languageSelect').value = savedLang;
        this.updateUILanguage();
    },

    // Change language
    changeLanguage(lang) {
        this.currentLanguage = lang;
        localStorage.setItem('appLanguage', lang);
        this.updateUILanguage();
        
        // Re-render schedule if profile exists
        const profile = JSON.parse(localStorage.getItem('babyProfile'));
        if (profile) {
            this.renderSchedule();
        }
    },

    // Update UI language
    updateUILanguage() {
        const t = translations[this.currentLanguage];
        
        // Update static text
        document.getElementById('appTitle').textContent = `👶 ${t.appTitle}`;
        document.getElementById('appSubtitle').textContent = t.appSubtitle;
        document.getElementById('setupProfileTitle').textContent = t.setupProfile;
        document.getElementById('babyNameLabel').textContent = t.babyName + ':';
        document.getElementById('babyName').placeholder = t.enterBabyName;
        document.getElementById('babyDOBLabel').textContent = t.dateOfBirth + ':';
        document.getElementById('vaccineTypeLabel').textContent = t.vaccinePreference + ':';
        document.getElementById('pentaximOption').textContent = t.pentaxim;
        document.getElementById('pentavalentOption').textContent = t.pentavalent;
        document.getElementById('saveProfileBtn').textContent = t.saveProfile;
        document.getElementById('editProfileBtn').textContent = t.editProfile;
        document.getElementById('exportCalendarBtn').innerHTML = `📅 ${t.exportCalendar}`;
        document.getElementById('exportDataBtn').innerHTML = `💾 ${t.exportData}`;
        document.getElementById('importDataBtn').innerHTML = `📂 ${t.importData}`;
        document.getElementById('addCustomVaccineBtn').innerHTML = `➕ ${t.addCustomVaccine}`;
        document.getElementById('clearDataBtn').innerHTML = `🗑️ ${t.clearData}`;
        document.getElementById('scheduleTitle').textContent = t.vaccinationSchedule;
        document.getElementById('timelineViewBtn').innerHTML = `<span>📊</span> ${t.timelineView}`;
        document.getElementById('listViewBtn').innerHTML = `<span>📋</span> ${t.listView}`;
        document.getElementById('filterAll').textContent = t.all;
        document.getElementById('filterPending').textContent = t.pending;
        document.getElementById('filterCompleted').textContent = t.completed;
        document.getElementById('filterUpcoming').textContent = t.upcoming;
        document.getElementById('footerTip').innerHTML = `💡 <strong>${t.tip.split(':')[0]}:</strong> ${t.tip.split(':')[1]}`;
        document.getElementById('languageLabel').textContent = t.language + ':';
        
        // Update modal text
        document.getElementById('customVaccineTitle').textContent = t.customVaccineTitle;
        document.getElementById('customVaccineNameLabel').textContent = t.vaccineName + ':';
        document.getElementById('customVaccineAgeLabel').textContent = t.vaccineAge + ':';
        document.getElementById('customVaccineDescriptionLabel').textContent = t.vaccineDescription + ':';
        document.getElementById('customVaccineMandatoryLabel').textContent = t.mandatory;
        document.getElementById('addVaccineBtn').textContent = t.addVaccine;
        document.getElementById('cancelBtn').textContent = t.cancel;
        document.getElementById('vaccineDetailsTitle').textContent = t.vaccineDetails;
    },

    // Calculate date based on DOB and weeks
    calculateVaccineDate(dob, weeks) {
        const date = new Date(dob);
        date.setDate(date.getDate() + (weeks * 7));
        return date;
    },

    // Format date for display
    formatDate(date) {
        const options = { day: '2-digit', month: 'short', year: 'numeric' };
        return date.toLocaleDateString('en-GB', options);
    },

    // Setup profile
    setupProfile() {
        const name = document.getElementById('babyName').value.trim();
        const dob = document.getElementById('babyDOB').value;
        const vaccineType = document.getElementById('vaccineType').value;

        if (!name || !dob) {
            alert('Please fill in all required fields');
            return;
        }

        const profile = {
            name,
            dob,
            vaccineType,
            createdAt: new Date().toISOString()
        };

        localStorage.setItem('babyProfile', JSON.stringify(profile));
        
        // Initialize schedule with all vaccines unchecked
        if (!localStorage.getItem('vaccineProgress')) {
            const progress = {};
            this.vaccineSchedule.forEach((item, index) => {
                progress[index] = { completed: false, completedDate: null, notes: '', subVaccines: {} };
            });
            localStorage.setItem('vaccineProgress', JSON.stringify(progress));
        }

        this.loadProfile();
    },

    // Load profile
    loadProfile() {
        const profile = JSON.parse(localStorage.getItem('babyProfile'));
        const t = translations[this.currentLanguage];
        
        if (profile) {
            document.getElementById('setupSection').style.display = 'none';
            document.getElementById('profileSection').style.display = 'block';
            document.getElementById('actionsSection').style.display = 'block';
            document.getElementById('scheduleSection').style.display = 'block';

            document.getElementById('profileName').textContent = `👶 ${profile.name}`;
            document.getElementById('profileDOB').textContent = `🎂 ${t.dob}: ${this.formatDate(new Date(profile.dob))}`;
            document.getElementById('profileVaccineType').textContent = `💉 ${t.preference}: ${profile.vaccineType === 'pentaxim' ? 'Pentaxim' : 'Pentavalent'}`;

            this.renderSchedule();
        } else {
            document.getElementById('setupSection').style.display = 'block';
            document.getElementById('profileSection').style.display = 'none';
            document.getElementById('actionsSection').style.display = 'none';
            document.getElementById('scheduleSection').style.display = 'none';
        }
    },

    // Edit profile
    editProfile() {
        const profile = JSON.parse(localStorage.getItem('babyProfile'));
        document.getElementById('babyName').value = profile.name;
        document.getElementById('babyDOB').value = profile.dob;
        document.getElementById('vaccineType').value = profile.vaccineType;

        document.getElementById('setupSection').style.display = 'block';
        document.getElementById('profileSection').style.display = 'none';
        document.getElementById('actionsSection').style.display = 'none';
        document.getElementById('scheduleSection').style.display = 'none';
    },

    // Switch view
    switchView(view) {
        this.currentView = view;
        
        document.querySelectorAll('.view-btn').forEach(btn => btn.classList.remove('active'));
        if (view === 'timeline') {
            document.querySelector('[onclick="app.switchView(\'timeline\')"]').classList.add('active');
            document.getElementById('timelineView').style.display = 'block';
            document.getElementById('listView').style.display = 'none';
        } else {
            document.querySelector('[onclick="app.switchView(\'list\')"]').classList.add('active');
            document.getElementById('timelineView').style.display = 'none';
            document.getElementById('listView').style.display = 'block';
        }
        
        this.renderSchedule();
    },

    // Render schedule
    renderSchedule(filter = this.currentFilter) {
        this.currentFilter = filter;
        
        if (this.currentView === 'timeline') {
            this.renderTimelineView(filter);
        } else {
            this.renderListView(filter);
        }
    },

    // Render timeline view
    renderTimelineView(filter) {
        const profile = JSON.parse(localStorage.getItem('babyProfile'));
        const progress = JSON.parse(localStorage.getItem('vaccineProgress')) || {};
        const container = document.getElementById('timelineView');
        const t = translations[this.currentLanguage];
        
        container.innerHTML = '';

        const today = new Date();
        const sevenDaysFromNow = new Date();
        sevenDaysFromNow.setDate(today.getDate() + 7);

        this.vaccineSchedule.forEach((item, index) => {
            const vaccineDate = this.calculateVaccineDate(profile.dob, item.weeks);
            const isCompleted = progress[index]?.completed || false;
            const isUpcoming = vaccineDate >= today && vaccineDate <= sevenDaysFromNow;

            // Apply filter
            if (filter === 'completed' && !isCompleted) return;
            if (filter === 'pending' && (isCompleted || vaccineDate > today)) return;
            if (filter === 'upcoming' && !isUpcoming) return;

            const timelineItem = document.createElement('div');
            timelineItem.className = `timeline-item ${isCompleted ? 'completed' : ''} ${isUpcoming && !isCompleted ? 'upcoming' : ''}`;
            
            const vaccines = this.processVaccineList(item.vaccines, profile.vaccineType);

            timelineItem.innerHTML = `
                <div class="timeline-marker ${isCompleted ? 'completed-marker' : ''}">
                    ${isCompleted ? '✓' : '○'}
                </div>
                <div class="timeline-content">
                    <div class="timeline-header">
                        <div>
                            <h3>${item.age}</h3>
                            <p class="timeline-date">${this.formatDate(vaccineDate)}</p>
                            ${item.mandatory ? `<span class="badge mandatory">${t.mandatory}</span>` : `<span class="badge optional">${t.optional}</span>`}
                            ${isUpcoming && !isCompleted ? `<span class="badge upcoming-badge">${t.dueSoon}</span>` : ''}
                            ${item.isCustom ? '<span class="badge custom-badge">Custom</span>' : ''}
                        </div>
                        <label class="checkbox-container">
                            <input type="checkbox" ${isCompleted ? 'checked' : ''} onchange="app.toggleVaccine(${index})">
                            <span class="checkmark"></span>
                        </label>
                    </div>
                    <div class="timeline-body">
                        <div class="vaccines-section">
                            <p class="vaccines-list"><strong>${t.vaccines}:</strong></p>
                            <div class="vaccine-checklist">
                                ${this.renderVaccineChecklist(vaccines, index, progress)}
                            </div>
                        </div>
                        ${item.description ? `<p class="vaccine-description">ℹ️ ${item.description}</p>` : ''}
                        ${progress[index]?.completedDate ? `<p class="completed-date">✅ ${t.completed_date}: ${this.formatDate(new Date(progress[index].completedDate))}</p>` : ''}
                        <div class="notes-section">
                            <textarea 
                                placeholder="${t.addNotes}" 
                                onchange="app.saveNotes(${index}, this.value)"
                                rows="2"
                            >${progress[index]?.notes || ''}</textarea>
                        </div>
                        ${item.isCustom ? `<button class="btn btn-danger btn-sm" onclick="app.deleteCustomVaccine(${index})">${t.deleteVaccine}</button>` : ''}
                    </div>
                </div>
            `;

            container.appendChild(timelineItem);
        });

        if (container.children.length === 0) {
            container.innerHTML = '<p class="no-results">No vaccines match the selected filter.</p>';
        }
    },

    // Render list view
    renderListView(filter) {
        const profile = JSON.parse(localStorage.getItem('babyProfile'));
        const progress = JSON.parse(localStorage.getItem('vaccineProgress')) || {};
        const container = document.getElementById('listView');
        const t = translations[this.currentLanguage];
        
        container.innerHTML = '';

        const today = new Date();
        const sevenDaysFromNow = new Date();
        sevenDaysFromNow.setDate(today.getDate() + 7);

        let currentCategory = '';

        this.vaccineSchedule.forEach((item, index) => {
            const vaccineDate = this.calculateVaccineDate(profile.dob, item.weeks);
            const isCompleted = progress[index]?.completed || false;
            const isUpcoming = vaccineDate >= today && vaccineDate <= sevenDaysFromNow;

            // Apply filter
            if (filter === 'completed' && !isCompleted) return;
            if (filter === 'pending' && (isCompleted || vaccineDate > today)) return;
            if (filter === 'upcoming' && !isUpcoming) return;

            // Add category header
            if (currentCategory !== item.category) {
                currentCategory = item.category;
                const categoryHeader = document.createElement('div');
                categoryHeader.className = 'category-header';
                categoryHeader.textContent = `🟡 ${currentCategory}`;
                container.appendChild(categoryHeader);
            }

            const card = document.createElement('div');
            card.className = `vaccine-card ${isCompleted ? 'completed' : ''} ${isUpcoming && !isCompleted ? 'upcoming' : ''}`;
            
            const vaccines = this.processVaccineList(item.vaccines, profile.vaccineType);

            card.innerHTML = `
                <div class="vaccine-header">
                    <div>
                        <h3>${item.age}</h3>
                        <p class="vaccine-date">${this.formatDate(vaccineDate)}</p>
                        ${item.mandatory ? `<span class="badge mandatory">${t.mandatory}</span>` : `<span class="badge optional">${t.optional}</span>`}
                        ${isUpcoming && !isCompleted ? `<span class="badge upcoming-badge">${t.dueSoon}</span>` : ''}
                        ${item.isCustom ? '<span class="badge custom-badge">Custom</span>' : ''}
                    </div>
                    <label class="checkbox-container">
                        <input type="checkbox" ${isCompleted ? 'checked' : ''} onchange="app.toggleVaccine(${index})">
                        <span class="checkmark"></span>
                    </label>
                </div>
                <div class="vaccine-body">
                    <div class="vaccines-section">
                        <p class="vaccines-list"><strong>${t.vaccines}:</strong></p>
                        <div class="vaccine-checklist">
                            ${this.renderVaccineChecklist(vaccines, index, progress)}
                        </div>
                    </div>
                    ${item.description ? `<p class="vaccine-description">ℹ️ ${item.description}</p>` : ''}
                    ${progress[index]?.completedDate ? `<p class="completed-date">✅ ${t.completed_date}: ${this.formatDate(new Date(progress[index].completedDate))}</p>` : ''}
                    <div class="notes-section">
                        <textarea 
                            placeholder="${t.addNotes}" 
                            onchange="app.saveNotes(${index}, this.value)"
                            rows="2"
                        >${progress[index]?.notes || ''}</textarea>
                    </div>
                    ${item.isCustom ? `<button class="btn btn-danger btn-sm" onclick="app.deleteCustomVaccine(${index})">${t.deleteVaccine}</button>` : ''}
                </div>
            `;

            container.appendChild(card);
        });

        if (container.children.length === 0) {
            container.innerHTML = '<p class="no-results">No vaccines match the selected filter.</p>';
        }
    },

    // Process vaccine list based on preference
    processVaccineList(vaccines, vaccineType) {
        return vaccines.map(v => {
            if (v.includes('Pentaxim') || v.includes('Pentavalent')) {
                return vaccineType === 'pentaxim' ? v.split('/')[0] : v.split('/')[1];
            }
            return v;
        });
    },

    // Render vaccine checklist
    renderVaccineChecklist(vaccines, parentIndex, progress) {
        const t = translations[this.currentLanguage];
        return vaccines.map((vaccine, vIndex) => {
            const isChecked = progress[parentIndex]?.subVaccines?.[vIndex] || false;
            const vaccineKey = vaccine.split('-')[0].trim();
            const hasInfo = vaccineInfo[this.currentLanguage] && vaccineInfo[this.currentLanguage][vaccineKey];
            
            return `
                <div class="vaccine-item">
                    <label class="vaccine-checkbox">
                        <input type="checkbox" ${isChecked ? 'checked' : ''} 
                            onchange="app.toggleSubVaccine(${parentIndex}, ${vIndex})">
                        <span>${vaccine}</span>
                    </label>
                    ${hasInfo ? `<button class="info-btn" onclick="app.showVaccineDetails('${vaccineKey}')" title="${t.viewDetails}">ℹ️</button>` : ''}
                </div>
            `;
        }).join('');
    },

    // Toggle vaccine completion
    toggleVaccine(index) {
        const progress = JSON.parse(localStorage.getItem('vaccineProgress')) || {};
        
        if (!progress[index]) {
            progress[index] = { completed: false, completedDate: null, notes: '', subVaccines: {} };
        }

        progress[index].completed = !progress[index].completed;
        progress[index].completedDate = progress[index].completed ? new Date().toISOString() : null;

        // If marking as complete, mark all sub-vaccines as complete
        if (progress[index].completed) {
            const vaccines = this.vaccineSchedule[index].vaccines;
            vaccines.forEach((_, vIndex) => {
                progress[index].subVaccines[vIndex] = true;
            });
        }

        localStorage.setItem('vaccineProgress', JSON.stringify(progress));
        this.renderSchedule();
    },

    // Toggle sub-vaccine
    toggleSubVaccine(parentIndex, vaccineIndex) {
        const progress = JSON.parse(localStorage.getItem('vaccineProgress')) || {};
        
        if (!progress[parentIndex]) {
            progress[parentIndex] = { completed: false, completedDate: null, notes: '', subVaccines: {} };
        }

        if (!progress[parentIndex].subVaccines) {
            progress[parentIndex].subVaccines = {};
        }

        progress[parentIndex].subVaccines[vaccineIndex] = !progress[parentIndex].subVaccines[vaccineIndex];

        // Check if all sub-vaccines are completed
        const vaccines = this.vaccineSchedule[parentIndex].vaccines;
        const allCompleted = vaccines.every((_, vIndex) => progress[parentIndex].subVaccines[vIndex]);
        
        if (allCompleted && !progress[parentIndex].completed) {
            progress[parentIndex].completed = true;
            progress[parentIndex].completedDate = new Date().toISOString();
        } else if (!allCompleted && progress[parentIndex].completed) {
            progress[parentIndex].completed = false;
            progress[parentIndex].completedDate = null;
        }

        localStorage.setItem('vaccineProgress', JSON.stringify(progress));
        this.renderSchedule();
    },

    // Save notes
    saveNotes(index, notes) {
        const progress = JSON.parse(localStorage.getItem('vaccineProgress')) || {};
        
        if (!progress[index]) {
            progress[index] = { completed: false, completedDate: null, notes: '', subVaccines: {} };
        }

        progress[index].notes = notes;
        localStorage.setItem('vaccineProgress', JSON.stringify(progress));
    },

    // Filter schedule
    filterSchedule(filter) {
        document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
        event.target.classList.add('active');
        
        this.renderSchedule(filter);
    },

    // Show vaccine details modal
    showVaccineDetails(vaccineKey) {
        const info = vaccineInfo[this.currentLanguage][vaccineKey];
        const t = translations[this.currentLanguage];
        
        if (!info) return;

        const content = document.getElementById('vaccineDetailsContent');
        content.innerHTML = `
            <div class="vaccine-detail">
                <h3>${info.name}</h3>
                <p><strong>${t.purpose}:</strong> ${info.purpose}</p>
            </div>
        `;

        document.getElementById('vaccineDetailsModal').style.display = 'block';
    },

    // Close vaccine details modal
    closeVaccineDetailsModal() {
        document.getElementById('vaccineDetailsModal').style.display = 'none';
    },

    // Show custom vaccine modal
    showCustomVaccineModal() {
        document.getElementById('customVaccineModal').style.display = 'block';
        // Clear form
        document.getElementById('customVaccineName').value = '';
        document.getElementById('customVaccineAge').value = '';
        document.getElementById('customVaccineWeeks').value = '';
        document.getElementById('customVaccineDescription').value = '';
        document.getElementById('customVaccineMandatory').checked = false;
    },

    // Close custom vaccine modal
    closeCustomVaccineModal() {
        document.getElementById('customVaccineModal').style.display = 'none';
    },

    // Add custom vaccine
    addCustomVaccine() {
        const name = document.getElementById('customVaccineName').value.trim();
        const age = document.getElementById('customVaccineAge').value.trim();
        const weeks = parseInt(document.getElementById('customVaccineWeeks').value);
        const description = document.getElementById('customVaccineDescription').value.trim();
        const mandatory = document.getElementById('customVaccineMandatory').checked;

        if (!name || !age || isNaN(weeks)) {
            alert('Please fill in all required fields');
            return;
        }

        const customVaccine = {
            age,
            weeks,
            vaccines: [name],
            category: 'Custom',
            mandatory,
            description,
            isCustom: true
        };

        this.vaccineSchedule.push(customVaccine);
        
        // Sort by weeks
        this.vaccineSchedule.sort((a, b) => a.weeks - b.weeks);

        // Save custom vaccines
        this.saveCustomVaccines();

        // Initialize progress for new vaccine
        const progress = JSON.parse(localStorage.getItem('vaccineProgress')) || {};
        const newIndex = this.vaccineSchedule.length - 1;
        progress[newIndex] = { completed: false, completedDate: null, notes: '', subVaccines: {} };
        localStorage.setItem('vaccineProgress', JSON.stringify(progress));

        this.closeCustomVaccineModal();
        this.renderSchedule();
    },

    // Save custom vaccines
    saveCustomVaccines() {
        const customVaccines = this.vaccineSchedule.filter(v => v.isCustom);
        localStorage.setItem('customVaccines', JSON.stringify(customVaccines));
    },

    // Load custom vaccines
    loadCustomVaccines() {
        const customVaccines = JSON.parse(localStorage.getItem('customVaccines')) || [];
        customVaccines.forEach(cv => {
            if (!this.vaccineSchedule.find(v => v.age === cv.age && v.isCustom)) {
                this.vaccineSchedule.push(cv);
            }
        });
        this.vaccineSchedule.sort((a, b) => a.weeks - b.weeks);
    },

    // Delete custom vaccine
    deleteCustomVaccine(index) {
        if (!confirm('Are you sure you want to delete this custom vaccine?')) return;

        this.vaccineSchedule.splice(index, 1);
        this.saveCustomVaccines();

        // Update progress indices
        const progress = JSON.parse(localStorage.getItem('vaccineProgress')) || {};
        const newProgress = {};
        Object.keys(progress).forEach(key => {
            const idx = parseInt(key);
            if (idx < index) {
                newProgress[idx] = progress[key];
            } else if (idx > index) {
                newProgress[idx - 1] = progress[key];
            }
        });
        localStorage.setItem('vaccineProgress', JSON.stringify(newProgress));

        this.renderSchedule();
    },

    // Export to calendar (ICS format)
    exportToCalendar() {
        const profile = JSON.parse(localStorage.getItem('babyProfile'));
        const progress = JSON.parse(localStorage.getItem('vaccineProgress')) || {};
        
        let icsContent = [
            'BEGIN:VCALENDAR',
            'VERSION:2.0',
            'PRODID:-//Baby Vaccination Tracker//EN',
            'CALSCALE:GREGORIAN',
            'METHOD:PUBLISH',
            'X-WR-CALNAME:Baby Vaccination Schedule',
            'X-WR-TIMEZONE:Asia/Calcutta'
        ];

        this.vaccineSchedule.forEach((item, index) => {
            if (progress[index]?.completed) return;

            const vaccineDate = this.calculateVaccineDate(profile.dob, item.weeks);
            const vaccines = this.processVaccineList(item.vaccines, profile.vaccineType).join(', ');

            const dtstart = this.formatICSDate(vaccineDate);
            const dtend = this.formatICSDate(vaccineDate, 1);
            const dtstamp = this.formatICSDate(new Date());
            const uid = `vaccine-${index}-${Date.now()}@baby-vaccination-tracker`;

            icsContent.push(
                'BEGIN:VEVENT',
                `UID:${uid}`,
                `DTSTAMP:${dtstamp}`,
                `DTSTART:${dtstart}`,
                `DTEND:${dtend}`,
                `SUMMARY:💉 ${profile.name} - ${item.age} Vaccination`,
                `DESCRIPTION:Vaccines: ${vaccines}\\n\\nAge: ${item.age}\\n${item.mandatory ? 'Type: Mandatory' : 'Type: Optional'}\\n\\nNote: Vaccines can be taken ±5-7 days safely.`,
                `LOCATION:Pediatrician Clinic`,
                'STATUS:CONFIRMED',
                'BEGIN:VALARM',
                'TRIGGER:-P7D',
                'ACTION:DISPLAY',
                `DESCRIPTION:Reminder: ${profile.name}'s ${item.age} vaccination is due in 7 days`,
                'END:VALARM',
                'END:VEVENT'
            );
        });

        icsContent.push('END:VCALENDAR');

        const blob = new Blob([icsContent.join('\r\n')], { type: 'text/calendar;charset=utf-8' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = `${profile.name.replace(/\s+/g, '_')}_vaccination_schedule.ics`;
        link.click();
    },

    // Format date for ICS
    formatICSDate(date, addHours = 0) {
        const d = new Date(date);
        d.setHours(d.getHours() + addHours);
        return d.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
    },

    // Export data as JSON
    exportData() {
        const profile = JSON.parse(localStorage.getItem('babyProfile'));
        const progress = JSON.parse(localStorage.getItem('vaccineProgress'));
        const customVaccines = JSON.parse(localStorage.getItem('customVaccines')) || [];
        const language = localStorage.getItem('appLanguage') || 'en';

        const exportData = {
            profile,
            progress,
            customVaccines,
            language,
            exportDate: new Date().toISOString(),
            version: '2.0'
        };

        const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = `${profile.name.replace(/\s+/g, '_')}_vaccination_data.json`;
        link.click();
    },

    // Import data from JSON
    importData(event) {
        const file = event.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const data = JSON.parse(e.target.result);
                
                if (!data.profile || !data.progress) {
                    alert('Invalid data file format');
                    return;
                }

                if (confirm('This will replace your current data. Continue?')) {
                    localStorage.setItem('babyProfile', JSON.stringify(data.profile));
                    localStorage.setItem('vaccineProgress', JSON.stringify(data.progress));
                    
                    if (data.customVaccines) {
                        localStorage.setItem('customVaccines', JSON.stringify(data.customVaccines));
                    }
                    
                    if (data.language) {
                        localStorage.setItem('appLanguage', data.language);
                    }
                    
                    location.reload();
                }
            } catch (error) {
                alert('Error reading file: ' + error.message);
            }
        };
        reader.readAsText(file);
        
        event.target.value = '';
    },

    // Clear all data
    clearData() {
        if (confirm('Are you sure you want to clear all data? This cannot be undone.')) {
            localStorage.removeItem('babyProfile');
            localStorage.removeItem('vaccineProgress');
            localStorage.removeItem('customVaccines');
            location.reload();
        }
    }
};

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    app.init();
});

// Close modals when clicking outside
window.onclick = function(event) {
    const customModal = document.getElementById('customVaccineModal');
    const detailsModal = document.getElementById('vaccineDetailsModal');
    
    if (event.target === customModal) {
        app.closeCustomVaccineModal();
    }
    if (event.target === detailsModal) {
        app.closeVaccineDetailsModal();
    }
}

