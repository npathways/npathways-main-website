# Bootcamp Calendar Implementation Guide

## Overview

This implementation provides a specialized bootcamp management system designed for a service-oriented lead generation model. It focuses on showcasing upcoming sessions and facilitating student inquiries through a streamlined consultation flow.

- **Online/Offline Categorization**: Filter bootcamps by delivery mode.
- **Calendar View**: Interactive monthly calendar showing available sessions.
- **Grid View**: Traditional card-based layout for quick browsing.
- **Lead Generation Flow**: "Enquire for Batch" functionality that redirects to the consultation form.
- **Price-Free Design**: Focuses on value and learning outcomes rather than direct transaction.

---

## Files & Structure

### Data Layer
- `src/data/bootcamps.json`: Source of truth for bootcamp sessions.
- `src/data/bootcampHelpers.js`: Helper functions for filtering and date logic.

### Components
- `src/components/bootcamp/BootcampCard.jsx`: Reusable session card with capacity indicators.
- `src/components/bootcamp/BootcampCalendar.jsx`: Core calendar engine for visual scheduling.

### Pages
- `src/pages/public/services/BootcampCalendar.jsx`: Main view with mode toggles (Grid/Calendar).
- `src/pages/public/services/BootcampCalendar.css`: Consolidated styles for the bootcamp hub.

---

## Data Structure

The `bootcamps.json` file contains an array of objects. **Note: Pricing fields are no longer rendered in the UI.**

```json
{
  "bootcamps": [
    {
      "id": "unique-id",
      "name": "Bootcamp Name",
      "type": "online|offline",
      "description": "Short overview of the bootcamp",
      "startDate": "YYYY-MM-DD",
      "endDate": "YYYY-MM-DD",
      "time": "HH:MM - HH:MM IST",
      "duration": "X Weeks",
      "capacity": 30,
      "enrolled": 18,
      "instructor": "Lead Instructor Name",
      "platform": "Zoom|Google Meet", // For online sessions
      "location": {
        "city": "City Name", // For offline sessions
        "venue": "Venue Name"
      },
      "features": ["Curriculum point 1", "Curriculum point 2"],
      "prerequisites": "Requirements for joining",
      "image": "https://image-url.com/hero.jpg"
    }
  ]
}
```

---

## Features

### 1. View Modes
- **Grid View**: Focuses on visual cards with high-level details and "View Details" call-to-action.
- **Calendar View**: Monthly visualization with color-coded markers (Online vs Offline).

### 2. Inquiry-Based Enrollment
- The "Register" flow has been replaced with an **"Enquire for Batch"** button.
- All registration attempts redirect the user to `/contact` with the intent to start a consultation.
- Pricing is hidden to encourage personalized consultations based on student needs.

### 3. Capacity Management
- Real-time display of filled seats (e.g., "18 / 30 seats filled").
- Automatic **"Fully Booked"** state when capacity is reached, disabling the enquiry button.

---

## Usage & Routing

The bootcamp calendar is accessible via the main services navigation:

```bash
# Development URL
http://localhost:5173/services/bootcamp-calendar
```

The route is defined in `App.jsx`:
```javascript
<Route path="/services/bootcamp-calendar" element={<BootcampList />} />
```

---

## Customization

### Adding Cohorts
Update the `src/data/bootcamps.json` file. The UI will automatically recalculate availability and markers.

### Styling
All bootcamp components follow the project's **Black & White** minimalist aesthetic. Styles are localized to:
- `src/pages/public/services/BootcampCalendar.css`
- `src/components/bootcamp/BootcampCard.css`
