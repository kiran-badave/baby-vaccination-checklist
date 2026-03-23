# 👶 Baby Vaccination Tracker

A comprehensive web application to track your baby's vaccination schedule with calendar integration and local data storage.

## 🌟 Features

- **Complete Vaccination Schedule**: Pre-loaded with all mandatory and optional vaccines from birth to 12 years
- **Smart Tracking**: Mark vaccines as completed with dates and notes
- **Calendar Integration**: Export schedule to Google Calendar (ICS format) with 7-day reminders
- **Data Persistence**: All data stored locally in your browser
- **Data Portability**: Export and import your data as JSON
- **Smart Filters**: View all, pending, completed, or upcoming vaccines
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Vaccine Preference**: Choose between Pentaxim or Pentavalent

## 🚀 Quick Start

### Option 1: GitHub Pages (Recommended)
1. Visit the live app at: `https://[your-username].github.io/baby-vaccination-checklist/`

### Option 2: Local Development
1. Clone this repository
2. Open `index.html` in your web browser
3. No build process or dependencies required!

## 📱 How to Use

### 1. Setup Baby Profile
- Enter your baby's name
- Select date of birth
- Choose vaccine type preference (Pentaxim or Pentavalent)
- Click "Save Profile"

### 2. Track Vaccinations
- View the complete schedule organized by age groups
- Check off vaccines as they're completed
- Add notes for each vaccine (doctor name, reactions, etc.)
- Use filters to view specific vaccine categories

### 3. Export to Calendar
- Click "📅 Export to Calendar (ICS)"
- Import the downloaded `.ics` file into Google Calendar
- Get automatic reminders 7 days before each vaccine

### 4. Manage Data
- **Export Data**: Download your data as JSON backup
- **Import Data**: Restore from a previous backup
- **Clear Data**: Reset the app (use with caution!)

## 📅 Vaccination Schedule Included

### 0-6 Months
- Birth: BCG, OPV-0, Hep B-1
- 6 weeks: Pentaxim/Pentavalent-1, Rotavirus-1, PCV-1, Hep B-2
- 10 weeks: Pentaxim/Pentavalent-2, Rotavirus-2, PCV-2
- 14 weeks: Pentaxim/Pentavalent-3, Rotavirus-3, PCV-3

### 6-9 Months
- 6 months: OPV Booster, Flu (Dose 1)
- 7 months: Flu (Dose 2), Typhoid (TCV)
- 9 months: MMR-1

### 12-18 Months
- 12 months: MMR-2, Hepatitis A (Dose 1)
- 15 months: Varicella (Dose 1), Booster (DTP + IPV + Hib)
- 18 months: Varicella (Dose 2), Hepatitis A (Dose 2)

### 2 Years+
- 2 years: Routine check / Typhoid booster
- 4-6 years: DTP Booster (DTaP)
- 9 years: HPV (2 doses)
- 10-12 years: Tdap

## 💾 Data Storage

All data is stored locally in your browser using `localStorage`:
- **Baby Profile**: Name, DOB, vaccine preference
- **Vaccination Progress**: Completion status, dates, and notes
- **No Server Required**: Your data never leaves your device
- **Privacy First**: No tracking, no analytics, no data collection

## 🔒 Privacy & Security

- ✅ All data stored locally in your browser
- ✅ No server-side storage
- ✅ No user accounts required
- ✅ No data transmission
- ✅ Works offline after first load
- ⚠️ Clear browser data = lose app data (use export feature!)

## 📤 Deploying to GitHub Pages

1. Create a new repository named `baby-vaccination-checklist`
2. Push these files to the repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/[your-username]/baby-vaccination-checklist.git
   git push -u origin main
   ```
3. Go to repository Settings → Pages
4. Select "Deploy from a branch"
5. Choose `main` branch and `/ (root)` folder
6. Click Save
7. Your app will be live at: `https://[your-username].github.io/baby-vaccination-checklist/`

## 🛠️ Technical Details

- **Pure HTML/CSS/JavaScript**: No frameworks or dependencies
- **Modern Browser Required**: Uses ES6+ features
- **LocalStorage API**: For data persistence
- **ICS Format**: Standard calendar format compatible with all major calendar apps
- **Responsive Design**: Mobile-first approach with flexbox and media queries

## 📋 Browser Compatibility

- ✅ Chrome/Edge (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## ⚠️ Important Notes

- Vaccines can be taken ±5-7 days from scheduled date
- Always consult your pediatrician before making vaccination decisions
- This app is a tracking tool, not medical advice
- Keep regular backups using the export feature

## 🤝 Contributing

Feel free to fork this project and customize it for your needs!

## 📄 License

MIT License - Free to use and modify

## 🙏 Acknowledgments

Based on standard vaccination schedules recommended by pediatricians and health organizations.

---

**Made with ❤️ for parents who want to stay organized with their baby's health**