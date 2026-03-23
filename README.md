# 👶 Baby Vaccination Tracker - Enhanced Version

A comprehensive, multi-language web application to track your baby's vaccination schedule with timeline visualization, detailed vaccine information, and calendar integration.

## 🌟 Key Features

### 📊 Timeline & List Views
- **Timeline View**: Visual timeline showing vaccination journey from birth to 10+ years
- **List View**: Traditional categorized list view for easy scanning
- Switch between views with one click

### 🌍 Multi-Language Support
- **English** - Full interface in English
- **हिंदी (Hindi)** - Complete Hindi translation
- **मराठी (Marathi)** - Complete Marathi translation
- Language preference saved automatically

### 💉 Comprehensive Vaccine Information
- Detailed information for each vaccine
- Purpose and protection details
- Click ℹ️ button on any vaccine to learn more
- Covers all vaccines from birth to 10+ years

### ✅ Inner Vaccination Checklist
- Check off individual vaccines within each appointment
- Track completion of multi-vaccine appointments
- Automatic parent checkbox completion when all sub-vaccines are done

### ➕ Custom Vaccine Support
- Add your own custom vaccines
- Specify age, timing, and description
- Mark as mandatory or optional
- Delete custom vaccines anytime

### 📅 Smart Scheduling
- Complete vaccination schedule based on Indian pediatric guidelines
- Automatic date calculation from baby's DOB
- 7-day reminder window with "Due Soon!" badges
- Flexible ±5-7 days window for all vaccines

### 💾 Data Management
- **LocalStorage**: All data stored locally in your browser
- **Export to JSON**: Backup your complete data
- **Import from JSON**: Restore from backup
- **Export to ICS**: Import into Google Calendar with automatic reminders

### 🎨 Modern UI/UX
- Responsive design (mobile, tablet, desktop)
- Beautiful gradient interface
- Color-coded badges (Mandatory/Optional/Custom)
- Completion indicators and progress tracking
- Notes section for each vaccine appointment

## 📱 Quick Start

### Option 1: GitHub Pages (Recommended)
Visit: `https://[your-username].github.io/baby-vaccination-checklist/`

### Option 2: Local Development
1. Clone this repository
2. Open `index.html` in your web browser
3. No build process or dependencies required!

## 🚀 How to Use

### 1. Setup Baby Profile
- Enter your baby's name
- Select date of birth
- Choose vaccine type preference:
  - **Pentaxim**: DTaP + IPV + Hib (painless, fewer injections)
  - **Pentavalent**: DTWP + Hep B + Hib (more affordable)
- Select your preferred language
- Click "Save Profile"

### 2. Track Vaccinations

#### Timeline View
- Visual representation of vaccination journey
- See past, current, and future vaccines
- Check off completed vaccines
- Track individual vaccines within each appointment

#### List View
- Organized by age categories
- Easy to scan and review
- Same functionality as timeline view

### 3. Individual Vaccine Tracking
- Each appointment shows all required vaccines
- Check off individual vaccines as they're administered
- Click ℹ️ to learn about each vaccine's purpose
- Add notes for each appointment

### 4. Add Custom Vaccines
- Click "Add Custom Vaccine" button
- Enter vaccine name, age/timing, and weeks from birth
- Add description/purpose
- Mark as mandatory or optional
- Custom vaccines appear in your schedule

### 5. Export to Calendar
- Click "Export to Calendar (ICS)"
- Import the downloaded file into Google Calendar
- Get automatic reminders 7 days before each vaccine
- Only exports pending (not completed) vaccines

### 6. Manage Data
- **Export Data**: Download complete backup as JSON
- **Import Data**: Restore from previous backup
- **Clear Data**: Reset the app (use with caution!)

### 7. Change Language
- Use language selector in header
- Switch between English, Hindi, and Marathi
- All content updates instantly
- Language preference saved automatically

## 📅 Complete Vaccination Schedule

### Birth
- BCG (Tuberculosis protection)
- OPV-1 (Polio)
- Hepatitis B-1 (Liver protection)

### 1.5 Months (6 weeks)
- DTWP/DTap-1 (Diphtheria, Tetanus, Pertussis)
- OPV+/IPV-1 (Polio)
- Hib-1 (Meningitis protection)
- Pentaxim-1/Pentavalent-1 (Combination vaccine)
- Hepatitis B-2
- Rotavirus-1 (Diarrhea protection)
- PCV-1 (Pneumonia protection)

### 2.5 Months (10 weeks)
- Second doses of primary vaccines

### 3.5 Months (14 weeks)
- Third doses of primary vaccines

### 6 Months
- OPV booster
- Hepatitis B-3 (completion)

### 9 Months
- MMR-1 (Measles, Mumps, Rubella)
- OPV

### 9-12 Months
- Typhoid (optional but recommended)

### 12 Months
- Hepatitis A-1

### 15 Months
- Varicella-1 (Chickenpox)
- MMR-2 (booster)
- PCV Booster

### 16-18 Months
- DTWP/DTap Booster
- OPV-4/IPV Booster
- Hib Booster

### 18 Months
- Hepatitis A-2

### 2 Years
- Typhoid-1 (repeat every 3 years)

### 4-6 Years
- DTWP/DTap Booster-2
- OPV/Varicella-2
- Typhoid Booster

### 10 Years
- Tdap (repeat every 15 years)
- HPV (cancer prevention)
- MR Booster

## 💉 Vaccine Information Included

Each vaccine includes detailed information about:
- Full name and abbreviation
- What it protects against
- Why it's important
- Available in English, Hindi, and Marathi

### Covered Vaccines:
- BCG, OPV, IPV, Hepatitis B, DTWP, DTaP
- Hib, Pentaxim, Pentavalent, Rotavirus
- PCV (Prevnar), MMR, Typhoid
- Hepatitis A, Varicella, HPV, Tdap, MR

## 💾 Data Storage & Privacy

### Local Storage
- All data stored in browser's localStorage
- No server-side storage
- No user accounts required
- No data transmission to external servers

### What's Stored:
- Baby profile (name, DOB, vaccine preference)
- Vaccination progress (completion status, dates, notes)
- Individual vaccine checkmarks
- Custom vaccines
- Language preference

### Privacy Features:
- ✅ 100% local storage
- ✅ No tracking or analytics
- ✅ No data collection
- ✅ Works offline after first load
- ⚠️ Clearing browser data will erase app data (use export feature!)

## 🛠️ Technical Details

### Technology Stack
- **Pure HTML/CSS/JavaScript** - No frameworks or dependencies
- **LocalStorage API** - For data persistence
- **ICS Format** - Standard calendar format
- **Responsive Design** - Mobile-first approach

### Browser Compatibility
- ✅ Chrome/Edge (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

### File Structure
```
baby-vaccination-checklist/
├── index.html          # Main HTML structure
├── app.js             # Application logic (1000+ lines)
├── styles.css         # Styling (900+ lines)
├── translations.js    # Multi-language support
└── README.md          # Documentation
```

## 📤 Deploying to GitHub Pages

1. Create a new repository named `baby-vaccination-checklist`
2. Push these files to the repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Enhanced vaccination tracker"
   git branch -M main
   git remote add origin https://github.com/[your-username]/baby-vaccination-checklist.git
   git push -u origin main
   ```
3. Go to repository Settings → Pages
4. Select "Deploy from a branch"
5. Choose `main` branch and `/ (root)` folder
6. Click Save
7. Your app will be live at: `https://[your-username].github.io/baby-vaccination-checklist/`

## 🎯 Use Cases

### For Parents
- Track baby's vaccination schedule
- Never miss a vaccine appointment
- Keep notes about reactions and doctor visits
- Share schedule with family members via export

### For Pediatricians
- Show parents the complete schedule
- Explain vaccine purposes in their language
- Track multiple patients (via export/import)

### For Caregivers
- Know which vaccines are due
- Understand vaccine importance
- Coordinate with parents

## ⚠️ Important Notes

- Vaccines can be taken ±5-7 days from scheduled date
- Always consult your pediatrician before making vaccination decisions
- This app is a tracking tool, not medical advice
- Keep regular backups using the export feature
- Custom vaccines are for tracking only - consult doctor for medical advice

## 🆕 What's New in Enhanced Version

### Version 2.0 Features:
1. **Timeline View** - Visual vaccination journey
2. **Multi-Language** - English, Hindi, Marathi
3. **Vaccine Details** - Comprehensive information with purpose
4. **Inner Checklist** - Track individual vaccines
5. **Custom Vaccines** - Add your own vaccines
6. **Enhanced UI** - Better visual design
7. **Improved Data Export** - Includes language and custom vaccines

## 🤝 Contributing

Feel free to fork this project and customize it for your needs!

### Suggestions for Customization:
- Add more languages
- Include regional vaccine schedules
- Add vaccine cost tracking
- Include doctor appointment reminders
- Add growth tracking features

## 📄 License

MIT License - Free to use and modify

## 🙏 Acknowledgments

- Based on Indian Academy of Pediatrics (IAP) vaccination schedule
- Vaccine information from WHO and CDC guidelines
- Designed for Indian parents and healthcare providers

## 📞 Support

For issues or questions:
1. Check if your browser supports localStorage
2. Try exporting and re-importing your data
3. Clear browser cache and reload
4. Use the latest version of Chrome/Firefox/Safari

---

**Made with ❤️ for parents who want to stay organized with their baby's health**

**Version 2.0** - Enhanced with Timeline View, Multi-Language Support, and Custom Vaccines