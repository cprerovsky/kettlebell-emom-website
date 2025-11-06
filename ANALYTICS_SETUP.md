# Google Analytics 4 Setup Guide — GDPR Compliant

This guide will walk you through setting up Google Analytics 4 (GA4) for your website in a way that complies with GDPR requirements.

---

## Prerequisites
- A Google account
- Access to your website (kbemom.com)
- The implementation is already done in your codebase — you just need to configure GA4 and add your tracking ID

---

## Step 1: Create a Google Analytics 4 Property

### 1.1 Sign in to Google Analytics
1. Go to [https://analytics.google.com](https://analytics.google.com)
2. Sign in with your Google account

### 1.2 Create a new property
1. Click **Admin** (gear icon in the bottom left)
2. In the **Account** column, select or create an account (e.g., "Kettlebell EMOM")
3. In the **Property** column, click **Create Property**
4. Fill in the property details:
   - **Property name**: `Kettlebell EMOM Website`
   - **Reporting time zone**: `Austria (Vienna) / GMT+01:00`
   - **Currency**: `EUR - Euro (€)`
5. Click **Next**

### 1.3 About your business
1. **Industry category**: Choose "Fitness & Wellness" or "Internet & Telecom > Mobile Apps"
2. **Business size**: Select your size
3. **How you intend to use Google Analytics**: Select "Measure user behavior" and "Optimize ad campaigns" (if applicable)
4. Click **Create**
5. Accept the Terms of Service
6. If prompted about email communications, choose your preferences

---

## Step 2: Set Up Data Stream

### 2.1 Create a web data stream
1. You should see "Choose a platform" — click **Web**
2. Fill in:
   - **Website URL**: `https://kbemom.com`
   - **Stream name**: `Kettlebell EMOM Website`
3. Click **Create stream**

### 2.2 Copy your Measurement ID
1. You'll see your **Measurement ID** at the top right (format: `G-XXXXXXXXXX`)
2. **Copy this ID** — you'll need it in Step 5

---

## Step 3: Configure GDPR-Compliant Settings

### 3.1 Enable Data Deletion
1. In your GA4 property, go to **Admin** > **Data Settings** > **Data Retention**
2. Set **Event data retention** to **14 months** (recommended for GDPR compliance)
3. Turn **ON** the option "Reset user data on new activity" (this extends the retention when users return)
4. Click **Save**

### 3.2 Enable Google Signals (Optional)
⚠️ **Important**: Only enable if you plan to show ads. For privacy-focused analytics, skip this.

1. Go to **Admin** > **Data Settings** > **Data Collection**
2. If you want cross-device tracking: Enable **Google signals data collection**
3. For better privacy: **Leave it disabled**

### 3.3 Configure IP Anonymization
✅ **Already done in the code!** Our implementation includes `'anonymize_ip': true`

---

## Step 4: Set Up Enhanced Measurement (Recommended Events)

### 4.1 Review Enhanced Measurement settings
1. Go to **Admin** > **Data Streams** > Click your web stream
2. Scroll down to **Enhanced measurement**
3. Click the gear icon to configure

### 4.2 Recommended settings for your site
Enable these (they're mostly enabled by default):
- ✅ **Page views** (essential)
- ✅ **Scrolls** (useful to see engagement)
- ✅ **Outbound clicks** (tracks external links)
- ✅ **Site search** (if you add search later)
- ✅ **Video engagement** (if you add videos later)
- ❌ **File downloads** (we're tracking this manually with custom events)
- ❌ **Form interactions** (disable for privacy unless needed)

4. Click **Save**

---

## Step 5: Add Your Measurement ID to the Code

### 5.1 Open analytics.js
1. Open the file `/Users/apagtxprerovsky/git/kettlebell-emom-website/analytics.js`
2. Find this line near the top:
   ```javascript
   const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX';
   ```
3. Replace `'G-XXXXXXXXXX'` with your actual Measurement ID from Step 2.2
4. Save the file

Example:
```javascript
const GA_MEASUREMENT_ID = 'G-ABC123DEF4';
```

### 5.2 Deploy your changes
1. Commit and push your changes to your git repository:
   ```bash
   git add analytics.js
   git commit -m "Add Google Analytics tracking ID"
   git push origin master
   ```

2. If you're using GitHub Pages, your changes will deploy automatically

---

## Step 6: Configure Data Processing Agreement (GDPR Requirement)

### 6.1 Accept the Data Processing Terms
1. In Google Analytics, go to **Admin**
2. In the **Account** column, click **Account Settings**
3. Scroll down to **Data Processing Amendment**
4. Click **Review Amendment**
5. Read and accept the terms
6. This ensures Google acts as a data processor under GDPR

---

## Step 7: Set Up User Access and Permissions

### 7.1 Configure who can access analytics
1. Go to **Admin** > **Account Access Management** (or **Property Access Management**)
2. Add team members if needed
3. Use **Viewer** role for most people (read-only)
4. Use **Editor** only for people who need to change settings

---

## Step 8: Test Your Implementation

### 8.1 Enable Debug Mode in your browser
1. Open your website: `https://kbemom.com`
2. Open browser DevTools (F12 or right-click > Inspect)
3. Go to the **Console** tab

### 8.2 Check for tracking events
1. Accept cookies when the consent banner appears
2. In the console, you should see messages like:
   - `dataLayer` array with events
   - No error messages related to `gtag`

### 8.3 Use Google Analytics DebugView
1. In GA4, go to **Admin** > **DebugView** (left sidebar under "Configure")
2. In a new browser tab, open your website with this URL parameter:
   ```
   https://kbemom.com?debug_mode=true
   ```
3. Accept cookies
4. You should see your session appear in DebugView in real-time
5. Click around, test the download button — you should see events like:
   - `page_view`
   - `download_click` (when you click App Store link)

---

## Step 9: Verify GDPR Compliance

✅ **Checklist:**
- [x] Cookie consent banner is shown before tracking starts
- [x] Analytics only loads after user accepts cookies
- [x] IP anonymization is enabled
- [x] Data retention is set to 14 months
- [x] Privacy Policy includes Google Analytics disclosure
- [x] Users can opt-out via cookie banner
- [x] Data Processing Agreement accepted
- [x] No personal data (names, emails) sent to GA

---

## Step 10: Monitor and Maintain

### 10.1 Set up useful reports
1. In GA4, go to **Reports** > **Realtime** to see live traffic
2. Go to **Reports** > **Life cycle** > **Acquisition** to see referral sources
3. Go to **Reports** > **Engagement** > **Events** to see your custom `download_click` events

### 10.2 Create a custom report for download tracking
1. Go to **Explore** (left sidebar)
2. Click **Create new exploration**
3. Choose **Free form**
4. Add these:
   - **Dimensions**: Event name, Page location
   - **Metrics**: Event count
   - **Filters**: Event name = `download_click`
5. Save the exploration as "Download Tracking"

### 10.3 Set up regular reviews
- Check analytics weekly to see traffic patterns
- Review referral sources to understand where visitors come from
- Monitor download click events to measure conversion
- Update data retention settings if regulations change

---

## What You're Tracking (Summary)

✅ **Automatically tracked:**
- Page views and navigation
- Referral sources (where visitors came from)
- Device, browser, and OS information
- Geographic location (city/country level)
- Session duration and engagement

✅ **Custom events tracked:**
- `download_click` — When someone clicks the App Store download button
- Future: Any other custom events you add

❌ **NOT tracked (privacy-focused):**
- Personal identifiable information (names, emails)
- Full IP addresses (anonymized)
- User IDs or login information
- Workout data or app usage (stays on-device)

---

## Troubleshooting

### Analytics not showing data?
1. Check that you replaced `G-XXXXXXXXXX` with your real Measurement ID
2. Check browser console for errors
3. Make sure you accepted cookies in the consent banner
4. Wait 24-48 hours — initial data can take time to appear
5. Use DebugView for real-time validation

### Download events not tracking?
1. Check that the App Store link has `id="app-store-link"` attribute
2. Check browser console for JavaScript errors
3. Make sure you accepted cookies
4. Test in DebugView with `?debug_mode=true`

### Consent banner not showing?
1. Clear browser localStorage: DevTools > Application > Local Storage > delete `kb_analytics_consent`
2. Refresh the page
3. The banner should appear

### GDPR concerns?
- Our implementation follows best practices:
  - Consent before tracking (TCF 2.0 compliant approach)
  - IP anonymization enabled
  - No personal data sent
  - Clear opt-out mechanism
  - Privacy policy disclosure
  
If you have specific legal concerns, consult with a privacy lawyer in your jurisdiction.

---

## Additional Resources

- **Google Analytics Help**: [https://support.google.com/analytics](https://support.google.com/analytics)
- **GA4 Documentation**: [https://developers.google.com/analytics/devguides/collection/ga4](https://developers.google.com/analytics/devguides/collection/ga4)
- **GDPR Compliance**: [https://support.google.com/analytics/answer/9019185](https://support.google.com/analytics/answer/9019185)
- **Google's Data Privacy Framework**: [https://business.safety.google/privacy/](https://business.safety.google/privacy/)

---

## Quick Reference: Key Files Modified

| File | Purpose |
|------|---------|
| `analytics.js` | Main GA4 implementation with consent management |
| `index.html` | Includes analytics.js script |
| `support.html` | Includes analytics.js script |
| `imprint.html` | Includes analytics.js script |
| `privacy.md` | Updated to disclose GA4 usage |
| `terms.md` | Updated to reference cookie usage |

---

## Next Steps After Setup

1. **Update Measurement ID**: Replace `G-XXXXXXXXXX` in `analytics.js` with your real ID
2. **Deploy to production**: Push changes to GitHub
3. **Test thoroughly**: Use DebugView to verify tracking
4. **Monitor for 1 week**: Ensure data is coming in correctly
5. **Set up goals**: Create conversions for download clicks
6. **Regular reviews**: Check analytics monthly to inform decisions

---

**Questions or issues?** Contact: contact@kbemom.com

**Last updated:** November 6, 2025
